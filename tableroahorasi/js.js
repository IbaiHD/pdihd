// Seleccionar el canvas y configurar su contexto
const canvas = document.getElementById('juegoCanvas');
canvas.width = window.innerWidth;
canvas.height= window.innerHeight;
const ctx = canvas.getContext('2d');

// Configuración inicial del juego
let jugador = {
			   width: canvas.width/20, 
			   height: canvas.height/20,
			   x: 0,
			   y: 0,
			   hp: 10,
			   color: "blue" 
			  };

let tablero = {
				rows:20,
				cols:20,
				cellsize:canvas.width/10,
}


let juegoTerminado = false;

// Escuchar teclas para mover al jugador
document.addEventListener('keydown', (e) => {
	if (e.key === 'ArrowLeft' && jugador.x > 0) jugador.x -= canvas.width/20;
	if (e.key === 'ArrowRight' && jugador.x + jugador.width < canvas.width) jugador.x += canvas.width/20;
	if (e.key === "ArrowUp" && jugador.y > 0) jugador.y -= canvas.height/20;
	if (e.key === "ArrowDown" && jugador.y + jugador.height < canvas.height) jugador.y += canvas.height/20;

});

function crearMapa(){
	var cells=0;
	for(var i=0;i<tablero.cols;i++){
		for(var j=0;j<tablero.rows;j++){
			if(cells%2==0){
				ctx.beginPath();
				ctx.fillStyle = "#dad9d7";
				ctx.fillRect((canvas.width/tablero.rows)*j, (canvas.height/tablero.rows)*i, tablero.cellsize, tablero.cellsize);
				ctx.closePath();
			}else{
				ctx.beginPath();
				ctx.fillStyle = "#e1c490";
				ctx.fillRect((canvas.width/tablero.rows)*j, (canvas.height/tablero.rows)*i, tablero.cellsize, tablero.cellsize);
				ctx.closePath();
			}	
			cells++;
		}
		cells++;
	}
}

function crearJugador(){
	dibujarRect(jugador);
}

// Dibujar un rectángulo
function dibujarRect(obj) {
  ctx.fillStyle = obj.color;
  ctx.fillRect(obj.x, obj.y, obj.width, obj.height);
}

// Actualizar el juego
function actualizarJuego() {
  if (juegoTerminado) return;

	//ctx.clearRect(0, 0, canvas.width, canvas.height);
	crearMapa();
	crearJugador();

}

// Bucle principal del juego
function bucleJuego() {
  actualizarJuego();
  if (!juegoTerminado) requestAnimationFrame(bucleJuego);
}

// Iniciar el juego
bucleJuego();