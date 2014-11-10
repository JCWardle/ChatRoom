var serviceUrl = "http://localhost:59851/api/chat"

angular.module("chatRoom", [])
	.controller("chatRoomController", ["$scope", "$http", "$timeout", function($scope, $http, $timeout){
		$scope.messages = [{text: "Welcome to the chat room", time: new Date()}]
		$scope.messageText = "";

		var poll = function(){
			$timeout(function () {
				$http.get(serviceUrl)
				.success(function(data, status, headers, config){
					$scope.messages = []
					var length = data.length;

					for(var i = 0; i < length; i++)
					{
						$scope.messages.push({text: data[i].Text, time: data[i].Time});
					}
					poll();
				});
			}, 1000);
		}

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

		poll();
	}]);