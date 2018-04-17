var cancelothers = function(father){
	var children = $(father).children();
	for(var i=0;i<children.length;i++){
		$(children[i]).attr('class',"");
	}
};

$(function(){
	$(".search-filter").slideToggle(400);

	$(".filter").on('click',function(){
		$(".search-filter").slideToggle(400);
	});


	filter = {
		type: "0",
		language: "0",
		publishyear: "0"
	};

	$(".filter-type ul li .cancel").on('click',function(ev){
		$(this).parent().attr('class',"");

		var line = $(this).parent().attr('filter');
		if(line=="type"){
			filter.type = "0";
		}else if(line=="language"){
			filter.language = "0";
		}else if(line=="publishyear"){
			filter.publishyear = "0";
		}else{
			alert("error in search-result.js line 33");
		}

	});
	$(".filter-type ul li .text").on('click',function(ev){
		var index = "0";
		if($(this).parent().attr('class')=="chosen"){
			$(this).parent().attr('class',"");
			index = "0";
		}else{
			cancelothers($(this).parent().parent()[0]);
			$(this).parent().attr('class',"chosen");
			index = $(this).parent().index().toString();
		}

		var line = $(this).parent().attr('filter');
		if(line=="type"){
			filter.type = index;
		}else if(line=="language"){
			filter.language = index;
		}else if(line=="publishyear"){
			filter.publishyear = index;
		}else{
			alert("error in search-result.js line 33");
		}
	});
	$(".result-list li .preview,.result-list li .message").each(function(){
		$(this).on('click',function(){
			var bookid = encodeURIComponent($(this).parent().attr('bookid'));
			window.location.href = "book-detail.html?bookid=" + bookid;
		});
	});




	var keyword = decodeURIComponent(window.location.search).split('?')[1].split('=')[1];
	$("#search-keyword").val(keyword);
	$.ajax({
		url: 'http://127.0.0.1:8080/search/result',
		dataType: 'JSON',
		type: 'POST',
		data:{
			keyword: keyword,
			filter: filter
		},
		success: function (data) {

		},
		error: function () {
			console.log('error');
		}
	});
});