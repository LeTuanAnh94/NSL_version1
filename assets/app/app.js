var myApp;
(function () {
	myApp = angular.module('myApp',['ui.bootstrap','trumbowyg-ng','ngSanitize']);
	myApp.filter('vnd', function() {
		return function(input) {
			function funkyStringSplit( s ){
			    var i = s.length % 3;
			    var parts = i ? [ s.substr( 0, i ) ] : [];
			    for( ; i < s.length ; i += 3 )
			    {
			        parts.push( s.substr( i, 3 ) );
			    }
			    return parts;
			}
			var str = input + '';
			arr = funkyStringSplit(str);
			if(arr.length == 0 || input==undefined) return '';
			if(arr.length ==1) return str + ' đ';
			if(arr.length > 1){
				var x = arr[0];
				for(var i = 1; i < arr.length; i++){
					x += '.' + arr[i]; 
				}
				x += ' đ';
				return x;
			}
		};
	});
	
})();