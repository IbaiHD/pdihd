var nightmode = 1;
var dp = 0;

function showbackground(){
	document.getElementById("page1").style.display = "none";
	document.getElementById("page2").style.display = "none";
	document.getElementById("page3").style.display = "none";
}

function showpage1(){
	document.getElementById("page1").style.display = "block";
	document.getElementById("page2").style.display = "none";
	document.getElementById("page3").style.display = "none";
}

function showpage2(){
	document.getElementById("page1").style.display = "none";
	document.getElementById("page2").style.display = "block";
	document.getElementById("page3").style.display = "none";
}

function showpage3(){
	document.getElementById("page1").style.display = "none";
	document.getElementById("page2").style.display = "none";
	document.getElementById("page3").style.display = "block";
}

/*function show_round_menu(){
	if(dp==0){
		document.getElementById("menudesplegable").style.display = "block");
		dp=1;
	}else{
		document.getElementById("menudesplegable").style.display = "none");
		dp=0;
	}
}*/
		

function day_night(){
	
	if (nightmode == 1){
		document.body.style.backgroundImage = "url('imagenes/index_background_day.gif')";
		document.getElementById("clickround").src = "imagenes/round_menu_day.png";
		document.getElementById("smallround1").src = "imagenes/round_menu_day.png";
		document.getElementById("smallround2").src = "imagenes/round_menu_day.png";
		document.getElementById("smallround3").src = "imagenes/round_menu_dn_day.png";
		document.getElementById("button1").style.backgroundImage = "url('imagenes/rectangle_menu_day.png')";
		document.getElementById("button2").style.backgroundImage = "url('imagenes/rectangle_menu_day.png')";
		document.getElementById("button3").style.backgroundImage = "url('imagenes/rectangle_menu_day.png')";
		document.getElementById("metrobilbao").style.backgroundImage = "url('imagenes/info_panel_day.png')";
		document.getElementById("progressbarcontainer").style.border = "border:0px #ffb324 solid";	
		document.getElementById("progressbar").style.backgroundColor = "#ffbc16";
		document.getElementById("page1").style.backgroundImage = "url('imagenes/info_panel_day.png')";
		document.getElementById("page2").style.backgroundImage = "url('imagenes/info_panel_day.png')";
		document.getElementById("page3").style.backgroundImage = "url('imagenes/info_panel_day.png')";		
		nightmode = 0;
	
	}else{
		document.body.style.backgroundImage = "url('imagenes/index_background_night.gif')";
		document.getElementById("clickround").src = "imagenes/round_menu_night.png";
		document.getElementById("smallround1").src = "imagenes/round_menu_night.png";
		document.getElementById("smallround2").src = "imagenes/round_menu_night.png";
		document.getElementById("smallround3").src = "imagenes/round_menu_dn_night.png";
		document.getElementById("button1").style.backgroundImage = "url('imagenes/rectangle_menu_night.png')";
		document.getElementById("button2").style.backgroundImage = "url('imagenes/rectangle_menu_night.png')";
		document.getElementById("button3").style.backgroundImage = "url('imagenes/rectangle_menu_night.png')";
		document.getElementById("metrobilbao").style.backgroundImage = "url('imagenes/info_panel_night.png')";	
		document.getElementById("progressbarcontainer").style.border = "border:0px #d8f1f1 solid";	
		document.getElementById("progressbar").style.backgroundColor = "#74eeee";	
		document.getElementById("page1").style.backgroundImage = "url('imagenes/info_panel_night.png')";
		document.getElementById("page2").style.backgroundImage = "url('imagenes/info_panel_night.png')";
		document.getElementById("page3").style.backgroundImage = "url('imagenes/info_panel_night.png')";	
		nightmode = 1;
	}
}
	