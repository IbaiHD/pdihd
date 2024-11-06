var nightmode = 1;
var playing= 0;
const paradas= ["Plentzia","Larrabasterra","Algorta","Areeta","Astrabudua","San Inazio","Santimami","Abando","Zazpikalea","Etxebarri","Basauri"];
var parada=0;
var numberid=1;

function change_parada(){
	
	document.getElementById("paradasmetro").innerText=paradas[parada];
	parada = (parada + 1) % paradas.length;
	setTimeout(change_parada, 20010);
}

function change_parada_icon(){
		var id= "parada" + numberid;
		document.getElementById(id).style.animation = "parada_actual 20s";
		numberid++;
	
}		

function parada_actual(){
	
	change_parada_icon();
	setTimeout(parada_actual,20000);

}

parada_actual();
change_parada();

function showbackground(){
	document.getElementById("page1").style.display = "none";
	document.getElementById("page2").style.display = "none";
	document.getElementById("page3").style.display = "none";
}

function showpage1(){
	document.getElementById("page1").style.display = "flex";
	document.getElementById("page2").style.display = "none";
	document.getElementById("page3").style.display = "none";
	document.getElementById("page1").style.animation="show_page 1s";
}

function showpage2(){
	
	if (window.innerWidth >= 1280){
		document.getElementById("page1").style.display = "none";
		document.getElementById("page2").style.display = "flex";
		document.getElementById("page3").style.display = "none";
		document.getElementById("page2").style.animation="show_page 1s";	
	}else{
		document.getElementById("page1").style.display = "none";
		document.getElementById("page2").style.display = "block";
		document.getElementById("page3").style.display = "none";
		document.getElementById("page2").style.animation="show_page 1s";
	}
}

function showpage3(){
	document.getElementById("page1").style.display = "none";
	document.getElementById("page2").style.display = "none";
	document.getElementById("page3").style.display = "flex";
	document.getElementById("page3").style.animation="show_page 1s";	
}

function music(){
	if(playing==0){
	document.getElementById("audio").play();
	playing=1;
	}else{
		document.getElementById("audio").pause();
		playing=0;
	}
}
		
function day_night(){
	
	if (nightmode == 1){
		document.body.style.backgroundImage = "url('imagenes/index_background_day.gif')";
		document.getElementByClass("menu_button").style.backgroundColor = "rgba(229,153,85,1)";
		document.getElementById("metrobilbao").style.backgroundImage = "url('imagenes/info_panel_day.png')";
		document.getElementById("progressbarcontainer").style.border = "border:0px #ffb324 solid";	
		document.getElementById("progressbar").style.backgroundColor = "#ffbc16";
		document.getElementById("page1").style.backgroundColor = "rgba(100,70,100,.5)";
		document.getElementById("page2").style.backgroundColor = "rgba(100,70,100,.5)";
		document.getElementById("page3").style.backgroundColor = "rgba(100,70,100,.5)";	
		nightmode = 0;
	
	}else{
		document.body.style.backgroundImage = "url('imagenes/index_background_night.gif')";
		document.getElementByClass("menu_button").style.backgroundColor = "rgba(148,210,214,1)";
		document.getElementById("metrobilbao").style.backgroundImage = "url('imagenes/info_panel_night.png')";	
		document.getElementById("progressbarcontainer").style.border = "border:0px #d8f1f1 solid";	
		document.getElementById("progressbar").style.backgroundColor = "#74eeee";	
		document.getElementById("page1").style.backgroundColor = "rgba(0,0,70,.5)";
		document.getElementById("page2").style.backgroundColor = "rgba(0,0,70,.5)";
		document.getElementById("page3").style.backgroundColor = "rgba(0,0,70,.5)";
		nightmode = 1;
	}
}

function page_2(){
	
	document.getElementById("form_footer").style.display="none";	
	document.getElementById("page_1").style.animation="hide_page_1 2s";
	setTimeout(()=>{
	document.getElementById("page_1").style.display="none";
	document.getElementById("page_2").style.display="block";
	document.getElementById("page_2").style.animation="show_page_2 2s";
	},1900);
}

function show_trasbordo(){	
	document.getElementById("trasbordo").style.display="block";	

}

function hide_trasbordo(){	
	document.getElementById("trasbordo").style.display="none";
	
}

function show_ultraperiferia(){	
	document.getElementById("ultraperiferia").style.display="block";	

}

function hide_ultraperiferia(){	
	document.getElementById("ultraperiferia").style.display="none";
	
}

function submit_true(){	
	document.getElementById("enviar").disabled=false;	

}

function submit_false(){	
	document.getElementById("enviar").disabled=true;	
	
}

function habitual_1(){
		if(document.getElementById("linea_1").checked==true){
			document.getElementById("linea_habitual_1").checked= true;
			document.getElementById("linea_habitual_2").checked= false;
			document.getElementById("linea_habitual_3").checked= false;
			document.getElementById("linea_habitual_4").checked= false;

		}
	}
	
function habitual_2(){
		if(document.getElementById("linea_2").checked==true){
			document.getElementById("linea_habitual_1").checked= false;
			document.getElementById("linea_habitual_2").checked= true;
			document.getElementById("linea_habitual_3").checked= false;
			document.getElementById("linea_habitual_4").checked= false;

		}
		
	}

function habitual_3(){
		if(document.getElementById("linea_3").checked==true){
			document.getElementById("linea_habitual_1").checked= false;
			document.getElementById("linea_habitual_2").checked= false;
			document.getElementById("linea_habitual_3").checked= true;
			document.getElementById("linea_habitual_4").checked= false;

		}
		
	}

function habitual_4(){
		if(document.getElementById("linea_4").checked==true){
			document.getElementById("linea_habitual_1").checked= false;
			document.getElementById("linea_habitual_2").checked= false;
			document.getElementById("linea_habitual_3").checked= false;
			document.getElementById("linea_habitual_4").checked= true;

		}
		
	}	