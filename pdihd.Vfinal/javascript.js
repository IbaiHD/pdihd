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
	const botones=document.getElementsByClassName("menu_button");
	
	if (nightmode == 1){
		document.body.style.backgroundImage = "url('imagenes/index_background_day.gif')";
		document.getElementById("metrobilbao").style.background= "linear-gradient(0deg, rgba(177,113,27,.5) 0%, rgba(255,209,127,.5) 100%)";
		document.getElementById("menu").style.background= "linear-gradient(0deg, rgba(177,113,27,.5) 0%, rgba(255,209,127,.5) 100%)";
		document.getElementById("menu").style.border="2px solid white";
		document.getElementById("progressbar").style.background="#ffe000";
		for(let i=0;i< botones.length; i++){
			botones[i].style.backgroundColor="rgba(240,222,121,1)";
		}
		document.getElementsByClassName("captioncel")[0].style.backgroundImage = "url('imagenes/list_title_day.png')"; 
		document.getElementsByClassName("title_list")[0].style.backgroundImage = "url('imagenes/list_title_day.png')"; 
		document.getElementsByClassName("title_list")[1].style.backgroundImage = "url('imagenes/list_title_day.png')"; 
		nightmode = 0;
	
	}else{
		document.body.style.backgroundImage = "url('imagenes/index_background_night.gif')";
		document.getElementById("metrobilbao").style.background= "linear-gradient(0deg, rgba(167,118,168,.5) 0%, rgba(125,87,130,.5) 100%)";
		document.getElementById("menu").style.background= "linear-gradient(0deg, rgba(167,118,168,.5) 0%, rgba(125,87,130,.5) 100%)";
		document.getElementById("menu").style.border="2px solid #94d2d6";
		document.getElementById("progressbar").style.background="#74eeee";
		for(let i=0;i< botones.length; i++){
			botones[i].style.backgroundColor="rgba(148,210,214,1)";
		}
		document.getElementsByClassName("captioncel")[0].style.backgroundImage = "url('imagenes/list_title_night.png')"; 
		document.getElementsByClassName("title_list")[0].style.backgroundImage = "url('imagenes/list_title_night.png')"; 
		document.getElementsByClassName("title_list")[1].style.backgroundImage = "url('imagenes/list_title_night.png')";		
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
	
var canvas= document.getElementById("mapa_metro");
	
if (canvas.getContext){
	
	var ctx = canvas.getContext("2d");
	ctx.strokeStyle= "rgb(20,20,200)";
	ctx.fillStyle= "rgb(155,0,155)";
	ctx.lineWidth= 5;
	
	
	ctx.beginPath();
	ctx.moveTo(100,50);
	ctx.lineTo(100,120);
	ctx.stroke();
	
	ctx.beginPath();
	ctx.strokeStyle= "rgb(0,155,0)";
	ctx.moveTo(100,120);
	ctx.lineTo(100,450);
	ctx.bezierCurveTo(200, 500, 300, 500, 400, 450 );
	ctx.lineTo(400,120);
	ctx.stroke();
	
	ctx.beginPath();
	ctx.strokeStyle= "rgb(220,220,0)";
	ctx.moveTo(250,490);
	ctx.lineTo(250,650);
	ctx.lineTo(300,650);
	ctx.moveTo(300,600);
	ctx.lineTo(300,750);
	ctx.moveTo(250,650);
	ctx.lineTo(250,750);
	ctx.stroke();
	
	ctx.beginPath();
	ctx.strokeStyle = "rgb(0,200,0)";
	ctx.moveTo(300,750);
	ctx.lineTo(300,800);
	ctx.moveTo(250,750);
	ctx.lineTo(250,950);
	ctx.stroke();
	
	ctx.fillStyle="rgb(176,236,212)";
	
	ctx.beginPath();
	ctx.arc(100,58, 8, 0, Math.PI*2, false);
	ctx.arc(100,118, 8, 0, Math.PI*2, false);
	ctx.arc(100,218, 8, 0, Math.PI*2, false);
	ctx.arc(100,318, 8, 0, Math.PI*2, false);
	ctx.arc(100,418, 8, 0, Math.PI*2, false);
	ctx.fill();
	
	ctx.beginPath();
	ctx.arc(400,118, 8, 0, Math.PI*2, false);
	ctx.arc(400,168, 8, 0, Math.PI*2, false);
	ctx.arc(400,268, 8, 0, Math.PI*2, false);
	ctx.arc(400,368, 8, 0, Math.PI*2, false);
	ctx.arc(400,418, 8, 0, Math.PI*2, false);
	ctx.fill();
	
	ctx.beginPath();
	ctx.arc(250,520, 8, 0, Math.PI*2, false);
	ctx.arc(250,590, 8, 0, Math.PI*2, false);
	ctx.arc(250,650, 8, 0, Math.PI*2, false);
	ctx.arc(250,720, 8, 0, Math.PI*2, false);
	ctx.arc(250,780, 8, 0, Math.PI*2, false);
	ctx.arc(250,840, 8, 0, Math.PI*2, false);
	ctx.arc(250,950, 8, 0, Math.PI*2, false);
	ctx.fill();
	
	ctx.beginPath();
	ctx.arc(300,600, 8, 0, Math.PI*2, false);
	ctx.arc(300,650, 8, 0, Math.PI*2, false);
	ctx.arc(300,750, 8, 0, Math.PI*2, false);
	ctx.arc(300,800, 8, 0, Math.PI*2, false);
	ctx.fill();
	
	ctx.strokeStyle="rgb(176,236,212)";
	ctx.lineWidth= 2;
	
	ctx.beginPath();
	ctx.moveTo(100,61);
	ctx.lineTo(200,61);
	ctx.moveTo(100,121);
	ctx.lineTo(200,121);
	ctx.moveTo(100,221);
	ctx.lineTo(200,221);
	ctx.moveTo(100,321);
	ctx.lineTo(200,321);
	ctx.moveTo(100,421);
	ctx.lineTo(200,421);	
	ctx.moveTo(400,121);
	ctx.lineTo(300,121);
	ctx.moveTo(400,171);
	ctx.lineTo(300,171);
	ctx.moveTo(400,271);
	ctx.lineTo(300,271);
	ctx.moveTo(400,371);
	ctx.lineTo(300,371);
	ctx.moveTo(400,421);
	ctx.lineTo(300,421);
	ctx.moveTo(250,523);
	ctx.lineTo(150,523);
	ctx.moveTo(250,593);
	ctx.lineTo(150,593);
	ctx.moveTo(250,653);
	ctx.lineTo(150,653);
	ctx.moveTo(250,723);
	ctx.lineTo(150,723);
	ctx.moveTo(250,783);
	ctx.lineTo(150,783);
	ctx.moveTo(250,843);
	ctx.lineTo(150,843);
	ctx.moveTo(250,953);
	ctx.lineTo(150,953);	
	ctx.moveTo(300,603);
	ctx.lineTo(400,603);
	ctx.moveTo(300,653);
	ctx.lineTo(400,653);
	ctx.moveTo(300,753);
	ctx.lineTo(400,753);
	ctx.moveTo(300,800);
	ctx.lineTo(400,800);	
	ctx.stroke();
	
	ctx.fillStyle="white";
	ctx.font="20px Arial";
	
	ctx.fillText("Plentzia", 110, 58);
	ctx.fillText("Berango", 110, 118);
	ctx.fillText("Algorta", 110, 218);
	ctx.fillText("Areeta", 110, 318);
	ctx.fillText("Astrabudua", 110, 418);
	ctx.fillText("Kabieces", 300,118);
	ctx.fillText("Portugalete", 280, 168);
	ctx.fillText("Sestao", 320, 268);
	ctx.fillText("Bagatza", 310, 368);
	ctx.fillText("Ansio", 330, 418);
	ctx.fillText("San Inazio", 145, 520);
	ctx.fillText("Santimami", 145, 590);
	ctx.fillText("Zazpikaleak", 130, 650);
	ctx.fillText("Santutxu", 160, 720);
	ctx.fillText("Etxebarri", 160, 780);
	ctx.fillText("Ariz", 205, 840);
	ctx.fillText("Basauri", 170, 950);
	ctx.fillText("Matiko", 310, 600);
	ctx.fillText("Zazpikaleak", 310, 650);
	ctx.fillText("Txurdinaga", 310, 750);
	ctx.fillText("Kukullaga", 310, 800);	
	
	ctx.strokeStyle="black";
	ctx.fillStyle="rgba(255,200,235,.5)";
	
	ctx.strokeRect(300,850,150,120);
	ctx.fillRect(300,850,150,120);
	
	ctx.fillStyle="white";
	ctx.fillText("Leyenda:", 332, 875);
	ctx.fillStyle="yellow";
	ctx.fillText("--> Zona 1 <--", 313, 910);
	ctx.fillStyle="green";	
	ctx.fillText("--> Zona 2 <--", 312, 930);
	ctx.fillStyle="blue";
	ctx.fillText("--> Zona 3 <--", 312, 950);	
	
	
}else{
	
	alert("Pues no se va a ver el canvas... tu navegador no lo soporta ^^U");
}