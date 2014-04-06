
/*global describe, it */

var colored = require('../');
var expect = require('chai').expect;

describe('mag-colored-output', function () {
  it('should convert object to string', function (done) {
    var stream = colored();
    stream.on('readable', function(){
      var data = stream.read();
      expect(data).that.is.a('string');
        done();
    });
    stream.write({message: 'test'});
  });
});
