$(document).ready(function(){
	//main

	//sidevar scrollbar
	$(".map-feed-list").mCustomScrollbar({
		theme:"dark-thick"
	});

	//popup-reply scrollbar
	$(".reply-content").mCustomScrollbar({
		theme:"dark-thick"
	});

	//nav-menu
	var sidebarBtn = $(".btn-close-sidebar");
	var sidebarBox = $(".map-sidebar");
	var searchBox = $(".map-search");
	var footerBox = $(".map-footer"); /* 20210129 추가 */

	sidebarBtn.click(function(){
		$(this).toggleClass('sidebar-close');
		sidebarBox.toggleClass('sidebar-close');
		searchBox.toggleClass('search-close');
		footerBox.toggleClass('footer-close'); /* 20210129 추가 */
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


});
