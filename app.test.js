test('New test', () => {

  // .toBe - for prymitive data: 
  // expect(Math.max(1, 2, 10)).toBe(10)

  // .toEqual - for objects:
  // expect([1, 2, 3]).toEqual([1, 2, 3])

  //.toContain - test of data presence:
  // expect([1, 2, 3]).toContain(1)

  //using matchers(in JEST documentation):
  // expect([1, 2, 3]).toHaveLength(3)
  // expect(false).toBeFalsy()
  // expect(23).toBeLessThan(55)

  //using .not:
  // expect(15).not.toBeLessThan(10)
});
///////////////////////////////////////////////////////////

function sum(a, b) {
  return a + b
}

  describe('summoning', () => {
    // test('valid', () => {
    //   expect(sum(23, 13)).toBe(36)
    // });
    // test('invalid', () => {
    //   expect(sum(23, 13)).not.toBe(22)
    // });
    // test('bigger', () => {
    //   expect(sum(23, 13)).toBeGreaterThan(12)
    // });
    // test('lesser', () => {
    //   expect(sum(23, 13)).toBeLessThan(37)
    // });
    
  });
///////////////////////////////////////////////////

  // test('return users', () => {
  //   return fetch("https://jsonplaceholder.typicode.com/todos").then(data => {
  //     console.log(data)
  //     expect(data).not.toBe("peanut butter")
  //   })
  // });

  // ////////////////////////////////////////

// test('fetch users ', async() => {
//   await fetchedData("https://jsonplaceholder.typicode.com/todos")
// });
// async function fetchedData(url) {
//   const res = await fetch(url)
//   const json = await res.json()
//   console.log(json)
//   json =>{
//     expect(json).notEqual("peanut butter")}
// }


/////////////////////////////////////////////////////
// async function fetchedData(url) {
//   const res = await fetch(url)
//    return json = await res.json()  
// }

// test('fetch user ', async() => {
//   expect(await fetchedData("https://jsonplaceholder.typicode.com/todos/1"))
//   .toEqual({userId: 1, id: 1, title: 'delectus aut autem', completed: false})
// });


///////////////////////Don't do this! /////////////////////////////////////
test('debil', async () => {
  await fetch ("https://jsonplaceholder.typicode.com/todos/1")
  .then((data)=> {
    try {
      expect(data).toEqual({
        userId: 1,
        id: 1,
        title: 'delectus aut autem',
        completed: false
      })
    }
    catch (e){
      console.log(e)
    }  
  })  
})
///////////////////////////////////////////////////////////////////