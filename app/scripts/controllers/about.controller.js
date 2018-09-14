(function() {
  "use strict";
  angular
    .module("angularjs-starter")
    .controller("AboutController", function($scope, socket) {
      $scope.onSuccess = function(data) {
        var scandata = JSON.stringify(data);
        var scandata2 = JSON.parse(data);
        console.log("onSuccess scandata2:::: " + scandata2.socket_id);
        console.log("onSuccess parse:::: " + JSON.parse(scandata));
        console.log("request to socket ");
        socket.emit("scan_qr_code", {
          data: {
            socketid: scandata2.socket_id,
            randomstring: scandata2.random_string
          }
        });
        console.log("after request to socket ");
      };
      $scope.onError = function(error) {
        console.log("error :::: ", error);
      };
      $scope.onVideoError = function(error) {
        console.log("onVideoError :::: ", error);
      };

      $scope.scanQrCode = function() {
        console.log("request to socket ");
        socket.emit("scan_qr_code", {
          data: {
            socketid: $scope.form.socketid,
            randomstring: $scope.form.randomString
          }
        });
        console.log("after request to socket ");
      };
    });
})();
