/***********************
* Actions de compositions pour Adobe Edge Animate
*
* Modifier ce fichier avec précaution, en veillant à conserver 
* les signatures et les commentaires de fonction commençant par « Edge » pour maintenir la 
* possibilité d’interagir avec ces actions depuis Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // alias pour les classes Edge couramment utilisées

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "${_Stage}", "mousemove", function(sym, e) {
         // insérer le code à exécuter lorsque vous placez le pointeur de la souris sur l'objet
         var pos=Number(e.pageX)*3000/550;
         
         
         sym.getSymbol("Oeil").stop(pos);

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Oeil'
   (function(symbolName) {   
   
   })("Oeil");
   //Edge symbol end:'Oeil'

})(jQuery, AdobeEdge, "EDGE-10338248");