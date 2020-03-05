import React, {useState} from 'react';
import './App.css';
import logo from './assets/logo.svg';
import api from './services/api.js';

function App() {

  const [email, setEmail] = useState('');
   async function handleSubmit(event){
    event.preventDefault(); 

    const response = await api.post('/sessions', { email }); 
  }
  return (
    <div className="container">
      <img src={logo} alt=""/>
    <div className="content">
        <p>Ofereça <strong>sports</strong> para programadores e encontre <strong>talentos</strong> para sua empresa</p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email *</label>
          <input type="email" id="email" placeholder="Seu email" value={email} onChange={event => setEmail(event.target.value)} />

          <button className="btn" type="submit">Entrar</button> 
        </form>
      </div>
    </div>
  );
}

export default App;
