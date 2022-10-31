const {
    returnTwo,
    greeting,
    add
} = require('./functions.js')




test('this test expects returnTwo to equal 2', () => {
    expect(returnTwo()).toBe(2)
})

test('this test expects greeting(James) to return Hello James.', () => {
    expect(greeting('James')).toBe('Hello, James.')
    expect(greeting('Jill')).toBe('Hello, Jill.')
})

test('Should return the sum of 2 numbers that are passed in', ()=> {
    expect(add(1,2)).toBe(3)
    expect(add(5,9)).toBe(14)
})

