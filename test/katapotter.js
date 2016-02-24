var chai = require('chai')
var expect = chai.expect
var basket = require('../basket')

describe('katapotter', function() {

    it ('return a price for a book', function() {
        var b = basket.create()
        b.add('Harry 1')
        expect(b.getTotalPrice()).to.equal(8) 
    })

        
    it ('return a price for no book', function() {
        var b = basket.create()
        expect(b.getTotalPrice()).to.equal(0) 
    })
    
    it ('can add books', function() {
        var b = basket.create()
        b.add('Harry 1')
        expect(b.getCount()).to.equal(1)
        b.add('Harry 1')
        expect(b.getCount()).to.equal(2)
    })
    
})

/* expect(foo).to.be.a('string');
expect(foo).to.equal('bar');
expect(foo).to.have.length(3); */
