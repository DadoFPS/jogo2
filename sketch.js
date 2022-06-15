/** Fazer os namespaces **/
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Body = Matter.Body;


/** Criar as variaveis **/

var motor;      // o motor da física
var mundo;      // o mundo que iremos trabalhar

var chao;       // corpo do chao (final da tela, para que os corpos nao caiam)
var torre;      // o corpo da torre
var canhao;     // a figura do canhao
var angulo;     // o angulo do canhao

// variaveis de imagens
var backgroundImg;
var torreImg;
var boladecanhao;


/** Criar as funções **/

// função para carregar os arquivos
function preload() {

    backgroundImg = loadImage ("./assets/background.gif");

    torreImg = loadImage ("./assets/tower.png");


  

}


// função para fazer as configurações iniciais do nosso programa
function setup() {
    canvas = createCanvas(1200,600);        // tela(canvas)

    // definições básicas da biblioteca
    motor = Engine.create();                // cria um motor da física
    mundo = motor.world;  // cria um mundo que segue as leis do motor

    //criar o corpo do chao
    var options = {
        isStatic: true

    };

    chao = Bodies.rectangle(0,height -1,width*2,1,options);
    World.add(mundo,chao);

    torre = Bodies.rectangle(160,350,160,310,options);
    World.add (mundo,torre);


    angleMode (DEGREES);
    angulo = 15;
    
    canhao = new Cannon(180,120,130,100,angulo);

    boladecanhao = new Cannonball (canhao.x,canhao.y);






}

// função para ações constantes
function draw(){
    background("gray");                             // define a cor cinza para o fundo do jogo
    Engine.update(motor);   
    
    image(backgroundImg,0,0,1200,600);  //define a imagem de fundo

    canhao.display ();
    boladecanhao.display ();

    
    push ();
     
    imageMode (CENTER);
    image(torreImg,torre.position.x,torre.position.y,160,310);
    pop ();

    //rect(chao.position.x,chao.position.y,width*2,1);



}

function keyReleased () {


    if (keyCode === DOWN_ARROW) {

        boladecanhao.shoot ();
    
    
    }



}