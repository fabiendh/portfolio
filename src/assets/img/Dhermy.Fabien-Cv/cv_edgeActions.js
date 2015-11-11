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
      
      
      Symbol.bindElementAction(compId, symbolName, "document", "keyup", function(sym, e) {
         if (e.which == 39) {
         	sym.getSymbol("perso").stop(0);
         }
         
         if (e.which == 37) {
         	sym.getSymbol("perso").stop(1000);
         }
         
         if (e.which == 68) {
         	sym.getSymbol("perso").stop(0);
         }
         
         if (e.which == 81) {
         	sym.getSymbol("perso").stop(1000);
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "keydown", function(sym, e) {
         var pos=sym.getPosition();
         var dur=sym.getDuration();
         
         
         if (e.which == 37) {
         	if(!sym.getSymbol("perso").isPlaying()){
         		sym.getSymbol("perso").play(1250);
         	}
         	pos-=100;
         	if(pos<0){pos=0};
         
         }
         
         
         
         if (e.which == 39) {
         	if(!sym.getSymbol("perso").isPlaying()){
         		sym.getSymbol("perso").play(250);
         	}
         		pos+=100;
         	if(pos>dur){pos=dur};
         
         }
         
         if (e.which == 81) {
         	if(!sym.getSymbol("perso").isPlaying()){
         		sym.getSymbol("perso").play(1250);
         	}
         	pos-=400;
         	if(pos<0){pos=0};
         
         }
         
         if (e.which == 68) {
         	if(!sym.getSymbol("perso").isPlaying()){
         		sym.getSymbol("perso").play(250);
         	}
         		pos+=400;
         	if(pos>dur){pos=dur};
         
         }
         console.log(pos);
         sym.stop(pos);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         sym.$("Stage").css({"margin":"auto"});
         
         var youtubevid = $("<iframe/>");
          sym.$("vcontainer").append(youtubevid);
         
          youtubevid.attr('type','text/html');
          youtubevid.attr('width','425');
          youtubevid.attr('height','350');
          youtubevid.attr('src','https://www.youtube.com/embed/7D3RSr7lHHg');  // url/Video_Id
          youtubevid.attr('frameborder','1');	   // 1 | 0
          youtubevid.attr('allowfullscreen','0');   // 1 | 0
         
         
         sym.$("son").html("<audio src='sounds/ZackKim-SuperMarioTheme.m4a' autoplay>");// sym.$("name") résout un nom d’élément Edge Animate en élément DOM

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 94000, function(sym, e) {
         if(sym.getSymbol("rj45").getPosition()==0){
         	sym.getSymbol("rj45").play();
         }
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btn_avnt}", "click", function(sym, e) {
         sym.getSymbol("graphisme").play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btn_arr}", "click", function(sym, e) {
         sym.getSymbol("graphisme").playReverse();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text4}", "click", function(sym, e) {
         function randomColor() {
         	var x=Math.floor(Math.random()*256);
         	var y=Math.floor(Math.random()*256);
         	var z=Math.floor(Math.random()*256);
         	var color="rgb("+ x +","+ y +","+ z+")";
         	return color;
         }
         function randomColortext() {
         	var x=Math.floor(Math.random()*256);
         	var y=Math.floor(Math.random()*256);
         	var z=Math.floor(Math.random()*256);
         	var color="rgb("+ x +","+ y +","+ z+")";
         	return color;
         }
         var couleur=randomColor();
         var couleurtext= randomColortext();
         sym.$("Text4").css({"background-color": couleur});
         sym.$("Text4").css({"color": couleurtext});

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'personnage'
   (function(symbolName) {   
   
   })("personnage");
   //Edge symbol end:'personnage'

   //=========================================================
   
   //Edge symbol: 'perso'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         sym.play(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1750, function(sym, e) {
         sym.play(1250);

      });
      //Edge binding end

   })("perso");
   //Edge symbol end:'perso'

   //=========================================================
   
   //Edge symbol: 'rect_com'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // lire le scénario à partir de la position spécifiée (ms ou étiquette)
         sym.play(0);
         

      });
      //Edge binding end

   })("rect_com");
   //Edge symbol end:'rect_com'

   //=========================================================
   
   //Edge symbol: 'rj45'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("rj45");
   //Edge symbol end:'rj45'

   //=========================================================
   
   //Edge symbol: 'Panda'
   (function(symbolName) {   
   
      

   })("Panda");
   //Edge symbol end:'Panda'

   //=========================================================
   
   //Edge symbol: 'dialog'
   (function(symbolName) {   
   
   })("dialog");
   //Edge symbol end:'dialog'

   //=========================================================
   
   //Edge symbol: 'graphisme'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("graphisme");
   //Edge symbol end:'graphisme'

   //=========================================================
   
   //Edge symbol: 'algo'
   (function(symbolName) {   
   
   })("algo");
   //Edge symbol end:'algo'

   //=========================================================
   
   //Edge symbol: 'fin'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3500, function(sym, e) {
         // lire le scénario à partir de la position spécifiée (ms ou étiquette)
         sym.play(0);

      });
      //Edge binding end

   })("fin");
   //Edge symbol end:'fin'

})(jQuery, AdobeEdge, "EDGE-14377118");