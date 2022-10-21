"use strict";

var arrowFunction = function arrowFunction() {
  var logs = ['hola', 'comision', '32140'];
  logs.forEach(function (log) {
    return console.log(log);
  });
};
arrowFunction();
