import convert from './currencyConverter'
describe('should convert', () => {
  const rates = {
    BRT: 4,
    BTC: 10
  }

  it('BRL to BRT', () => {
    expect(convert('BRL', 'BRT', 1, rates)).toEqual(0.25)
  })
  
  it('BRL to BTC', () => {
    expect(convert('BRL', 'BTC', 1, rates)).toEqual(0.1)
  })
  
  it('BTC to BRT', () => {
    expect(convert('BTC', 'BRT', 1, rates)).toEqual(2.5)
  })
  
  it('BTC to BRL', () => {
    expect(convert('BTC', 'BRL', 1, rates)).toEqual(10)
  })
  
  it('BRT to BRL', () => {
    expect(convert('BRT', 'BRL', 1, rates)).toEqual(4)
  })
  
  it('BRT to BTC', () => {
    expect(convert('BRT', 'BTC', 1, rates)).toEqual(0.4)
  })
})

