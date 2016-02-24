var basket = function () {
    var books = {}
    this.name = "toto"
    this.getTotalPrice = function() {
        if(this.getCount() === 1 ) {
            return 8
        }
        return 0
    }
    this.add = function(book) {
        if (!books[book]) {
            books[book] = 1
        } else {
            books[book]++
        }
    }
    this.getCount = function() {
        var count = 0
        Object.keys(books).forEach(function (key) {
            count += books[key]
        })
        return count
    }
}

module.exports = { create: function() { return new basket() } }