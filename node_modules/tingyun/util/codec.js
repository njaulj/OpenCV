'use strict';

var zlib = require('zlib');

module.exports = {

  encode : function encode(data, callback) {
    zlib.deflate(JSON.stringify(data), function cb_deflate(err, raw) {
      if (err) return callback(err);

      return callback(null, raw.toString('base64'));
    });
  },
  decode : function decode(encoded, callback) {
    zlib.inflate(new Buffer(encoded, 'base64'), function cb_inflate(err, raw) {
      if (err) return callback(err);

      try {
        return callback(null, JSON.parse(raw));
      }
      catch (error) {
        return callback(error);
      }
    });
  }
};
