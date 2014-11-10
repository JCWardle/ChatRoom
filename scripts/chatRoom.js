angular.module('chatRoom', [])
	.controller('chatRoomController', ['$scope', function($scope){
		$scope.messages = [{text: "Welcome to the chat room", time: new Date()}]
		$scope.messageText = "";

		$scope.sendMessage = function() {
			if($scope.messageText != ""){
				$scope.messages.push({text: $scope.messageText, time: new Date()})
				$scope.messageText = "";
			}
		}

		$scope.clear = function(){
			$scope.messages = [];
		}
	}]);