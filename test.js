function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

console.log(getRandomArbitrary(-10,10))