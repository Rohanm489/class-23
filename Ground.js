class Ground{
   //its a function called automatically when an object is created 
   //create the bodies
   constructor(x,y,width,height){
    var options={isStatic : true}

    this.ground= Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height = height;
    World.add(world,this.ground);    
    }
    //you need to call
    //how to display the bodies
    display(){ 
    var pos =this.ground.position;
    fill("brown");
    rect(pos.x,pos.y,400,20);        
    }
}