
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	// Définir ici les attributs de la 'classe'
  var xPointInit = 0;
  var yPointInit = 0;
  var xPointFinal = 0;
  var yPointFinal = 0;
  var pressionOK = false; // variable sert à savoir si on a pressé ou pas
  
  // Developper les 3 fonctions gérant les événements
  
  // Execute the function when pressing a button over element "this"
  this.mousedown = function(evt){ 
    this.xPointInit = getMousePosition(canvas,evt).x;
    this.yPointInit = getMousePosition(canvas,evt).y;
    // this.xPointFinal = getMousePosition(canvas,evt).x;
    // this.yPointFinal = getMousePosition(canvas,evt).y;
    this.pressionOK = true;
    console.log("Mouse down: " + this.xPointInit + " " + this.yPointInit);
  }.bind(this);

  // Execute the function when moving the mouse over the element "this"
  this.mousemove = function(evt){
    if(this.pressionOK){
      this.xPointFinal = getMousePosition(canvas,evt).x;
      this.yPointFinal = getMousePosition(canvas, evt).y;
      console.log("Mouse move: " + this.xPointFinal + " " + this.yPointFinal);
    }
  }.bind(this); // Revoir fonction bind

  // Execute the function when releasing the mouse over the element "this"
  this.mouseup = function(evt){
    if(this.pressionOK){
      pressionOK = false;
      console.log("Mouse up: " + this.xPointInit + " " + this.yPointInit + ", " +this.xPointFinal + " " + this.yPointFinal);
    }
  }.bind(this);
  
	// Q4. Associer les fonctions précédentes aux évènements du canvas.
  canvas.addEventListener('mousedown', this.mousedown);
  canvas.addEventListener('mousemove',this.mousemove);
  canvas.addEventListener('mouseup',this.mouseup);
};

// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};
