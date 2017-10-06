(function () {
	myApp.controller('addLessionCtr', function($scope, $http){
		$scope.editorModel = 'SKÅL !!!';
		$scope.course = {
			name:'',
			category:undefined,
			level:undefined,
			price:undefined,
			newPrice:undefined,
			pictureData: undefined
		}
		//UPLOAD IMAGE
		function readURL(input) {
		    if (input.files && input.files[0]) {
		        var reader = new FileReader();
		        reader.onload = function (e) {
		            $('#img-in-modal').attr('src', e.target.result);
		        }
		        reader.readAsDataURL(input.files[0]);
		    }
		}
		$scope.openInputFile = function(){
			$("#upload-img").click();
			$("#upload-img").change(function(){
				var file = $("#upload-img")[0].files[0];
				var fileType = file["type"];
				var ValidImageTypes = ["image/gif", "image/jpeg", "image/png"];
				if ($.inArray(fileType, ValidImageTypes) < 0) {
					//NOT A IMAGE
						$('#upload-img').val("");
						utils.alert({
		                title:'Thong bao',
		                msg: 'Ban phai chon 1 file la hinh anh'
		            });
		            return;
				}
				readURL(this);
		 		$('#review_upload_img').modal('show');
			});
			$('#review_upload_img').on('shown.bs.modal', function () {
				$('#img-in-modal').cropper({
					viewMode:2,
					autoCropArea: 1,
					aspectRatio: 8 / 5
				});
			}).on('hidden.bs.modal', function () {
				$('#img-in-modal').cropper('destroy');
				$('#upload-img').val("");
			});
			$('#cut-picture-btn').click(function(){
				var dataImg = $('#img-in-modal').cropper('getData');
				var c=document.getElementById("crop-canvas");
			    var ctx=c.getContext("2d");
			    var img=document.getElementById("img-in-modal");
			    ctx.drawImage(img,dataImg.x,dataImg.y,dataImg.width,dataImg.height,0,0,800,500);
			    $scope.course.pictureData = c.toDataURL('image/png', 1.0);
			    $scope.$apply();
				$('#picture-preview').attr('src',$scope.course.pictureData);
			});
		}
		$scope.default = {
			levels:[],
			categories:[]
		}
		$scope.loadLevelAndCategory = function(){
			$http.post("/list-simple-level",{name:'',skip:0,limit:999999999},{}).then(function(res){
	  			if(res.data.message == 'success'){
	  				$scope.default.levels = res.data.levels;
	  			}
	  		});
	  		$http.post("/list-simple-category",{name:'',skip:0,limit:999999999},{}).then(function(res){
	  			if(res.data.message == 'success'){
	  				$scope.default.categories = res.data.categories;
	  			}
	  		});
		}
		$scope.loadLevelAndCategory();


	});
	
})();