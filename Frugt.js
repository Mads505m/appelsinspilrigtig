/*

* Dette script definerer klassen Kurv

*/

 

class Frugt {

    /* Den første del er en "konstruktør".
    
    * Den tager parametrene og konstruerer et nyt objekt
    
    * ud fra dem. Værdierne huskes som hørende til netop
    
    * dette objekt ved hjælp af nøgleordet this
    
    */
    
     
    
    constructor(x, y, radius, tid, farve, Appelsinbillede) {
    
    this.x = x;
    
    this.y = y;
    
    this.bred = radius;
    
    this.dyb = radius;
    
    this.tid = tid;
    
    this.col = farve;
    
    this.xspeed = random(4);
    
    this.yspeed = -10 * this.y/550;
    
    
    this.ude = false;
    this.Appelsinbillede;
   
    
    }
    
     
    
    /* Flytter frugtens position
    
    */
    
    move() {
    
    //Her skal vi sørge for at frugten bevæger sig, hvis den er startet
    
    if (!this.ude){
    
    this.tid -= 1;
    
    if (this.tid <= 0) {
    
    this.x += this.xspeed;
    
    this.y += this.yspeed;
    
    this.yspeed += grav;
    
    }
    
    if (this.x > width || this.y > height) {
    
    missed += 1;
    
    liv -= 1;
    
    this.ude = true;
    
    }
    
    }
    
    }
    
    
     
    
    /* Tegner frugten. Her kan evt. sættes et billede ind i stedet
    
    */
    
    tegn() {
    
    if(this.tid<100) {
    
    fill(this.col);
    
    ellipse(this.x, this.y, this.bred, this.dyb);
    image(Appelsinbillede, this.x, this.y, 80, 50);
    
    }
    
     
    
    }
    
    }   