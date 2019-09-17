import {
  SET_RATE,
  SET_READY,
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
