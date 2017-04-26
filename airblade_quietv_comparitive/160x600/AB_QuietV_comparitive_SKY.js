(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 160,
	height: 600,
	fps: 23,
	color: "#FFFFFF",
	manifest: [
		{src:"images/AB_end.jpg", id:"AB_end"},
		{src:"images/AB_front.jpg", id:"AB_front"},
		{src:"images/competitor.jpg", id:"competitor"},
		{src:"images/noisy.png", id:"noisy"},
		{src:"images/quiet.png", id:"quiet"},
		{src:"images/quietxt.png", id:"quietxt"},
		{src:"images/start.jpg", id:"start"},
		{src:"images/text.png", id:"text"}
	]
};



// symbols:



(lib.AB_end = function() {
	this.initialize(img.AB_end);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,319);


(lib.AB_front = function() {
	this.initialize(img.AB_front);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,125,184);


(lib.competitor = function() {
	this.initialize(img.competitor);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,174,165);


(lib.noisy = function() {
	this.initialize(img.noisy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.quiet = function() {
	this.initialize(img.quiet);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,103);


(lib.quietxt = function() {
	this.initialize(img.quietxt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,44,15);


(lib.start = function() {
	this.initialize(img.start);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.text = function() {
	this.initialize(img.text);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,368);


(lib.white2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape.setTransform(80,300);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.text_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.text();
	this.instance.setTransform(0,0,0.5,0.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,160,184);


(lib.sting = function() {
	this.initialize();

	// white
	this.instance = new lib.start();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgMfAmwMAAAhNeIY/AAMAAABNeg");
	this.shape.setTransform(80,-232);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-480,160,1080);


(lib.quietText = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.quietxt();
	this.instance.setTransform(128,107);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(128,107,44,15);


(lib.quiet_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.quiet();
	this.instance.setTransform(-68,41);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-68,41,100,103);


(lib.noisy_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.noisy();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.logopart2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2564AC").s().p("AiDiZIAzAAIBCCcQAKAYAEAYQAFgWAKgaIBDicIAyAAIiEEzg");
	this.shape.setTransform(79.5,7.3,0.474,0.474);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#939598").s().p("AhMBHQgcgeAAgpQABgtAhgeQAggdAmAAQAqAAAfAfQAgAfAAAqIgDAPIifAAQAEAUAQAOQAQAPAVgBQAdAAAhgUIAaAgQgpAdgsABQgvgBggghgAgjgxQgQANgEAQIBvAAQgEgPgOgMQgQgPgWgBQgSABgRANg");
	this.shape_1.setTransform(64.4,9.6,0.474,0.474);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#939598").s().p("AhHB9QgdgeAAgtQgBgpAggcQAfgdAoAAIA3AAIAAhoIAsAAIAADKQAAArgdAeQgeAegqABQgqAAgdgdgAgmAKQgSARAAAZQAAAcATAQQAQAOAVAAQAYAAARgRQAQgSAAgZIAAg3Ig5AAQgWAAgQAPg");
	this.shape_2.setTransform(53.2,7.3,0.474,0.474);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#939598").s().p("AhLBHQgdgfAAgoQAAguAigeQAfgcAnAAQApAAAeAcQAiAfAAAtIAABiIgtAAIAAgOQgaAVgiAAQgtgBgeghgAgqgpQgRASAAAXQAAAYAQASQASAUAZgBQAZAAARgSQASgRAAgaQAAgbgTgRQgSgQgXAAQgYAAgSATg");
	this.shape_3.setTransform(41.9,9.6,0.474,0.474);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#939598").s().p("AgVCWIAAkrIArAAIAAErg");
	this.shape_4.setTransform(34.4,7.1,0.474,0.474);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#939598").s().p("AhIB6QgcgeAAgqIAAjKIAsAAIAABoIA0AAQArAAAgAeQAeAbAAApQAAAtgdAeQgdAdgrAAQgrgBgdgfgAg4A4QAAATAOARQARASAZABQAagBARgSQAOgRAAgXQAAgXgPgRQgRgRgdAAIg0AAg");
	this.shape_5.setTransform(27,7.3,0.474,0.474);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#939598").s().p("Ag3BlIAAhhQAAgwAhgeQAbgaApAAIAKAAIAAAoIgRACQgyAJAAA2IAABgg");
	this.shape_6.setTransform(18.2,9.4,0.474,0.474);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#939598").s().p("AgUCLIAAjDIAqAAIAADDgAgQhfQgIgHAAgLQAAgKAIgHQAHgIAJAAQAKAAAHAIQAHAHABAKQgBALgHAHQgHAHgKAAQgJAAgHgHg");
	this.shape_7.setTransform(12.7,7.7,0.474,0.474);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#939598").s().p("AhLBHQgcgfgBgoQAAguAigeQAfgcAnAAQApAAAeAcQAiAeAAAuIAABiIgsAAIAAgOQgcAVghAAQgtgBgeghgAgqgpQgRASAAAXQAAAYARASQARAUAZgBQAYAAATgSQASgRAAgaQgBgbgTgRQgRgQgYAAQgXAAgTATg");
	this.shape_8.setTransform(5,9.6,0.474,0.474);

	this.addChild(this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,85.8,14.6);


(lib.logop1black = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag6CNIghgUIAaglQAGAFAMAFQATAJAPAAQAkABAPggQAKgTAAgYQgIAIgQAGQgOAFgKAAQgqAAgdgdQgegbAAgrIAAhkIA2AAIAABkQAAAVAOAOQAPAOASAAQAUAAAOgOQAOgPAAgUIAAhkIA2AAIAABkQAABcgIAgQgRA9g5AOQgPAEgNAAQgaAAgYgLg");
	this.shape.setTransform(15.9,12.1,0.474,0.474);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgKBmQgtgIgegXIAagjQAMAIAWAHQAZAIASgEQAMgDADgIQACgHgIgFQgFgCgegJQgggJgOgJQgagOAAgbIAFgZQAPgcAkgHQASgEAMACQAuADAZAUIgaAjQgTgIgSgDQgSgCgMADQgJADgCAGQgDAFAGAEQAGAEAcAIQAfAJAOAHQAgAQgBAeQgBAVgLAMQgTAYgjAFg");
	this.shape_1.setTransform(25.9,9.6,0.474,0.474);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAwBkIAAhiQAAgTgOgNQgPgPgTAAQgTAAgOAPQgOANAAATIAABiIg2AAIAAhiQAAgpAegeQAegeApAAQAqAAAeAeQAeAeAAApIAABig");
	this.shape_2.setTransform(46.3,9.5,0.474,0.474);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhHBIQgegeAAgqQAAgpAegeQAegeApAAQAqAAAeAeQAeAeAAApQAAAqgeAeQgeAegqAAQgpAAgegegAghghQgPAOAAATQAAAUAPAOQAOAOATAAQAUAAAOgOQAOgOAAgUQAAgTgOgOQgOgPgUAAQgTAAgOAPg");
	this.shape_3.setTransform(35.6,9.6,0.474,0.474);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhHB6QgegeAAgrQAAgqAegcQAegeApAAIAwAAIAAhkIA2AAIAADIQAAArgeAeQgeAegqAAQgpAAgegegAghAPQgPAOAAAUQAAAVAPAOQAOAOATAAQAUAAAOgOQAOgOAAgVIAAgxIgwAAQgTAAgOAPg");
	this.shape_4.setTransform(4.8,7.2,0.474,0.474);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,51.2,19.3);


(lib.CTA = function() {
	this.initialize();

	// Layer 2
	this.text = new cjs.Text("Find out more", "bold 12px 'Helvetica'");
	this.text.textAlign = "center";
	this.text.lineHeight = 14;
	this.text.lineWidth = 100;
	this.text.setTransform(69,174.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AmPCCQg1AAgngnQgmglABg2QgBg0AmgmQAngnA1ABIMeAAQA3gBAlAnQAnAmAAA0QAAA2gnAlQglAng3AAg");
	this.shape.setTransform(69,182);

	this.addChild(this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(16,169,107,26);


(lib.blackbackground = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.QuietText2 = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AsfGZIAAsyIY/AAIAAMyg");
	mask.setTransform(80,277);

	// Layer 1
	this.instance = new lib.text_1();
	this.instance.setTransform(80,435,1,1,0,0,0,80,192);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,243,160,75);


(lib.front = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(19));

	// quiet
	this.instance = new lib.quietText();
	this.instance.setTransform(5,164,1,1,0,0,0,150,125);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({alpha:0.488},6).wait(2).to({alpha:1},0).wait(2).to({alpha:0.488},0).wait(2).to({alpha:1},0).wait(2).to({alpha:0.488},0).wait(2).to({alpha:1},0).wait(23));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AsUPOIAAwsIE/AAIOhAAIFJAAIAAQsgAnVheIAAtvIOhAAIAANvg");
	mask.setTransform(4,193.5);

	// fron
	this.instance_1 = new lib.AB_front();
	this.instance_1.setTransform(-61,93);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(48));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61,96,125,181);


(lib.competitorFan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_26 = function() {
		//this.stop();
		this.gotoAndPlay(15);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(26).call(this.frame_26).wait(21));

	// noisy
	this.instance = new lib.noisy_1();
	this.instance.setTransform(90,81,0.76,0.76,0,0,0,150,125);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).wait(1).to({regX:150.1,regY:124.9,scaleX:1.15,scaleY:1.15,rotation:0.5,x:90.1,alpha:1},0).wait(1).to({scaleX:1,scaleY:1,rotation:0},0).wait(1).to({regX:150,regY:125.1,scaleX:0.85,scaleY:0.85,x:90,y:81.1},0).wait(1).to({scaleX:0.92,scaleY:0.92},0).wait(1).to({regY:125.2,scaleX:1.05,scaleY:1.05,x:89.4,y:80.3},0).wait(1).to({regY:125,scaleX:1,scaleY:1,x:90,y:81},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:89.5,y:80.1},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:89.8,y:79},0).wait(1).to({regX:150.1,regY:124.9,scaleX:1,scaleY:1,x:90.1,y:81},0).wait(1).to({regX:150,regY:125.1,scaleX:0.85,scaleY:0.85,x:90,y:81.1},0).wait(1).to({scaleX:0.92,scaleY:0.92},0).wait(1).to({regY:125,scaleX:0.93,scaleY:0.93,x:89.8,y:79},0).to({_off:true},16).wait(5));

	// Layer 1
	this.instance_1 = new lib.competitor();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(47));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,174,165);


(lib.AB_end_1 = function() {
	this.initialize();

	// logo
	this.instance = new lib.logop1black();
	this.instance.setTransform(34.7,81.1,1,1,0,0,0,25.6,9.7);

	this.instance_1 = new lib.logopart2();
	this.instance_1.setTransform(108.1,78.7,1,1,0,0,0,42.9,7.3);

	// cta
	this.instance_2 = new lib.CTA();
	this.instance_2.setTransform(80,487,1,1,0,0,0,69.5,182);

	// text mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AsfFtIAArYIY/AAIAALYg");
	mask.setTransform(80,150.5);

	// text
	this.instance_3 = new lib.text_1();
	this.instance_3.setTransform(80,236,1,1,0,0,0,80,192);

	this.instance_3.mask = mask;

	// img
	this.instance_4 = new lib.AB_end();
	this.instance_4.setTransform(0,175);

	this.addChild(this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,71.4,160,428.6);


// stage content:
(lib.AB_QuietV_comparitive_SKY = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_237 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(237).call(this.frame_237).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,1).p("EgMaguyIY1AAMAAABdlI41AAg");
	this.shape.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(238));

	// logo p1 black
	this.instance = new lib.logop1black();
	this.instance.setTransform(35.7,574.1,1,1,0,0,0,25.6,9.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(71).to({_off:false},0).to({alpha:1},6).wait(111).to({alpha:0},9).to({_off:true},1).wait(40));

	// logo p2
	this.instance_1 = new lib.logopart2();
	this.instance_1.setTransform(109.1,571.7,1,1,0,0,0,42.9,7.3);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(71).to({_off:false},0).to({alpha:1},6).wait(111).to({alpha:0},9).to({_off:true},1).wait(40));

	// caveat
	this.text = new cjs.Text("¹ Loudness reduction compared to the\n original Dyson Airblade V hand dryer.", "8px 'Helvetica'", "#999999");
	this.text.textAlign = "center";
	this.text.lineHeight = 10;
	this.text.lineWidth = 156;
	this.text.setTransform(79.9,570.8);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(205).to({_off:false},0).wait(33));

	// AB end frmae
	this.instance_2 = new lib.AB_end_1();
	this.instance_2.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_2.alpha = 0.102;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(205).to({_off:false},0).to({alpha:1},11).wait(22));

	// white
	this.instance_3 = new lib.white2();
	this.instance_3.setTransform(80,300,1,1,0,0,0,80,300);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(188).to({_off:false},0).to({alpha:1},9).to({_off:true},2).wait(39));

	// main
	this.instance_4 = new lib.sting();
	this.instance_4.setTransform(80,-302,1,1,0,0,0,80,300);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(53).to({_off:false},0).to({y:900},17).to({_off:true},1).wait(167));

	// front
	this.instance_5 = new lib.front();
	this.instance_5.setTransform(149,210,1,1,0,0,0,73,113);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(71).to({_off:false},0).to({alpha:1},6).wait(31).to({y:374},10,cjs.Ease.get(-1)).to({_off:true},79).wait(41));

	// text2
	this.instance_6 = new lib.QuietText2();
	this.instance_6.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(120).to({_off:false},0).to({alpha:1},6).to({_off:true},71).wait(41));

	// quiet
	this.instance_7 = new lib.quiet_1();
	this.instance_7.setTransform(124.1,206.5,0.622,0.622,0,0,0,50.1,51.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(108).to({_off:false},0).to({regX:50,scaleX:1,scaleY:1,x:149,y:106.5},10,cjs.Ease.get(-1)).to({_off:true},79).wait(41));

	// black
	this.instance_8 = new lib.blackbackground();
	this.instance_8.setTransform(80,300,0.533,2.4,0,0,0,150,125);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(45).to({_off:false},0).to({alpha:1},6,cjs.Ease.get(-0.75)).to({_off:true},18).wait(169));

	// competitor
	this.instance_9 = new lib.competitorFan();
	this.instance_9.setTransform(79,-87,1,1,0,0,0,87,83);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({y:253},15,cjs.Ease.get(0.75)).to({_off:true},38).wait(185));

	// white
	this.instance_10 = new lib.white2();
	this.instance_10.setTransform(80,300,1,1,0,0,0,80,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(238));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(72,130,174,770.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;