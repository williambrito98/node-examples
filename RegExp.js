Expressçoes Regulares JS:
 Exemplo: var expressao = /expressao/
	  var expressao = new RegExp("expressao")

\ -> escapar de caracteres especiais.
^ -> inicia com um determinado caracter
$ -> termina com um deternado caracter
[abc] -> aceita quaquer caracter dentro do grupo, nesse caso a, b, e c
[^abc] -> nao aceita qualquer caracter dentro do grupo, nesse caso a, b ou c
[0-9] -> aceita qualquer caracter entre 0 e 9
[^0-9] -> nao aceita qualquer caracter entre 0 e 9
{n} -> quantifica um numero especifico
{n,} -> quantifica um numero minimo
{n,m} -> quantifica un numero minimo e um numero maximo
? -> zero ou um
* -> zero ou mais
+ -> um ou mais
. -> representa qualquer caracter
\w -> representa o cojunto [a-zA-Z0-9_]
\W -> representa o conjunto [^a-zA-Z0-9_]	
\d -> representa o conjunto [0-9]
\D -> representa o conjunto [^0-9]
\s -> representa um espaço em branco
\S -> representa um não espaço em branco
\n -> representa quebra de linha
\t -> representa um tab
match -> execita uma busca na string e retorna um array contendo os dados encontrados, ou null
split -> divide a string com base em uma outra string fixa ou expressão regular
replace -> substitui partes da string com base em uma string fixa ou expressão regular
i -> case-insensitive mathing
g -> global mathing
m -> multilinr mathing
(x) -> pesquisa a correspondencia do caracter X e memoriza-o
x(?=Y) -> pesquisa a correspondencia em X apenas se X é seguido por Y mas Y não faz parte do resultado retornado
x(?!Y) -> pesquisa a correspondencia em X apenas se X não é seguido por Y
x|y -> pesquisa X ou Y
