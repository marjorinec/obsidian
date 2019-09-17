import {
  SET_RATE
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