import * as mocha from 'mocha'
import { expect } from 'chai'

import { Greeter } from '../src'

describe('Greeter Tests', function () {

    let greeter: Greeter = null

    beforeEach(function () {
        greeter = new Greeter()
    })

    it('should say hi', function () {
        const greeting = greeter.sayHi()
        expect(greeting).to.eq('hi')
    })

    it('should say a number 3', function () {
        const num = greeter.sayNumber()
        expect(num).to.eq(3)
    })

    it('should say something with a timeout', function (done) {
        this.timeout(5000)
        greeter.saySomethingAsync((val) => {
            expect(val).to.eq('something')
            done()
        })
    })

    it('should say something with a timeout but with a promise now', async function () {
        this.timeout(5000)
        const message = await greeter.saySomethingPromised()
        expect(message).to.eq('I am wrapped in promise!')
    })

    it('should say an exception message', function () {
        expect(() => {
            greeter.forceACrash()
        }).to.throw('Some kind of custom crash message')
    })
});