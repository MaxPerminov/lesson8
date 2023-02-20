const products = require("./products");


test('Product filter', () => {
  const from = 13
  const to = 24
  const filterProducts =  filterProductsByPrice(products, from, to)
  expect(filterProducts).toEqual([
     { item: 'onion', price: 23 },
     { item: 'tomato', price: 13 }
     ])
});


function filterProductsByPrice(product, a, b) {
  let filteredArray = []
    for (const i of product) {
      if (i.price >= a && i.price <= b) {
        filteredArray.push(i)
      }
    }
    return filteredArray
}
