(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 23,
	color: "#000000",
	manifest: [
		{src:"images/AB_Quiet_end.jpg", id:"AB_Quiet_end"},
		{src:"images/AB_Quiet_V_crop.jpg", id:"AB_Quiet_V_crop"},
		{src:"images/endText.png", id:"endText"},
		{src:"images/frontview.jpg", id:"frontview"},
		{src:"images/quietlogo.png", id:"quietlogo"},
		{src:"images/sideview.jpg", id:"sideview"},
		{src:"images/text.png", id:"text"}
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
p.nominalBounds = new cjs.Rectangle(0,0,300,575);


(lib.endText = function() {
	this.initialize(img.endText);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.frontview = function() {
	this.initialize(img.frontview);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,146,226);


(lib.quietlogo = function() {
	this.initialize(img.quietlogo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,103);


(lib.sideview = function() {
	this.initialize(img.sideview);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,382);


(lib.text = function() {
	this.initialize(img.text);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,400);


(lib.text4 = function() {
	this.initialize();

	// Layer 3
	this.text = new cjs.Text("¹ Loudness reduction compared to the original Dyson Airblade V hand dryer.", "8px 'Helvetica'", "#999999");
	this.text.lineHeight = 10;
	this.text.lineWidth = 279;
	this.text.setTransform(12.5,184);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(12.5,184,283,58);


(lib.text_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.text();
	this.instance.setTransform(0,0,0.5,0.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,200);


(lib.sideview_1 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(241,241,241,0)","#FFFFFF"],[0,0.871],0,-50,0,50).s().p("A3bH0IAAvmMAu2AAAIAAPmg");
	this.shape.setTransform(150,335);

	// Layer 1
	this.instance = new lib.sideview();

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,385);


(lib.quiet = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.quietlogo();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,100,103);


(lib.logo = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("Ag6CNIghgUIAaglQAGAFAMAFQATAJAPAAQAkABAPggQAKgTAAgYQgIAIgQAGQgOAFgKAAQgqAAgdgdQgegbAAgrIAAhkIA2AAIAABkQAAAVAOAOQAPAOASAAQAUAAAOgOQAOgPAAgUIAAhkIA2AAIAABkQAABcgIAgQgRA9g5AOQgPAEgNAAQgaAAgYgLg");
	this.shape.setTransform(31.8,75.8,0.469,0.469);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AgKBmQgtgIgegXIAagjQAMAIAWAHQAZAIASgEQAMgDADgIQACgHgIgFQgFgCgegJQgggJgOgJQgagOAAgbIAFgZQAPgcAkgHQASgEAMACQAuADAZAUIgaAjQgTgIgSgDQgSgCgMADQgJADgCAGQgDAFAGAEQAGAEAcAIQAfAJAOAHQAgAQgBAeQgBAVgLAMQgTAYgjAFg");
	this.shape_1.setTransform(41.7,73.2,0.469,0.469);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AAwBkIAAhiQAAgTgOgNQgPgPgTAAQgTAAgOAPQgOANAAATIAABiIg2AAIAAhiQAAgpAegeQAegeApAAQAqAAAeAeQAeAeAAApIAABig");
	this.shape_2.setTransform(61.9,73.2,0.469,0.469);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AhHBIQgegeAAgqQAAgpAegeQAegeApAAQAqAAAeAeQAeAeAAApQAAAqgeAeQgeAegqAAQgpAAgegegAghghQgPAOAAATQAAAUAPAOQAOAOATAAQAUAAAOgOQAOgOAAgUQAAgTgOgOQgOgPgUAAQgTAAgOAPg");
	this.shape_3.setTransform(51.2,73.3,0.469,0.469);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("AhHB6QgegeAAgrQAAgqAegcQAegeApAAIAwAAIAAhkIA2AAIAADIQAAArgeAeQgeAegqAAQgpAAgegegAghAPQgPAOAAAUQAAAVAPAOQAOAOATAAQAUAAAOgOQAOgOAAgVIAAgxIgwAAQgTAAgOAPg");
	this.shape_4.setTransform(20.8,70.9,0.469,0.469);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2564AC").s().p("AiDiZIAzAAIBCCcQAKAYAEAYQAFgWAKgaIBDicIAyAAIiEEzg");
	this.shape_5.setTransform(150.2,71,0.469,0.469);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#939598").s().p("AhMBHQgcgeAAgpQABgtAhgeQAggdAmAAQAqAAAfAfQAgAfAAAqIgDAPIifAAQAEAUAQAOQAQAPAVgBQAdAAAhgUIAaAgQgpAdgsABQgvgBggghgAgjgxQgQANgEAQIBvAAQgEgPgOgMQgQgPgWgBQgSABgRANg");
	this.shape_6.setTransform(135.4,73.3,0.469,0.469);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#939598").s().p("AhHB9QgdgeAAgtQgBgpAggcQAfgdAoAAIA3AAIAAhoIAsAAIAADKQAAArgdAeQgeAegqABQgqAAgdgdgAgmAKQgSARAAAZQAAAcATAQQAQAOAVAAQAYAAARgRQAQgSAAgZIAAg3Ig5AAQgWAAgQAPg");
	this.shape_7.setTransform(124.2,71,0.469,0.469);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#939598").s().p("AhLBHQgdgfAAgoQAAguAigeQAfgcAnAAQApAAAeAcQAiAfAAAtIAABiIgtAAIAAgOQgaAVgiAAQgtgBgeghgAgqgpQgRASAAAXQAAAYAQASQASAUAZgBQAZAAARgSQASgRAAgaQAAgbgTgRQgSgQgXAAQgYAAgSATg");
	this.shape_8.setTransform(113.1,73.3,0.469,0.469);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#939598").s().p("AgVCWIAAkrIArAAIAAErg");
	this.shape_9.setTransform(105.6,70.8,0.469,0.469);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#939598").s().p("AhIB6QgcgeAAgqIAAjKIAsAAIAABoIA0AAQArAAAgAeQAeAbAAApQAAAtgdAeQgdAdgrAAQgrgBgdgfgAg4A4QAAATAOARQARASAZABQAagBARgSQAOgRAAgXQAAgXgPgRQgRgRgdAAIg0AAg");
	this.shape_10.setTransform(98.3,71,0.469,0.469);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#939598").s().p("Ag3BlIAAhhQAAgwAhgeQAbgaApAAIAKAAIAAAoIgRACQgyAJAAA2IAABgg");
	this.shape_11.setTransform(89.6,73.1,0.469,0.469);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#939598").s().p("AgUCLIAAjDIAqAAIAADDgAgQhfQgIgHAAgLQAAgKAIgHQAHgIAJAAQAKAAAHAIQAHAHABAKQgBALgHAHQgHAHgKAAQgJAAgHgHg");
	this.shape_12.setTransform(84.2,71.4,0.469,0.469);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#939598").s().p("AhLBHQgcgfgBgoQAAguAigeQAfgcAnAAQApAAAeAcQAiAeAAAuIAABiIgsAAIAAgOQgcAVghAAQgtgBgeghgAgqgpQgRASAAAXQAAAYARASQARAUAZgBQAYAAATgSQASgRAAgaQgBgbgTgRQgRgQgYAAQgXAAgTATg");
	this.shape_13.setTransform(76.5,73.3,0.469,0.469);

	this.addChild(this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(16,63.8,140.5,19.2);


(lib.intro = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.AB_Quiet_V_crop();
	this.instance.setTransform(0,240);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#B6BEC1"],[0,1],0,-130,0,130).s().p("A3bUUMAAAgonMAu2AAAMAAAAong");
	this.shape.setTransform(150,112);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-18,300,833);


(lib.front = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Aq2RMIAA2BIBaAAIS5AAIBaAAIAAWBgAJdk1Iy5AAIAAsWIS5AAIAAMWg");
	mask.setTransform(72.5,114);

	// Layer 1
	this.instance = new lib.frontview();

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(3,4,139,220);


(lib.endCopy = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.endText();
	this.instance.setTransform(0,-14,0.5,0.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-14,300,250);


(lib.CTA = function() {
	this.initialize();

	// Layer 2
	this.text = new cjs.Text("Find out more", "bold 12px 'Helvetica'");
	this.text.textAlign = "center";
	this.text.lineHeight = 14;
	this.text.lineWidth = 100;
	this.text.setTransform(67.5,175.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AmOCCQg2gBgnglQglgngBg1QABg1AlgmQAngmA2ABIMdAAQA2gBAnAmQAlAmABA1QgBA1glAnQgnAlg2ABg");
	this.shape.setTransform(67.5,183);

	this.addChild(this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(14.5,170,107,26);


(lib.blackbackground = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.AB_end = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.AB_Quiet_end();
	this.instance.setTransform(113,19);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(113,19,185,222);


(lib.text3 = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A3bCVIAAkqMAu2AAAIAAEqg");
	mask.setTransform(150,159);

	// Layer 1
	this.instance = new lib.text_1();
	this.instance.setTransform(150,100,1,1,0,0,0,150,100);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,144,300,30);


(lib.text2 = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A3bETIAAokMAu2AAAIAAIkg");
	mask.setTransform(150,114.5);

	// Layer 1
	this.instance = new lib.text_1();
	this.instance.setTransform(150,100,1,1,0,0,0,150,100);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,87,300,55);


(lib.text1 = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A3bHCIAAuDMAu2AAAIAAODg");
	mask.setTransform(150,45);

	// Layer 1
	this.instance = new lib.text_1();
	this.instance.setTransform(150,100,1,1,0,0,0,150,100);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,90);


// stage content:
(lib.AB_QuietV_compact_MPU = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_331 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(331).call(this.frame_331).wait(46));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,1).p("A3WzcMAutAAAMAAAAm5MgutAAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(377));

	// legals
	this.instance = new lib.text4();
	this.instance.setTransform(150,151,1,1,0,0,0,150,100);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(316).to({_off:false},0).to({alpha:1},10).wait(51));

	// cta
	this.instance_1 = new lib.CTA();
	this.instance_1.setTransform(150,110,1,1,0,0,0,150,125);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(316).to({_off:false},0).to({alpha:1},10).wait(51));

	// End copy
	this.instance_2 = new lib.endCopy();
	this.instance_2.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(316).to({_off:false},0).to({alpha:1},10).wait(51));

	// text3
	this.instance_3 = new lib.text3();
	this.instance_3.setTransform(150,133,1,1,0,0,0,150,100);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(213).to({_off:false},0).to({alpha:1},10).wait(45).to({alpha:0},7).to({_off:true},1).wait(101));

	// text2
	this.instance_4 = new lib.text2();
	this.instance_4.setTransform(150,187,1,1,0,0,0,150,100);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(131).to({_off:false},0).to({alpha:1},8).wait(58).to({alpha:0},8).wait(172));

	// text1
	this.instance_5 = new lib.text1();
	this.instance_5.setTransform(150,180,1,1,0,0,0,150,100);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(52).to({_off:false},0).to({alpha:1},15).wait(37).to({alpha:0},10).to({_off:true},1).wait(262));

	// front
	this.instance_6 = new lib.front();
	this.instance_6.setTransform(149,140,1,1,0,0,0,73,113);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(104).to({_off:false},0).to({alpha:1},15).wait(1).to({y:150},0).to({y:370},9,cjs.Ease.get(-1)).to({_off:true},1).wait(247));

	// AB logo
	this.instance_7 = new lib.logo();
	this.instance_7.setTransform(150,110,1,1,0,0,0,150,125);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(316).to({_off:false},0).to({alpha:1},10).wait(51));

	// AB end frmae
	this.instance_8 = new lib.AB_end();
	this.instance_8.setTransform(150,-18,1,1,0,0,0,150,125);
	this.instance_8.alpha = 0.059;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(294).to({_off:false},0).to({y:125,alpha:1},15,cjs.Ease.get(1)).wait(68));

	// quiet
	this.instance_9 = new lib.quiet();
	this.instance_9.setTransform(149,106.5,0.74,0.74,0,0,0,50,51.4);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(120).to({_off:false},0).to({regY:51.5,scaleX:1,scaleY:1},9).wait(146).to({y:326.5,alpha:0.488},11,cjs.Ease.get(-1)).wait(91));

	// side
	this.instance_10 = new lib.sideview_1();
	this.instance_10.setTransform(150,-194,1,1,0,0,0,150,191);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(35).to({_off:false},0).to({y:191,alpha:1},11,cjs.Ease.get(1)).wait(6).to({alpha:0},15).to({_off:true},1).wait(309));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	mask.setTransform(150,125);

	// intro
	this.instance_11 = new lib.intro();
	this.instance_11.setTransform(150,-536.5,1,1,0,0,0,150,286.5);

	this.instance_11.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(4).to({y:555.5},27,cjs.Ease.get(-1)).wait(346));

	// white
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	this.shape_1.setTransform(150,125);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(20).to({_off:false},0).wait(357));

	// background
	this.instance_12 = new lib.blackbackground();
	this.instance_12.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(377));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149.5,124.5,301,251);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;