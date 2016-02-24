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
    
    it ('price for 2 different books', function() {
        var b = basket.create()
        b.add('Harry 1')
        b.add('Harry 2')
        expect(b.getTotalPrice()).to.equal(8*2*0.90)
    })
    
    it ('price for 2 same books', function() {
        var b = basket.create()
        b.add('Harry 1')
        b.add('Harry 1')
        expect(b.getTotalPrice()).to.equal(8*2)
    })
    
    it ('gives the price for 3 differents books', function() {
        var b = basket.create()
        b.add('Harry 1')
        b.add('Harry 2')
        b.add('Harry 3')
        expect(b.getTotalPrice()).to.equal(8*3*0.85)
    })
    
    
})

/* expect(foo).to.be.a('string');
expect(foo).to.equal('bar');
expect(foo).to.have.length(3); */
