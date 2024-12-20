// Seleccionar el canvas y configurar su contexto
const canvas = document.getElementById('juegoCanvas');
canvas.width = window.innerWidth;
canvas.height= window.innerHeight;
const ctx = canvas.getContext('2d');

// Configuración inicial del juego
let jugador = {
			   width: 50, 
			   height: 50,
			   x: ((canvas.width-50)/2),
			   y: (canvas.height-50),
			   hp: 10,
			   color: "blue" 
			  };

let obstaculos = [];
let proyectiles= [];
let puntuacion = 0;
let juegoTerminado = false;

// Escuchar teclas para mover al jugador
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft' && jugador.x > 50) jugador.x -= canvas.width/10-5;
  if (e.key === 'ArrowRight' && jugador.x + jugador.width < (canvas.width-50)) jugador.x += canvas.width/10-5;
  if (e.key === "ArrowUp") crearProyectil();
});

// Generar obstáculos
function crearObstaculo() {
  const ancho = 50;
  const x = (Math.floor(Math.random()*10) * ((canvas.width - ancho))/10);
  obstaculos.push({ x: x, y: 0, width: ancho, height: 20, color: 'red' });
}

function crearProyectil(){
	if (proyectiles.length < obstaculos.length){
		const ancho=5;
		const alto= 10;
		const x = jugador.x + (jugador.width/2);
		const y = jugador.y;
		proyectiles.push({x:x, y:y, width: ancho, height: alto, color:"black"});
	}
}

// Dibujar un rectángulo
function dibujarRect(obj) {
  ctx.fillStyle = obj.color;
  ctx.fillRect(obj.x, obj.y, obj.width, obj.height);
}

// Detectar colisiones
function detectarColision(obj1, obj2) {
  return (
    obj1.x < obj2.x + obj2.width &&
    obj1.x + obj1.width > obj2.x &&
    obj1.y < obj2.y + obj2.height &&
    obj1.y + obj1.height > obj2.y
  );
}

function comprobarHP(){
	jugador.color="red";
	if(jugador.hp>3) jugador.color="yellow";
	if(jugador.hp>6) jugador.color="green";
	if(jugador.hp==10) jugador.color="blue";
}

// Actualizar el juego
function actualizarJuego() {
  if (juegoTerminado) return;

  // Limpiar el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  comprobarHP();
  // Dibujar al jugador
  dibujarRect(jugador);

  // Dibujar y mover obstáculos
  obstaculos.forEach((obs, index) => {
    obs.y += 5; // Velocidad del obstáculo
    dibujarRect(obs);

    // Detectar colisión
    if (detectarColision(jugador, obs)) {
	  jugador.hp-=Math.floor((Math.random()*4)+1);
		if(jugador.hp<=0){
			juegoTerminado = true;
      		alert(`¡Juego terminado! Puntuación: ${puntuacion}`);
		}
	  if((obs.y+obs.height) >= (canvas.height-jugador.height)){
		 obstaculos.splice(index, 1);
	  }
    }

    // Eliminar obstáculos que salgan del canvas
    if (obs.y > canvas.height) {
      obstaculos.splice(index, 1);
    }
  
	  proyectiles.forEach((bullet, index) => {
		  bullet.y -= 10;
		  dibujarRect(bullet);

		  if(bullet.y < 0){
			  proyectiles.splice(index, 1);
		  }

		  if (detectarColision(bullet, obs)) {
				obstaculos.splice(index, 1);
			    proyectiles.splice(index,1);
				puntuacion += 1;
		  }
		});
	  });

  // Dibujar puntuación
  ctx.fillStyle = 'black';
  ctx.font = '20px Arial';
  ctx.fillText(`Puntuación: ${puntuacion}`, 10, 20);
  ctx.fillText(`HP: ${jugador.hp}`, 10, 50);
}

// Bucle principal del juego
function bucleJuego() {
  actualizarJuego();
  if (!juegoTerminado) requestAnimationFrame(bucleJuego);
}

// Generar nuevos obstáculos cada 1.5 segundos
setInterval(crearObstaculo, 1500);

// Iniciar el juego
bucleJuego();