// configura cotação de uma moeda
export const SET_RATE = "SET_RATE";
// marca o aplicativo como pronto p/ operações
export const SET_READY = "SET_READY";
// realiza transação
export const DO_TRANSACTION = "DO_TRANSACTION";
// registra transação no extrato
export const REGISTER_TRANSACTION = "REGISTER_TRANSACTION";
// aumenta e diminui saldo de uma moeda
export const INCREASE_BALANCE = "INCREASE_BALANCE";
export const DECREASE_BALANCE = "DECREASE_BALANCE";

export const initialState = {
  ready: false,
  rates: {
    BRT: null,
    BTC: null
  },
  balance: {
    BRT: 0,
    BTC: 0,
    BRL: 0
  },
  transactions: []
};
