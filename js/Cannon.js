class Cannon {

    constructor (x,y,width,height,angle){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height= height;
        this.angle = angle;


        this.baseImg = loadImage ("./assets/cannon_base.png");
        this.tuboImg = loadImage ("./assets/CANON.png");




    }



    display (){


        push ();
        imageMode (CENTER);
        image (this.tuboImg,this.x,this.y,this.width,this.height);
        pop ();

        image(this.baseImg,70,30,200,200);
        
    }
}

