function convert(source, destination, value, rates) {
  let convertedValue, sourceValue, destinationValue
  
  if (source !== 'BRL') {
    sourceValue = value / rates[source]
  } else { sourceValue = value }
  
  if (destination !== 'BRL') {
    destinationValue = value / rates[destination]
  } else { destinationValue = value }
  
  convertedValue = destinationValue * ( value / sourceValue )

  return convertedValue
}

export default convert