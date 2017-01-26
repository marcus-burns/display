(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 600,
	fps: 23,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/dust1.png?1483633618102", id:"dust1"},
		{src:"images/dust2.png?1483633618102", id:"dust2"},
		{src:"images/ends.png?1483633618102", id:"ends"},
		{src:"images/machine.jpg?1483633618102", id:"machine"},
		{src:"images/room.jpg?1483633618102", id:"room"}
	]
};



lib.ssMetadata = [];


// symbols:



(lib.dust1 = function() {
	this.initialize(img.dust1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,110);


(lib.dust2 = function() {
	this.initialize(img.dust2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,110);


(lib.ends = function() {
	this.initialize(img.ends);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


(lib.machine = function() {
	this.initialize(img.machine);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,896,1490);


(lib.room = function() {
	this.initialize(img.room);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1190,886);


(lib.white = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.roomimg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.room();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,595,443);


(lib.gradient = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#B24284","#77174C","#74174B","#B92678","#E07DAF","#ED99C0","#CC4C91","#871854","#651845","#AD2273"],[0,0.063,0.145,0.263,0.361,0.471,0.584,0.718,0.867,1],-80,0,80,0).s().p("EgMfCcPMAAAk4eIY/AAMAAAE4eg");
	this.shape.setTransform(80,646.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("EiokC8wUAAFgAQABAhKqUAAIgI+ACnj7EMDorhpQMBkqGXDUgndARrhB1AePUhoOAv4gACAAEIAAAAUgASAAAh/Vg+tgEiokC8wIAAAAIAAAAIAAAAg");
	this.shape_1.setTransform(1154.3,487.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1121.6,2233.2,3218.7);


(lib.end = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ends();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.dust2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.dust2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,110);


(lib.dust1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.dust1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,110);


(lib.cordlessmachine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.machine();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,896,1490);


(lib.black = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgXbAu4MAAAhdvMAu2AAAMAAABdvg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.room_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_27 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(27).call(this.frame_27).wait(11));

	// Layer 1
	this.instance = new lib.roomimg("synched",0);
	this.instance.setTransform(297,221,1,1,0,0,0,297,221);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({alpha:1},21).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// photo floor
	this.room = new lib.room_1();
	this.room.setTransform(-123.4,358.9,2,2,0,0,0,297,221);

	this.timeline.addTween(cjs.Tween.get(this.room).wait(4));

	// Layer 5
	this.instance = new lib.dust2_1();
	this.instance.setTransform(231.2,147.6,0.885,0.885,0,0,0,80.2,55.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(2));

	// Layer 6
	this.instance_1 = new lib.dust1_1();
	this.instance_1.setTransform(229.3,147.6,0.885,0.885,0,0,0,80,55.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({alpha:0.5},0).wait(1).to({alpha:0.691},0).wait(1));

	// Layer 2
	this.instance_2 = new lib.cordlessmachine();
	this.instance_2.setTransform(76.3,384.8,0.5,0.5,0,0,0,448.5,745.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-148,12,448.1,745);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.loopCount=0;
	}
	this.frame_6 = function() {
		this.mc.room.gotoAndStop(1);
	}
	this.frame_43 = function() {
		this.mc.room.gotoAndPlay(6);
	}
	this.frame_112 = function() {
		this.loopCount++;
		
		if(this.loopCount > 1){
			
			this.stop();
			
		}
	}
	this.frame_206 = function() {
		this.gotoAndPlay(3);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(37).call(this.frame_43).wait(69).call(this.frame_112).wait(94).call(this.frame_206).wait(11));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,1).p("EgXWguyMAutAAAMAAABdlMgutAAAg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(217));

	// black
	this.instance = new lib.black("synched",0);
	this.instance.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},6).wait(190).to({_off:false,alpha:0},0).to({alpha:1},9).wait(12));

	// blur
	this.instance_1 = new lib.gradient();
	this.instance_1.setTransform(482.7,127,0.343,0.343,-156.2,0,0,79.9,1646.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).to({regX:80,regY:1646.4,rotation:-21.7},23,cjs.Ease.get(0.8)).to({_off:true},1).wait(187));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EhhjBn1MBtfj1zMBVoAmKMhtfD1zg");
	var mask_graphics_6 = new cjs.Graphics().p("EhhjBn1MBtfj1zMBVoAmKMhtfD1zg");
	var mask_graphics_7 = new cjs.Graphics().p("EhypBUmMCX7jeGMBNYA07MiX7DeGg");
	var mask_graphics_8 = new cjs.Graphics().p("Eh/iA/gMC8BjAfMBDEBBgMi8BDAfg");
	var mask_graphics_9 = new cjs.Graphics().p("EiITApeMDZWiepMA3RBLuMjZWCepg");
	var mask_graphics_10 = new cjs.Graphics().p("EiNKATTMDvyh6HMAqjBTiMjvyB6Hg");
	var mask_graphics_11 = new cjs.Graphics().p("EiOdgCUMD/jhUWMAdYBY/Mj/jBUWg");
	var mask_graphics_12 = new cjs.Graphics().p("EiMngW6MEJDgufMAQMBcUMkJDAufg");
	var mask_graphics_13 = new cjs.Graphics().p("EiIIgqDMEM8gJjMADVBdqMkM8AJjg");
	var mask_graphics_14 = new cjs.Graphics().p("EiKZAh1MAI8hdTMEL3AZqMgI8BdTg");
	var mask_graphics_15 = new cjs.Graphics().p("EiNhAQeMAUZhbeMEGqA6jMgUZBbeg");
	var mask_graphics_16 = new cjs.Graphics().p("EiOegAGMAe6hYgMD+DBYtMge6BYgg");
	var mask_graphics_17 = new cjs.Graphics().p("EiNngPrMAoahUmMDy1Bz9MgoaBUmg");
	var mask_graphics_18 = new cjs.Graphics().p("EiLQgeEMAw2hQCMDlrCMLMgw2BQCg");
	var mask_graphics_19 = new cjs.Graphics().p("EiHxgrMMA4QhLBMDXTChaMg4QBLBg");
	var mask_graphics_20 = new cjs.Graphics().p("EiDbg2/MA+ohFxMDIPCzwMg+oBFxg");
	var mask_graphics_21 = new cjs.Graphics().p("Eh+jhBcMBEFhAeMC5CDDXMhEFBAeg");
	var mask_graphics_22 = new cjs.Graphics().p("Eh5XhKnMBIpg7RMCqGDQgMhIpA7Rg");
	var mask_graphics_23 = new cjs.Graphics().p("Eh0HhSjMBMcg2SMCbzDbZMhMcA2Sg");
	var mask_graphics_24 = new cjs.Graphics().p("Ehu+hZVMBPigxoMCObDkTMhPiAxog");
	var mask_graphics_25 = new cjs.Graphics().p("EhqIhfDMBSCgtYMCCPDrfMhSCAtYg");
	var mask_graphics_26 = new cjs.Graphics().p("EhlthjxMBUBgpmMB3aDxJMhUBApmg");
	var mask_graphics_27 = new cjs.Graphics().p("EhhzhnlMBVjgmXMBuED1iMhVjAmXg");
	var mask_graphics_28 = new cjs.Graphics().p("EheihqlMBWtgjrMBmYD42MhWtAjrg");
	var mask_graphics_29 = new cjs.Graphics().p("Ehb8hs1MBXighlMBgXD7QMhXiAhlg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-41.1,y:590.2}).wait(6).to({graphics:mask_graphics_6,x:-41.1,y:590.2}).wait(1).to({graphics:mask_graphics_7,x:-115.7,y:488.4}).wait(1).to({graphics:mask_graphics_8,x:-169,y:379.5}).wait(1).to({graphics:mask_graphics_9,x:-201.7,y:267.9}).wait(1).to({graphics:mask_graphics_10,x:-215.3,y:157.4}).wait(1).to({graphics:mask_graphics_11,x:-211.7,y:51.2}).wait(1).to({graphics:mask_graphics_12,x:-193.3,y:-48.5}).wait(1).to({graphics:mask_graphics_13,x:-162.6,y:-139.9}).wait(1).to({graphics:mask_graphics_14,x:-122.1,y:-221.9}).wait(1).to({graphics:mask_graphics_15,x:-74.2,y:-294}).wait(1).to({graphics:mask_graphics_16,x:-21.3,y:-356}).wait(1).to({graphics:mask_graphics_17,x:34.6,y:-408.2}).wait(1).to({graphics:mask_graphics_18,x:91.8,y:-451.2}).wait(1).to({graphics:mask_graphics_19,x:148.7,y:-485.8}).wait(1).to({graphics:mask_graphics_20,x:204,y:-512.9}).wait(1).to({graphics:mask_graphics_21,x:256.8,y:-533.4}).wait(1).to({graphics:mask_graphics_22,x:306.3,y:-548.3}).wait(1).to({graphics:mask_graphics_23,x:351.8,y:-558.5}).wait(1).to({graphics:mask_graphics_24,x:393,y:-565.1}).wait(1).to({graphics:mask_graphics_25,x:429.5,y:-568.9}).wait(1).to({graphics:mask_graphics_26,x:461.2,y:-570.6}).wait(1).to({graphics:mask_graphics_27,x:488,y:-570.9}).wait(1).to({graphics:mask_graphics_28,x:509.8,y:-570.4}).wait(1).to({graphics:mask_graphics_29,x:526.5,y:-569.6}).wait(1).to({graphics:null,x:0,y:0}).wait(187));

	// white
	this.instance_2 = new lib.white();
	this.instance_2.setTransform(80,300,1,1,0,0,0,80,300);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},30).wait(187));

	// cta mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_100 = new cjs.Graphics().p("A3bEsIAApXMAu2AAAIAAJXg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(100).to({graphics:mask_1_graphics_100,x:150,y:220}).wait(117));

	// end copy 3
	this.instance_3 = new lib.end();
	this.instance_3.setTransform(70,212,0.95,0.95,0,0,0,70,212);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.instance_3.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(100).to({_off:false},0).to({scaleX:1.05,scaleY:1.05,alpha:1},7).to({scaleX:1,scaleY:1},4).wait(58).to({scaleX:0.95,scaleY:0.95},5).to({scaleX:1.05,scaleY:1.05},5).to({scaleX:1,scaleY:1},4).wait(34));

	// finance (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_77 = new cjs.Graphics().p("A3bEhIAApBMAu2AAAIAAJBg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(77).to({graphics:mask_2_graphics_77,x:150,y:153}).wait(140));

	// end copy 2
	this.instance_4 = new lib.end();
	this.instance_4.setTransform(300,250,1,1,0,0,0,300,250);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.instance_4.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(77).to({_off:false},0).to({alpha:1},6).wait(134));

	// text mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_53 = new cjs.Graphics().p("A3bEsIAApXMAu2AAAIAAJXg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(53).to({graphics:mask_3_graphics_53,x:150,y:86}).wait(164));

	// end copy
	this.instance_5 = new lib.end();
	this.instance_5.setTransform(300,250,1,1,0,0,0,300,250);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.instance_5.mask = mask_3;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(53).to({_off:false},0).to({alpha:1},10).wait(154));

	// logo mask (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_6 = new cjs.Graphics().p("A3bD6IAAnzMAu3AAAIAAHzg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(6).to({graphics:mask_4_graphics_6,x:149.5,y:25}).wait(211));

	// end
	this.instance_6 = new lib.end();
	this.instance_6.setTransform(300,250,1,1,0,0,0,300,250);
	this.instance_6._off = true;

	this.instance_6.mask = mask_4;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(6).to({_off:false},0).wait(211));

	// bg
	this.mc = new lib.mc();
	this.mc.setTransform(-56,525,1.5,1.5,0,0,0,80,300);

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(42).to({regX:80.2,regY:300.1,scaleX:0.58,scaleY:0.58,x:158,y:307.1},21,cjs.Ease.get(1)).wait(154));

	// white
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgXbAu4MAAAhdvMAu2AAAMAAABdvg");
	this.shape_1.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(217));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1102.1,250.4,1552.7,1260.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;