# Obsidian
Obsidian é uma single-page application de um banco virtual que permite transações de moedas diferentes - real e criptomoedas.
Você inicialmente recebe R$ 100.000,00 que são adicionados à sua carteira, e pode fazer conversões livremente entre as moedas disponíveis - Real, Brita e Bitcoin. Ao realizar uma transação, ela é adicionada ao extrato.

A aplicação foi feita como um desafio técnico para a Stone.

## Como executar
1) Instalar dependências

```
yarn install
```

2) Rodar o projeto

```
yarn start
```

## Arquitetura

### Componentes

#### Geral
- Header

#### Home / Carteira
- Card do saldo da conta
- Cards com a cotação de cada criptomoeda

#### Extrato
- Tabela de transações realizadas

#### Transação
- Converte uma moeda para a outra, simplificando as operações de compra, venda e troca

### Dependências/Bibliotecas
- Redux
  - redux-persist p/ banco, LocalStorage
- Axios
- Roteador
 - react-router

## Pendências
- Formatar adequadamente os valores monetários das transações
- Criar mais unidades de teste
- Melhorar o visual da aplicação
- Refatorar as funções renderCoinSelector, renderConvertedValue, renderValueSection e renderConfirmation em componentes separados