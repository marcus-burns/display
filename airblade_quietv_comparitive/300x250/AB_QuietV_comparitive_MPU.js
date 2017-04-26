(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 23,
	color: "#FFFFFF",
	manifest: [
		{src:"images/AB_Quiet_end.jpg", id:"AB_Quiet_end"},
		{src:"images/AB_Quiet_V_crop.jpg", id:"AB_Quiet_V_crop"},
		{src:"images/competitor.jpg", id:"competitor"},
		{src:"images/endText.png", id:"endText"},
		{src:"images/frontview.jpg", id:"frontview"},
		{src:"images/noisy.png", id:"noisy"},
		{src:"images/quiet.png", id:"quiet"},
		{src:"images/quietlogo.png", id:"quietlogo"}
	]
};



// symbols:



(lib.AB_Quiet_end = function() {
	this.initialize(img.AB_Quiet_end);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,185,222);


(lib.AB_Quiet_V_crop = function() {
	this.initialize(img.AB_Quiet_V_crop);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,356);


(lib.competitor = function() {
	this.initialize(img.competitor);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.endText = function() {
	this.initialize(img.endText);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.frontview = function() {
	this.initialize(img.frontview);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,146,226);


(lib.noisy = function() {
	this.initialize(img.noisy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.quiet = function() {
	this.initialize(img.quiet);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.quietlogo = function() {
	this.initialize(img.quietlogo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,103);


(lib.txt = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.endText();
	this.instance.setTransform(0,0,0.5,0.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.text4 = function() {
	this.initialize();

	// Layer 3
	this.text = new cjs.Text("¹ Loudness reduction compared to the original Dyson Airblade V hand dryer.", "8px 'Helvetica'", "#999999");
	this.text.lineHeight = 10;
	this.text.lineWidth = 279;
	this.text.setTransform(11.5,184);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(11.5,184,283,58);


(lib.quietText = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.quiet();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.quiet_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.quietlogo();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,100,103);


(lib.noisy_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.noisy();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.logo = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("Ag6CNIghgUIAaglQAGAFAMAFQATAJAPAAQAkABAPggQAKgTAAgYQgIAIgQAGQgOAFgKAAQgqAAgdgdQgegbAAgrIAAhkIA2AAIAABkQAAAVAOAOQAPAOASAAQAUAAAOgOQAOgPAAgUIAAhkIA2AAIAABkQAABcgIAgQgRA9g5AOQgPAEgNAAQgaAAgYgLg");
	this.shape.setTransform(30.9,74.9,0.465,0.465);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AgKBmQgtgIgegXIAagjQAMAIAWAHQAZAIASgEQAMgDADgIQACgHgIgFQgFgCgegJQgggJgOgJQgagOAAgbIAFgZQAPgcAkgHQASgEAMACQAuADAZAUIgaAjQgTgIgSgDQgSgCgMADQgJADgCAGQgDAFAGAEQAGAEAcAIQAfAJAOAHQAgAQgBAeQgBAVgLAMQgTAYgjAFg");
	this.shape_1.setTransform(40.7,72.4,0.465,0.465);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AAwBkIAAhiQAAgTgOgNQgPgPgTAAQgTAAgOAPQgOANAAATIAABiIg2AAIAAhiQAAgpAegeQAegeApAAQAqAAAeAeQAeAeAAApIAABig");
	this.shape_2.setTransform(60.7,72.3,0.465,0.465);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AhHBIQgegeAAgqQAAgpAegeQAegeApAAQAqAAAeAeQAeAeAAApQAAAqgeAeQgeAegqAAQgpAAgegegAghghQgPAOAAATQAAAUAPAOQAOAOATAAQAUAAAOgOQAOgOAAgUQAAgTgOgOQgOgPgUAAQgTAAgOAPg");
	this.shape_3.setTransform(50.2,72.4,0.465,0.465);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("AhHB6QgegeAAgrQAAgqAegcQAegeApAAIAwAAIAAhkIA2AAIAADIQAAArgeAeQgeAegqAAQgpAAgegegAghAPQgPAOAAAUQAAAVAPAOQAOAOATAAQAUAAAOgOQAOgOAAgVIAAgxIgwAAQgTAAgOAPg");
	this.shape_4.setTransform(20,70.1,0.465,0.465);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2564AC").s().p("AiDiZIAzAAIBCCcQAKAYAEAYQAFgWAKgaIBDicIAyAAIiEEzg");
	this.shape_5.setTransform(148.5,70.2,0.465,0.465);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#939598").s().p("AhMBHQgcgeAAgpQABgtAhgeQAggdAmAAQAqAAAfAfQAgAfAAAqIgDAPIifAAQAEAUAQAOQAQAPAVgBQAdAAAhgUIAaAgQgpAdgsABQgvgBggghgAgjgxQgQANgEAQIBvAAQgEgPgOgMQgQgPgWgBQgSABgRANg");
	this.shape_6.setTransform(133.7,72.5,0.465,0.465);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#939598").s().p("AhHB9QgdgeAAgtQgBgpAggcQAfgdAoAAIA3AAIAAhoIAsAAIAADKQAAArgdAeQgeAegqABQgqAAgdgdgAgmAKQgSARAAAZQAAAcATAQQAQAOAVAAQAYAAARgRQAQgSAAgZIAAg3Ig5AAQgWAAgQAPg");
	this.shape_7.setTransform(122.6,70.2,0.465,0.465);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#939598").s().p("AhLBHQgdgfAAgoQAAguAigeQAfgcAnAAQApAAAeAcQAiAfAAAtIAABiIgtAAIAAgOQgaAVgiAAQgtgBgeghgAgqgpQgRASAAAXQAAAYAQASQASAUAZgBQAZAAARgSQASgRAAgaQAAgbgTgRQgSgQgXAAQgYAAgSATg");
	this.shape_8.setTransform(111.6,72.5,0.465,0.465);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#939598").s().p("AgVCWIAAkrIArAAIAAErg");
	this.shape_9.setTransform(104.2,70,0.465,0.465);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#939598").s().p("AhIB6QgcgeAAgqIAAjKIAsAAIAABoIA0AAQArAAAgAeQAeAbAAApQAAAtgdAeQgdAdgrAAQgrgBgdgfgAg4A4QAAATAOARQARASAZABQAagBARgSQAOgRAAgXQAAgXgPgRQgRgRgdAAIg0AAg");
	this.shape_10.setTransform(96.9,70.2,0.465,0.465);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#939598").s().p("Ag3BlIAAhhQAAgwAhgeQAbgaApAAIAKAAIAAAoIgRACQgyAJAAA2IAABgg");
	this.shape_11.setTransform(88.3,72.3,0.465,0.465);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#939598").s().p("AgUCLIAAjDIAqAAIAADDgAgQhfQgIgHAAgLQAAgKAIgHQAHgIAJAAQAKAAAHAIQAHAHABAKQgBALgHAHQgHAHgKAAQgJAAgHgHg");
	this.shape_12.setTransform(82.9,70.6,0.465,0.465);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#939598").s().p("AhLBHQgcgfgBgoQAAguAigeQAfgcAnAAQApAAAeAcQAiAeAAAuIAABiIgsAAIAAgOQgcAVghAAQgtgBgeghgAgqgpQgRASAAAXQAAAYARASQARAUAZgBQAYAAATgSQASgRAAgaQgBgbgTgRQgRgQgYAAQgXAAgTATg");
	this.shape_13.setTransform(75.3,72.5,0.465,0.465);

	this.addChild(this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(15.2,63,139.5,19);


(lib.half = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.AB_Quiet_V_crop();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,150,356);


(lib.front = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Aq2RMIAA2BIBaAAIS5AAIBaAAIAAWBgApck1IAAsWIS5AAIAAMWg");
	mask.setTransform(72.5,112);

	// Layer 3
	this.instance = new lib.frontview();

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(3,2,139,220);


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


(lib.competitorFan = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.competitor();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.blackbackground = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.AB_end = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.AB_Quiet_end();
	this.instance.setTransform(113,14);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(113,14,185,222);


(lib.QuietText2 = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A3bF3IAArtMAu2AAAIAALtg");
	mask.setTransform(150,192.5);

	// Layer 1
	this.instance = new lib.txt();
	this.instance.setTransform(150,116,1,1,0,0,0,150,125);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,155,300,75);


(lib.noisyanimationtext = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_11 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(11).call(this.frame_11).wait(241));

	// noisy
	this.instance = new lib.noisy_1();
	this.instance.setTransform(186.8,162.7,1.234,1.234,0,0,0,150.1,125.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:124.9,scaleX:1.35,scaleY:1.35,rotation:0.4,x:187.4,y:163.6},0).wait(1).to({regX:150,scaleX:1.17,scaleY:1.17,rotation:0,x:187.3},0).wait(1).to({regY:125.1,scaleX:0.99,scaleY:0.99,x:187.4,y:163.7},0).wait(1).to({regY:125.2,scaleX:1.08,scaleY:1.08,y:163.8},0).wait(1).to({regX:150.1,scaleX:1.23,scaleY:1.23,x:186.8,y:162.7},0).wait(1).to({regX:150,regY:125,scaleX:1.17,scaleY:1.17,x:187.4,y:163.6},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:186.8,y:162.6},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:187,y:165.3},0).wait(1).to({regY:125.1,scaleX:0.99,scaleY:0.99,x:187.4,y:163.7},0).wait(1).to({regY:125.2,scaleX:1.08,scaleY:1.08,y:163.8},0).to({_off:true},40).wait(202));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,8.3,370.2,308.5);


(lib.intro = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A3bXbMAAAgu1MAu2AAAMAAAAu1g");
	this.shape.setTransform(150,968);

	// Layer 1
	this.instance = new lib.half();
	this.instance.setTransform(225,642,1,1,0,0,180,75,178);

	this.instance_1 = new lib.half();
	this.instance_1.setTransform(75,642,1,1,0,0,0,75,178);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#B6C1C5","#FFFFFF"],[0,1],0,150,0,-150).s().p("A3bXcMAAAgu2MAu2AAAMAAAAu2g");
	this.shape_1.setTransform(150,317);

	this.addChild(this.shape_1,this.instance_1,this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,167,300,951);


(lib.endCopy = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AtWFtIAArYIatAAIAALYg");
	mask.setTransform(85.5,124.5);

	// Layer 1
	this.instance = new lib.txt();
	this.instance.setTransform(150,125,1,1,0,0,0,150,125);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,88,171,73);


// stage content:
(lib.AB_QuietV_comparitive_MPU = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_252 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(252).call(this.frame_252).wait(9));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,1).p("A3WzcMAutAAAMAAAAm5MgutAAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(261));

	// legals
	this.instance = new lib.text4();
	this.instance.setTransform(150,151,1,1,0,0,0,150,100);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(236).to({_off:false},0).to({alpha:1},13).wait(12));

	// CTA
	this.instance_1 = new lib.CTA();
	this.instance_1.setTransform(150,110,1,1,0,0,0,150,125);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(236).to({_off:false},0).to({alpha:1},13).wait(12));

	// End copy
	this.instance_2 = new lib.endCopy();
	this.instance_2.setTransform(150,110,1,1,0,0,0,150,125);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(236).to({_off:false},0).to({alpha:1},13).wait(12));

	// quiet text
	this.instance_3 = new lib.QuietText2();
	this.instance_3.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(147).to({_off:false},0).to({alpha:1},8).wait(45).to({y:375},11,cjs.Ease.get(-1)).wait(50));

	// quiet
	this.instance_4 = new lib.quietText();
	this.instance_4.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(86).to({_off:false},0).to({alpha:0.75},6).wait(2).to({alpha:0.488},0).wait(2).to({alpha:1},0).wait(2).to({alpha:0.488},0).wait(2).to({alpha:1},0).wait(30).to({y:375},15,cjs.Ease.get(-1)).wait(116));

	// front
	this.instance_5 = new lib.front();
	this.instance_5.setTransform(149,-120,1,1,0,0,0,73,113);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(71).to({_off:false},0).to({y:140},12,cjs.Ease.get(1)).wait(47).to({y:370},15,cjs.Ease.get(-1)).to({_off:true},1).wait(115));

	// AB logo
	this.instance_6 = new lib.logo();
	this.instance_6.setTransform(150,110,1,1,0,0,0,150,125);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(236).to({_off:false},0).to({alpha:1},13).wait(12));

	// AB end frmae
	this.instance_7 = new lib.AB_end();
	this.instance_7.setTransform(150,-38,1,1,0,0,0,150,125);
	this.instance_7.alpha = 0.191;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(214).to({_off:false},0).to({y:125,alpha:1},11,cjs.Ease.get(1)).wait(36));

	// quiet
	this.instance_8 = new lib.quiet_1();
	this.instance_8.setTransform(149,106.5,0.74,0.74,0,0,0,50,51.4);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(130).to({_off:false},0).to({regY:51.5,scaleX:1,scaleY:1},15).wait(55).to({y:326.5},11,cjs.Ease.get(-1)).wait(50));

	// intro
	this.instance_9 = new lib.intro();
	this.instance_9.setTransform(150,-816.5,1,1,0,0,0,150,286.5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(49).to({_off:false},0).to({y:286.5},20,cjs.Ease.get(0.25)).to({_off:true},1).wait(191));

	// noisy
	this.instance_10 = new lib.noisyanimationtext();
	this.instance_10.setTransform(149.7,114.6,0.821,0.821,0,0,0,186.1,155.1);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(14).to({_off:false},0).to({_off:true},38).wait(209));

	// competitor
	this.instance_11 = new lib.competitorFan();
	this.instance_11.setTransform(150,-125,1,1,0,0,0,150,125);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({_off:false},0).to({y:125},10).to({_off:true},48).wait(202));

	// background
	this.instance_12 = new lib.blackbackground();
	this.instance_12.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(261));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149.5,124.5,301,251);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;