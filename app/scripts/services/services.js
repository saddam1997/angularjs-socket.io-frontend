(function() {
  "use strict";

  angular
    .module("myApp.services", [])
    .value("version", "0.1")
    .factory("socket", function($rootScope) {
      var socket = io.connect("http://127.0.0.1:3000");

      //var socket = io.connect();
      return {
        on: function(eventName, callback) {
          socket.on(eventName, function() {
            var args = arguments;
            $rootScope.$apply(function() {
              callback.apply(socket, args);
            });
          });
        },
        emit: function(eventName, data, callback) {
          socket.emit(eventName, data, function() {
            var args = arguments;
            $rootScope.$apply(function() {
              if (callback) {
                callback.apply(socket, args);
              }
            });
          });
        },
        getSocket: function() {
          return socket;
        }
      };
    });
})();
