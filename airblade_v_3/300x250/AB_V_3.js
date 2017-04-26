(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 23,
	color: "#000000",
	manifest: [
		{src:"images/cta.png", id:"cta"},
		{src:"images/i1.jpg", id:"i1"},
		{src:"images/i2.png", id:"i2"},
		{src:"images/i3.png", id:"i3"},
		{src:"images/i4.png", id:"i4"},
		{src:"images/i5.png", id:"i5"},
		{src:"images/t1.png", id:"t1"},
		{src:"images/t2.png", id:"t2"},
		{src:"images/t6.png", id:"t6"},
		{src:"images/t7.png", id:"t7"}
	]
};



// symbols:



(lib.cta = function() {
	this.initialize(img.cta);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.i1 = function() {
	this.initialize(img.i1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.i2 = function() {
	this.initialize(img.i2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.i3 = function() {
	this.initialize(img.i3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.i4 = function() {
	this.initialize(img.i4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.i5 = function() {
	this.initialize(img.i5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.t1 = function() {
	this.initialize(img.t1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.t2 = function() {
	this.initialize(img.t2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.t6 = function() {
	this.initialize(img.t6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.t7 = function() {
	this.initialize(img.t7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.t7_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.t7();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.t6_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.t6();
	this.instance.setTransform(0,-86);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-86,300,250);


(lib.t2_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.t2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.t1_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.t1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.numba = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_31 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(31).call(this.frame_31).wait(13));

	// Layer 1
	this.text = new cjs.Text("171", "bold 23px 'Helvetica'");
	this.text.textAlign = "center";
	this.text.lineHeight = 25;
	this.text.lineWidth = 100;
	this.text.setTransform(50,0);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({text:"172"},0).wait(1).to({text:"173"},0).wait(1).to({text:"174"},0).wait(1).to({text:"175"},0).wait(1).to({text:"176"},0).wait(1).to({text:"177"},0).wait(1).to({text:"178"},0).wait(1).to({text:"179"},0).wait(1).to({text:"180"},0).wait(1).to({text:"181"},0).wait(1).to({text:"182"},0).wait(1).to({text:"183"},0).wait(1).to({text:"184"},0).wait(1).to({text:"185"},0).wait(1).to({text:"186"},0).wait(1).to({text:"187"},0).wait(1).to({text:"188"},0).wait(1).to({text:"189"},0).wait(1).to({text:"190"},0).wait(1).to({text:"191"},0).wait(1).to({text:"192"},0).wait(1).to({text:"193"},0).wait(1).to({text:"194"},0).wait(1).to({text:"195"},0).wait(1).to({text:"196"},0).wait(1).to({text:"197"},0).wait(1).to({text:"198"},0).wait(1).to({text:"199"},0).wait(1).to({text:"200"},0).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,104,27);


(lib.num2 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("2", "bold 23px 'Helvetica'", "#FECC16");
	this.text.textAlign = "center";
	this.text.lineHeight = 25;
	this.text.lineWidth = 41;
	this.text.setTransform(20.5,0);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,45,29);


(lib.num1 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("4", "bold 23px 'Helvetica'", "#FECC16");
	this.text.textAlign = "center";
	this.text.lineHeight = 25;
	this.text.lineWidth = 41;
	this.text.setTransform(20.5,0);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,45,29);


(lib.logo = function() {
	this.initialize();

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag6CNIghgUIAaglQAGAFAMAFQATAJAPAAQAkABAPggQAKgTAAgYQgIAIgQAGQgOAFgKAAQgqAAgdgdQgegbAAgrIAAhkIA2AAIAABkQAAAVAOAOQAPAOASAAQAUAAAOgOQAOgPAAgUIAAhkIA2AAIAABkQAABcgIAgQgRA9g5AOQgPAEgNAAQgaAAgYgLg");
	this.shape.setTransform(34.1,25.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgKBmQgtgIgegXIAagjQAMAIAWAHQAZAIASgEQAMgDADgIQACgHgIgFQgFgCgegJQgggJgOgJQgagOAAgbIAFgZQAPgcAkgHQASgEAMACQAuADAZAUIgaAjQgTgIgSgDQgSgCgMADQgJADgCAGQgDAFAGAEQAGAEAcAIQAfAJAOAHQAgAQgBAeQgBAVgLAMQgTAYgjAFg");
	this.shape_1.setTransform(55.2,20);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAwBkIAAhjQAAgRgOgPQgPgOgTAAQgTAAgOAOQgOAPAAARIAABjIg2AAIAAhjQAAgoAegeQAegeApAAQAqAAAeAeQAeAeAAAoIAABjg");
	this.shape_2.setTransform(98.3,19.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhHBIQgegeAAgqQAAgpAegeQAegeApAAQAqAAAeAeQAeAeAAApQAAAqgeAeQgeAegqAAQgpAAgegegAghghQgPAPAAASQAAAUAPAOQAOAOATAAQAUAAAOgOQAOgOAAgUQAAgSgOgPQgOgOgUAAQgTAAgOAOg");
	this.shape_3.setTransform(75.6,20.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhHB6QgegeAAgrQAAgqAegcQAegeApAAIAwAAIAAhkIA2AAIAADIQAAArgeAeQgeAegqAAQgpAAgegegAghAPQgPAOAAAUQAAAVAPAOQAOAOATAAQAUAAAOgOQAOgOAAgVIAAgxIgwAAQgTAAgOAPg");
	this.shape_4.setTransform(10.8,15.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C0C0C0").s().p("AiDiZIAzAAIBCCcQAKAYAEAYQAFgWAKgaIBDicIAyAAIiEEzg");
	this.shape_5.setTransform(286.9,15.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C0C0C0").s().p("AhMBHQgcgeAAgpQABgtAhgfQAggbAmAAQAqAAAfAeQAgAfAAAqIgDAPIifAAQAEAUAQANQAQAQAVAAQAdAAAhgWIAaAhQgpAegsgBQgvAAggghgAgjgxQgQAMgEARIBvAAQgEgPgOgNQgQgPgWAAQgSAAgRAOg");
	this.shape_6.setTransform(255.1,20.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C0C0C0").s().p("AhHB8QgdgdAAgsQgBgqAggbQAfgeAoAAIA3AAIAAhpIAsAAIAADMQAAAqgdAeQgeAfgqgBQgqAAgdgdgAgmAKQgSARAAAZQAAAcATAQQAQAOAVAAQAYAAARgRQAQgRAAgZIAAg4Ig5AAQgWAAgQAPg");
	this.shape_7.setTransform(231.4,15.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C0C0C0").s().p("AhLBHQgdgfAAgoQAAguAigeQAfgcAnABQApgBAeAcQAiAfAAAtIAABiIgtAAIAAgOQgaAVgigBQgtAAgeghgAgqgpQgRATAAAWQAAAYAQASQASATAZAAQAZABARgTQASgSAAgZQAAgbgTgRQgSgQgXAAQgYAAgSATg");
	this.shape_8.setTransform(207.6,20.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C0C0C0").s().p("AgVCWIAAkrIArAAIAAErg");
	this.shape_9.setTransform(191.7,14.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C0C0C0").s().p("AhIB6QgcgeAAgpIAAjMIAsAAIAABpIA0AAQArAAAgAeQAeAcAAApQAAAsgdAdQgdAdgrAAQgrABgdgggAg4A4QAAASAOARQARAUAZgBQAaABARgUQAOgQAAgXQAAgWgPgRQgRgSgdAAIg0AAg");
	this.shape_10.setTransform(176,15.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C0C0C0").s().p("Ag3BlIAAhhQAAgwAhgeQAbgaApAAIAKAAIAAAoIgRACQgyAJAAA2IAABgg");
	this.shape_11.setTransform(157.5,19.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C0C0C0").s().p("AgUCLIAAjDIAqAAIAADDgAgQhfQgIgHAAgLQAAgKAIgIQAHgHAJAAQAKAAAHAHQAHAIABAKQgBALgHAHQgHAHgKAAQgJAAgHgHg");
	this.shape_12.setTransform(146,16);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C0C0C0").s().p("AhLBHQgcgfgBgoQAAguAigeQAfgcAnABQApgBAeAcQAiAeAAAuIAABiIgsAAIAAgOQgcAVghgBQgtAAgeghgAgqgpQgRASAAAXQAAAYARASQARATAZAAQAYABATgTQASgSAAgZQgBgbgTgRQgRgQgYAAQgXAAgTATg");
	this.shape_13.setTransform(129.6,20.1);

	this.addChild(this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.5,-0.2,299.6,40.9);


(lib.labels = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Paper towel \ndispensers", "12px 'Helvetica'", "#999999");
	this.text.textAlign = "center";
	this.text.lineHeight = 14;
	this.text.lineWidth = 130;
	this.text.setTransform(210,0);

	this.text_1 = new cjs.Text("Conventional \nhand dryers", "12px 'Helvetica'", "#999999");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 14;
	this.text_1.lineWidth = 130;
	this.text_1.setTransform(65,0);

	this.addChild(this.text_1,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,279.1,76);


(lib.img5 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.i5();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.img4 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.i4();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.img3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.i3();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.img2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.i2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.img1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.i1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.cta_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.cta();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.black = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


// stage content:
(lib.AB_V_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.loopNumber = 0;
	}
	this.frame_121 = function() {
		this.numba.gotoAndPlay(1);
	}
	this.frame_293 = function() {
		this.loopNumber = this.loopNumber + 1;
		
		if(this.loopNumber==3){
			this.stop();
		}
	}
	this.frame_344 = function() {
		this.gotoAndPlay(2);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(121).call(this.frame_121).wait(172).call(this.frame_293).wait(51).call(this.frame_344).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("A3WzcMAutAAAMAAAAm5MgutAAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(345));

	// logo
	this.instance = new lib.logo();
	this.instance.setTransform(149.7,227.6,0.529,0.529,0,0,0,149.8,20.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(121).to({x:-150.3,alpha:0},10).to({_off:true},1).wait(137).to({_off:false,x:149.7},0).to({alpha:1},5).wait(71));

	// black copy
	this.instance_1 = new lib.black();
	this.instance_1.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(249).to({_off:false},0).to({alpha:1},9).wait(11).to({alpha:0},5).to({_off:true},1).wait(59).to({_off:false},0).to({alpha:1},6).wait(5));

	// cta
	this.instance_2 = new lib.cta_1();
	this.instance_2.setTransform(156,125,1,1,0,0,0,150,125);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(260).to({_off:false},0).wait(85));

	// t4
	this.instance_3 = new lib.t7_1();
	this.instance_3.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(260).to({_off:false},0).wait(85));

	// t3
	this.instance_4 = new lib.t6_1();
	this.instance_4.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_4.alpha = 0.191;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(196).to({_off:false},0).to({alpha:1},5).to({_off:true},59).wait(85));

	// t2
	this.instance_5 = new lib.t2_1();
	this.instance_5.setTransform(150,112,0.844,0.844,0,0,0,150,125);
	this.instance_5.alpha = 0.199;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(56).to({_off:false},0).to({scaleX:1,scaleY:1,y:125,alpha:1},8,cjs.Ease.get(1)).wait(117).to({alpha:0},5).to({_off:true},1).wait(158));

	// t1
	this.instance_6 = new lib.t1_1();
	this.instance_6.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({_off:false},0).to({alpha:1},6).wait(43).to({x:-160},7,cjs.Ease.get(1)).to({_off:true},1).wait(287));

	// number up
	this.numba = new lib.numba();
	this.numba.setTransform(431.4,175.8,1.356,1.356,0,0,0,52,13.5);
	this.numba._off = true;

	this.timeline.addTween(cjs.Tween.get(this.numba).wait(121).to({_off:false},0).to({x:151.4},10,cjs.Ease.get(0.7)).wait(50).to({x:-158.6},8).to({_off:true},1).wait(155));

	// img5 mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AAAAAIAAAAIAAAAIAAAAg");
	var mask_graphics_121 = new cjs.Graphics().p("A2vVYMAAAgqvMAtfAAAMggZAqvg");
	var mask_graphics_122 = new cjs.Graphics().p("AloVYMAAAgqvMAteAAAMggbAqvg");
	var mask_graphics_123 = new cjs.Graphics().p("Ao5VYMAAAgqvMAteAAAMggbAqvg");
	var mask_graphics_124 = new cjs.Graphics().p("Ar2VYMAAAgqvMAteAAAMggbAqvg");
	var mask_graphics_125 = new cjs.Graphics().p("AufVYMAAAgqvMAteAAAMggZAqvg");
	var mask_graphics_126 = new cjs.Graphics().p("Aw1VYMAAAgqvMAteAAAMggZAqvg");
	var mask_graphics_127 = new cjs.Graphics().p("Ay3VYMAAAgqvMAteAAAMggZAqvg");
	var mask_graphics_128 = new cjs.Graphics().p("A0mVYMAAAgqvMAteAAAMggZAqvg");
	var mask_graphics_129 = new cjs.Graphics().p("A2BVYMAAAgqvMAteAAAMggZAqvg");
	var mask_graphics_130 = new cjs.Graphics().p("A2vVYMAAAgqvMAtfAAAMggZAqvg");
	var mask_graphics_131 = new cjs.Graphics().p("A2vVYMAAAgqvMAtfAAAMggZAqvg");
	var mask_graphics_181 = new cjs.Graphics().p("A2vVYMAAAgqvMAtfAAAMggZAqvg");
	var mask_graphics_182 = new cjs.Graphics().p("A2uVYMAAAgqvMAtdAAAMggYAqvg");
	var mask_graphics_183 = new cjs.Graphics().p("A2vVYMAAAgqvMAtfAAAMggZAqvg");
	var mask_graphics_184 = new cjs.Graphics().p("A2uVYMAAAgqvMAtdAAAMggYAqvg");
	var mask_graphics_185 = new cjs.Graphics().p("A2vVYMAAAgqvMAtfAAAMggZAqvg");
	var mask_graphics_186 = new cjs.Graphics().p("A2vVYMAAAgqvMAtfAAAMggZAqvg");
	var mask_graphics_187 = new cjs.Graphics().p("A2uVYMAAAgqvMAtdAAAMggYAqvg");
	var mask_graphics_188 = new cjs.Graphics().p("A2vVYMAAAgqvMAtfAAAMggZAqvg");
	var mask_graphics_189 = new cjs.Graphics().p("A5aVYMAAAgqvMAteAAAMggZAqvg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:0,y:0}).wait(121).to({graphics:mask_graphics_121,x:410.1,y:125.9}).wait(1).to({graphics:mask_graphics_122,x:255,y:125.9}).wait(1).to({graphics:mask_graphics_123,x:234.1,y:125.9}).wait(1).to({graphics:mask_graphics_124,x:215.2,y:125.9}).wait(1).to({graphics:mask_graphics_125,x:198.3,y:125.9}).wait(1).to({graphics:mask_graphics_126,x:183.3,y:125.9}).wait(1).to({graphics:mask_graphics_127,x:170.3,y:125.9}).wait(1).to({graphics:mask_graphics_128,x:159.2,y:125.9}).wait(1).to({graphics:mask_graphics_129,x:150.1,y:125.9}).wait(1).to({graphics:mask_graphics_130,x:140.4,y:125.9}).wait(1).to({graphics:mask_graphics_131,x:130.1,y:125.9}).wait(50).to({graphics:mask_graphics_181,x:130.1,y:125.9}).wait(1).to({graphics:mask_graphics_182,x:91.3,y:125.9}).wait(1).to({graphics:mask_graphics_183,x:52.6,y:125.9}).wait(1).to({graphics:mask_graphics_184,x:13.8,y:125.9}).wait(1).to({graphics:mask_graphics_185,x:-24.9,y:125.9}).wait(1).to({graphics:mask_graphics_186,x:-63.7,y:125.9}).wait(1).to({graphics:mask_graphics_187,x:-102.4,y:125.9}).wait(1).to({graphics:mask_graphics_188,x:-141.2,y:125.9}).wait(1).to({graphics:mask_graphics_189,x:-162.8,y:125.9}).wait(1).to({graphics:null,x:0,y:0}).wait(155));

	// img5
	this.instance_7 = new lib.img5();
	this.instance_7.setTransform(430.1,163,0.998,0.998,-35.8,0,0,150,163);
	this.instance_7._off = true;

	this.instance_7.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(121).to({_off:false},0).to({x:150.1},10,cjs.Ease.get(0.7)).to({scaleX:1,scaleY:1,rotation:0,x:150},18).wait(32).to({x:-160},8).to({_off:true},1).wait(155));

	// img4
	this.instance_8 = new lib.img4();
	this.instance_8.setTransform(430,125,1,1,0,0,0,150,125);
	this.instance_8.alpha = 0.5;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(121).to({_off:false},0).to({x:150,alpha:1},10,cjs.Ease.get(0.7)).wait(50).to({x:-160},8).to({_off:true},1).wait(155));

	// labels
	this.instance_9 = new lib.labels();
	this.instance_9.setTransform(423.5,109,1,1,0,0,0,139.5,38);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(67).to({_off:false},0).to({x:153.5},7,cjs.Ease.get(1)).wait(47).to({x:-126.5},10,cjs.Ease.get(0.7)).to({_off:true},1).wait(213));

	// num2
	this.instance_10 = new lib.num2();
	this.instance_10.setTransform(251.5,129,1,1,0,0,0,22.5,14.5);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(95).to({_off:false},0).wait(26).to({x:-48.5},10,cjs.Ease.get(0.7)).to({_off:true},1).wait(213));

	// num1
	this.instance_11 = new lib.num1();
	this.instance_11.setTransform(108.5,129,1,1,0,0,0,22.5,14.5);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(82).to({_off:false},0).wait(39).to({x:-191.5},10,cjs.Ease.get(0.7)).to({_off:true},1).wait(213));

	// black copy 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_95 = new cjs.Graphics().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	var mask_1_graphics_121 = new cjs.Graphics().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	var mask_1_graphics_122 = new cjs.Graphics().p("A3aTiMAAAgnDMAu2AAAMAAAAnDg");
	var mask_1_graphics_123 = new cjs.Graphics().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	var mask_1_graphics_124 = new cjs.Graphics().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	var mask_1_graphics_125 = new cjs.Graphics().p("A3aTiMAAAgnDMAu1AAAMAAAAnDg");
	var mask_1_graphics_126 = new cjs.Graphics().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	var mask_1_graphics_127 = new cjs.Graphics().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	var mask_1_graphics_128 = new cjs.Graphics().p("A3aTiMAAAgnDMAu1AAAMAAAAnDg");
	var mask_1_graphics_129 = new cjs.Graphics().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	var mask_1_graphics_130 = new cjs.Graphics().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	var mask_1_graphics_131 = new cjs.Graphics().p("A3aTiMAAAgnDMAu2AAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(95).to({graphics:mask_1_graphics_95,x:150,y:118}).wait(26).to({graphics:mask_1_graphics_121,x:150,y:118}).wait(1).to({graphics:mask_1_graphics_122,x:101.1,y:118}).wait(1).to({graphics:mask_1_graphics_123,x:56.4,y:118}).wait(1).to({graphics:mask_1_graphics_124,x:15.9,y:118}).wait(1).to({graphics:mask_1_graphics_125,x:-20.4,y:118}).wait(1).to({graphics:mask_1_graphics_126,x:-52.5,y:118}).wait(1).to({graphics:mask_1_graphics_127,x:-80.4,y:118}).wait(1).to({graphics:mask_1_graphics_128,x:-104.1,y:118}).wait(1).to({graphics:mask_1_graphics_129,x:-123.6,y:118}).wait(1).to({graphics:mask_1_graphics_130,x:-138.9,y:118}).wait(1).to({graphics:mask_1_graphics_131,x:-150,y:118}).wait(1).to({graphics:null,x:0,y:0}).wait(213));

	// img3 copy
	this.instance_12 = new lib.img3();
	this.instance_12.setTransform(150,118,1,1,0,0,0,150,125);
	this.instance_12.alpha = 0.191;
	this.instance_12._off = true;

	this.instance_12.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(95).to({_off:false},0).to({alpha:1},3).wait(23).to({x:-150},10,cjs.Ease.get(0.7)).to({_off:true},1).wait(213));

	// black (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_82 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_2_graphics_121 = new cjs.Graphics().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	var mask_2_graphics_122 = new cjs.Graphics().p("A3aTiMAAAgnDMAu2AAAMAAAAnDg");
	var mask_2_graphics_123 = new cjs.Graphics().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	var mask_2_graphics_124 = new cjs.Graphics().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	var mask_2_graphics_125 = new cjs.Graphics().p("A3aTiMAAAgnDMAu1AAAMAAAAnDg");
	var mask_2_graphics_126 = new cjs.Graphics().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	var mask_2_graphics_127 = new cjs.Graphics().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	var mask_2_graphics_128 = new cjs.Graphics().p("A3aTiMAAAgnDMAu1AAAMAAAAnDg");
	var mask_2_graphics_129 = new cjs.Graphics().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	var mask_2_graphics_130 = new cjs.Graphics().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	var mask_2_graphics_131 = new cjs.Graphics().p("A3aTiMAAAgnDMAu2AAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(82).to({graphics:mask_2_graphics_82,x:0,y:118}).wait(39).to({graphics:mask_2_graphics_121,x:150,y:118}).wait(1).to({graphics:mask_2_graphics_122,x:101.1,y:118}).wait(1).to({graphics:mask_2_graphics_123,x:56.4,y:118}).wait(1).to({graphics:mask_2_graphics_124,x:15.9,y:118}).wait(1).to({graphics:mask_2_graphics_125,x:-20.4,y:118}).wait(1).to({graphics:mask_2_graphics_126,x:-52.5,y:118}).wait(1).to({graphics:mask_2_graphics_127,x:-80.4,y:118}).wait(1).to({graphics:mask_2_graphics_128,x:-104.1,y:118}).wait(1).to({graphics:mask_2_graphics_129,x:-123.6,y:118}).wait(1).to({graphics:mask_2_graphics_130,x:-138.9,y:118}).wait(1).to({graphics:mask_2_graphics_131,x:-150,y:118}).wait(1).to({graphics:null,x:0,y:0}).wait(213));

	// img3
	this.instance_13 = new lib.img3();
	this.instance_13.setTransform(150,118,1,1,0,0,0,150,125);
	this.instance_13.alpha = 0.191;
	this.instance_13._off = true;

	this.instance_13.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(82).to({_off:false},0).to({alpha:1},3).wait(36).to({x:-150},10,cjs.Ease.get(0.7)).to({_off:true},1).wait(213));

	// img2
	this.instance_14 = new lib.img2();
	this.instance_14.setTransform(-160,118,1,1,0,0,0,150,125);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(67).to({_off:false},0).to({x:150},7,cjs.Ease.get(1)).to({_off:true},47).wait(224));

	// img1
	this.instance_15 = new lib.img1();
	this.instance_15.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(50).to({x:450},7,cjs.Ease.get(1)).to({_off:true},1).wait(209).to({_off:false,x:150},0).wait(78));

	// black
	this.instance_16 = new lib.black();
	this.instance_16.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(345));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149.5,124.5,301,251);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;