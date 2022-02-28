"use strict";

var app = require('./server');

var mongoose = require('mongoose');

require('dotenv').config();

var port = process.env.PORT || 8000;

var connectDB = function connectDB() {
  return regeneratorRuntime.async(function connectDB$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true
          }));

        case 3:
          console.log('Data base connected');
          app.listen(port, function () {
            console.log("Listening on port: ".concat(port));
          });
          _context.next = 11;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);
          process.exit(1); //This error is going to stop the app ("1" means "True")

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

connectDB();
module.exports = connectDB;