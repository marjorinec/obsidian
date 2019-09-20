import {
  SET_RATE,
  SET_READY,
  INCREASE_BALANCE,
  DECREASE_BALANCE,
  REGISTER_TRANSACTION,
} from './vars'

/**
 * define a cotação de uma moeda em relação ao BRL
 * @param {string} coin sigla de três letras da moeda
 * @param {number} rate cotação em relação ao real
 */
export function setRate(coin, rate) {
  return {
    type: SET_RATE,
    coin: coin,
    rate: rate
  }
}

/**
 * marca aplicativo como devidade carregado
 */
export const setReady = () => ({
  type: SET_READY
})


export const increaseBalance = (coin, value) => ({
  type: INCREASE_BALANCE,
  value: value,
  coin: coin
})

export const decreaseBalance = (coin, value) => ({
  type: DECREASE_BALANCE,
  value: value,
  coin: coin
})

export const registerTransaction = (source, destination, sourceValue, value) => ({
  type: REGISTER_TRANSACTION,
  source, destination, sourceValue, value
})
