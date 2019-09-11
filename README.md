# Obsidian
Obsidian é uma single-page application de um banco virtual que permite transações de moedas diferentes - real e duas criptomoedas.
Ele foi feito como um desafio técnico para a Stone.

## Arquitetura

### Componentes

#### Geral
- Header
- botão de voltar
- Loading

#### Home
- Card do saldo da conta
- Card das criptomoedas

#### Transações
- ???

#### Extrato
- Transação

### Dependências/Bibliotecas
- Redux
  - redux-persist p/ banco, LocalStorage
- Axios
- Roteador
 - react-router


### Passos pro roteamento
- instala
- tag principal do aplicativo vai ser Router
- cria componentes separados pra cada página (home e extrato)
- LinkTo as urls desejadas no Header
- e cria as rotas no componente principal usando o <Route>