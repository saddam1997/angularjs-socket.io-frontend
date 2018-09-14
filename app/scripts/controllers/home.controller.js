(function() {
  "use strict";
  angular
    .module("angularjs-starter")
    .controller("HomeController", function($scope, socket) {
      $scope.resultfromserver = null;
      socket.on("generaterondom", function(result) {
        if (!result) {
          console.log("Error to connect........");
          /// alert("There was an error changing your name");
        } else {
          console.log("result ::: ", result);
          $scope.resultfromserver = result;
        }
      });
      socket.on("varifieduser", function(result) {
        if (!result) {
          console.log("Error to connect........");
          /// alert("There was an error changing your name");
        } else {
          alert("User Vairified Succfully............");
          console.log("varifieduser ::: ", result);
        }
      });
    });
})();
