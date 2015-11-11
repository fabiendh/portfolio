/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
   fonts['arizonia, cursive']='<script src=\"http://use.edgefonts.net/arizonia:n4:all.js\"></script>';
   fonts['allerta, sans-serif']='<script src=\"http://use.edgefonts.net/allerta:n4:all.js\"></script>';


var resources = [
];
var symbols = {
"stage": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'nuit-immeuble5',
            type:'image',
            rect:['0px','0px','1418px','700px','auto','auto'],
            fill:["rgba(0,0,0,0)",'nuit-immeuble.png','0px','0px']
         },
         {
            id:'pont',
            type:'image',
            rect:['0px','490px','1418px','210px','auto','auto'],
            fill:["rgba(0,0,0,0)",'pont.png','0px','0px']
         },
         {
            id:'presentation',
            type:'text',
            rect:['99px','29px','840px','144px','auto','auto'],
            text:"Bienvenue sur le CV animé de Fabien Dhermy.<br>Pour vous déplacez utilé les touches directionnelles de votre clavier numérique. Ou si vous sohaitez une expérience plus rapide vous pouvez utilisez les touches Q et D.<br>",
            align:"left",
            font:['allerta, sans-serif',24,"rgba(255,255,255,1)","normal","none","normal"]
         },
         {
            id:'ville2',
            type:'image',
            rect:['-941px','-162px','5094px','862px','auto','auto'],
            fill:["rgba(0,0,0,0)",'ville.png','0px','0px']
         },
         {
            id:'son',
            type:'rect',
            rect:['46px','22px','198px','62px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'vcontainer',
            type:'rect',
            rect:['412px','166px','425px','350px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'rect_com',
            type:'rect',
            rect:['578','291','auto','auto','auto','auto']
         },
         {
            id:'rj45',
            type:'rect',
            rect:['433','94','auto','auto','auto','auto']
         },
         {
            id:'mur2',
            type:'image',
            rect:['2px','0px','10167px','706px','auto','auto'],
            fill:["rgba(0,0,0,0)",'mur.png','0px','0px']
         },
         {
            id:'Text4',
            type:'text',
            rect:['473px','164px','474px','269px','auto','auto'],
            cursor:['pointer'],
            text:"function randomColor() {\n\tvar x=Math.floor(Math.random()*256);\n\tvar y=Math.floor(Math.random()*256);\n\tvar z=Math.floor(Math.random()*256);\n\tvar color=\"rgb(\"+ x +\",\"+ y +\",\"+ z+\")\";\n\treturn color;\n}\nfunction randomColortext() {\n\tvar x=Math.floor(Math.random()*256);\n\tvar y=Math.floor(Math.random()*256);\n\tvar z=Math.floor(Math.random()*256);\n\tvar color=\"rgb(\"+ x +\",\"+ y +\",\"+ z+\")\";\n\treturn color;\n}\n\nvar couleurtext= randomColortext();\nsym.$(\"Text4\").css({\"background-color\": couleur});\nsym.$(\"Text4\").css({\"color\": couleurtext});<br><br>Cliquez ici !",
            align:"center",
            font:['Georgia, \'Times New Roman\', Times, serif',18,"rgba(255,255,255,1)","normal","none","normal"]
         },
         {
            id:'perso',
            type:'rect',
            rect:['213','237','auto','auto','auto','auto']
         },
         {
            id:'poteau',
            type:'image',
            rect:['1030px','-10px','248px','757px','auto','auto'],
            fill:["rgba(0,0,0,0)",'poteau.png','0px','0px']
         },
         {
            id:'Mescomptences_',
            type:'text',
            rect:['58px','22px','440px','90px','auto','auto'],
            text:"Mes Compétences ",
            align:"left",
            font:['allerta, sans-serif',40,"rgba(255,255,255,1)","normal","none","normal"]
         },
         {
            id:'graphisme',
            type:'rect',
            rect:['522','259','auto','auto','auto','auto']
         },
         {
            id:'btn_avnt',
            type:'rect',
            rect:['1731px','615px','71px','47px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            c:[
            {
               id:'Text',
               type:'text',
               rect:['0px','-5px','71px','47px','auto','auto'],
               text:"&gt;",
               align:"center",
               font:['Georgia, \'Times New Roman\', Times, serif',42,"rgba(255,255,255,1.00)","normal","none","normal"]
            }]
         },
         {
            id:'btn_arr',
            type:'rect',
            rect:['1453px','615px','71px','47px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            c:[
            {
               id:'TextCopy',
               type:'text',
               rect:['0px','-5px','71px','47px','auto','auto'],
               text:"&lt;",
               align:"center",
               font:['Georgia, \'Times New Roman\', Times, serif',42,"rgba(255,255,255,1.00)","normal","none","normal"]
            }]
         },
         {
            id:'Rectangle',
            type:'rect',
            rect:['1837px','0px','1281px','652px','auto','auto'],
            fill:["rgba(171,171,171,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'fin',
            type:'rect',
            rect:['718','173','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'perso',
            symbolName:'perso'
         },
         {
            id:'rect_com',
            symbolName:'rect_com'
         },
         {
            id:'rj45',
            symbolName:'rj45'
         },
         {
            id:'fin',
            symbolName:'fin'
         },
         {
            id:'graphisme',
            symbolName:'graphisme'
         }
         ]
      },
   states: {
      "Base State": {
         "${_poteau}": [
            ["style", "height", '1260px'],
            ["style", "top", '-15px'],
            ["style", "left", '1418px'],
            ["style", "width", '412px']
         ],
         "${_vcontainer}": [
            ["style", "top", '173px'],
            ["style", "height", '350px'],
            ["style", "left", '2544px'],
            ["style", "width", '425px']
         ],
         "${_ville2}": [
            ["style", "top", '-156px'],
            ["style", "left", '1830px'],
            ["style", "height", '862px']
         ],
         "${_perso}": [
            ["style", "top", '250px'],
            ["style", "opacity", '1'],
            ["style", "left", '41px'],
            ["style", "overflow", 'hidden']
         ],
         "${_Mescomptences_}": [
            ["style", "font-family", 'allerta, sans-serif'],
            ["style", "left", '1024px'],
            ["style", "font-size", '40px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(171,171,171,1.00)'],
            ["style", "height", '652px'],
            ["style", "top", '0px'],
            ["style", "left", '1837px'],
            ["style", "width", '1281px']
         ],
         "${_son}": [
            ["style", "opacity", '0']
         ],
         "${_rect_com}": [
            ["style", "left", '4914px'],
            ["style", "top", '300px']
         ],
         "${_fin}": [
            ["style", "left", '1365px'],
            ["style", "top", '150px']
         ],
         "${_nuit-immeuble5}": [
            ["style", "height", '700px'],
            ["style", "left", '0px'],
            ["style", "top", '-2px']
         ],
         "${_presentation}": [
            ["style", "top", '-2px'],
            ["style", "font-size", '30px'],
            ["style", "height", '201px'],
            ["style", "font-family", 'allerta, sans-serif'],
            ["style", "left", '102px'],
            ["style", "width", '626px']
         ],
         "${_btn_arr}": [
            ["style", "top", '615px'],
            ["color", "background-color", 'rgba(0,0,0,1)'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '1453px']
         ],
         "${_graphisme}": [
            ["style", "top", '259px'],
            ["style", "left", '1507px'],
            ["style", "overflow", 'hidden']
         ],
         "${_pont}": [
            ["style", "top", '488px'],
            ["style", "left", '0px'],
            ["style", "height", '210px']
         ],
         "${_mur2}": [
            ["style", "top", '-8px'],
            ["style", "left", '1226px'],
            ["style", "height", '706px']
         ],
         "${_Text}": [
            ["style", "top", '-5px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '0px'],
            ["style", "font-size", '42px']
         ],
         "${_btn_avnt}": [
            ["style", "top", '615px'],
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '1731px']
         ],
         "${_rj45}": [
            ["style", "top", '102px'],
            ["style", "left", '7147px'],
            ["style", "overflow", 'hidden']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '1024px'],
            ["style", "height", '700px'],
            ["style", "overflow", 'hidden']
         ],
         "${_TextCopy}": [
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "top", '-5px'],
            ["style", "left", '0px'],
            ["style", "font-size", '42px']
         ],
         "${_Text4}": [
            ["style", "top", '199px'],
            ["style", "font-size", '18px'],
            ["style", "height", '453px'],
            ["style", "left", '6388px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '474px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 180000,
         autoPlay: true,
         timeline: [
            { id: "eid608", tween: [ "style", "${_presentation}", "height", '201px', { fromValue: '201px'}], position: 0, duration: 0 },
            { id: "eid308", tween: [ "style", "${_ville2}", "left", '1022px', { fromValue: '1830px'}], position: 0, duration: 12636 },
            { id: "eid316", tween: [ "style", "${_ville2}", "left", '777px', { fromValue: '1022px'}], position: 12636, duration: 4364 },
            { id: "eid318", tween: [ "style", "${_ville2}", "left", '656px', { fromValue: '777px'}], position: 17000, duration: 2000 },
            { id: "eid323", tween: [ "style", "${_ville2}", "left", '596px', { fromValue: '656px'}], position: 19000, duration: 1000 },
            { id: "eid319", tween: [ "style", "${_ville2}", "left", '535px', { fromValue: '596px'}], position: 20000, duration: 1000 },
            { id: "eid324", tween: [ "style", "${_ville2}", "left", '440px', { fromValue: '535px'}], position: 21000, duration: 1503 },
            { id: "eid354", tween: [ "style", "${_ville2}", "left", '164px', { fromValue: '440px'}], position: 22503, duration: 4497 },
            { id: "eid355", tween: [ "style", "${_ville2}", "left", '103px', { fromValue: '164px'}], position: 27000, duration: 1000 },
            { id: "eid320", tween: [ "style", "${_ville2}", "left", '41px', { fromValue: '103px'}], position: 28000, duration: 1000 },
            { id: "eid322", tween: [ "style", "${_ville2}", "left", '-18px', { fromValue: '41px'}], position: 29000, duration: 1000 },
            { id: "eid382", tween: [ "style", "${_ville2}", "left", '-3907px', { fromValue: '-18px'}], position: 30000, duration: 74000 },
            { id: "eid522", tween: [ "style", "${_ville2}", "left", '-4070px', { fromValue: '-3907px'}], position: 104000, duration: 2055 },
            { id: "eid524", tween: [ "style", "${_ville2}", "left", '-5062px', { fromValue: '-4070px'}], position: 106055, duration: 11445 },
            { id: "eid525", tween: [ "style", "${_ville2}", "left", '-5928px', { fromValue: '-5062px'}], position: 117500, duration: 10000 },
            { id: "eid609", tween: [ "style", "${_presentation}", "font-size", '30px', { fromValue: '30px'}], position: 0, duration: 0 },
            { id: "eid22", tween: [ "style", "${_pont}", "left", '-2721px', { fromValue: '0px'}], position: 0, duration: 45000 },
            { id: "eid530", tween: [ "style", "${_rj45}", "top", '102px', { fromValue: '102px'}], position: 60000, duration: 0 },
            { id: "eid605", tween: [ "style", "${_rj45}", "top", '104px', { fromValue: '102px'}], position: 112233, duration: 0 },
            { id: "eid74", tween: [ "style", "${_perso}", "top", '250px', { fromValue: '250px'}], position: 0, duration: 0 },
            { id: "eid67", tween: [ "style", "${_perso}", "top", '413px', { fromValue: '250px'}], position: 22503, duration: 0 },
            { id: "eid187", tween: [ "style", "${_rect_com}", "left", '1390px', { fromValue: '4914px'}], position: 0, duration: 46000 },
            { id: "eid330", tween: [ "style", "${_rect_com}", "left", '-1214px', { fromValue: '1390px'}], position: 46000, duration: 48000 },
            { id: "eid511", tween: [ "style", "${_mur2}", "left", '1226px', { fromValue: '1226px'}], position: 0, duration: 0 },
            { id: "eid515", tween: [ "style", "${_mur2}", "left", '939px', { fromValue: '1024px'}], position: 106055, duration: 945 },
            { id: "eid591", tween: [ "style", "${_mur2}", "left", '854px', { fromValue: '939px'}], position: 107000, duration: 1000 },
            { id: "eid586", tween: [ "style", "${_mur2}", "left", '785px', { fromValue: '854px'}], position: 108000, duration: 780 },
            { id: "eid557", tween: [ "style", "${_mur2}", "left", '680px', { fromValue: '785px'}], position: 108780, duration: 1220 },
            { id: "eid588", tween: [ "style", "${_mur2}", "left", '593px', { fromValue: '680px'}], position: 110000, duration: 1000 },
            { id: "eid590", tween: [ "style", "${_mur2}", "left", '487px', { fromValue: '593px'}], position: 111000, duration: 1233 },
            { id: "eid531", tween: [ "style", "${_mur2}", "left", '333px', { fromValue: '487px'}], position: 112233, duration: 1767 },
            { id: "eid578", tween: [ "style", "${_mur2}", "left", '246px', { fromValue: '333px'}], position: 114000, duration: 1000 },
            { id: "eid582", tween: [ "style", "${_mur2}", "left", '30px', { fromValue: '246px'}], position: 115000, duration: 2500 },
            { id: "eid583", tween: [ "style", "${_mur2}", "left", '-98px', { fromValue: '30px'}], position: 117500, duration: 1500 },
            { id: "eid584", tween: [ "style", "${_mur2}", "left", '-4950px', { fromValue: '-98px'}], position: 119000, duration: 34671 },
            { id: "eid532", tween: [ "style", "${_mur2}", "left", '-8100px', { fromValue: '-4950px'}], position: 153671, duration: 26329 },
            { id: "eid345", tween: [ "style", "${_vcontainer}", "left", '2097px', { fromValue: '2544px'}], position: 0, duration: 7000 },
            { id: "eid347", tween: [ "style", "${_vcontainer}", "left", '1905px', { fromValue: '2097px'}], position: 7000, duration: 3000 },
            { id: "eid348", tween: [ "style", "${_vcontainer}", "left", '1604px', { fromValue: '1905px'}], position: 10000, duration: 5000 },
            { id: "eid349", tween: [ "style", "${_vcontainer}", "left", '1312px', { fromValue: '1604px'}], position: 15000, duration: 5000 },
            { id: "eid350", tween: [ "style", "${_vcontainer}", "left", '1064px', { fromValue: '1312px'}], position: 20000, duration: 4000 },
            { id: "eid351", tween: [ "style", "${_vcontainer}", "left", '1003px', { fromValue: '1064px'}], position: 24000, duration: 1000 },
            { id: "eid352", tween: [ "style", "${_vcontainer}", "left", '705px', { fromValue: '1003px'}], position: 25000, duration: 5000 },
            { id: "eid353", tween: [ "style", "${_vcontainer}", "left", '-876px', { fromValue: '705px'}], position: 30000, duration: 30000 },
            { id: "eid56", tween: [ "style", "${_presentation}", "left", '-656px', { fromValue: '102px'}], position: 0, duration: 14400 },
            { id: "eid73", tween: [ "style", "${_perso}", "left", '41px', { fromValue: '41px'}], position: 0, duration: 0 },
            { id: "eid68", tween: [ "style", "${_perso}", "left", '65px', { fromValue: '41px'}], position: 22503, duration: 0 },
            { id: "eid241", tween: [ "style", "${_rj45}", "left", '1382px', { fromValue: '7147px'}], position: 0, duration: 71276 },
            { id: "eid339", tween: [ "style", "${_rj45}", "left", '275px', { fromValue: '1382px'}], position: 71276, duration: 23461 },
            { id: "eid497", tween: [ "style", "${_rj45}", "left", '120px', { fromValue: '275px'}], position: 94737, duration: 2763 },
            { id: "eid499", tween: [ "style", "${_rj45}", "left", '70px', { fromValue: '120px'}], position: 97500, duration: 1205 },
            { id: "eid486", tween: [ "style", "${_rj45}", "left", '2px', { fromValue: '70px'}], position: 98705, duration: 1295 },
            { id: "eid488", tween: [ "style", "${_rj45}", "left", '-30px', { fromValue: '2px'}], position: 100000, duration: 936 },
            { id: "eid494", tween: [ "style", "${_rj45}", "left", '-129px', { fromValue: '-30px'}], position: 100936, duration: 1564 },
            { id: "eid489", tween: [ "style", "${_rj45}", "left", '-210px', { fromValue: '-129px'}], position: 102500, duration: 1500 },
            { id: "eid492", tween: [ "style", "${_rj45}", "left", '-364px', { fromValue: '-210px'}], position: 104000, duration: 2055 },
            { id: "eid504", tween: [ "style", "${_rj45}", "left", '-1378px', { fromValue: '-364px'}], position: 106055, duration: 6178 },
            { id: "eid606", tween: [ "style", "${_rj45}", "left", '-1680px', { fromValue: '-1378px'}], position: 112233, duration: 7767 },
            { id: "eid414", tween: [ "style", "${_btn_arr}", "left", '-396px', { fromValue: '1453px'}], position: 0, duration: 30000 },
            { id: "eid610", tween: [ "style", "${_graphisme}", "top", '259px', { fromValue: '259px'}], position: 0, duration: 0 },
            { id: "eid412", tween: [ "style", "${_btn_avnt}", "left", '-116px', { fromValue: '1731px'}], position: 0, duration: 30000 },
            { id: "eid538", tween: [ "style", "${_perso}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid537", tween: [ "style", "${_perso}", "opacity", '0', { fromValue: '1'}], position: 178000, duration: 0 },
            { id: "eid120", tween: [ "style", "${_Mescomptences_}", "left", '-438px', { fromValue: '1024px'}], position: 0, duration: 23000 },
            { id: "eid387", tween: [ "style", "${_rect_com}", "top", '300px', { fromValue: '300px'}], position: 52500, duration: 0 },
            { id: "eid442", tween: [ "style", "${_Text4}", "top", '141px', { fromValue: '199px'}], position: 0, duration: 94000 },
            { id: "eid409", tween: [ "style", "${_graphisme}", "left", '768px', { fromValue: '1507px'}], position: 0, duration: 12000 },
            { id: "eid410", tween: [ "style", "${_graphisme}", "left", '-340px', { fromValue: '768px'}], position: 12000, duration: 18000 },
            { id: "eid16", tween: [ "style", "${_nuit-immeuble5}", "left", '-2721px', { fromValue: '0px'}], position: 0, duration: 45000 },
            { id: "eid441", tween: [ "style", "${_Text4}", "left", '1174px', { fromValue: '6388px'}], position: 0, duration: 94000 },
            { id: "eid464", tween: [ "style", "${_Text4}", "left", '904px', { fromValue: '1174px'}], position: 94000, duration: 4705 },
            { id: "eid569", tween: [ "style", "${_Text4}", "left", '838px', { fromValue: '904px'}], position: 98705, duration: 1295 },
            { id: "eid467", tween: [ "style", "${_Text4}", "left", '802px', { fromValue: '838px'}], position: 100000, duration: 936 },
            { id: "eid571", tween: [ "style", "${_Text4}", "left", '713px', { fromValue: '802px'}], position: 100936, duration: 1564 },
            { id: "eid471", tween: [ "style", "${_Text4}", "left", '632px', { fromValue: '713px'}], position: 102500, duration: 1500 },
            { id: "eid482", tween: [ "style", "${_Text4}", "left", '550px', { fromValue: '632px'}], position: 104000, duration: 1000 },
            { id: "eid561", tween: [ "style", "${_Text4}", "left", '469px', { fromValue: '550px'}], position: 105000, duration: 1055 },
            { id: "eid502", tween: [ "style", "${_Text4}", "left", '385px', { fromValue: '469px'}], position: 106055, duration: 945 },
            { id: "eid599", tween: [ "style", "${_Text4}", "left", '298px', { fromValue: '385px'}], position: 107000, duration: 1000 },
            { id: "eid555", tween: [ "style", "${_Text4}", "left", '38px', { fromValue: '298px'}], position: 108000, duration: 3000 },
            { id: "eid564", tween: [ "style", "${_Text4}", "left", '-80px', { fromValue: '38px'}], position: 111000, duration: 1500 },
            { id: "eid527", tween: [ "style", "${_Text4}", "left", '-230px', { fromValue: '-80px'}], position: 112500, duration: 1500 },
            { id: "eid580", tween: [ "style", "${_Text4}", "left", '-305px', { fromValue: '-230px'}], position: 114000, duration: 1000 },
            { id: "eid568", tween: [ "style", "${_Text4}", "left", '-402px', { fromValue: '-305px'}], position: 115000, duration: 1000 },
            { id: "eid594", tween: [ "style", "${_Text4}", "left", '-720px', { fromValue: '-402px'}], position: 116000, duration: 4000 },
            { id: "eid23", tween: [ "style", "${_poteau}", "left", '-1353px', { fromValue: '1418px'}], position: 0, duration: 45000 },
            { id: "eid550", tween: [ "style", "${_fin}", "left", '1024px', { fromValue: '1365px'}], position: 0, duration: 172000 },
            { id: "eid552", tween: [ "style", "${_fin}", "left", '114px', { fromValue: '1024px'}], position: 172000, duration: 8000 },
            { id: "eid19", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_perso}', [] ], ""], position: 0 },
            { id: "eid250", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_rj45}', [0] ], ""], position: 0 },
            { id: "eid415", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_graphisme}', [] ], ""], position: 0 },
            { id: "eid189", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_rect_com}', [] ], ""], position: 46000 },
            { id: "eid554", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_fin}', [] ], ""], position: 172000 }         ]
      }
   }
},
"personnage": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','157px','168px','auto','auto'],
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)']
   },
   {
      id: 'pos1',
      type: 'image',
      rect: ['0','0','384px','670px','auto','auto'],
      fill: ['rgba(0,0,0,0)','pos1.png','0px','0px']
   },
   {
      id: 'pos2',
      type: 'image',
      rect: ['0','0','503px','550px','auto','auto'],
      fill: ['rgba(0,0,0,0)','pos2.png','0px','0px']
   },
   {
      id: 'pos3',
      type: 'image',
      rect: ['0','0','335px','670px','auto','auto'],
      fill: ['rgba(0,0,0,0)','pos3.png','0px','0px']
   },
   {
      id: 'pos4',
      type: 'image',
      rect: ['0','0','384px','670px','auto','auto'],
      fill: ['rgba(0,0,0,0)','pos4.png','0px','0px']
   },
   {
      id: 'pos5',
      type: 'image',
      rect: ['0','0','503px','550px','auto','auto'],
      fill: ['rgba(0,0,0,0)','pos5.png','0px','0px']
   },
   {
      id: 'pos6',
      type: 'image',
      rect: ['0','0','334px','670px','auto','auto'],
      fill: ['rgba(0,0,0,0)','pos6.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "overflow", 'hidden']
         ],
         "${symbolSelector}": [
            ["style", "height", '168px'],
            ["style", "width", '157px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"perso": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','181px','242px','auto','auto'],
      id: 'Rectangle2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)']
   },
   {
      id: 'perso2',
      type: 'image',
      rect: ['-250px','0','692px','514px','auto','auto'],
      fill: ['rgba(0,0,0,0)','perso.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle2}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "overflow", 'hidden']
         ],
         "${symbolSelector}": [
            ["style", "height", '242px'],
            ["style", "width", '181px']
         ],
         "${_perso2}": [
            ["style", "height", '514px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '692px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1750,
         autoPlay: true,
         timeline: [
            { id: "eid5", tween: [ "style", "${_perso2}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid6", tween: [ "style", "${_perso2}", "left", '-251px', { fromValue: '0px'}], position: 250, duration: 0 },
            { id: "eid7", tween: [ "style", "${_perso2}", "left", '-511px', { fromValue: '-251px'}], position: 500, duration: 0 },
            { id: "eid8", tween: [ "style", "${_perso2}", "left", '-250px', { fromValue: '-511px'}], position: 750, duration: 0 },
            { id: "eid9", tween: [ "style", "${_perso2}", "left", '-511px', { fromValue: '-250px'}], position: 1000, duration: 0 },
            { id: "eid11", tween: [ "style", "${_perso2}", "left", '-256px', { fromValue: '-511px'}], position: 1250, duration: 0 },
            { id: "eid12", tween: [ "style", "${_perso2}", "left", '51px', { fromValue: '-256px'}], position: 1500, duration: 0 },
            { id: "eid13", tween: [ "style", "${_perso2}", "left", '-256px', { fromValue: '20px'}], position: 1750, duration: 0 },
            { id: "eid15", tween: [ "style", "${_perso2}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid10", tween: [ "style", "${_perso2}", "top", '-272px', { fromValue: '0px'}], position: 1000, duration: 0 }         ]
      }
   }
},
"rect_com": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','747px','350px','auto','auto'],
      id: 'rect_com',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)']
   },
   {
      id: 'corps',
      type: 'image',
      rect: ['0','123px','132px','226px','auto','auto'],
      fill: ['rgba(0,0,0,0)','corps.png','0px','0px']
   },
   {
      rect: ['44px','86px','46px','31px','auto','auto'],
      id: 'tete',
      transform: [[0,0],['-21']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','tete.png','0px','0px']
   },
   {
      id: 'corps2',
      type: 'image',
      rect: ['361px','123px','132px','226px','auto','auto'],
      fill: ['rgba(0,0,0,0)','corps2.png','0px','0px']
   },
   {
      rect: ['366px','46px','131px','103px','auto','auto'],
      id: 'tete2',
      transform: [[0,0],[],[],['-0.351','0.374']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','tete2.png','0px','0px']
   },
   {
      rect: ['118px','67px','112px','59px','auto','auto'],
      font: ['arizonia, cursive',25,'rgba(0,0,0,1.00)','normal','none','normal'],
      id: 'Text3',
      text: 'Bla Bla Bla',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['277px','68px','112px','59px','auto','auto'],
      font: ['arizonia, cursive',25,'rgba(0,0,0,1.00)','normal','none','normal'],
      id: 'Text3Copy',
      text: 'Bla Bla Bla',
      align: 'left',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_tete2}": [
            ["style", "top", '44px'],
            ["transform", "scaleY", '0.37444'],
            ["transform", "rotateZ", '-21deg'],
            ["transform", "scaleX", '-0.35143'],
            ["style", "height", '103px'],
            ["style", "left", '363px'],
            ["style", "width", '131px']
         ],
         "${_Text3Copy}": [
            ["style", "top", '68px'],
            ["transform", "rotateZ", '1deg'],
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "font-family", 'arizonia, cursive'],
            ["style", "left", '277px'],
            ["style", "font-size", '25px']
         ],
         "${_tete}": [
            ["style", "top", '86px'],
            ["transform", "rotateZ", '-21deg'],
            ["style", "height", '31px'],
            ["style", "left", '44px'],
            ["style", "width", '46px']
         ],
         "${symbolSelector}": [
            ["style", "height", '350px'],
            ["style", "width", '747px']
         ],
         "${_Text3}": [
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-family", 'arizonia, cursive'],
            ["transform", "rotateZ", '0deg'],
            ["style", "font-size", '25px']
         ],
         "${_corps}": [
            ["style", "top", '123px'],
            ["style", "height", '226px'],
            ["style", "width", '132px']
         ],
         "${_corps2}": [
            ["style", "top", '123px'],
            ["style", "height", '226px'],
            ["style", "left", '361px'],
            ["style", "width", '132px']
         ],
         "${_rect_com}": [
            ["style", "top", '0px'],
            ["style", "height", '350px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '747px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: true,
         timeline: [
            { id: "eid151", tween: [ "transform", "${_Text3}", "rotateZ", '-23deg', { fromValue: '0deg'}], position: 0, duration: 126 },
            { id: "eid152", tween: [ "transform", "${_Text3}", "rotateZ", '1deg', { fromValue: '-23deg'}], position: 126, duration: 122 },
            { id: "eid153", tween: [ "transform", "${_Text3}", "rotateZ", '23deg', { fromValue: '1deg'}], position: 249, duration: 127 },
            { id: "eid154", tween: [ "transform", "${_Text3}", "rotateZ", '-23deg', { fromValue: '0deg'}], position: 376, duration: 126 },
            { id: "eid155", tween: [ "transform", "${_Text3}", "rotateZ", '1deg', { fromValue: '-23deg'}], position: 502, duration: 122 },
            { id: "eid156", tween: [ "transform", "${_Text3}", "rotateZ", '23deg', { fromValue: '1deg'}], position: 624, duration: 127 },
            { id: "eid157", tween: [ "transform", "${_Text3}", "rotateZ", '-23deg', { fromValue: '0deg'}], position: 751, duration: 126 },
            { id: "eid158", tween: [ "transform", "${_Text3}", "rotateZ", '1deg', { fromValue: '-23deg'}], position: 878, duration: 122 },
            { id: "eid146", tween: [ "transform", "${_tete2}", "rotateZ", '-6deg', { fromValue: '-21deg'}], position: 0, duration: 167 },
            { id: "eid147", tween: [ "transform", "${_tete2}", "rotateZ", '8deg', { fromValue: '-6deg'}], position: 167, duration: 167 },
            { id: "eid148", tween: [ "transform", "${_tete2}", "rotateZ", '-8deg', { fromValue: '8deg'}], position: 333, duration: 167 },
            { id: "eid149", tween: [ "transform", "${_tete2}", "rotateZ", '10deg', { fromValue: '-8deg'}], position: 500, duration: 250 },
            { id: "eid150", tween: [ "transform", "${_tete2}", "rotateZ", '-13deg', { fromValue: '10deg'}], position: 750, duration: 250 },
            { id: "eid136", tween: [ "style", "${_tete2}", "top", '39px', { fromValue: '44px'}], position: 0, duration: 250 },
            { id: "eid137", tween: [ "style", "${_tete2}", "top", '41px', { fromValue: '40px'}], position: 250, duration: 167 },
            { id: "eid138", tween: [ "style", "${_tete2}", "top", '40px', { fromValue: '42px'}], position: 417, duration: 83 },
            { id: "eid139", tween: [ "style", "${_tete2}", "top", '47px', { fromValue: '40px'}], position: 500, duration: 127 },
            { id: "eid140", tween: [ "style", "${_tete2}", "top", '41px', { fromValue: '47px'}], position: 627, duration: 123 },
            { id: "eid141", tween: [ "style", "${_tete2}", "top", '46px', { fromValue: '41px'}], position: 750, duration: 250 },
            { id: "eid178", tween: [ "transform", "${_Text3Copy}", "rotateZ", '-23deg', { fromValue: '1deg'}], position: 0, duration: 122 },
            { id: "eid177", tween: [ "transform", "${_Text3Copy}", "rotateZ", '0deg', { fromValue: '-23deg'}], position: 122, duration: 126 },
            { id: "eid176", tween: [ "transform", "${_Text3Copy}", "rotateZ", '1deg', { fromValue: '23deg'}], position: 249, duration: 127 },
            { id: "eid175", tween: [ "transform", "${_Text3Copy}", "rotateZ", '-23deg', { fromValue: '1deg'}], position: 376, duration: 122 },
            { id: "eid174", tween: [ "transform", "${_Text3Copy}", "rotateZ", '0deg', { fromValue: '-23deg'}], position: 498, duration: 126 },
            { id: "eid173", tween: [ "transform", "${_Text3Copy}", "rotateZ", '1deg', { fromValue: '23deg'}], position: 624, duration: 127 },
            { id: "eid172", tween: [ "transform", "${_Text3Copy}", "rotateZ", '-23deg', { fromValue: '1deg'}], position: 751, duration: 122 },
            { id: "eid171", tween: [ "transform", "${_Text3Copy}", "rotateZ", '0deg', { fromValue: '-23deg'}], position: 874, duration: 126 },
            { id: "eid122", tween: [ "style", "${_tete}", "left", '49px', { fromValue: '44px'}], position: 0, duration: 250 },
            { id: "eid127", tween: [ "style", "${_tete}", "left", '48px', { fromValue: '49px'}], position: 250, duration: 250 },
            { id: "eid130", tween: [ "style", "${_tete}", "left", '49px', { fromValue: '48px'}], position: 500, duration: 250 },
            { id: "eid135", tween: [ "style", "${_tete}", "left", '47px', { fromValue: '49px'}], position: 750, duration: 250 },
            { id: "eid123", tween: [ "style", "${_tete}", "top", '82px', { fromValue: '86px'}], position: 0, duration: 250 },
            { id: "eid125", tween: [ "style", "${_tete}", "top", '84px', { fromValue: '82px'}], position: 250, duration: 167 },
            { id: "eid128", tween: [ "style", "${_tete}", "top", '82px', { fromValue: '84px'}], position: 417, duration: 83 },
            { id: "eid129", tween: [ "style", "${_tete}", "top", '89px', { fromValue: '82px'}], position: 500, duration: 127 },
            { id: "eid131", tween: [ "style", "${_tete}", "top", '83px', { fromValue: '89px'}], position: 627, duration: 123 },
            { id: "eid133", tween: [ "style", "${_tete}", "top", '88px', { fromValue: '83px'}], position: 750, duration: 250 },
            { id: "eid142", tween: [ "style", "${_tete2}", "left", '368px', { fromValue: '363px'}], position: 0, duration: 250 },
            { id: "eid143", tween: [ "style", "${_tete2}", "left", '367px', { fromValue: '368px'}], position: 250, duration: 250 },
            { id: "eid144", tween: [ "style", "${_tete2}", "left", '368px', { fromValue: '367px'}], position: 500, duration: 250 },
            { id: "eid145", tween: [ "style", "${_tete2}", "left", '366px', { fromValue: '368px'}], position: 750, duration: 250 },
            { id: "eid121", tween: [ "transform", "${_tete}", "rotateZ", '-6deg', { fromValue: '-21deg'}], position: 0, duration: 167 },
            { id: "eid124", tween: [ "transform", "${_tete}", "rotateZ", '8deg', { fromValue: '-6deg'}], position: 167, duration: 167 },
            { id: "eid126", tween: [ "transform", "${_tete}", "rotateZ", '-8deg', { fromValue: '8deg'}], position: 333, duration: 167 },
            { id: "eid132", tween: [ "transform", "${_tete}", "rotateZ", '10deg', { fromValue: '-8deg'}], position: 500, duration: 250 },
            { id: "eid134", tween: [ "transform", "${_tete}", "rotateZ", '-13deg', { fromValue: '10deg'}], position: 750, duration: 250 }         ]
      }
   }
},
"rj45": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','732px','548px','auto','auto'],
      id: 'Rectangle2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)']
   },
   {
      id: 'rj452',
      type: 'image',
      rect: ['70px','223px','29px','325px','auto','auto'],
      fill: ['rgba(0,0,0,0)','rj45.png','0px','0px']
   },
   {
      id: 'rj452Copy',
      type: 'image',
      rect: ['70px','223px','29px','325px','auto','auto'],
      fill: ['rgba(0,0,0,0)','rj45.png','0px','0px']
   },
   {
      id: 'rj452Copy2',
      type: 'image',
      rect: ['411px','223px','29px','325px','auto','auto'],
      fill: ['rgba(0,0,0,0)','rj45.png','0px','0px']
   },
   {
      type: 'text',
      rect: ['32px','27px','668px','134px','auto','auto'],
      id: 'Text4',
      text: 'Réseau',
      align: 'center',
      font: ['allerta, sans-serif',90,'rgba(0,0,0,1)','normal','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle2}": [
            ["style", "top", '0px'],
            ["style", "height", '548px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '732px']
         ],
         "${_rj452Copy}": [
            ["style", "height", '325px'],
            ["style", "top", '548px'],
            ["style", "left", '237px'],
            ["style", "width", '29px']
         ],
         "${symbolSelector}": [
            ["style", "height", '548px'],
            ["style", "width", '732px']
         ],
         "${_rj452Copy2}": [
            ["style", "top", '548px'],
            ["style", "height", '325px'],
            ["style", "left", '529px'],
            ["style", "width", '29px']
         ],
         "${_rj452}": [
            ["style", "top", '548px'],
            ["style", "height", '325px'],
            ["style", "left", '186px'],
            ["style", "width", '29px']
         ],
         "${_Text4}": [
            ["style", "top", '548px'],
            ["style", "font-family", 'allerta, sans-serif']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 626,
         autoPlay: true,
         timeline: [
            { id: "eid358", tween: [ "style", "${_rj452Copy}", "left", '355px', { fromValue: '237px'}], position: 0, duration: 0 },
            { id: "eid357", tween: [ "style", "${_Text4}", "top", '0px', { fromValue: '548px'}], position: 0, duration: 500 },
            { id: "eid360", tween: [ "style", "${_rj452Copy2}", "left", '529px', { fromValue: '529px'}], position: 0, duration: 0 },
            { id: "eid211", tween: [ "style", "${_rj452Copy2}", "top", '223px', { fromValue: '548px'}], position: 0, duration: 500 },
            { id: "eid212", tween: [ "style", "${_rj452Copy2}", "top", '249px', { fromValue: '223px'}], position: 500, duration: 126 },
            { id: "eid359", tween: [ "style", "${_rj452}", "left", '186px', { fromValue: '186px'}], position: 0, duration: 0 },
            { id: "eid208", tween: [ "style", "${_rj452Copy}", "top", '223px', { fromValue: '548px'}], position: 0, duration: 500 },
            { id: "eid209", tween: [ "style", "${_rj452Copy}", "top", '249px', { fromValue: '223px'}], position: 500, duration: 126 },
            { id: "eid205", tween: [ "style", "${_rj452}", "top", '223px', { fromValue: '548px'}], position: 0, duration: 500 },
            { id: "eid206", tween: [ "style", "${_rj452}", "top", '249px', { fromValue: '223px'}], position: 500, duration: 126 }         ]
      }
   }
},
"Panda": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'rect',
      id: 'Rectangle3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['0px','3px','684px','463px','auto','auto'],
      fill: ['rgba(192,192,192,1)']
   },
   {
      id: 'panda',
      type: 'image',
      rect: ['256px','226px','158px','239px','auto','auto'],
      fill: ['rgba(0,0,0,0)','panda.png','0px','0px']
   },
   {
      id: 'dialog',
      type: 'rect',
      rect: ['0','0','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'dialog',
      symbolName: 'dialog'
   }   ]
   },
   states: {
      "Base State": {
         "${_dialog}": [
            ["style", "opacity", '0']
         ],
         "${_Rectangle3}": [
            ["style", "top", '3px'],
            ["style", "height", '463px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '684px']
         ],
         "${_panda}": [
            ["style", "top", '226px'],
            ["style", "height", '239px'],
            ["style", "left", '256px'],
            ["style", "width", '158px']
         ],
         "${symbolSelector}": [
            ["style", "height", '463px'],
            ["style", "width", '684px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 500,
         autoPlay: true,
         timeline: [
            { id: "eid366", tween: [ "style", "${_dialog}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid367", tween: [ "style", "${_dialog}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 0 },
            { id: "eid389", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_dialog}', [] ], ""], position: 0 }         ]
      }
   }
},
"dialog": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','304px','239px','auto','auto'],
      id: 'Rectangle4',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)']
   },
   {
      id: 'bulle2',
      type: 'image',
      rect: ['0','0','284px','239px','auto','auto'],
      fill: ['rgba(0,0,0,0)','bulle.png','0px','0px']
   },
   {
      rect: ['0px','0px','284px','144px','auto','auto'],
      font: ['Georgia, \'Times New Roman\', Times, serif',29,'rgba(0,0,0,1)','normal','none','normal'],
      id: 'Text6',
      text: 'Mais j\'aime aussi tous ce qui est du jeu vidéo, du football et de l\'humour.',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_bulle2}": [
            ["style", "height", '239px'],
            ["style", "width", '284px']
         ],
         "${_Rectangle4}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '239px'],
            ["style", "width", '304px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"graphisme": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','234px','216px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'ellipse',
      fill: ['rgba(192,192,192,1)']
   },
   {
      id: 'affichelego2',
      type: 'image',
      rect: ['0','0','234px','182px','auto','auto'],
      fill: ['rgba(0,0,0,0)','affichelego2.png','0px','0px']
   },
   {
      id: 'doodle',
      type: 'image',
      rect: ['2px','33px','231px','116px','auto','auto'],
      fill: ['rgba(0,0,0,0)','doodle.png','0px','0px']
   },
   {
      id: 'loupgarou',
      type: 'image',
      rect: ['49px','5px','153px','216px','auto','auto'],
      fill: ['rgba(0,0,0,0)','loupgarou.png','0px','0px']
   },
   {
      id: 'Sans_titre',
      type: 'image',
      rect: ['0','0','234px','221px','auto','auto'],
      fill: ['rgba(0,0,0,0)','Sans%20titre.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_affichelego2}": [
            ["style", "height", '182px'],
            ["style", "left", '-234px'],
            ["style", "width", '234px']
         ],
         "${_Ellipse}": [
            ["style", "top", '0px'],
            ["style", "height", '216px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '234px']
         ],
         "${symbolSelector}": [
            ["style", "height", '216px'],
            ["style", "width", '234px']
         ],
         "${_loupgarou}": [
            ["style", "top", '3px'],
            ["style", "height", '216px'],
            ["style", "left", '-159px'],
            ["style", "width", '153px']
         ],
         "${_Sans_titre}": [
            ["style", "top", '1px'],
            ["style", "height", '221px'],
            ["style", "left", '-236px'],
            ["style", "width", '234px']
         ],
         "${_doodle}": [
            ["style", "top", '33px'],
            ["style", "height", '116px'],
            ["style", "left", '-235px'],
            ["style", "width", '231px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 4000,
         autoPlay: true,
         timeline: [
            { id: "eid392", tween: [ "style", "${_Sans_titre}", "left", '0px', { fromValue: '-236px'}], position: 0, duration: 500 },
            { id: "eid394", tween: [ "style", "${_Sans_titre}", "left", '239px', { fromValue: '0px'}], position: 500, duration: 500 },
            { id: "eid396", tween: [ "style", "${_loupgarou}", "left", '42px', { fromValue: '-159px'}], position: 1000, duration: 500 },
            { id: "eid397", tween: [ "style", "${_loupgarou}", "left", '239px', { fromValue: '42px'}], position: 1500, duration: 500 },
            { id: "eid406", tween: [ "style", "${_affichelego2}", "left", '0px', { fromValue: '-234px'}], position: 3000, duration: 500 },
            { id: "eid407", tween: [ "style", "${_affichelego2}", "left", '239px', { fromValue: '0px'}], position: 3500, duration: 500 },
            { id: "eid401", tween: [ "style", "${_doodle}", "left", '2px', { fromValue: '-235px'}], position: 2000, duration: 500 },
            { id: "eid403", tween: [ "style", "${_doodle}", "left", '234px', { fromValue: '2px'}], position: 2500, duration: 500 }         ]
      }
   }
},
"algo": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','464px','412px','auto','auto'],
      opacity: 0,
      id: 'Rectangle2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(0,0,0,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle2}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '412px'],
            ["style", "width", '464px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"fin": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','732px','275px','auto','auto'],
      id: 'Rectangle2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(171,171,171,1)']
   },
   {
      font: ['allerta, sans-serif',70,'rgba(255,255,255,1)','normal','none','normal'],
      type: 'text',
      id: 'Text3',
      text: 'Bravo<br>Vous avez gagné !',
      align: 'center',
      rect: ['0px','0px','732px','275px','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text3}": [
            ["color", "color", 'rgba(255,255,255,1)']
         ],
         "${_Rectangle2}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '275px'],
            ["style", "width", '732px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3500,
         autoPlay: true,
         timeline: [
            { id: "eid539", tween: [ "color", "${_Text3}", "color", 'rgba(189,4,4,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 0, duration: 500 },
            { id: "eid540", tween: [ "color", "${_Text3}", "color", 'rgba(178,209,7,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(189,4,4,1)'}], position: 500, duration: 500 },
            { id: "eid541", tween: [ "color", "${_Text3}", "color", 'rgba(16,171,45,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(178,209,7,1)'}], position: 1000, duration: 500 },
            { id: "eid542", tween: [ "color", "${_Text3}", "color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(16,171,45,1)'}], position: 1500, duration: 500 },
            { id: "eid543", tween: [ "color", "${_Text3}", "color", 'rgba(4,4,140,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 2000, duration: 500 },
            { id: "eid544", tween: [ "color", "${_Text3}", "color", 'rgba(188,113,2,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(4,4,140,1)'}], position: 2500, duration: 500 },
            { id: "eid545", tween: [ "color", "${_Text3}", "color", 'rgba(147,1,188,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(188,113,2,1)'}], position: 3000, duration: 500 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-14377118");
