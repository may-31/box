class Ground{
    constructor(x,y,width,height){

    var options_ground={
     isStatic:true
    }

    this.body=Bodies.rectangle(x,y,width,height,options_ground)
    World.add(world,this.body)

    }
    ground_Show(){
    var pos=this.body.position;
    rectMode(CENTER)
    rect(pos.x,pos.y,this.width,this.height);
    };
}