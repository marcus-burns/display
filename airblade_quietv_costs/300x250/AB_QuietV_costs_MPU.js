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
		{src:"images/dryer.jpg", id:"dryer"},
		{src:"images/frontview.jpg", id:"frontview"},
		{src:"images/quietlogo.png", id:"quietlogo"},
		{src:"images/text.png", id:"text"},
		{src:"images/towelDryer.jpg", id:"towelDryer"}
	]
};



// symbols:



(lib.AB_Quiet_end = function() {
	this.initialize(img.AB_Quiet_end);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.AB_Quiet_V_crop = function() {
	this.initialize(img.AB_Quiet_V_crop);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,356);


(lib.dryer = function() {
	this.initialize(img.dryer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,238,226);


(lib.frontview = function() {
	this.initialize(img.frontview);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,143,202);


(lib.quietlogo = function() {
	this.initialize(img.quietlogo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,103);


(lib.text = function() {
	this.initialize(img.text);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.towelDryer = function() {
	this.initialize(img.towelDryer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,185,251);


(lib.towelHolder = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.towelDryer();
	this.instance.setTransform(12.8,66.5,0.412,0.412);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(12.8,66.5,76.3,103.5);


(lib.text_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.text();
	this.instance.setTransform(0,0,0.5,0.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


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
	this.shape.setTransform(32.1,75,0.474,0.474);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AgKBmQgtgIgegXIAagjQAMAIAWAHQAZAIASgEQAMgDADgIQACgHgIgFQgFgCgegJQgggJgOgJQgagOAAgbIAFgZQAPgcAkgHQASgEAMACQAuADAZAUIgaAjQgTgIgSgDQgSgCgMADQgJADgCAGQgDAFAGAEQAGAEAcAIQAfAJAOAHQAgAQgBAeQgBAVgLAMQgTAYgjAFg");
	this.shape_1.setTransform(42.1,72.5,0.474,0.474);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AAwBkIAAhiQAAgTgOgNQgPgPgTAAQgTAAgOAPQgOANAAATIAABiIg2AAIAAhiQAAgpAegeQAegeApAAQAqAAAeAeQAeAeAAApIAABig");
	this.shape_2.setTransform(62.5,72.4,0.474,0.474);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AhHBIQgegeAAgqQAAgpAegeQAegeApAAQAqAAAeAeQAeAeAAApQAAAqgeAeQgeAegqAAQgpAAgegegAghghQgPAOAAATQAAAUAPAOQAOAOATAAQAUAAAOgOQAOgOAAgUQAAgTgOgOQgOgPgUAAQgTAAgOAPg");
	this.shape_3.setTransform(51.8,72.5,0.474,0.474);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("AhHB6QgegeAAgrQAAgqAegcQAegeApAAIAwAAIAAhkIA2AAIAADIQAAArgeAeQgeAegqAAQgpAAgegegAghAPQgPAOAAAUQAAAVAPAOQAOAOATAAQAUAAAOgOQAOgOAAgVIAAgxIgwAAQgTAAgOAPg");
	this.shape_4.setTransform(21,70.1,0.474,0.474);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2564AC").s().p("AiDiZIAzAAIBCCcQAKAYAEAYQAFgWAKgaIBDicIAyAAIiEEzg");
	this.shape_5.setTransform(151.8,70.2,0.474,0.474);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#939598").s().p("AhMBHQgcgeAAgpQABgtAhgeQAggdAmAAQAqAAAfAfQAgAfAAAqIgDAPIifAAQAEAUAQAOQAQAPAVgBQAdAAAhgUIAaAgQgpAdgsABQgvgBggghgAgjgxQgQANgEAQIBvAAQgEgPgOgMQgQgPgWgBQgSABgRANg");
	this.shape_6.setTransform(136.8,72.5,0.474,0.474);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#939598").s().p("AhHB9QgdgeAAgtQgBgpAggcQAfgdAoAAIA3AAIAAhoIAsAAIAADKQAAArgdAeQgeAegqABQgqAAgdgdgAgmAKQgSARAAAZQAAAcATAQQAQAOAVAAQAYAAARgRQAQgSAAgZIAAg3Ig5AAQgWAAgQAPg");
	this.shape_7.setTransform(125.5,70.2,0.474,0.474);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#939598").s().p("AhLBHQgdgfAAgoQAAguAigeQAfgcAnAAQApAAAeAcQAiAfAAAtIAABiIgtAAIAAgOQgaAVgiAAQgtgBgeghgAgqgpQgRASAAAXQAAAYAQASQASAUAZgBQAZAAARgSQASgRAAgaQAAgbgTgRQgSgQgXAAQgYAAgSATg");
	this.shape_8.setTransform(114.3,72.5,0.474,0.474);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#939598").s().p("AgVCWIAAkrIArAAIAAErg");
	this.shape_9.setTransform(106.7,70,0.474,0.474);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#939598").s().p("AhIB6QgcgeAAgqIAAjKIAsAAIAABoIA0AAQArAAAgAeQAeAbAAApQAAAtgdAeQgdAdgrAAQgrgBgdgfgAg4A4QAAATAOARQARASAZABQAagBARgSQAOgRAAgXQAAgXgPgRQgRgRgdAAIg0AAg");
	this.shape_10.setTransform(99.3,70.2,0.474,0.474);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#939598").s().p("Ag3BlIAAhhQAAgwAhgeQAbgaApAAIAKAAIAAAoIgRACQgyAJAAA2IAABgg");
	this.shape_11.setTransform(90.6,72.3,0.474,0.474);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#939598").s().p("AgUCLIAAjDIAqAAIAADDgAgQhfQgIgHAAgLQAAgKAIgHQAHgIAJAAQAKAAAHAIQAHAHABAKQgBALgHAHQgHAHgKAAQgJAAgHgHg");
	this.shape_12.setTransform(85.1,70.6,0.474,0.474);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#939598").s().p("AhLBHQgcgfgBgoQAAguAigeQAfgcAnAAQApAAAeAcQAiAeAAAuIAABiIgsAAIAAgOQgcAVghAAQgtgBgeghgAgqgpQgRASAAAXQAAAYARASQARAUAZgBQAYAAATgSQASgRAAgaQgBgbgTgRQgRgQgYAAQgXAAgTATg");
	this.shape_13.setTransform(77.3,72.5,0.474,0.474);

	this.addChild(this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(16.2,62.9,141.9,19.3);


(lib.half = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.AB_Quiet_V_crop();
	this.instance.setTransform(0,-303);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-303,150,356);


(lib.front = function() {
	this.initialize();

	// Layer 4
	this.instance = new lib.frontview();
	this.instance.setTransform(130,40,0.609,0.609);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(130,40,87.1,123);


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

	// Layer 2
	this.instance = new lib.dryer();
	this.instance.setTransform(96.9,62,0.438,0.438);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(96.9,62,104.3,99);


(lib.caveatb = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("¹ Loudness reduction compared to the original Dyson Airblade V hand dryer.", "8px 'Helvetica'", "#AAAAAA");
	this.text.lineHeight = 10;
	this.text.lineWidth = 282;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,286,58);


(lib.caveata = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("² For calculations visit www.dyson.co.uk/calcs", "8px 'Helvetica'", "#AAAAAA");
	this.text.textAlign = "center";
	this.text.lineHeight = 10;
	this.text.lineWidth = 295;
	this.text.setTransform(147.5,0);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,299,58);


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

	// Layer 2
	this.instance = new lib.AB_Quiet_end();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.QuietText2 = function() {
	this.initialize();

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A3bEIIAAoQMAu2AAAIAAIQg");
	mask.setTransform(150,210.5);

	// Layer 2
	this.instance = new lib.text_1();
	this.instance.setTransform(150,225,1,1,0,0,0,150,125);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,184,300,53);


(lib.peryearRED = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnzBzIAAjlIPmAAIAADlg");
	mask.setTransform(150,237.5);

	// Layer 1
	this.instance = new lib.text_1();
	this.instance.setTransform(54,125,1,1,0,0,0,150,125);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(100,226,100,23);


(lib.peryear = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnzBzIAAjlIPmAAIAADlg");
	mask.setTransform(150,237.5);

	// Layer 1
	this.instance = new lib.text_1();
	this.instance.setTransform(150,125,1,1,0,0,0,150,125);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(100,226,100,23);


(lib.intro = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A3bXbMAAAgu1MAu2AAAMAAAAu1g");
	this.shape.setTransform(150,968);

	// Layer 1
	this.instance = new lib.half();
	this.instance.setTransform(225,943,1,1,0,0,180,75,178);

	this.instance_1 = new lib.half();
	this.instance_1.setTransform(75,943,1,1,0,0,0,75,178);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#B6C1C5","#FFFFFF"],[0,1],0,150,0,-150).s().p("A3bXcMAAAgu2MAu2AAAMAAAAu2g");
	this.shape_1.setTransform(150,317);

	this.addChild(this.shape_1,this.instance_1,this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,167,300,951);


(lib.endCopy = function() {
	this.initialize();

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AtCFyIAAriIaFAAIAALig");
	mask.setTransform(83.5,107);

	// Layer 2
	this.instance = new lib.text_1();
	this.instance.setTransform(150,190,1,1,0,0,0,150,125);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,70,167,74);


(lib.cost3 = function() {
	this.initialize();

	// per year
	this.instance = new lib.peryear();
	this.instance.setTransform(250,89,1,1,0,0,0,150,125);

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AHgOnIAAjnIPoAAIAADng");
	mask.setTransform(148,93.5);

	// Layer 2
	this.instance_1 = new lib.text_1();
	this.instance_1.setTransform(250,149,1,1,0,0,0,150,125);

	this.instance_1.mask = mask;

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(100,-36,300,250);


(lib.cost2 = function() {
	this.initialize();

	// per year
	this.instance = new lib.peryearRED();
	this.instance.setTransform(150,89,1,1,0,0,0,150,125);

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnzBzIAAjlIPmAAIAADlg");
	mask.setTransform(150,175.5);

	// Layer 1
	this.instance_1 = new lib.text_1();
	this.instance_1.setTransform(150,119,1,1,0,0,0,150,125);

	this.instance_1.mask = mask;

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-96,-36,300,250);


(lib.cost1 = function() {
	this.initialize();

	// per year
	this.instance = new lib.peryearRED();
	this.instance.setTransform(50,89,1,1,0,0,0,150,125);

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnzBzIAAjlIPmAAIAADlg");
	mask.setTransform(50,175.5);

	// Layer 1
	this.instance_1 = new lib.text_1();
	this.instance_1.setTransform(50,89,1,1,0,0,0,150,125);

	this.instance_1.mask = mask;

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-196,-36,300,250);


// stage content:
(lib.AB_QuietV_costs_MPU = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_279 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(279).call(this.frame_279).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,1).p("A3WzcMAutAAAMAAAAm5MgutAAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(280));

	// caveats
	this.instance = new lib.caveata();
	this.instance.setTransform(149.5,264,1,1,0,0,0,149.5,29);
	this.instance.alpha = 0.199;
	this.instance._off = true;

	this.instance_1 = new lib.caveatb();
	this.instance_1.setTransform(152,264,1,1,0,0,0,143,29);
	this.instance_1.alpha = 0.199;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(35).to({_off:false},0).to({alpha:1},4).wait(107).to({y:554},11).to({_off:true},1).wait(122));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(266).to({_off:false},0).to({alpha:1},6).wait(8));

	// intro
	this.instance_2 = new lib.intro();
	this.instance_2.setTransform(150,-816.5,1,1,0,0,0,150,286.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:286.5},20,cjs.Ease.get(0.25)).to({_off:true},1).wait(259));

	// CTA
	this.instance_3 = new lib.CTA();
	this.instance_3.setTransform(150,110,1,1,0,0,0,150,125);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(263).to({_off:false},0).to({alpha:1},10).wait(7));

	// End copy
	this.instance_4 = new lib.endCopy();
	this.instance_4.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(263).to({_off:false},0).to({alpha:1},10).wait(7));

	// quiet text
	this.instance_5 = new lib.QuietText2();
	this.instance_5.setTransform(150,119,1,1,0,0,0,150,125);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(173).to({_off:false},0).to({alpha:1},6).wait(49).to({y:369},9).to({_off:true},1).wait(42));

	// cost1
	this.instance_6 = new lib.cost1();
	this.instance_6.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(35).to({_off:false},0).to({alpha:1},7).wait(104).to({y:415},11).to({_off:true},16).wait(107));

	// cost2
	this.instance_7 = new lib.cost2();
	this.instance_7.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(67).to({_off:false},0).to({alpha:1},7).wait(72).to({y:415},11).to({_off:true},16).wait(107));

	// cost3
	this.instance_8 = new lib.cost3();
	this.instance_8.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_8.alpha = 0.141;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(100).to({_off:false},0).to({alpha:1},6).wait(40).to({y:415},11).to({_off:true},16).wait(107));

	// competitor
	this.instance_9 = new lib.competitorFan();
	this.instance_9.setTransform(150,-130,1,1,0,0,0,150,125);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(57).to({_off:false},0).to({y:120},10).wait(79).to({y:410},11).to({_off:true},16).wait(107));

	// towel
	this.instance_10 = new lib.towelHolder();
	this.instance_10.setTransform(150,-135,1,1,0,0,0,150,125);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(25).to({_off:false},0).to({y:115},10).wait(111).to({y:405},11).to({_off:true},16).wait(107));

	// front
	this.instance_11 = new lib.front();
	this.instance_11.setTransform(149,-130,1,1,0,0,0,73,113);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(88).to({_off:false},0).to({y:125},12,cjs.Ease.get(1)).wait(46).to({y:420},11).to({_off:true},16).wait(107));

	// AB logo
	this.instance_12 = new lib.logo();
	this.instance_12.setTransform(150,110,1,1,0,0,0,150,125);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(263).to({_off:false},0).to({alpha:1},10).wait(7));

	// AB end frmae
	this.instance_13 = new lib.AB_end();
	this.instance_13.setTransform(150,2,1,1,0,0,0,150,125);
	this.instance_13.alpha = 0.141;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(246).to({_off:false},0).to({y:115,alpha:1},11,cjs.Ease.get(1)).wait(23));

	// quiet
	this.instance_14 = new lib.quiet();
	this.instance_14.setTransform(149,106.5,0.74,0.74,0,0,0,50,51.4);
	this.instance_14.alpha = 0.488;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(156).to({_off:false},0).to({regY:51.5,scaleX:1,scaleY:1,alpha:1},11).wait(61).to({y:326.5},9).to({_off:true},1).wait(42));

	// white
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	this.shape_1.setTransform(150,125);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(15).to({_off:false},0).wait(265));

	// background
	this.instance_15 = new lib.blackbackground();
	this.instance_15.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(280));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149.5,-811,301,1186.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;