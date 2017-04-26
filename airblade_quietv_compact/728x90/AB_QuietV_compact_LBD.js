(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 728,
	height: 90,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/alphaV.png", id:"alphaV"},
		{src:"images/quiet.png", id:"quiet"},
		{src:"images/side.jpg", id:"side"},
		{src:"images/text1.png", id:"text1"},
		{src:"images/text2.png", id:"text2"},
		{src:"images/text3.png", id:"text3"},
		{src:"images/text4.png", id:"text4"},
		{src:"images/v_half.jpg", id:"v_half"},
		{src:"images/whitehero.jpg", id:"whitehero"}
	]
};



// symbols:



(lib.alphaV = function() {
	this.initialize(img.alphaV);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,44,69);


(lib.quiet = function() {
	this.initialize(img.quiet);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,66,68);


(lib.side = function() {
	this.initialize(img.side);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,364);


(lib.text1 = function() {
	this.initialize(img.text1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.text2 = function() {
	this.initialize(img.text2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.text3 = function() {
	this.initialize(img.text3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.text4 = function() {
	this.initialize(img.text4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,140);


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


(lib.tint2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#F7F7F8","#F5F5F6","#FAFAFB","#F1F1F2"],[0,0.255,0.816,1],0.1,-216.9,0.1,217).s().p("EjiWAh5MAAAhDxMHEtAAAMAAABDxg");
	this.shape.setTransform(1448.7,217);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,2897.5,434);


(lib.text4_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.text4();
	this.instance.setTransform(0,-2,0.5,0.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-2,300,70);


(lib.text3_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.text3();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.text2_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.text2();
	this.instance.setTransform(0,3);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,3,728,90);


(lib.text1_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.text1();
	this.instance.setTransform(0,2);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,2,728,90);


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


(lib.endwhite = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AylHCIAAuDMAlKAAAIAAODg");
	this.shape.setTransform(119,45);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,238,90);


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


(lib.caveatEnd = function() {
	this.initialize();

	// Layer 2
	this.text = new cjs.Text("¹ Loudness reduction compared to the original Dyson Airblade V hand dryer.", "8px 'Helvetica'", "#999999");
	this.text.lineHeight = 10;
	this.text.lineWidth = 279;
	this.text.setTransform(13.5,68.5);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(13.5,68.5,283,58);


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


(lib.Tween1 = function() {
	this.initialize();

	// Layer 3
	this.instance = new lib.tint2();
	this.instance.setTransform(-1414.8,-36.5,1,1,0,0,0,1448.7,217);

	// Layer 2
	this.instance_1 = new lib.side();
	this.instance_1.setTransform(-364,-182);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2863.5,-253.5,3227.5,435.6);


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


// stage content:
(lib.AB_QuietV_compact_LBD = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_340 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(340).call(this.frame_340).wait(7));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,1).p("Eg4ygG8MBxlAAAIAAN5MhxlAAAg");
	this.shape.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(347));

	// white
	this.instance = new lib.endwhite();
	this.instance.setTransform(609,45,1,1,0,0,0,119,45);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(323).to({_off:false},0).to({alpha:0},15).to({_off:true},1).wait(8));

	// logo black
	this.instance_1 = new lib.logoblack();
	this.instance_1.setTransform(520.8,28.2,1,1,0,0,0,24.7,9.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(323).to({_off:false},0).wait(24));

	// logo airblade
	this.instance_2 = new lib.airbladevlogo();
	this.instance_2.setTransform(591.6,26,0.457,0.457,0,0,0,90.5,15.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(323).to({_off:false},0).wait(24));

	// CTA
	this.instance_3 = new lib.CTA();
	this.instance_3.setTransform(564,59,1,1,0,0,0,69.5,182);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(323).to({_off:false},0).wait(24));

	// alphaV
	this.instance_4 = new lib.alphaV();
	this.instance_4.setTransform(653,10);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(323).to({_off:false},0).wait(24));

	// sting
	this.instance_5 = new lib.half();
	this.instance_5.setTransform(182,-238,1,1,0,0,0,182,627);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(2).to({_off:false},0).to({y:716},26,cjs.Ease.get(0.39)).wait(2).to({alpha:0},14).to({_off:true},1).wait(302));

	// text4
	this.instance_6 = new lib.text4_1();
	this.instance_6.setTransform(364,48,1,1,0,0,0,364,45);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(323).to({_off:false},0).to({alpha:1},15).wait(9));

	// AB end frmae
	this.instance_7 = new lib.AB_end();
	this.instance_7.setTransform(330,-118,1,1,0,0,0,150,125);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(323).to({_off:false},0).to({y:-26},15,cjs.Ease.get(1)).wait(9));

	// text3
	this.instance_8 = new lib.text3_1();
	this.instance_8.setTransform(364,45,1,1,0,0,0,364,45);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(242).to({_off:false},0).to({alpha:1},8).wait(50).to({alpha:0},9).to({_off:true},1).wait(37));

	// text2
	this.instance_9 = new lib.text2_1();
	this.instance_9.setTransform(364,45,1,1,0,0,0,364,45);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(163).to({_off:false},0).wait(67).to({alpha:0},9).to({_off:true},1).wait(107));

	// caveatEnd
	this.instance_10 = new lib.caveatEnd();
	this.instance_10.setTransform(365,52,1,1,0,0,0,364,45);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(323).to({_off:false},0).to({alpha:1},15).wait(9));

	// quiet
	this.instance_11 = new lib.quiet_1();
	this.instance_11.setTransform(379,45,0.765,0.765,0,0,0,33,34);
	this.instance_11.alpha = 0.109;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(163).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},8,cjs.Ease.get(1)).wait(129).to({alpha:0},9).to({_off:true},1).wait(37));

	// text1
	this.instance_12 = new lib.text1_1();
	this.instance_12.setTransform(364,45,1,1,0,0,0,364,45);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(46).to({_off:false},0).to({alpha:1},9).wait(93).to({alpha:0},9).to({_off:true},1).wait(189));

	// background copy
	this.instance_13 = new lib.whitebg();
	this.instance_13.setTransform(364,45,1,1,0,0,0,364,45);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(300).to({_off:false},0).to({alpha:1},9).wait(38));

	// side
	this.instance_14 = new lib.Tween1();
	this.instance_14.setTransform(364,-92);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(31).to({_off:false},0).to({y:180.6},117,cjs.Ease.get(0.5)).to({scaleX:0.31,scaleY:0.31,x:615,y:33.6},23,cjs.Ease.get(-1)).to({_off:true},139).wait(37));

	// black
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape_1.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).to({_off:true},16).wait(331));

	// background
	this.instance_15 = new lib.whitebg();
	this.instance_15.setTransform(364,45,1,1,0,0,0,364,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(347));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(363.5,44.5,729,91);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;