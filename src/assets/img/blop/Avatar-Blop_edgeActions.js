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
         var pos=Number(e.pageX)*2000/sym.$("Stage").width();
         
         
         sym.getSymbol("oeil_gauche").stop(pos);
         sym.getSymbol("oeil_droit").stop(pos);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bouton}", "click", function(sym, e) {
         sym.getSymbol("jour_nuit").play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btn-araigne}", "click", function(sym, e) {
         sym.getSymbol("araigne").play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_etiquette}", "click", function(sym, e) {
         var prenom=window.prompt("Votre prénom ?");
         sym.$("nom").text(prenom);

      });
      //Edge binding end

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_Btn_apChap}", "click", function(sym, e) {
         sym.getSymbol("chap").play();

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_Btn_apMoust}", "click", function(sym, e) {
         sym.getSymbol("moustache").play();

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_Btn_apAccess}", "click", function(sym, e) {
         sym.getSymbol("accessoire").play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_jour_nuit}", "dblclick", function(sym, e) {
         window.alert("Bien jouer tu viens de découvrir comment changer la couleur de la table");
         var color=window.prompt("Entre ta couleur en toute lettre en anglais stp: ");
         sym.$("table").css({"background-color": color});
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Btn_etiquette}", "click", function(sym, e) {
         var prenom=window.prompt("Votre prénom ?");
         sym.$("nom").text(prenom);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btn_oeil_g}", "mouseout", function(sym, e) {
         sym.getSymbol("oeil_fermeture_g").playReverse();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btn_oeil_d}", "mouseout", function(sym, e) {
         sym.getSymbol("oeil_fermeture_d").playReverse();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btn_oeil_g}", "mouseover", function(sym, e) {
         sym.getSymbol("oeil_fermeture_g").play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btn_oeil_d}", "mouseover", function(sym, e) {
         sym.getSymbol("oeil_fermeture_d").play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btn_couleur}", "click", function(sym, e) {
         function randomColor() {
         	var x=Math.floor(Math.random()*256);
         	var y=Math.floor(Math.random()*256);
         	var z=Math.floor(Math.random()*256);
         	var color="rgb("+ x +","+ y +","+ z+")";
         	return color;
         }
         
         var couleur= randomColor();
         sym.$("sur_table").css({"background-color": couleur});
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btn_relunch}", "click", function(sym, e) {
         window.location.reload()

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Btn_avChap}", "click", function(sym, e) {
         sym.getSymbol("chap").playReverse();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Btn_avMoust}", "click", function(sym, e) {
         sym.getSymbol("moustache").playReverse();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Btn_avAccess}", "click", function(sym, e) {
         sym.getSymbol("accessoire").playReverse();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Bulle_penser}", "mouseover", function(sym, e) {
         sym.getSymbol("Bulle_penser").play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Bulle_penser}", "mouseout", function(sym, e) {
         sym.getSymbol("Bulle_penser").playReverse();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'chapeau'
   (function(symbolName) {   
   
   })("chapeau");
   //Edge symbol end:'chapeau'

   //=========================================================
   
   //Edge symbol: 'corps'
   (function(symbolName) {   
   
   })("corps");
   //Edge symbol end:'corps'

   //=========================================================
   
   //Edge symbol: 'chap'
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

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("chap");
   //Edge symbol end:'chap'

   //=========================================================
   
   //Edge symbol: 'moustache'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("moustache");
   //Edge symbol end:'moustache'

   //=========================================================
   
   //Edge symbol: 'accessoire'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5505, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4505, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3505, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2505, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1505, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 505, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("accessoire");
   //Edge symbol end:'accessoire'

   //=========================================================
   
   //Edge symbol: 'Symbol_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 580, function(sym, e) {
         sym.play(0
         );

      });
      //Edge binding end

   })("Symbol_1");
   //Edge symbol end:'Symbol_1'

   //=========================================================
   
   //Edge symbol: 'oeil'
   (function(symbolName) {   
   
   })("oeil");
   //Edge symbol end:'oeil'

   //=========================================================
   
   //Edge symbol: 'oeil_droit'
   (function(symbolName) {   
   
   })("oeil_droit");
   //Edge symbol end:'oeil_droit'

   //=========================================================
   
   //Edge symbol: 'jour_nuit'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("jour_nuit");
   //Edge symbol end:'jour_nuit'

   //=========================================================
   
   //Edge symbol: 'araigne'
   (function(symbolName) {   
   
   })("araigne");
   //Edge symbol end:'araigne'

   //=========================================================
   
   //Edge symbol: 'attention'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // lire le scénario à partir de la position spécifiée (ms ou étiquette)
         sym.play(0);

      });
      //Edge binding end

   })("attention");
   //Edge symbol end:'attention'

   //=========================================================
   
   //Edge symbol: 'oeil_fermeture'
   (function(symbolName) {   
   
   })("oeil_fermeture");
   //Edge symbol end:'oeil_fermeture'

   //=========================================================
   
   //Edge symbol: 'Titre'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         // lire le scénario à partir de la position spécifiée (ms ou étiquette)
         sym.play(0);

      });
      //Edge binding end

   })("Titre");
   //Edge symbol end:'Titre'

   //=========================================================
   
   //Edge symbol: 'Bulle_penser'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_Text}", "click", function(sym, e) {
         var text=window.prompt("Vous avez les pleins pouvoir vous pouvez même controllé ses pensés");
         sym.$("Text").text(text);
         
         

      });
      //Edge binding end

   })("Bulle_penser");
   //Edge symbol end:'Bulle_penser'

})(jQuery, AdobeEdge, "EDGE-790057");