/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
   fonts['anonymous-pro, sans-serif']='<script src=\"http://use.edgefonts.net/anonymous-pro:n4,i4,n7,i7:all.js\"></script>';
   fonts['amaranth, sans-serif']='<script src=\"http://use.edgefonts.net/amaranth:n7,i4,i7,n4:all.js\"></script>';


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
            id:'table',
            type:'rect',
            rect:['0px','478px','703px','187px','auto','auto'],
            fill:["rgba(134,134,134,0.65)"],
            stroke:[0,"rgb(0, 0, 0)","solid"]
         },
         {
            id:'sur_table',
            type:'rect',
            rect:['12px','492px','674px','125px','auto','auto'],
            fill:["rgba(134,134,134,0.6484)"],
            stroke:[0,"rgb(0, 0, 0)","solid"]
         },
         {
            id:'Rectangle16',
            type:'rect',
            rect:['0px','0px','700px','478px','auto','auto'],
            fill:["rgba(0,0,0,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","solid"]
         },
         {
            id:'Salle',
            type:'image',
            rect:['12px','18px','674px','449px','auto','auto'],
            fill:["rgba(0,0,0,0)",'SALLE.svg','0px','0px']
         },
         {
            id:'Titre',
            type:'rect',
            rect:['143','55','auto','auto','auto','auto']
         },
         {
            id:'corps',
            type:'rect',
            rect:['126','67','auto','auto','auto','auto'],
            boxShadow:["",0,0,0,0,"rgba(0,0,0,0)"]
         },
         {
            id:'accessoire',
            type:'rect',
            rect:['249px','117px','auto','auto','auto','auto']
         },
         {
            id:'chap',
            type:'rect',
            rect:['274','50','auto','auto','auto','auto']
         },
         {
            id:'moustache',
            type:'rect',
            rect:['291px','235px','auto','auto','auto','auto']
         },
         {
            id:'Btn_apChap',
            type:'image',
            rect:['143px','530px','75px','75px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",'bouton-2.svg','0px','0px'],
            transform:[]
         },
         {
            id:'Btn_avChap',
            type:'image',
            rect:['38px','529px','75px','75px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",'bouton-2.svg','0px','0px'],
            transform:[[],[],[],['-1']]
         },
         {
            id:'Btn_avMoust',
            type:'image',
            rect:['256px','531px','75px','75px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",'bouton-2.svg','0px','0px'],
            transform:[[],[],[],['-1']]
         },
         {
            id:'Btn_apMoust',
            type:'image',
            rect:['371px','530px','75px','75px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",'bouton-2.svg','0px','0px']
         },
         {
            id:'Btn_apAccess',
            type:'image',
            rect:['593px','531px','75px','75px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",'bouton-2.svg','0px','0px']
         },
         {
            id:'Btn_avAccess',
            type:'image',
            rect:['483px','531px','75px','75px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",'bouton-2.svg','0px','0px'],
            transform:[[],[],[],['-1']]
         },
         {
            id:'oeil_gauche',
            type:'rect',
            rect:['313','213','auto','auto','auto','auto']
         },
         {
            id:'oeil_droit',
            type:'rect',
            rect:['388','213','auto','auto','auto','auto']
         },
         {
            id:'lummiere',
            type:'image',
            rect:['27px','-31px','655px','558px','auto','auto'],
            opacity:0.5,
            fill:["rgba(0,0,0,0)",'lummi%C3%A8re.svg','0px','0px']
         },
         {
            id:'lampe',
            type:'image',
            rect:['100px','-21px','504px','483px','auto','auto'],
            fill:["rgba(0,0,0,0)",'lampe.svg','0px','0px']
         },
         {
            id:'Text6',
            type:'text',
            rect:['64px','502px','121px','19px','auto','auto'],
            text:"Chapeau<br>",
            align:"center",
            font:['anonymous-pro, sans-serif',18,"rgba(255,255,255,1)","normal","none","normal"]
         },
         {
            id:'Text10',
            type:'text',
            rect:['528px','499px','86px','19px','auto','auto'],
            text:"Accessoire",
            align:"center",
            font:['anonymous-pro, sans-serif',18,"rgba(255,255,255,1)","normal","none","normal"]
         },
         {
            id:'Text9',
            type:'text',
            rect:['303px','499px','98px','19px','auto','auto'],
            text:"Moustache",
            align:"center",
            font:['anonymous-pro, sans-serif',18,"rgba(255,255,255,1)","normal","none","normal"]
         },
         {
            id:'araigne',
            type:'rect',
            rect:['461','21','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'reflet',
            type:'rect',
            rect:['-49px','-38px','801px','238px','auto','auto'],
            opacity:0.12337662376367,
            fill:["rgba(255,255,255,1.00)",[270,[['rgba(247,245,249,0.96)',0],['rgba(246,244,249,0.00)',100]]]],
            stroke:[0,"rgb(0, 0, 0)","none"],
            transform:[[],['6']]
         },
         {
            id:'etiquette',
            type:'rect',
            rect:['43px','78px','98px','33px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(205,44,44,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            transform:[[],['-29']],
            c:[
            {
               id:'nom',
               type:'text',
               rect:['1px','6px','95px','20px','auto','auto'],
               overflow:'hidden',
               text:"Patient n°42<br>",
               align:"center",
               font:['Arial, Helvetica, sans-serif',15,"rgba(255,255,255,1)","normal","none","normal"],
               transform:[]
            }]
         },
         {
            id:'Rectangle2',
            type:'rect',
            rect:['0px','0px','12px','174px','auto','auto'],
            fill:["rgba(0,0,0,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'Rectangle3',
            type:'rect',
            rect:['0px','0px','700px','18px','auto','auto'],
            fill:["rgba(0,0,0,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'Rectangle4',
            type:'rect',
            rect:['686px','0px','14px','256px','auto','auto'],
            fill:["rgba(0,0,0,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'oeil_fermeture_g',
            type:'rect',
            rect:['294','183','auto','auto','auto','auto']
         },
         {
            id:'oeil_fermeture_d',
            type:'rect',
            rect:['294','183','auto','auto','auto','auto']
         },
         {
            id:'jour_nuit',
            type:'rect',
            rect:['0','0','auto','auto','auto','auto']
         },
         {
            id:'bouton2',
            type:'image',
            rect:['-8px','456px','54px','54px','auto','auto'],
            fill:["rgba(0,0,0,0)",'bouton.svg','0px','0px']
         },
         {
            id:'bouton',
            type:'image',
            rect:['652px','456px','54px','54px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",'bouton.svg','0px','0px']
         },
         {
            id:'attention',
            type:'rect',
            rect:['12','452','auto','auto','auto','auto']
         },
         {
            id:'btn-araigne',
            type:'ellipse',
            rect:['503px','44px','36px','43px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(0,0,0,0.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'Btn_etiquette',
            type:'rect',
            rect:['41px','101px','54px','33px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(205,44,44,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'btn_oeil_g',
            type:'rect',
            rect:['294px','186px','71px','65px','auto','auto'],
            fill:["rgba(0,0,0,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'btn_oeil_d',
            type:'rect',
            rect:['367px','183px','71px','65px','auto','auto'],
            fill:["rgba(0,0,0,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'btn_couleur',
            type:'rect',
            rect:['12px','624px','674px','33px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(134,134,134,0.6445)"],
            stroke:[0,"rgb(0, 0, 0)","solid"]
         },
         {
            id:'btn_relunch',
            type:'rect',
            rect:['0px','456px','41px','39px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'Bulle_penser',
            type:'rect',
            rect:['170','18','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'jour_nuit',
            symbolName:'jour_nuit'
         },
         {
            id:'accessoire',
            symbolName:'accessoire'
         },
         {
            id:'Bulle_penser',
            symbolName:'Bulle_penser'
         },
         {
            id:'attention',
            symbolName:'attention'
         },
         {
            id:'oeil_fermeture_d',
            symbolName:'oeil_fermeture'
         },
         {
            id:'oeil_fermeture_g',
            symbolName:'oeil_fermeture'
         },
         {
            id:'araigne',
            symbolName:'araigne'
         },
         {
            id:'corps',
            symbolName:'corps'
         },
         {
            id:'oeil_droit',
            symbolName:'oeil_droit'
         },
         {
            id:'moustache',
            symbolName:'moustache'
         },
         {
            id:'oeil_gauche',
            symbolName:'oeil'
         },
         {
            id:'chap',
            symbolName:'chap'
         },
         {
            id:'Titre',
            symbolName:'Titre'
         }
         ]
      },
   states: {
      "Base State": {
         "${_Rectangle2}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '0px'],
            ["style", "width", '12px']
         ],
         "${_Rectangle16}": [
            ["style", "height", '478px'],
            ["color", "background-color", 'rgba(0,0,0,1.00)']
         ],
         "${_btn-araigne}": [
            ["style", "top", '44px'],
            ["color", "background-color", 'rgba(0,0,0,0.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '43px']
         ],
         "${_lampe}": [
            ["style", "height", '483px'],
            ["style", "top", '-21px'],
            ["style", "left", '100px'],
            ["style", "width", '504px']
         ],
         "${_Rectangle4}": [
            ["style", "width", '14px']
         ],
         "${_etiquette}": [
            ["color", "background-color", 'rgba(205,44,44,1.00)'],
            ["style", "cursor", 'pointer'],
            ["transform", "rotateZ", '-29deg']
         ],
         "${_btn_oeil_d}": [
            ["style", "top", '183px'],
            ["style", "height", '65px'],
            ["style", "opacity", '0'],
            ["style", "left", '367px'],
            ["style", "width", '71px']
         ],
         "${_Salle}": [
            ["style", "top", '18px'],
            ["style", "height", '449px'],
            ["style", "left", '12px'],
            ["style", "width", '674px']
         ],
         "${_oeil_fermeture_d}": [
            ["style", "left", '367px']
         ],
         "${_Text10}": [
            ["style", "left", '528px'],
            ["style", "top", '499px']
         ],
         "${_accessoire}": [
            ["style", "left", '249px'],
            ["style", "top", '117px']
         ],
         "${_Rectangle3}": [
            ["style", "height", '18px']
         ],
         "${_nom}": [
            ["style", "top", '6px'],
            ["style", "width", '95px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '20px'],
            ["style", "overflow", 'hidden'],
            ["style", "left", '1px'],
            ["style", "font-size", '15px']
         ],
         "${_bouton2}": [
            ["style", "height", '54px'],
            ["style", "top", '456px'],
            ["style", "left", '-8px'],
            ["style", "width", '54px']
         ],
         "${_Text9}": [
            ["style", "top", '499px'],
            ["style", "left", '303px'],
            ["style", "font-size", '18px']
         ],
         "${_reflet}": [
            ["style", "top", '-38px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["gradient", "background-image", [270,[['rgba(247,245,249,0.96)',0],['rgba(246,244,249,0.00)',100]]]],
            ["transform", "rotateZ", '6deg'],
            ["style", "height", '238px'],
            ["style", "opacity", '0.12337662376367'],
            ["style", "left", '-49px'],
            ["style", "width", '801px']
         ],
         "${_Btn_avAccess}": [
            ["style", "top", '531px'],
            ["transform", "scaleX", '-1'],
            ["style", "height", '75px'],
            ["style", "left", '483px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '75px']
         ],
         "${_corps}": [
            ["transform", "scaleX", '1.01739'],
            ["style", "left", '130px'],
            ["style", "top", '69px']
         ],
         "${_Btn_avMoust}": [
            ["style", "top", '531px'],
            ["transform", "scaleX", '-1'],
            ["style", "height", '75px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '256px'],
            ["style", "width", '75px']
         ],
         "${_araigne}": [
            ["style", "top", '0px'],
            ["style", "left", '459px'],
            ["style", "cursor", 'pointer']
         ],
         "${_Btn_apChap}": [
            ["style", "top", '530px'],
            ["style", "height", '75px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '143px'],
            ["style", "width", '75px']
         ],
         "${_chap}": [
            ["style", "left", '270px'],
            ["style", "top", '49px']
         ],
         "${_table}": [
            ["color", "background-color", 'rgba(134,134,134,0.65)'],
            ["style", "height", '187px'],
            ["style", "border-style", 'solid'],
            ["style", "top", '478px'],
            ["style", "width", '703px']
         ],
         "${_sur_table}": [
            ["style", "top", '492px'],
            ["style", "height", '125px'],
            ["style", "left", '12px'],
            ["style", "width", '674px']
         ],
         "${_lummiere}": [
            ["style", "top", '-31px'],
            ["style", "height", '558px'],
            ["style", "opacity", '0.5'],
            ["style", "left", '27px'],
            ["style", "width", '655px']
         ],
         "${_Btn_avChap}": [
            ["style", "top", '529px'],
            ["transform", "scaleX", '-1'],
            ["style", "height", '75px'],
            ["style", "left", '38px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '75px']
         ],
         "${_moustache}": [
            ["style", "left", '291px'],
            ["style", "top", '235px']
         ],
         "${_Btn_etiquette}": [
            ["style", "top", '68px'],
            ["style", "height", '54px'],
            ["style", "cursor", 'pointer'],
            ["transform", "rotateZ", '-28deg'],
            ["transform", "scaleX", '2.94124'],
            ["style", "opacity", '0'],
            ["style", "left", '73px'],
            ["style", "width", '37px']
         ],
         "${_Btn_apAccess}": [
            ["style", "top", '531px'],
            ["style", "height", '75px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '593px'],
            ["style", "width", '75px']
         ],
         "${_attention}": [
            ["style", "top", '454px'],
            ["transform", "scaleY", '1.07361']
         ],
         "${_Btn_apMoust}": [
            ["style", "top", '530px'],
            ["style", "height", '75px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '371px'],
            ["style", "width", '75px']
         ],
         "${_Text6}": [
            ["style", "top", '502px'],
            ["style", "height", '19px'],
            ["style", "font-family", 'anonymous-pro, sans-serif'],
            ["style", "left", '64px'],
            ["style", "font-size", '18px']
         ],
         "${_Text}": [
            ["style", "text-align", '']
         ],
         "${_bouton}": [
            ["style", "top", '456px'],
            ["style", "height", '54px'],
            ["style", "left", '652px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '54px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '700px'],
            ["style", "height", '775px'],
            ["style", "overflow", 'hidden']
         ],
         "${_btn_relunch}": [
            ["style", "top", '456px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '39px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '41px']
         ],
         "${_btn_couleur}": [
            ["style", "cursor", 'pointer'],
            ["style", "opacity", '0']
         ],
         "${_btn_oeil_g}": [
            ["style", "top", '186px'],
            ["style", "height", '65px'],
            ["style", "opacity", '0'],
            ["style", "left", '294px'],
            ["style", "width", '71px']
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
            { id: "eid303", tween: [ "style", "${_chap}", "left", '270px', { fromValue: '270px'}], position: 0, duration: 0 },
            { id: "eid304", tween: [ "style", "${_chap}", "top", '49px', { fromValue: '49px'}], position: 0, duration: 0 },
            { id: "eid491", tween: [ "style", "${_corps}", "top", '69px', { fromValue: '69px'}], position: 0, duration: 0 },
            { id: "eid103", tween: [ "transform", "${_corps}", "scaleX", '1.01739', { fromValue: '1.01739'}], position: 0, duration: 0 },
            { id: "eid104", tween: [ "style", "${_corps}", "left", '130px', { fromValue: '130px'}], position: 0, duration: 0 },
            { id: "eid102", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_chap}', [] ], ""], position: 0 },
            { id: "eid233", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_accessoire}', [] ], ""], position: 0 },
            { id: "eid445", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_attention}', [] ], ""], position: 0 },
            { id: "eid471", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_oeil_fermeture_g}', [] ], ""], position: 0 },
            { id: "eid431", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_araigne}', [] ], ""], position: 0 },
            { id: "eid478", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_Titre}', [] ], ""], position: 0 },
            { id: "eid354", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_oeil_droit}', [] ], ""], position: 0 },
            { id: "eid353", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_oeil_gauche}', [] ], ""], position: 0 },
            { id: "eid477", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_oeil_fermeture_d}', [] ], ""], position: 0 },
            { id: "eid425", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_jour_nuit}', [] ], ""], position: 0 },
            { id: "eid170", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_moustache}', [] ], ""], position: 0 },
            { id: "eid501", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_Bulle_penser}', [] ], ""], position: 0 }         ]
      }
   }
},
"chapeau": {
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
      rect: ['11px','0px','188px','108px','auto','auto'],
      id: 'Rectangle2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(38,132,150,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle2}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '11px'],
            ["style", "height", '108px']
         ],
         "${symbolSelector}": [
            ["style", "height", '108px'],
            ["style", "width", '188px']
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
"corps": {
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
      id: 'personnage22',
      type: 'image',
      rect: ['11px','7px','426px','426px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/personnage22.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_personnage22}": [
            ["style", "top", '7px'],
            ["style", "left", '11px']
         ],
         "${symbolSelector}": [
            ["style", "height", '460px'],
            ["style", "width", '460px']
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
"chap": {
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
      rect: ['0px','0px','182px','114px','auto','auto'],
      id: 'Rectangle3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(38,132,150,1)']
   },
   {
      id: 'chapeau2',
      type: 'image',
      rect: ['-7px','-26px','196px','196px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/chapeau.svg','0px','0px']
   },
   {
      id: 'chapeau22',
      type: 'image',
      rect: ['-14px','-53px','210px','210px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/chapeau2.svg','0px','0px']
   },
   {
      id: 'chapeau3',
      type: 'image',
      rect: ['-13px','-46px','210px','210px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/chapeau3.svg','0px','0px']
   },
   {
      id: 'chapeau4',
      type: 'image',
      rect: ['-13px','-40px','210px','210px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/chapeau4.svg','0px','0px']
   },
   {
      id: 'chapeau5',
      type: 'image',
      rect: ['-13px','-48px','210px','210px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/chapeau5.svg','0px','0px']
   },
   {
      id: 'sombrero',
      type: 'image',
      rect: ['-25px','-47px','234px','234px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/sombrero.svg','0px','0px']
   },
   {
      id: 'bret',
      type: 'image',
      rect: ['21px','-19px','196px','196px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/b%C3%A9ret.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_chapeau3}": [
            ["style", "top", '-46px'],
            ["style", "height", '210px'],
            ["style", "opacity", '0'],
            ["style", "left", '-210px'],
            ["style", "width", '210px']
         ],
         "${_chapeau4}": [
            ["style", "top", '-46px'],
            ["style", "height", '210px'],
            ["style", "opacity", '0'],
            ["style", "left", '-210px'],
            ["style", "width", '210px']
         ],
         "${_bret}": [
            ["style", "top", '-9px'],
            ["style", "height", '196px'],
            ["style", "opacity", '0'],
            ["style", "left", '-196px'],
            ["style", "width", '196px']
         ],
         "${_chapeau5}": [
            ["style", "top", '-53px'],
            ["style", "height", '210px'],
            ["style", "opacity", '0'],
            ["style", "left", '-210px'],
            ["style", "width", '210px']
         ],
         "${_Rectangle3}": [
            ["style", "top", '0px'],
            ["style", "height", '114px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '182px']
         ],
         "${symbolSelector}": [
            ["style", "height", '114px'],
            ["style", "width", '182px']
         ],
         "${_sombrero}": [
            ["style", "top", '-48px'],
            ["style", "height", '234px'],
            ["style", "opacity", '0'],
            ["style", "left", '-234px'],
            ["style", "width", '234px']
         ],
         "${_chapeau2}": [
            ["style", "top", '-29px'],
            ["style", "height", '196px'],
            ["style", "opacity", '0'],
            ["style", "left", '-196px'],
            ["style", "width", '196px']
         ],
         "${_chapeau22}": [
            ["style", "top", '-48px'],
            ["style", "height", '210px'],
            ["style", "opacity", '0'],
            ["style", "left", '-210px'],
            ["style", "width", '210px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 7000,
         autoPlay: true,
         timeline: [
            { id: "eid99", tween: [ "style", "${_chapeau2}", "top", '-29px', { fromValue: '-29px'}], position: 6000, duration: 0 },
            { id: "eid100", tween: [ "style", "${_chapeau2}", "top", '-29px', { fromValue: '-29px'}], position: 6500, duration: 0 },
            { id: "eid101", tween: [ "style", "${_chapeau2}", "top", '-29px', { fromValue: '-29px'}], position: 7000, duration: 0 },
            { id: "eid59", tween: [ "style", "${_chapeau4}", "opacity", '1', { fromValue: '0'}], position: 3000, duration: 500 },
            { id: "eid60", tween: [ "style", "${_chapeau4}", "opacity", '0', { fromValue: '1'}], position: 3500, duration: 500 },
            { id: "eid95", tween: [ "style", "${_chapeau4}", "top", '-46px', { fromValue: '-46px'}], position: 3000, duration: 0 },
            { id: "eid96", tween: [ "style", "${_chapeau4}", "top", '-46px', { fromValue: '-46px'}], position: 3500, duration: 0 },
            { id: "eid97", tween: [ "style", "${_chapeau4}", "top", '-46px', { fromValue: '-46px'}], position: 4000, duration: 0 },
            { id: "eid47", tween: [ "style", "${_sombrero}", "left", '-25px', { fromValue: '-234px'}], position: 1000, duration: 500 },
            { id: "eid50", tween: [ "style", "${_sombrero}", "left", '182px', { fromValue: '-25px'}], position: 1500, duration: 500 },
            { id: "eid73", tween: [ "style", "${_chapeau22}", "left", '-14px', { fromValue: '-210px'}], position: 5000, duration: 500 },
            { id: "eid74", tween: [ "style", "${_chapeau22}", "left", '182px', { fromValue: '-14px'}], position: 5500, duration: 500 },
            { id: "eid79", tween: [ "style", "${_chapeau2}", "left", '-7px', { fromValue: '-196px'}], position: 6000, duration: 500 },
            { id: "eid80", tween: [ "style", "${_chapeau2}", "left", '182px', { fromValue: '-7px'}], position: 6500, duration: 500 },
            { id: "eid55", tween: [ "style", "${_chapeau5}", "left", '-14px', { fromValue: '-210px'}], position: 2000, duration: 500 },
            { id: "eid56", tween: [ "style", "${_chapeau5}", "left", '182px', { fromValue: '-14px'}], position: 2500, duration: 500 },
            { id: "eid24", tween: [ "style", "${_sombrero}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500 },
            { id: "eid34", tween: [ "style", "${_sombrero}", "opacity", '0', { fromValue: '1'}], position: 1500, duration: 500 },
            { id: "eid26", tween: [ "style", "${_bret}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid31", tween: [ "style", "${_bret}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 500 },
            { id: "eid71", tween: [ "style", "${_chapeau22}", "opacity", '1', { fromValue: '0'}], position: 5000, duration: 500 },
            { id: "eid72", tween: [ "style", "${_chapeau22}", "opacity", '0', { fromValue: '1'}], position: 5500, duration: 500 },
            { id: "eid69", tween: [ "style", "${_chapeau22}", "top", '-48px', { fromValue: '-48px'}], position: 5000, duration: 500 },
            { id: "eid70", tween: [ "style", "${_chapeau22}", "top", '-48px', { fromValue: '-48px'}], position: 5500, duration: 500 },
            { id: "eid61", tween: [ "style", "${_chapeau4}", "left", '-14px', { fromValue: '-210px'}], position: 3000, duration: 500 },
            { id: "eid62", tween: [ "style", "${_chapeau4}", "left", '182px', { fromValue: '-14px'}], position: 3500, duration: 500 },
            { id: "eid41", tween: [ "style", "${_bret}", "left", '27px', { fromValue: '-196px'}], position: 0, duration: 500 },
            { id: "eid43", tween: [ "style", "${_bret}", "left", '189px', { fromValue: '27px'}], position: 500, duration: 500 },
            { id: "eid48", tween: [ "style", "${_sombrero}", "top", '-46px', { fromValue: '-48px'}], position: 1000, duration: 500 },
            { id: "eid49", tween: [ "style", "${_sombrero}", "top", '-48px', { fromValue: '-46px'}], position: 1500, duration: 500 },
            { id: "eid42", tween: [ "style", "${_bret}", "top", '-15px', { fromValue: '-9px'}], position: 0, duration: 500 },
            { id: "eid44", tween: [ "style", "${_bret}", "top", '-17px', { fromValue: '-15px'}], position: 500, duration: 500 },
            { id: "eid67", tween: [ "style", "${_chapeau3}", "left", '-14px', { fromValue: '-210px'}], position: 4000, duration: 500 },
            { id: "eid68", tween: [ "style", "${_chapeau3}", "left", '182px', { fromValue: '-14px'}], position: 4500, duration: 500 },
            { id: "eid53", tween: [ "style", "${_chapeau5}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 500 },
            { id: "eid54", tween: [ "style", "${_chapeau5}", "opacity", '0', { fromValue: '1'}], position: 2500, duration: 500 },
            { id: "eid77", tween: [ "style", "${_chapeau2}", "opacity", '1', { fromValue: '0'}], position: 6000, duration: 500 },
            { id: "eid78", tween: [ "style", "${_chapeau2}", "opacity", '0', { fromValue: '1'}], position: 6500, duration: 500 },
            { id: "eid51", tween: [ "style", "${_chapeau5}", "top", '-48px', { fromValue: '-53px'}], position: 2000, duration: 500 },
            { id: "eid52", tween: [ "style", "${_chapeau5}", "top", '-48px', { fromValue: '-48px'}], position: 2500, duration: 500 },
            { id: "eid65", tween: [ "style", "${_chapeau3}", "opacity", '1', { fromValue: '0'}], position: 4000, duration: 500 },
            { id: "eid66", tween: [ "style", "${_chapeau3}", "opacity", '0', { fromValue: '1'}], position: 4500, duration: 500 },
            { id: "eid63", tween: [ "style", "${_chapeau3}", "top", '-48px', { fromValue: '-46px'}], position: 4000, duration: 500 },
            { id: "eid64", tween: [ "style", "${_chapeau3}", "top", '-46px', { fromValue: '-48px'}], position: 4500, duration: 500 }         ]
      }
   }
},
"moustache": {
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
      id: 'Rectangle6',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['0px','0px','147px','91px','auto','auto'],
      fill: ['rgba(14,14,14,1)']
   },
   {
      id: 'moustache1',
      type: 'image',
      rect: ['-8px','-65px','168px','168px','auto','auto'],
      fill: ['rgba(0,0,0,0)','moustache1.svg','0px','0px']
   },
   {
      id: 'moustache2',
      type: 'image',
      rect: ['-17px','-73px','189px','189px','auto','auto'],
      fill: ['rgba(0,0,0,0)','moustache2.svg','0px','0px']
   },
   {
      id: 'moustache3',
      type: 'image',
      rect: ['-16px','-43px','189px','189px','auto','auto'],
      fill: ['rgba(0,0,0,0)','moustache3.svg','0px','0px']
   },
   {
      id: 'moustache4',
      type: 'image',
      rect: ['-23px','-65px','189px','189px','auto','auto'],
      fill: ['rgba(0,0,0,0)','moustache4.svg','0px','0px']
   },
   {
      id: 'moustache5',
      type: 'image',
      rect: ['-4px','-73px','160px','160px','auto','auto'],
      fill: ['rgba(0,0,0,0)','moustache5.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_moustache4}": [
            ["style", "top", '-63px'],
            ["style", "height", '189px'],
            ["style", "opacity", '0'],
            ["style", "left", '-177px'],
            ["style", "width", '189px']
         ],
         "${_moustache5}": [
            ["style", "top", '-68px'],
            ["style", "height", '160px'],
            ["style", "opacity", '0'],
            ["style", "left", '-158px'],
            ["style", "width", '160px']
         ],
         "${symbolSelector}": [
            ["style", "height", '91px'],
            ["style", "width", '147px']
         ],
         "${_moustache1}": [
            ["style", "top", '-63px'],
            ["style", "height", '168px'],
            ["style", "opacity", '0'],
            ["style", "left", '-162px'],
            ["style", "width", '168px']
         ],
         "${_moustache2}": [
            ["style", "top", '-71px'],
            ["style", "height", '189px'],
            ["style", "opacity", '0'],
            ["style", "left", '-171px'],
            ["style", "width", '189px']
         ],
         "${_moustache3}": [
            ["style", "top", '-41px'],
            ["style", "height", '189px'],
            ["style", "opacity", '0'],
            ["style", "left", '-170px'],
            ["style", "width", '189px']
         ],
         "${_Rectangle6}": [
            ["style", "top", '0px'],
            ["style", "height", '91px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '147px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5000,
         autoPlay: true,
         timeline: [
            { id: "eid128", tween: [ "style", "${_moustache3}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 500 },
            { id: "eid137", tween: [ "style", "${_moustache3}", "opacity", '0', { fromValue: '1'}], position: 2500, duration: 500 },
            { id: "eid159", tween: [ "style", "${_moustache4}", "top", '-65px', { fromValue: '-63px'}], position: 1000, duration: 500 },
            { id: "eid169", tween: [ "style", "${_moustache4}", "top", '-68px', { fromValue: '-65px'}], position: 1500, duration: 500 },
            { id: "eid155", tween: [ "style", "${_moustache2}", "top", '-73px', { fromValue: '-71px'}], position: 3000, duration: 500 },
            { id: "eid165", tween: [ "style", "${_moustache2}", "top", '-76px', { fromValue: '-73px'}], position: 3500, duration: 500 },
            { id: "eid153", tween: [ "style", "${_moustache1}", "top", '-66px', { fromValue: '-63px'}], position: 4000, duration: 500 },
            { id: "eid163", tween: [ "style", "${_moustache1}", "top", '-68px', { fromValue: '-66px'}], position: 4500, duration: 500 },
            { id: "eid156", tween: [ "style", "${_moustache5}", "left", '-6px', { fromValue: '-158px'}], position: 0, duration: 500 },
            { id: "eid166", tween: [ "style", "${_moustache5}", "left", '166px', { fromValue: '-6px'}], position: 500, duration: 500 },
            { id: "eid158", tween: [ "style", "${_moustache4}", "left", '-24px', { fromValue: '-177px'}], position: 1000, duration: 500 },
            { id: "eid168", tween: [ "style", "${_moustache4}", "left", '147px', { fromValue: '-24px'}], position: 1500, duration: 500 },
            { id: "eid124", tween: [ "style", "${_moustache4}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500 },
            { id: "eid136", tween: [ "style", "${_moustache4}", "opacity", '0', { fromValue: '1'}], position: 1500, duration: 500 },
            { id: "eid127", tween: [ "style", "${_moustache5}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid135", tween: [ "style", "${_moustache5}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 500 },
            { id: "eid171", tween: [ "style", "${_moustache5}", "top", '-68px', { fromValue: '-68px'}], position: 0, duration: 0 },
            { id: "eid172", tween: [ "style", "${_moustache5}", "top", '-68px', { fromValue: '-68px'}], position: 500, duration: 0 },
            { id: "eid173", tween: [ "style", "${_moustache5}", "top", '-68px', { fromValue: '-68px'}], position: 1000, duration: 0 },
            { id: "eid126", tween: [ "style", "${_moustache2}", "opacity", '1', { fromValue: '0'}], position: 3000, duration: 500 },
            { id: "eid138", tween: [ "style", "${_moustache2}", "opacity", '0', { fromValue: '1'}], position: 3500, duration: 500 },
            { id: "eid150", tween: [ "style", "${_moustache3}", "left", '-17px', { fromValue: '-170px'}], position: 2000, duration: 500 },
            { id: "eid160", tween: [ "style", "${_moustache3}", "left", '154px', { fromValue: '-17px'}], position: 2500, duration: 500 },
            { id: "eid151", tween: [ "style", "${_moustache3}", "top", '-43px', { fromValue: '-41px'}], position: 2000, duration: 500 },
            { id: "eid161", tween: [ "style", "${_moustache3}", "top", '-46px', { fromValue: '-43px'}], position: 2500, duration: 500 },
            { id: "eid125", tween: [ "style", "${_moustache1}", "opacity", '1', { fromValue: '0'}], position: 4000, duration: 500 },
            { id: "eid139", tween: [ "style", "${_moustache1}", "opacity", '0', { fromValue: '1'}], position: 4500, duration: 500 },
            { id: "eid152", tween: [ "style", "${_moustache1}", "left", '-8px', { fromValue: '-162px'}], position: 4000, duration: 500 },
            { id: "eid240", tween: [ "style", "${_moustache1}", "left", '147px', { fromValue: '-8px'}], position: 4500, duration: 483 },
            { id: "eid162", tween: [ "style", "${_moustache1}", "left", '162px', { fromValue: '147px'}], position: 4983, duration: 17 },
            { id: "eid154", tween: [ "style", "${_moustache2}", "left", '-18px', { fromValue: '-171px'}], position: 3000, duration: 500 },
            { id: "eid164", tween: [ "style", "${_moustache2}", "left", '153px', { fromValue: '-18px'}], position: 3500, duration: 500 }         ]
      }
   }
},
"accessoire": {
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
      id: 'Rectangle9',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['0px','0px','224px','325px','auto','auto'],
      fill: ['rgba(14,14,14,1)']
   },
   {
      id: 'bandeau',
      type: 'image',
      rect: ['23px','-39px','187px','187px','auto','auto'],
      fill: ['rgba(0,0,0,0)','bandeau.svg','0px','0px']
   },
   {
      id: 'cigarre',
      type: 'image',
      rect: ['78px','83px','168px','168px','auto','auto'],
      fill: ['rgba(0,0,0,0)','cigarre.svg','0px','0px']
   },
   {
      id: 'cravate1',
      type: 'image',
      rect: ['7px','139px','210px','210px','auto','auto'],
      fill: ['rgba(0,0,0,0)','cravate1.svg','0px','0px']
   },
   {
      id: 'cravate2',
      type: 'image',
      rect: ['11px','148px','210px','210px','auto','auto'],
      fill: ['rgba(0,0,0,0)','cravate2.svg','0px','0px']
   },
   {
      id: 'noeudpap',
      type: 'image',
      rect: ['32px','129px','168px','168px','auto','auto'],
      fill: ['rgba(0,0,0,0)','noeudpap.svg','0px','0px']
   },
   {
      id: 'pipe',
      type: 'image',
      rect: ['50px','73px','224px','224px','auto','auto'],
      fill: ['rgba(0,0,0,0)','pipe.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_cravate1}": [
            ["style", "top", '139px'],
            ["style", "height", '210px'],
            ["style", "opacity", '0'],
            ["style", "left", '-209px'],
            ["style", "width", '210px']
         ],
         "${_cravate2}": [
            ["style", "top", '148px'],
            ["style", "height", '210px'],
            ["style", "opacity", '0'],
            ["style", "left", '-209px'],
            ["style", "width", '210px']
         ],
         "${_cigarre}": [
            ["style", "top", '83px'],
            ["style", "height", '168px'],
            ["style", "opacity", '0'],
            ["style", "left", '-167px'],
            ["style", "width", '168px']
         ],
         "${symbolSelector}": [
            ["style", "height", '325px'],
            ["style", "width", '224px']
         ],
         "${_Rectangle9}": [
            ["style", "top", '0px'],
            ["style", "height", '325px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '224px']
         ],
         "${_bandeau}": [
            ["style", "top", '-39px'],
            ["style", "height", '187px'],
            ["style", "opacity", '0'],
            ["style", "left", '-187px'],
            ["style", "width", '187px']
         ],
         "${_pipe}": [
            ["style", "top", '73px'],
            ["style", "height", '224px'],
            ["style", "opacity", '0'],
            ["style", "left", '-224px'],
            ["style", "width", '224px']
         ],
         "${_noeudpap}": [
            ["style", "top", '129px'],
            ["style", "height", '168px'],
            ["style", "opacity", '0'],
            ["style", "left", '-168px'],
            ["style", "width", '168px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 6010,
         autoPlay: true,
         timeline: [
            { id: "eid189", tween: [ "style", "${_noeudpap}", "opacity", '1', { fromValue: '0.000000'}], position: 1000, duration: 505 },
            { id: "eid196", tween: [ "style", "${_noeudpap}", "opacity", '0.000000', { fromValue: '1'}], position: 1505, duration: 505 },
            { id: "eid191", tween: [ "style", "${_bandeau}", "opacity", '1', { fromValue: '0.000000'}], position: 5000, duration: 505 },
            { id: "eid198", tween: [ "style", "${_bandeau}", "opacity", '0.000000', { fromValue: '1'}], position: 5505, duration: 505 },
            { id: "eid231", tween: [ "style", "${_bandeau}", "left", '24px', { fromValue: '-187px'}], position: 5000, duration: 505 },
            { id: "eid232", tween: [ "style", "${_bandeau}", "left", '224px', { fromValue: '24px'}], position: 5505, duration: 505 },
            { id: "eid225", tween: [ "style", "${_cigarre}", "left", '78px', { fromValue: '-167px'}], position: 4000, duration: 505 },
            { id: "eid229", tween: [ "style", "${_cigarre}", "left", '223px', { fromValue: '78px'}], position: 4505, duration: 495 },
            { id: "eid187", tween: [ "style", "${_cravate1}", "opacity", '1', { fromValue: '0.000000'}], position: 3000, duration: 505 },
            { id: "eid200", tween: [ "style", "${_cravate1}", "opacity", '0.000000', { fromValue: '1'}], position: 3505, duration: 505 },
            { id: "eid209", tween: [ "style", "${_noeudpap}", "left", '28px', { fromValue: '-168px'}], position: 1000, duration: 505 },
            { id: "eid210", tween: [ "style", "${_noeudpap}", "left", '224px', { fromValue: '28px'}], position: 1505, duration: 495 },
            { id: "eid221", tween: [ "style", "${_cravate1}", "top", '139px', { fromValue: '139px'}], position: 3000, duration: 0 },
            { id: "eid222", tween: [ "style", "${_cravate1}", "top", '139px', { fromValue: '139px'}], position: 4000, duration: 0 },
            { id: "eid190", tween: [ "style", "${_cravate2}", "opacity", '1', { fromValue: '0.000000'}], position: 2000, duration: 505 },
            { id: "eid197", tween: [ "style", "${_cravate2}", "opacity", '0.000000', { fromValue: '1'}], position: 2505, duration: 505 },
            { id: "eid188", tween: [ "style", "${_pipe}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 505 },
            { id: "eid193", tween: [ "style", "${_pipe}", "opacity", '0.000000', { fromValue: '1'}], position: 505, duration: 505 },
            { id: "eid213", tween: [ "style", "${_cravate2}", "left", '7px', { fromValue: '-209px'}], position: 2000, duration: 505 },
            { id: "eid214", tween: [ "style", "${_cravate2}", "left", '224px', { fromValue: '7px'}], position: 2505, duration: 495 },
            { id: "eid227", tween: [ "style", "${_cigarre}", "top", '83px', { fromValue: '83px'}], position: 4000, duration: 0 },
            { id: "eid228", tween: [ "style", "${_cigarre}", "top", '83px', { fromValue: '83px'}], position: 4505, duration: 0 },
            { id: "eid218", tween: [ "style", "${_cravate1}", "left", '7px', { fromValue: '-209px'}], position: 3000, duration: 505 },
            { id: "eid219", tween: [ "style", "${_cravate1}", "left", '224px', { fromValue: '7px'}], position: 3505, duration: 495 },
            { id: "eid186", tween: [ "style", "${_cigarre}", "opacity", '1', { fromValue: '0.000000'}], position: 4000, duration: 505 },
            { id: "eid199", tween: [ "style", "${_cigarre}", "opacity", '0.000000', { fromValue: '1'}], position: 4505, duration: 505 },
            { id: "eid206", tween: [ "style", "${_pipe}", "left", '50px', { fromValue: '-224px'}], position: 0, duration: 505 },
            { id: "eid207", tween: [ "style", "${_pipe}", "left", '224px', { fromValue: '50px'}], position: 505, duration: 495 }         ]
      }
   }
},
"Symbol_1": {
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
      rect: ['6px','7px','12px','14px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(255,249,249,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Ellipse}": [
            ["style", "height", '25px'],
            ["style", "top", '-11px'],
            ["style", "left", '0px'],
            ["color", "background-color", 'rgba(255,249,249,1.00)']
         ],
         "${symbolSelector}": [
            ["style", "height", '14px'],
            ["style", "width", '12px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 580,
         autoPlay: true,
         timeline: [
            { id: "eid349", tween: [ "style", "${_Ellipse}", "top", '0px', { fromValue: '-11px'}], position: 0, duration: 335 },
            { id: "eid345", tween: [ "style", "${_Ellipse}", "top", '7px', { fromValue: '0px'}], position: 335, duration: 245 },
            { id: "eid346", tween: [ "style", "${_Ellipse}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid344", tween: [ "style", "${_Ellipse}", "left", '12px', { fromValue: '0px'}], position: 335, duration: 245 },
            { id: "eid348", tween: [ "style", "${_Ellipse}", "height", '25px', { fromValue: '25px'}], position: 0, duration: 0 }         ]
      }
   }
},
"oeil": {
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
      rect: ['0px','0px','8px','8px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'oeil_gauche',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(255,249,249,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_oeil_gauche}": [
            ["style", "top", '0px'],
            ["style", "height", '8px'],
            ["style", "left", '0px'],
            ["style", "width", '8px']
         ],
         "${symbolSelector}": [
            ["style", "height", '8px'],
            ["style", "width", '8px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: true,
         timeline: [
            { id: "eid350", tween: [ "style", "${_oeil_gauche}", "left", '25px', { fromValue: '0px'}], position: 0, duration: 2000 }         ]
      }
   }
},
"oeil_droit": {
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
      rect: ['0px','0px','8px','8px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'oeil_droit',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(255,249,249,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '8px'],
            ["style", "width", '8px']
         ],
         "${_oeil_droit}": [
            ["style", "height", '8px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '8px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: true,
         timeline: [
            { id: "eid355", tween: [ "style", "${_oeil_droit}", "left", '22px', { fromValue: '0px'}], position: 0, duration: 2000 }         ]
      }
   }
},
"jour_nuit": {
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
      id: 'Rectangle17',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['0px','0px','700px','478px','auto','auto'],
      fill: ['rgba(0,0,0,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '478px'],
            ["style", "width", '700px']
         ],
         "${_Rectangle17}": [
            ["style", "top", '0px'],
            ["style", "height", '478px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["color", "background-color", 'rgba(0,0,0,1.00)']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 250,
         autoPlay: true,
         timeline: [
            { id: "eid427", tween: [ "style", "${_Rectangle17}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid429", tween: [ "style", "${_Rectangle17}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 0 }         ]
      }
   }
},
"araigne": {
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
      rect: ['56px','6px','4px','59px','auto','auto'],
      id: 'Rectangle5',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(0,0,0,1)']
   },
   {
      id: 'araigne',
      type: 'image',
      rect: ['0px','0px','142px','142px','auto','auto'],
      fill: ['rgba(0,0,0,0)','araigne.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle5}": [
            ["style", "left", '59px'],
            ["style", "height", '59px']
         ],
         "${_araigne}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '142px'],
            ["style", "width", '142px']
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
            { id: "eid440", tween: [ "style", "${_Rectangle5}", "height", '0px', { fromValue: '59px'}], position: 0, duration: 1000 },
            { id: "eid430", tween: [ "style", "${_araigne}", "top", '-81px', { fromValue: '0px'}], position: 0, duration: 1000 },
            { id: "eid439", tween: [ "style", "${_Rectangle5}", "left", '59px', { fromValue: '59px'}], position: 0, duration: 0 }         ]
      }
   }
},
"attention": {
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
      type: 'text',
      rect: ['0px','0px','15px','19px','auto','auto'],
      id: 'Text',
      text: '!',
      align: 'center',
      font: ['Georgia, \'Times New Roman\', Times, serif',39,'rgba(215,255,0,1)','normal','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text}": [
            ["style", "top", '0px'],
            ["style", "height", '19px'],
            ["color", "color", 'rgba(215,255,0,1)'],
            ["style", "left", '0px'],
            ["style", "width", '15px']
         ],
         "${symbolSelector}": [
            ["style", "height", '19px'],
            ["style", "width", '15px']
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
            { id: "eid444", tween: [ "color", "${_Text}", "color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(215,255,0,1)'}], position: 0, duration: 1000 }         ]
      }
   }
},
"oeil_fermeture": {
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
      rect: ['0px','-1px','71px','68px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(205,44,44,1)']
   },
   {
      rect: ['0px','0px','71px','68px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      opacity: 1,
      id: 'Ellipse3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(84,198,209,1.00)']
   },
   {
      rect: ['0px','34px','71px','3px','auto','auto'],
      opacity: 1,
      id: 'Rectangle7',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(0,0,0,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle7}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "opacity", '0'],
            ["style", "top", '32px']
         ],
         "${_Ellipse2}": [
            ["style", "top", '-1px'],
            ["style", "height", '68px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '71px']
         ],
         "${_Ellipse3}": [
            ["style", "top", '-2px'],
            ["color", "background-color", 'rgba(84,198,209,1.00)'],
            ["style", "height", '68px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '71px']
         ],
         "${symbolSelector}": [
            ["style", "height", '68px'],
            ["style", "width", '71px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 125,
         autoPlay: true,
         timeline: [
            { id: "eid473", tween: [ "style", "${_Ellipse3}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid475", tween: [ "style", "${_Ellipse3}", "opacity", '1', { fromValue: '0'}], position: 125, duration: 0 },
            { id: "eid472", tween: [ "style", "${_Rectangle7}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid474", tween: [ "style", "${_Rectangle7}", "opacity", '1', { fromValue: '0'}], position: 125, duration: 0 }         ]
      }
   }
},
"Titre": {
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
      rect: ['0px','0px','392px','279px','auto','auto'],
      font: ['amaranth, sans-serif',110,'rgba(0,0,0,1)','normal','none',''],
      id: 'Text',
      text: 'Créateur  Blop 2.0',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text}": [
            ["style", "top", '25px'],
            ["style", "text-align", 'center'],
            ["style", "height", '279px'],
            ["color", "color", 'rgba(68,107,207,1.00)'],
            ["style", "font-family", 'amaranth, sans-serif'],
            ["style", "left", '6px'],
            ["style", "font-size", '50px']
         ],
         "${symbolSelector}": [
            ["style", "height", '279px'],
            ["style", "width", '392px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3000,
         autoPlay: true,
         timeline: [
            { id: "eid507", tween: [ "style", "${_Text}", "left", '6px', { fromValue: '6px'}], position: 0, duration: 0 },
            { id: "eid506", tween: [ "style", "${_Text}", "top", '25px', { fromValue: '25px'}], position: 0, duration: 0 },
            { id: "eid481", tween: [ "color", "${_Text}", "color", 'rgba(168,207,69,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(68,107,207,1.00)'}], position: 0, duration: 500 },
            { id: "eid480", tween: [ "color", "${_Text}", "color", 'rgba(80,160,145,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(168,207,69,1)'}], position: 500, duration: 500 },
            { id: "eid482", tween: [ "color", "${_Text}", "color", 'rgba(143,95,24,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(80,160,145,1)'}], position: 1000, duration: 500 },
            { id: "eid483", tween: [ "color", "${_Text}", "color", 'rgba(144,35,35,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(143,95,24,1.00)'}], position: 1500, duration: 500 },
            { id: "eid484", tween: [ "color", "${_Text}", "color", 'rgba(113,35,144,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(144,35,35,1)'}], position: 2000, duration: 500 },
            { id: "eid485", tween: [ "color", "${_Text}", "color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(113,35,144,1)'}], position: 2500, duration: 500 }         ]
      }
   }
},
"Bulle_penser": {
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
      rect: ['0px','0px','224px','162px','auto','auto'],
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)']
   },
   {
      id: 'bulle_penser4',
      type: 'image',
      rect: ['11px','0px','176px','176px','auto','auto'],
      fill: ['rgba(0,0,0,0)','bulle_penser.svg','0px','0px']
   },
   {
      rect: ['27px','10px','100px','68px','auto','auto'],
      font: ['Trebuchet MS, Arial, Helvetica, sans-serif',19,'rgba(0,0,0,1)','normal','none',''],
      align: 'center',
      id: 'Text',
      text: 'Je m\'ennuie un peu là',
      cursor: ['pointer'],
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text}": [
            ["style", "opacity", '0'],
            ["style", "left", '27px'],
            ["style", "font-size", '19px'],
            ["style", "top", '10px'],
            ["style", "text-align", 'center'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '68px'],
            ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '100px']
         ],
         "${symbolSelector}": [
            ["style", "height", '162px'],
            ["style", "width", '224px']
         ],
         "${_Rectangle}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${_bulle_penser4}": [
            ["style", "top", '0px'],
            ["style", "height", '176px'],
            ["style", "opacity", '0'],
            ["style", "left", '11px'],
            ["style", "width", '176px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 100,
         autoPlay: true,
         timeline: [
            { id: "eid497", tween: [ "style", "${_bulle_penser4}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid499", tween: [ "style", "${_bulle_penser4}", "opacity", '1', { fromValue: '0'}], position: 100, duration: 0 },
            { id: "eid498", tween: [ "style", "${_Text}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid500", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 100, duration: 0 }         ]
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
})(jQuery, AdobeEdge, "EDGE-790057");
