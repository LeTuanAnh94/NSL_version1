(function () {
	myApp.controller('registerCtr', function($scope, $http){
		$scope.user = {
			fullname:'',
			email:'',
			password:''
		}
		$scope.disable = false;
		$scope.submit = function(validate){
			if(!validate || $scope.disable) return;
			$scope.disable = true;
			$http.post("/user/register",$scope.user,{}).then(function(res){
				$scope.disable = false;
	  			if(res.data.message == 'success'){
	  				utils.alert({
                        title:'Thông báo',
                        msg: 'Chúng tôi đã gửi 1 link kích hoạt đến email : ' + $scope.user.email
                    });
	  			}else if(res.data.message == 'email_exist'){
	  				utils.alert({
                        title:'Thông báo',
                        msg: 'Email đã được đăng ký'
                    });
	  			}else{
	  				utils.alert({
                        title:'Thông báo',
                        msg: 'Có lỗi gì đó xảy ra.'
                    });
	  			}
	  		});
		}
	});
	
})();