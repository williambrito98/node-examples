const axios = require('axios');
const assert = require('assert');
const { obterPessoas } = require('./service')


describe('TESTE', function() {
    it("TESTE", async () => {
        const expected = [{"nome": "r2-d2", peso: 96}]
        const nomeBase = 'r2-d2';
        const resultado = await obterPessoas(nomeBase);
        assert.deepEqual(resultado, expected);
    });
})




