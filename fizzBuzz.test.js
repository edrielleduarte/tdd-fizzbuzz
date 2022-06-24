const { fizzBuzz } = require('./fizzBuzz.js')

describe('Teste DD FizzBuzz', () => {
    describe('return fizz', () => {
        it('return fizz', () => {
            expect(fizzBuzz(3)).toBe('Fizz')
        })
    })

    describe('return buzz', () => { 
        it('return buzz', () => {
            expect(fizzBuzz(5)).toBe('Buzz')
        })
    })

    describe('return fizzbuzz', () => {
        it('return fizzbuzz', () => {
            expect(fizzBuzz(15)).toBe('FizzBuzz')
        })
    })
    
})