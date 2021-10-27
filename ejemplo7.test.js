function cambiar(num) {
  if (num.toString().slice(-2) ==='15') return 'fizzbuzz'
  if (num.toString().slice(-1) ==='3') return 'fizz'
  if (num.toString().slice(-1) ==='5') return 'buzz'
  return num
}

for (i = 0; i <= 300; i++) {
  console.log(cambiar(i));
}


// -----------------------
describe("Cambia si el final del número es: ", () => {

   test('3', () => {
     let i = 13
     let res = cambiar(i)
    expect(res).toEqual('fizz')
   })

  test('5', () => {
    let i = 45
    let res = cambiar(i)
    expect(res).toEqual('buzz')
  })

   test('15', () => {
    let i = 115
    let res = cambiar(i)
    expect(res).toEqual('fizzbuzz')
   })

   test('cualquier otro (no cambia)', () => {
    let i = 44
    let res = cambiar(i)
    expect(res).toEqual(i)
  })
})
