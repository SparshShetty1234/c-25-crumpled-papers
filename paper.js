class paper
{
  constructor(x,y,r){
    var options={
      isStatic:false,
      restitution:0.3,
      density:1.2,
      friction:0.1
    }
      this.x=x
      this.y=y
      this.r=r
      
      
      
      this.image=loadImage("paper.png")
      this.body=Bodies.circle(this.x,this.y,this.r,options)

      
      World.add(world,this.body)

  }
 display(){
   var paperpose=this.body.position
   push()
  translate(paperpose.x,paperpose.y)

  imageMode(CENTER)
  image(this.image,0,0,this.r)
  pop()
  

}
}