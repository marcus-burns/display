(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 728,
	height: 90,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/dryer.jpg", id:"dryer"},
		{src:"images/frontview.jpg", id:"frontview"},
		{src:"images/quiet.png", id:"quiet"},
		{src:"images/text.png", id:"text"},
		{src:"images/towelDryer.jpg", id:"towelDryer"},
		{src:"images/v_half.jpg", id:"v_half"},
		{src:"images/whitehero.jpg", id:"whitehero"}
	]
};



// symbols:



(lib.dryer = function() {
	this.initialize(img.dryer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,238,226);


(lib.frontview = function() {
	this.initialize(img.frontview);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,143,202);


(lib.quiet = function() {
	this.initialize(img.quiet);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,66,68);


(lib.text = function() {
	this.initialize(img.text);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.towelDryer = function() {
	this.initialize(img.towelDryer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,185,251);


(lib.v_half = function() {
	this.initialize(img.v_half);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,364,863);


(lib.whitehero = function() {
	this.initialize(img.whitehero);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,187,210);


(lib.whitebg = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape.setTransform(364,45);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.whit = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape.setTransform(364,45);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.text_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.text();
	this.instance.setTransform(0,0,0.5,0.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.quiet_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.quiet();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,66,68);


(lib.logoblack = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("Ag6CNIghgUIAaglQAGAFAMAFQATAJAPAAQAkABAPggQAKgTAAgYQgIAIgQAGQgOAFgKAAQgqAAgdgdQgegbAAgrIAAhkIA2AAIAABkQAAAVAOAOQAPAOASAAQAUAAAOgOQAOgPAAgUIAAhkIA2AAIAABkQAABcgIAgQgRA9g5AOQgPAEgNAAQgaAAgYgLg");
	this.shape.setTransform(15.4,11.7,0.457,0.457);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AgKBmQgtgIgegXIAagjQAMAIAWAHQAZAIASgEQAMgDADgIQACgHgIgFQgFgCgegJQgggJgOgJQgagOAAgbIAFgZQAPgcAkgHQASgEAMACQAuADAZAUIgaAjQgTgIgSgDQgSgCgMADQgJADgCAGQgDAFAGAEQAGAEAcAIQAfAJAOAHQAgAQgBAeQgBAVgLAMQgTAYgjAFg");
	this.shape_1.setTransform(25,9.3,0.457,0.457);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AAwBkIAAhiQAAgTgOgNQgPgPgTAAQgTAAgOAPQgOANAAATIAABiIg2AAIAAhiQAAgpAegeQAegeApAAQAqAAAeAeQAeAeAAApIAABig");
	this.shape_2.setTransform(44.7,9.2,0.457,0.457);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AhHBIQgegeAAgqQAAgpAegeQAegeApAAQAqAAAeAeQAeAeAAApQAAAqgeAeQgeAegqAAQgpAAgegegAghghQgPAOAAATQAAAUAPAOQAOAOATAAQAUAAAOgOQAOgOAAgUQAAgTgOgOQgOgPgUAAQgTAAgOAPg");
	this.shape_3.setTransform(34.3,9.3,0.457,0.457);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("AhHB6QgegeAAgrQAAgqAegcQAegeApAAIAwAAIAAhkIA2AAIAADIQAAArgeAeQgeAegqAAQgpAAgegegAghAPQgPAOAAAUQAAAVAPAOQAOAOATAAQAUAAAOgOQAOgOAAgVIAAgxIgwAAQgTAAgOAPg");
	this.shape_4.setTransform(4.7,7,0.457,0.457);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,49.4,18.7);


(lib.halve = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.v_half();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,364,863);


(lib.front = function() {
	this.initialize();

	// Layer 4
	this.instance = new lib.frontview();
	this.instance.setTransform(132.7,43.9,0.571,0.571);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(132.7,43.9,81.6,115.3);


(lib.towelHolder = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.towelDryer();
	this.instance.setTransform(12.8,66.5,0.412,0.412);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(12.8,66.5,76.3,103.5);


(lib.CTA = function() {
	this.initialize();

	// Layer 3
	this.text = new cjs.Text("Find out more", "bold 12px 'Helvetica'");
	this.text.textAlign = "center";
	this.text.lineHeight = 14;
	this.text.lineWidth = 100;
	this.text.setTransform(69,174.6);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AmPCCQg1AAgngnQgmglABg2QgBg0AmgmQAngnA1ABIMeAAQA3gBAlAnQAnAmAAA0QAAA2gnAlQglAng3AAg");
	this.shape.setTransform(69,182);

	this.addChild(this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(16,169,107,26);


(lib.competitorFan = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.dryer();
	this.instance.setTransform(96.9,57.2,0.438,0.438);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(96.9,57.2,104.3,99);


(lib.caveat2 = function() {
	this.initialize();

	// Layer 2
	this.text = new cjs.Text("² For calculations visit www.dyson.co.uk/calcs", "8px 'Helvetica'", "#AAAAAA");
	this.text.textAlign = "center";
	this.text.lineHeight = 10;
	this.text.lineWidth = 556;
	this.text.setTransform(637.9,73);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(360,73,560,58);


(lib.caveatb = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("¹ Loudness reduction compared to the original Dyson Airblade V hand dryer.", "8px 'Helvetica'", "#AAAAAA");
	this.text.lineHeight = 10;
	this.text.lineWidth = 282;
	this.text.setTransform(7,0);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(7,0,286,58);


(lib.airbladevlogo = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2564AC").s().p("AiDiZIAzAAIBCCcQAKAYAEAYQAFgWAKgaIBDicIAyAAIiEEzg");
	this.shape.setTransform(167.8,15.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#939598").s().p("AhMBHQgcgeAAgpQABgtAhgeQAggdAmAAQAqAAAfAfQAgAfAAAqIgDAPIifAAQAEAUAQAOQAQAPAVgBQAdAAAhgUIAaAgQgpAdgsABQgvgBggghgAgjgxQgQANgEAQIBvAAQgEgPgOgMQgQgPgWgBQgSABgRANg");
	this.shape_1.setTransform(136.1,20.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#939598").s().p("AhHB9QgdgeAAgtQgBgpAggcQAfgdAoAAIA3AAIAAhoIAsAAIAADKQAAArgdAeQgeAegqABQgqAAgdgdgAgmAKQgSARAAAZQAAAcATAQQAQAOAVAAQAYAAARgRQAQgSAAgZIAAg3Ig5AAQgWAAgQAPg");
	this.shape_2.setTransform(112.3,15.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#939598").s().p("AhLBHQgdgfAAgoQAAguAigeQAfgcAnAAQApAAAeAcQAiAfAAAtIAABiIgtAAIAAgOQgaAVgiAAQgtgBgeghgAgqgpQgRASAAAXQAAAYAQASQASAUAZgBQAZAAARgSQASgRAAgaQAAgbgTgRQgSgQgXAAQgYAAgSATg");
	this.shape_3.setTransform(88.6,20.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#939598").s().p("AgVCWIAAkrIArAAIAAErg");
	this.shape_4.setTransform(72.6,15.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#939598").s().p("AhIB6QgcgeAAgqIAAjKIAsAAIAABoIA0AAQArAAAgAeQAeAbAAApQAAAtgdAeQgdAdgrAAQgrgBgdgfgAg4A4QAAATAOARQARASAZABQAagBARgSQAOgRAAgXQAAgXgPgRQgRgRgdAAIg0AAg");
	this.shape_5.setTransform(57,15.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#939598").s().p("Ag3BlIAAhhQAAgwAhgeQAbgaApAAIAKAAIAAAoIgRACQgyAJAAA2IAABgg");
	this.shape_6.setTransform(38.5,20);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#939598").s().p("AgUCLIAAjDIAqAAIAADDgAgQhfQgIgHAAgLQAAgKAIgHQAHgIAJAAQAKAAAHAIQAHAHABAKQgBALgHAHQgHAHgKAAQgJAAgHgHg");
	this.shape_7.setTransform(26.9,16.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#939598").s().p("AhLBHQgcgfgBgoQAAguAigeQAfgcAnAAQApAAAeAcQAiAeAAAuIAABiIgsAAIAAgOQgcAVghAAQgtgBgeghgAgqgpQgRASAAAXQAAAYARASQARAUAZgBQAYAAATgSQASgRAAgaQgBgbgTgRQgRgQgYAAQgXAAgTATg");
	this.shape_8.setTransform(10.5,20.3);

	this.addChild(this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,181.1,30.9);


(lib.AB_end = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.whitehero();
	this.instance.setTransform(109,31);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(109,31,187,210);


(lib.text5 = function() {
	this.initialize();

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A3bFUIAAqnMAu2AAAIAAKng");
	mask.setTransform(150,37);

	// Layer 2
	this.instance = new lib.text_1();
	this.instance.setTransform(152,136,1,1,0,0,0,150,125);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(2,11,298,60);


(lib.text3 = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AyvFFIAAqIMAlfAAAIAAKIg");
	mask.setTransform(120,46.5);

	// Layer 1
	this.instance = new lib.text_1();
	this.instance.setTransform(153,77,1,1,0,0,0,150,125);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(3,14,237,65);


(lib.peryearblack = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAATNIAAjlIPnAAIAADlg");
	mask.setTransform(100,123);

	// Layer 1
	this.instance = new lib.text_1();
	this.instance.setTransform(150,122,1,1,0,0,0,150,125);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(100,223,100,23);


(lib.peryear = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAETNIAAjlIPoAAIAADlg");
	mask.setTransform(100.5,123);

	// Layer 1
	this.instance = new lib.text_1();
	this.instance.setTransform(51,122,1,1,0,0,0,150,125);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(101,223,100,23);


(lib.half = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B6C1C5").s().p("Eg43AHzIAAvmMBxvAAAIAAPmg");
	this.shape.setTransform(364,-40);

	// Layer 2
	this.instance = new lib.halve();
	this.instance.setTransform(546,627,1,1,0,0,180,182,627);

	// Layer 1
	this.instance_1 = new lib.halve();
	this.instance_1.setTransform(182,627,1,1,0,0,0,182,627);

	this.addChild(this.instance_1,this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-90,728,953);


(lib.cost3 = function() {
	this.initialize();

	// per year
	this.instance = new lib.peryearblack();
	this.instance.setTransform(250,89,1,1,0,0,0,150,125);

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnyBzIAAjlIPmAAIAADlg");
	mask.setTransform(246,175.5);

	// Layer 2
	this.instance_1 = new lib.text_1();
	this.instance_1.setTransform(250,149,1,1,0,0,0,150,125);

	this.instance_1.mask = mask;

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(100,-39,300,250);


(lib.cost2 = function() {
	this.initialize();

	// per year
	this.instance = new lib.peryear();
	this.instance.setTransform(153,89,1,1,0,0,0,150,125);

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnzBzIAAjlIPnAAIAADlg");
	mask.setTransform(153,175.5);

	// Layer 1
	this.instance_1 = new lib.text_1();
	this.instance_1.setTransform(153,119,1,1,0,0,0,150,125);

	this.instance_1.mask = mask;

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-96,-39,300,250);


(lib.cost1 = function() {
	this.initialize();

	// per year
	this.instance = new lib.peryear();
	this.instance.setTransform(53,89,1,1,0,0,0,150,125);

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnzBzIAAjlIPmAAIAADlg");
	mask.setTransform(53,175.5);

	// Layer 1
	this.instance_1 = new lib.text_1();
	this.instance_1.setTransform(53,89,1,1,0,0,0,150,125);

	this.instance_1.mask = mask;

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-196,-39,300,250);


// stage content:
(lib.AB_QuietV_costs_LBD = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_303 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(303).call(this.frame_303).wait(3));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,1).p("Eg4ygG8MBxlAAAIAAN5MhxlAAAg");
	this.shape.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(306));

	// sting
	this.instance = new lib.half();
	this.instance.setTransform(182,-238,1,1,0,0,0,182,627);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({y:716},26,cjs.Ease.get(0.39)).wait(2).to({alpha:0},10).to({_off:true},1).wait(265));

	// logo black
	this.instance_1 = new lib.logoblack();
	this.instance_1.setTransform(591.8,47.2,1,1,0,0,0,24.7,9.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(17).to({_off:false},0).wait(226).to({alpha:0},10).to({_off:true},1).wait(32).to({_off:false,x:520.8,y:28.2},0).to({alpha:1},10).wait(10));

	// logo airblade
	this.instance_2 = new lib.airbladevlogo();
	this.instance_2.setTransform(662.6,45,0.457,0.457,0,0,0,90.5,15.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(17).to({_off:false},0).wait(226).to({alpha:0},10).to({_off:true},1).wait(32).to({_off:false,x:591.6,y:26},0).to({alpha:1},10).wait(10));

	// CTA
	this.instance_3 = new lib.CTA();
	this.instance_3.setTransform(564,59,1,1,0,0,0,69.5,182);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(286).to({_off:false},0).to({alpha:1},10).wait(10));

	// alphaV
	this.instance_4 = new lib.front();
	this.instance_4.setTransform(598.2,59.4,0.787,0.787,0,0,0,73,113);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(286).to({_off:false},0).to({alpha:1},10).wait(10));

	// AB end frmae
	this.instance_5 = new lib.AB_end();
	this.instance_5.setTransform(330,-118,1,1,0,0,0,150,125);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(262).to({_off:false},0).to({y:-26},16,cjs.Ease.get(1)).wait(28));

	// text5
	this.instance_6 = new lib.text5();
	this.instance_6.setTransform(364,45,1,1,0,0,0,364,45);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(269).to({_off:false},0).to({alpha:1},10).wait(27));

	// white
	this.instance_7 = new lib.whitebg();
	this.instance_7.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(243).to({_off:false},0).to({alpha:1},10).wait(53));

	// quiet mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_176 = new cjs.Graphics().p("AsMG8IAAt3ITWAAIAAKlIFDDSg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(176).to({graphics:mask_graphics_176,x:343.1,y:45}).wait(130));

	// quiet
	this.instance_8 = new lib.quiet_1();
	this.instance_8.setTransform(635,52,0.696,0.696,0,0,0,364,45);
	this.instance_8._off = true;

	this.instance_8.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(176).to({_off:false},0).to({scaleX:1,scaleY:1,x:645,y:56},10,cjs.Ease.get(1)).to({_off:true},67).wait(53));

	// caveat
	this.instance_9 = new lib.caveat2();
	this.instance_9.setTransform(364,49,1,1,0,0,0,364,45);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.instance_10 = new lib.caveatb();
	this.instance_10.setTransform(154,104,1,1,0,0,0,143,29);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(50).to({_off:false},0).to({alpha:1},7).to({_off:true},196).wait(53));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(270).to({_off:false},0).to({alpha:1},7).wait(29));

	// cost3
	this.instance_11 = new lib.cost3();
	this.instance_11.setTransform(412,-6.7,0.787,0.787,0,0,0,150,125);
	this.instance_11.alpha = 0.141;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(115).to({_off:false},0).to({scaleX:1,scaleY:1,x:391,y:-18,alpha:1},6).to({_off:true},132).wait(53));

	// cost2
	this.instance_12 = new lib.cost2();
	this.instance_12.setTransform(316,-6.7,0.787,0.787,0,0,0,150,125);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(82).to({_off:false},0).to({scaleX:1,scaleY:1,y:-18,alpha:1},7).wait(72).to({scaleX:0.79,scaleY:0.79,y:221.4},11,cjs.Ease.get(-0.5)).to({_off:true},1).wait(133));

	// cost1
	this.instance_13 = new lib.cost1();
	this.instance_13.setTransform(214,-6.7,0.787,0.787,0,0,0,150,125);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(50).to({_off:false},0).to({scaleX:1,scaleY:1,x:235,y:-18,alpha:1},7).wait(104).to({scaleX:0.79,scaleY:0.79,x:214,y:221.4},11,cjs.Ease.get(-0.5)).to({_off:true},1).wait(133));

	// competitor
	this.instance_14 = new lib.competitorFan();
	this.instance_14.setTransform(236,-41.2,0.787,0.787,0,0,0,150,125);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(72).to({_off:false},0).to({y:55.4},10).wait(79).to({y:283.5},11,cjs.Ease.get(-0.5)).to({_off:true},1).wait(133));

	// towel
	this.instance_15 = new lib.towelHolder();
	this.instance_15.setTransform(136,-45.2,0.787,0.787,0,0,0,150,125);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(40).to({_off:false},0).to({y:51.5},10).wait(111).to({y:279.6},11,cjs.Ease.get(-0.5)).to({_off:true},1).wait(133));

	// front
	this.instance_16 = new lib.front();
	this.instance_16.setTransform(332.2,-141.2,0.787,0.787,0,0,0,73,113);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(103).to({_off:false},0).to({y:59.4},12,cjs.Ease.get(1)).to({_off:true},138).wait(53));

	// text3
	this.instance_17 = new lib.text3();
	this.instance_17.setTransform(364,45,1,1,0,0,0,364,45);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(178).to({_off:false},0).to({alpha:1},11).to({_off:true},64).wait(53));

	// fade
	this.instance_18 = new lib.whit();
	this.instance_18.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(101).to({_off:false},0).to({_off:true},152).wait(53));

	// black
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape_1.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).to({_off:true},16).wait(290));

	// background
	this.instance_19 = new lib.whitebg();
	this.instance_19.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(306));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(363.5,44.5,729,91);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;