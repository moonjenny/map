window.onload = function(){
	//main

	//nav-menu
	var sidebarBtn = $(".btn-close-sidebar");
	var sidebarBox = $(".map-sidebar");

	sidebarBtn.click(function(){
		$(this).toggleClass('sidebar-close');
		sidebarBox.toggleClass('sidebar-close');
	});

	//location
	var btnLocation = $(".top-location li > a");
	btnLocation.click(function(e){
		e.preventDefault();
		$(this).parent().find(".sub-location").toggleClass("open");
	});

	//input file
	$(".upload-file input[type='file']").change(function(){
	  //alert("파일 올라감");
		var fileName = $(this).val().replace(/C:\\fakepath\\/i, '');
		$(this).parent().parent().find("p").text(fileName);
	});

	//map-feed-list
	$(document).ready(function(){
		$(window).resize(throttle(100, function(e) {
			resizeContents();
		}));
		resizeContents();
	});
		
	function resizeContents() {
		var feedWrite = $(".feed-box-fixed").outerHeight(); // 20210414 수정
		$(".map-feed-list").css({
			paddingTop : feedWrite + 'px' // 20210414 수정
		});
	}
	// map-feed-list 주어진 시간만큼 지나야 주어진 함수를 실행 합니다.
	function throttle(ms, fn) {
		var allow = true;
		function enable() {
			allow = true;
		}
		return function(e) {
			if(allow) {
				allow = false;
				setTimeout(enable, ms);
				fn.call(this, e);
			}
		}
	}


};
