(function () {
	myApp.controller('levelCtr', function($scope, $http){
		$scope.pagging = {
			limit:5,
			current:0,
			pages:0
		}
		$scope.searchlevelName = '';
		$scope.newLevelName = '';
		$scope.search = function(callback){
			var skip = $scope.pagging.current * $scope.pagging.limit;
			$http.post("/list-simple-level",{name:$scope.searchlevelName,skip:skip,limit:$scope.pagging.limit},{}).then(function(res){
	  			console.log(res.data)
	  			$scope.pagging.pages = Math.ceil(res.data.count / $scope.pagging.limit);
	  			if(res.data.message == 'success'){
	  				$scope.levels = res.data.levels;
	  				callback();
	  			}else{
	  				callback(true);
	  			}
	  		}).catch(function(err){
	  			callback(true);
	  		})
		}
		$scope.search(function(){});
		$scope.$watch(function(scope) { return scope.searchlevelName },
			function(newValue, oldValue) {
				$scope.search();
			}
		);
		$scope.nextPage = function(){
	  		if($scope.pagging.current == $scope.pagging.pages - 1) return;
	  		var recorvery = $scope.pagging.current++;
	  		$scope.search(function(err){
	  			if(err) return $scope.pagging.current = recorvery;
	  		})
	  	}
	  	$scope.prePage = function(){
	  		if($scope.pagging.current == 0) return;
	  		var recorvery = $scope.pagging.current--;
	  		$scope.search(function(err){
	  			if(err) return $scope.pagging.current = recorvery;
	  		})
	  	}
	  	$scope.addLevel = function(validation){
	  		if(!validation) return;
	  		$http.post("/add-level",{name:$scope.newLevelName},{}).then(function(res){
	  			console.log(res.data)
	  			if(res.data.message == 'success'){
	  				utils.alert({
	                    title:'Thông báo',
	                    msg: 'Thêm mới "' + $scope.newLevelName + '" thành công'
	                });
	                $scope.newLevelName = '';
	                $scope.search(function(){}); 
	  			}else{
	  				utils.alert({
	                    title:'Thông báo',
	                    msg: 'Có lỗi xảy ra'
	                });
	  			}
	  		}).catch(function(err){
  				utils.alert({
                    title:'Thông báo',
                    msg: 'Có lỗi xảy ra'
                });
	  		})
	  	}
	});
	
})();