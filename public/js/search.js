$(function(){
	setTimeout(function(){
		$("#toggle").trigger("click");
	},300);

	$(".type").on('click',function(ev){
		$(".type").attr('class','type selected');
		$(".search-list").css('display','block');

		var oEvent = ev || event;
		oEvent.cancelBubble = true;
		return false;
	});
	$("body").on('click',function(){
		$(".type").attr('class','type');
		$(".search-list").css('display','none');
	});
	$(".search-list li").each(function(){
		$(this).on('click',function(){
			$(".type .default").html($(this).html());
		})
	});


	$(".search-btn").on('click',function(){
		var keyword = encodeURIComponent($("#search-keyword").val());
		window.location.href = "search-result.html?keyword=" + keyword;
	});
	$(".hotlist li .word").on('click',function(){
		window.location.href = "search-result.html?keyword=" + encodeURIComponent($(this).html());
	});
	$(".history-list li a").on('click',function(){
		var keyword = encodeURIComponent($(this).html());
		window.location.href = "search-result.html?keyword=" + keyword;
	});

	$(".delete-history").on('click',function(){
		$.ajax({
			url: 'http://127.0.0.1:8080/search/clearhistory',
			dataType: 'JSON',
			type: 'POST',
			data:{
				clear: "true"
			},
			success: function (data) {
				if(data.status == "success"){
					$(".history-list").html("什么都没有呢~");

				}
			},
			error: function () {
				console.log('error');
			}
		});
	})
});