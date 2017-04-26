(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 23,
	color: "#000000",
	manifest: [
		{src:"images/blackhero.jpg", id:"blackhero"},
		{src:"images/endText.png", id:"endText"},
		{src:"images/frontview.jpg", id:"frontview"},
		{src:"images/NSF.png", id:"NSF"},
		{src:"images/quietlogo.png", id:"quietlogo"},
		{src:"images/text.png", id:"text"},
		{src:"images/whitehero.jpg", id:"whitehero"}
	]
};



// symbols:



(lib.blackhero = function() {
	this.initialize(img.blackhero);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,350);


(lib.endText = function() {
	this.initialize(img.endText);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.frontview = function() {
	this.initialize(img.frontview);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,146,226);


(lib.NSF = function() {
	this.initialize(img.NSF);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.quietlogo = function() {
	this.initialize(img.quietlogo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,103);


(lib.text = function() {
	this.initialize(img.text);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,400);


(lib.whitehero = function() {
	this.initialize(img.whitehero);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,187,210);


(lib.whit = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.text6 = function() {
	this.initialize();

	// Layer 3
	this.text = new cjs.Text("¹ Loudness reduction compared to the original Dyson Airblade V hand dryer.", "8px 'Helvetica'", "#999999");
	this.text.lineHeight = 10;
	this.text.lineWidth = 279;
	this.text.setTransform(13,181);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(13,181,283,58);


(lib.textforcropping = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.text();
	this.instance.setTransform(0,0,0.5,0.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,200);


(lib.quiet = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.quietlogo();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,100,103);


(lib.nsf = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.NSF();
	this.instance.setTransform(0,0,0.5,0.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.logoabv = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("Ag6CNIghgUIAaglQAGAFAMAFQATAJAPAAQAkABAPggQAKgTAAgYQgIAIgQAGQgOAFgKAAQgqAAgdgdQgegbAAgrIAAhkIA2AAIAABkQAAAVAOAOQAPAOASAAQAUAAAOgOQAOgPAAgUIAAhkIA2AAIAABkQAABcgIAgQgRA9g5AOQgPAEgNAAQgaAAgYgLg");
	this.shape.setTransform(33.6,25.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AgKBmQgtgIgegXIAagjQAMAIAWAHQAZAIASgEQAMgDADgIQACgHgIgFQgFgCgegJQgggJgOgJQgagOAAgbIAFgZQAPgcAkgHQASgEAMACQAuADAZAUIgaAjQgTgIgSgDQgSgCgMADQgJADgCAGQgDAFAGAEQAGAEAcAIQAfAJAOAHQAgAQgBAeQgBAVgLAMQgTAYgjAFg");
	this.shape_1.setTransform(54.7,20.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AAwBkIAAhiQAAgTgOgNQgPgPgTAAQgTAAgOAPQgOANAAATIAABiIg2AAIAAhiQAAgpAegeQAegeApAAQAqAAAeAeQAeAeAAApIAABig");
	this.shape_2.setTransform(97.8,20.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AhHBIQgegeAAgqQAAgpAegeQAegeApAAQAqAAAeAeQAeAeAAApQAAAqgeAeQgeAegqAAQgpAAgegegAghghQgPAOAAATQAAAUAPAOQAOAOATAAQAUAAAOgOQAOgOAAgUQAAgTgOgOQgOgPgUAAQgTAAgOAPg");
	this.shape_3.setTransform(75.1,20.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("AhHB6QgegeAAgrQAAgqAegcQAegeApAAIAwAAIAAhkIA2AAIAADIQAAArgeAeQgeAegqAAQgpAAgegegAghAPQgPAOAAAUQAAAVAPAOQAOAOATAAQAUAAAOgOQAOgOAAgVIAAgxIgwAAQgTAAgOAPg");
	this.shape_4.setTransform(10.3,15.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2564AC").s().p("AiDiZIAzAAIBCCcQAKAYAEAYQAFgWAKgaIBDicIAyAAIiEEzg");
	this.shape_5.setTransform(286.4,15.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#939598").s().p("AhMBHQgcgeAAgpQABgtAhgeQAggdAmAAQAqAAAfAfQAgAfAAAqIgDAPIifAAQAEAUAQAOQAQAPAVgBQAdAAAhgUIAaAgQgpAdgsABQgvgBggghgAgjgxQgQANgEAQIBvAAQgEgPgOgMQgQgPgWgBQgSABgRANg");
	this.shape_6.setTransform(254.6,20.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#939598").s().p("AhHB9QgdgeAAgtQgBgpAggcQAfgdAoAAIA3AAIAAhoIAsAAIAADKQAAArgdAeQgeAegqABQgqAAgdgdgAgmAKQgSARAAAZQAAAcATAQQAQAOAVAAQAYAAARgRQAQgSAAgZIAAg3Ig5AAQgWAAgQAPg");
	this.shape_7.setTransform(230.9,15.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#939598").s().p("AhLBHQgdgfAAgoQAAguAigeQAfgcAnAAQApAAAeAcQAiAfAAAtIAABiIgtAAIAAgOQgaAVgiAAQgtgBgeghgAgqgpQgRASAAAXQAAAYAQASQASAUAZgBQAZAAARgSQASgRAAgaQAAgbgTgRQgSgQgXAAQgYAAgSATg");
	this.shape_8.setTransform(207.1,20.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#939598").s().p("AgVCWIAAkrIArAAIAAErg");
	this.shape_9.setTransform(191.2,15.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#939598").s().p("AhIB6QgcgeAAgqIAAjKIAsAAIAABoIA0AAQArAAAgAeQAeAbAAApQAAAtgdAeQgdAdgrAAQgrgBgdgfgAg4A4QAAATAOARQARASAZABQAagBARgSQAOgRAAgXQAAgXgPgRQgRgRgdAAIg0AAg");
	this.shape_10.setTransform(175.5,15.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#939598").s().p("Ag3BlIAAhhQAAgwAhgeQAbgaApAAIAKAAIAAAoIgRACQgyAJAAA2IAABgg");
	this.shape_11.setTransform(157,20);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#939598").s().p("AgUCLIAAjDIAqAAIAADDgAgQhfQgIgHAAgLQAAgKAIgHQAHgIAJAAQAKAAAHAIQAHAHABAKQgBALgHAHQgHAHgKAAQgJAAgHgHg");
	this.shape_12.setTransform(145.5,16.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#939598").s().p("AhLBHQgcgfgBgoQAAguAigeQAfgcAnAAQApAAAeAcQAiAeAAAuIAABiIgsAAIAAgOQgcAVghAAQgtgBgeghgAgqgpQgRASAAAXQAAAYARASQARAUAZgBQAYAAATgSQASgRAAgaQgBgbgTgRQgRgQgYAAQgXAAgTATg");
	this.shape_13.setTransform(129.1,20.3);

	this.addChild(this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,299.6,40.9);


(lib.front = function() {
	this.initialize();

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ArFRpIAA2KIBkAAIAAAKIS5AAIAAgKIBuAAIAAWKgAphkXIAAgKIAAtHIS5AAIAANHIAAAKg");
	mask.setTransform(81,129);

	// Layer 2
	this.instance = new lib.frontview();
	this.instance.setTransform(8,13);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(10,16,142,223);


(lib.endCopy = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.endText();
	this.instance.setTransform(0,-15,0.5,0.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-15,300,250);


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


(lib.blackbackground = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.AB_frame1 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.blackhero();
	this.instance.setTransform(0,209);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,209,300,350);


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

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A3bCLIAAkWMAu2AAAIAAEWg");
	mask.setTransform(150,158);

	// Layer 1
	this.instance = new lib.textforcropping();
	this.instance.setTransform(150,100,1,1,0,0,0,150,100);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,144,300,28);


(lib.text4 = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A3bD5IAAnxMAu2AAAIAAHxg");
	mask.setTransform(150,120);

	// Layer 1
	this.instance = new lib.textforcropping();
	this.instance.setTransform(150,100,1,1,0,0,0,150,100);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,95,300,50);


(lib.text3 = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A3bCgIAAk/MAu2AAAIAAE/g");
	mask.setTransform(150,81);

	// Layer 1
	this.instance = new lib.textforcropping();
	this.instance.setTransform(150,100,1,1,0,0,0,150,100);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,65,300,32);


(lib.text2 = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A3bCaIAAkzMAu2AAAIAAEzg");
	mask.setTransform(150,50.5);

	// Layer 1
	this.instance = new lib.textforcropping();
	this.instance.setTransform(150,100,1,1,0,0,0,150,100);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,35,300,31);


(lib.text1 = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A3bC4IAAlwMAu2AAAIAAFwg");
	mask.setTransform(150,18.5);

	// Layer 1
	this.instance = new lib.textforcropping();
	this.instance.setTransform(150,100,1,1,0,0,0,150,100);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,37);


// stage content:
(lib.AB_QuietV_announcement_MPU = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_314 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(314).call(this.frame_314).wait(21));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,1).p("A3WzcMAutAAAMAAAAm5MgutAAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(335));

	// text1
	this.instance = new lib.text1();
	this.instance.setTransform(150,323,1,1,0,0,0,150,125);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({alpha:1},5).wait(24).to({alpha:0},4).to({_off:true},1).wait(299));

	// text2
	this.instance_1 = new lib.text2();
	this.instance_1.setTransform(150,295,1,1,0,0,0,150,125);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(39).to({_off:false},0).to({alpha:1},6).wait(31).to({alpha:0},4).to({_off:true},1).wait(254));

	// text3
	this.instance_2 = new lib.text3();
	this.instance_2.setTransform(150,264,1,1,0,0,0,150,125);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(93).to({_off:false},0).to({alpha:1},5).wait(38).to({alpha:0},5).to({_off:true},1).wait(193));

	// text4
	this.instance_3 = new lib.text4();
	this.instance_3.setTransform(150,208,1,1,0,0,0,150,125);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(154).to({_off:false},0).to({alpha:1},6).wait(50).to({alpha:0},5).to({_off:true},1).wait(119));

	// text5
	this.instance_4 = new lib.text5();
	this.instance_4.setTransform(150,175,1,1,0,0,0,150,125);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(231).to({_off:false},0).to({alpha:1},5,cjs.Ease.get(1)).wait(35).to({y:221,alpha:0},6).to({_off:true},1).wait(57));

	// logo
	this.instance_5 = new lib.logoabv();
	this.instance_5.setTransform(15,49.1,0.457,0.457,0,0,0,-0.2,0.4);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(292).to({_off:false},0).to({alpha:1},17).wait(26));

	// End copy
	this.instance_6 = new lib.endCopy();
	this.instance_6.setTransform(150,127,1,1,0,0,0,150,125);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(294).to({_off:false},0).to({alpha:1},16).wait(25));

	// cta
	this.instance_7 = new lib.CTA();
	this.instance_7.setTransform(148,112,1,1,0,0,0,150,125);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(296).to({_off:false},0).to({alpha:1},16).wait(23));

	// legals
	this.instance_8 = new lib.text6();
	this.instance_8.setTransform(150,156,1,1,0,0,0,150,100);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(93).to({_off:false},0).to({alpha:1},5).wait(237));

	// AB end frmae
	this.instance_9 = new lib.AB_end();
	this.instance_9.setTransform(150,-119,1,1,0,0,0,150,125);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(276).to({_off:false},0).to({y:113},16,cjs.Ease.get(1)).wait(43));

	// NSF
	this.instance_10 = new lib.nsf();
	this.instance_10.setTransform(150,-45,1,1,0,0,0,150,125);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(215).to({_off:false},0).to({y:125},13,cjs.Ease.get(-1)).wait(43).to({y:325},11,cjs.Ease.get(-1)).to({_off:true},1).wait(52));

	// AB frame1
	this.instance_11 = new lib.AB_frame1();
	this.instance_11.setTransform(150,-84.5,1,1,0,0,0,150,214.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({y:5.5},74,cjs.Ease.get(1)).to({alpha:0},6).to({_off:true},1).wait(254));

	// front
	this.instance_12 = new lib.front();
	this.instance_12.setTransform(136.1,8.5,1.962,1.962,0,0,0,72.4,113.1);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(74).to({_off:false},0).wait(6).to({regX:73.3,regY:113.5,scaleX:0.97,scaleY:0.97,x:141.5,y:105.1},9,cjs.Ease.get(1)).wait(52).to({y:423.1},11,cjs.Ease.get(-1)).to({_off:true},1).wait(182));

	// quiet
	this.instance_13 = new lib.quiet();
	this.instance_13.setTransform(149,106.5,0.74,0.74,0,0,0,50,51.4);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(141).to({_off:false},0).to({regY:51.5,scaleX:1,scaleY:1},11,cjs.Ease.get(-1)).wait(63).to({y:326.5},13).to({_off:true},1).wait(106));

	// fade
	this.instance_14 = new lib.whit();
	this.instance_14.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(74).to({_off:false},0).wait(261));

	// background
	this.instance_15 = new lib.blackbackground();
	this.instance_15.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(335));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149.5,35,301,350);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;