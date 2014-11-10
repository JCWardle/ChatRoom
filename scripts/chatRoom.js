var serviceUrl = "http://localhost:59851/api/chat"

angular.module("chatRoom", [])
	.controller("chatRoomController", ["$scope", "$http", function($scope, $http){
		$scope.messages = [{text: "Welcome to the chat room", time: new Date()}]
		$scope.messageText = "";

		$scope.sendMessage = function() {
			if($scope.messageText != ""){
				var time = new Date();
				$scope.messages.push({text: $scope.messageText, time: time})
				$http.put(serviceUrl, { Text: $scope.messageText, Time: time});
				$scope.messageText = "";				
			}
		}

		$scope.clear = function(){
			$scope.messages = [];
		}
	}]);