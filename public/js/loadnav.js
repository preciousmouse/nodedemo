
function loadnav(nav){
	for(var i=0;i<2;i++){
		$("#tree-wrap .topnav").eq(i).html(nav.menu[i]);
	}
	$(".side-dashh-list li span").eq(0).html(nav.booknumber + "<i style='color:#44BBC1;' class='fa fa-arrow-circle-up'></i>");
	$(".side-dashh-list li span").eq(1).html(nav.newbook + "<i style='color:#19A1F9;' class='fa fa-arrow-circle-up'></i>");
	$(".side-dashh-list li span").eq(2).html(nav.borrowed + "<i style='color:#AB6DB0;' class='fa fa-arrow-circle-down'></i>");

	window.onload = function() {
		var g1 = new JustGage({
			id: "g1",
			value: nav.visitors,
			min: 0,
			max: 1000,
			relativeGaugeSize: true,
			gaugeColor: "rgba(0,0,0,0.4)",
			levelColors: "#0DB8DF",
			labelFontColor : "#ffffff",
			titleFontColor: "#ffffff",
			valueFontColor :"#ffffff",
			label: "VISITORS",
			gaugeWidthScale: 0.2,
			donut: true
		});
	};
}


