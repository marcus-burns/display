(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 23,
	color: "#FFFFFF",
	manifest: [
		{src:"images/cta.png", id:"cta"},
		{src:"images/img1.jpg", id:"img1"},
		{src:"images/img2.jpg", id:"img2"},
		{src:"images/img3.jpg", id:"img3"},
		{src:"images/img4.jpg", id:"img4"},
		{src:"images/img5.jpg", id:"img5"},
		{src:"images/img6.jpg", id:"img6"},
		{src:"images/text1.png", id:"text1"},
		{src:"images/text2.png", id:"text2"},
		{src:"images/text3.png", id:"text3"},
		{src:"images/text4.png", id:"text4"},
		{src:"images/text5.png", id:"text5"},
		{src:"images/text6.png", id:"text6"}
	]
};



// symbols:



(lib.cta = function() {
	this.initialize(img.cta);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.img1 = function() {
	this.initialize(img.img1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.img2 = function() {
	this.initialize(img.img2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,180,237);


(lib.img3 = function() {
	this.initialize(img.img3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.img4 = function() {
	this.initialize(img.img4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,178,177);


(lib.img5 = function() {
	this.initialize(img.img5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,178,177);


(lib.img6 = function() {
	this.initialize(img.img6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,178,177);


(lib.text1 = function() {
	this.initialize(img.text1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.text2 = function() {
	this.initialize(img.text2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.text3 = function() {
	this.initialize(img.text3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.text4 = function() {
	this.initialize(img.text4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.text5 = function() {
	this.initialize(img.text5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.text6 = function() {
	this.initialize(img.text6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.white = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.t5 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.text5();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.t4 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.text4();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.t3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.text3();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.t2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.text2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.t1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.text1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.logo = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B2B2B2").s().p("AhLBHQgcgfAAgoQgBgtAigeQAfgcAnAAQAqAAAfAeQAfAfABAqIgCAPIifAAQADAUAQANQARAPAUAAQAcAAAigVIAaAgQgoAegtAAQgwAAgeghgAgjgxQgQAMgEARIBvAAQgEgPgNgNQgRgPgWAAQgSAAgRAOg");
	this.shape.setTransform(254.5,20.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B2B2B2").s().p("AhHB9QgdgeAAgsQAAgqAegbQAfgeApAAIA3AAIAAhpIAsAAIAADMQABAqgeAeQgeAfgqgBQgrAAgcgcgAgnAKQgRASgBAYQAAAcAUAQQAQAOAVAAQAXAAARgRQARgRAAgZIAAg4Ig5AAQgWAAgRAPg");
	this.shape_1.setTransform(230.8,15.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B2B2B2").s().p("AhLBHQgdgfAAgoQABguAhgeQAfgbAnAAQAoAAAfAbQAiAeAAAuIAABiIgsAAIAAgOQgcAUghAAQgsAAgfghgAgqgpQgRASAAAXQAAAYAQASQASATAZAAQAYAAATgSQARgSABgZQAAgbgUgRQgSgQgXAAQgXAAgTATg");
	this.shape_2.setTransform(207.1,20.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B2B2B2").s().p("AgVCWIAAkrIAqAAIAAErg");
	this.shape_3.setTransform(191.1,15.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B2B2B2").s().p("AhIB6QgcgeAAgpIAAjMIAsAAIAABpIA0AAQArAAAgAeQAeAcAAApQAAAsgdAeQgdAcgrAAQgrABgdgggAg4A4QAAASAOARQARAUAZgBQAaABARgUQAOgQAAgXQAAgXgOgQQgSgRgdgBIg0AAg");
	this.shape_4.setTransform(175.5,15.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B2B2B2").s().p("Ag3BlIAAhhQAAgwAhgdQAbgbApAAIAKAAIAAAoQgGAAgKACQgaAEgOARQgLARAAAZIAABgg");
	this.shape_5.setTransform(157,20);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B2B2B2").s().p("AgVCLIAAjDIArAAIAADDgAgQhfQgHgIAAgKQAAgKAHgIQAHgHAJAAQAKAAAHAHQAHAIAAAKQAAALgHAHQgHAHgKAAQgIAAgIgHg");
	this.shape_6.setTransform(145.4,16.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B2B2B2").s().p("AhLBHQgcgfAAgoQAAguAhgeQAfgbAnAAQApAAAeAbQAhAeAAAuIAABiIgsAAIAAgOQgbAUghAAQgtAAgeghgAgpgpQgSASAAAXQAAAYAQASQASATAZAAQAYAAASgSQASgSAAgZQAAgbgTgRQgRgQgYAAQgYAAgRATg");
	this.shape_7.setTransform(129.1,20.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#020203").s().p("Ag6CNIgigUIAbglQAHAFALAFQATAJAPABQAkAAAPggQAKgTAAgYQgIAJgQAFQgNAFgLAAQgqAAgdgdQgegbAAgrIAAhkIA2AAIAABkQAAAUAOAPQAOAOATAAQAUAAAOgOQAOgOAAgVIAAhkIA2AAIAABkQAABbgJAhQgQA9g5AOQgPAEgNAAQgZAAgZgLg");
	this.shape_8.setTransform(33.7,25.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#020203").s().p("AgKBmQgsgHgfgYIAagjQAMAJAVAGQAaAIARgEQANgDADgIQADgHgJgFQgFgCgegJQgggJgOgJQgagOAAgbIAFgZQAPgcAkgHQASgEAMACQAtADAZAUIgZAjQgSgIgUgDQgRgCgMADQgKADgCAGQgCAFAGAEQAGAEAcAIQAfAJAOAHQAgAPgBAfQgBAUgLANQgTAYgjAFg");
	this.shape_9.setTransform(54.8,20.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#020203").s().p("AAwBkIAAhiQAAgTgPgNQgOgPgTAAQgTAAgOAPQgOANAAATIAABiIg2AAIAAhiQAAgpAegeQAegeApAAQAqAAAeAeQAeAeAAApIAABig");
	this.shape_10.setTransform(97.9,20.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#020203").s().p("AhHBIQgegeAAgqQAAgpAegeQAegeApAAQAqAAAeAeQAeAeAAApQAAAqgeAeQgeAegqAAQgpAAgegegAghghQgPAOAAATQAAAUAPAOQAOAOATAAQAUAAAOgOQAOgOAAgUQAAgTgOgOQgOgPgUAAQgTAAgOAPg");
	this.shape_11.setTransform(75.2,20.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#020203").s().p("AhHB6QgegegBgrQABgqAegcQAegeApAAIAwAAIAAhkIA2AAIAADIQABArgfAeQgeAegqAAQgpAAgegegAghAPQgPAOAAAUQAAAVAPAOQAOAOATAAQATAAAPgOQAOgOAAgVIAAgwIgwAAQgTAAgOAOg");
	this.shape_12.setTransform(10.3,15.3);

	this.addChild(this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,265,40.9);


(lib.line = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(2,1,1).p("AmFELIMLoV");
	this.shape.setTransform(39,26.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,80,55.5);


(lib.img1_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.img1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.hand = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.img2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,180,237);


(lib.endimg = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.img3();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.cta_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.cta();
	this.instance.setTransform(68,4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(68,4,300,250);


(lib.cborder = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("ANrAAQAAFqkBEAQkAEBlqAAQlpAAkAkBQkBkAAAlqQAAlpEBkAQEAkBFpAAQFqAAEAEBQEBEAAAFpg");
	this.shape.setTransform(87.5,87.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2,-2,179,179);


(lib.black = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.c3 = function() {
	this.initialize();

	// c border
	this.instance = new lib.cborder();
	this.instance.setTransform(89.5,89.5,1,1,0,0,0,87.5,87.5);

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ApbJwQj/j+gBloQABlnD/j+QD+j/FngBQFoABD+D/QEAD+AAFnQAAFokAD+Qj+EAloAAQlnAAj+kAg");
	mask.setTransform(88,88);

	// Layer 1
	this.instance_1 = new lib.img6();

	this.instance_1.mask = mask;

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,179,179);


(lib.c2 = function() {
	this.initialize();

	// c border
	this.instance = new lib.cborder();
	this.instance.setTransform(89.5,89.5,1,1,0,0,0,87.5,87.5);

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ApbJwQj/j+gBloQABlnD/j+QD+j/FngBQFoABD+D/QEAD+AAFnQAAFokAD+Qj+EAloAAQlnAAj+kAg");
	mask.setTransform(88,88);

	// Layer 1
	this.instance_1 = new lib.img5();

	this.instance_1.mask = mask;

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,179,179);


(lib.c1 = function() {
	this.initialize();

	// c border
	this.instance = new lib.cborder();
	this.instance.setTransform(89.5,89.5,1,1,0,0,0,87.5,87.5);

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ApbJwQj/j+gBloQABlnD/j+QD+j/FngBQFoABD+D/QEAD+AAFnQAAFokAD+Qj+EAloAAQlnAAj+kAg");
	mask.setTransform(88,88);

	// Layer 1
	this.instance_1 = new lib.img4();

	this.instance_1.mask = mask;

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,179,179);


// stage content:
(lib.AB_smokebox_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.loopNumber = 0;
	}
	this.frame_330 = function() {
		this.loopNumber = this.loopNumber + 1;
		
		if(this.loopNumber==3){
			this.stop();
		}
	}
	this.frame_344 = function() {
		this.gotoAndPlay(2);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(330).call(this.frame_330).wait(14).call(this.frame_344).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,1).p("A3WzcMAutAAAMAAAAm5MgutAAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(345));

	// white copy
	this.instance = new lib.white();
	this.instance.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},7).to({_off:true},1).wait(231).to({_off:false},0).to({alpha:1},8).wait(5).to({alpha:0},5).to({_off:true},1).wait(79).to({_off:false},0).to({alpha:1},5).wait(3));

	// Layer 1
	this.instance_1 = new lib.text6();
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(248).to({_off:false},0).wait(97));

	// logo
	this.instance_2 = new lib.logo();
	this.instance_2.setTransform(150.5,35,0.607,0.607,0,0,0,132.5,20.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(248).to({_off:false},0).wait(97));

	// cta
	this.instance_3 = new lib.cta_1();
	this.instance_3.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(248).to({_off:false},0).wait(97));

	// end image
	this.instance_4 = new lib.endimg();
	this.instance_4.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(248).to({_off:false},0).wait(97));

	// text5
	this.instance_5 = new lib.t5();
	this.instance_5.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(206).to({_off:false},0).to({alpha:1},5).to({_off:true},37).wait(97));

	// text4
	this.instance_6 = new lib.t4();
	this.instance_6.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(167).to({_off:false},0).to({alpha:1},5).wait(25).to({alpha:0},4).to({_off:true},1).wait(143));

	// text3
	this.instance_7 = new lib.t3();
	this.instance_7.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(130).to({_off:false},0).to({alpha:1},5).wait(23).to({alpha:0},4).to({_off:true},1).wait(182));

	// line
	this.instance_8 = new lib.line();
	this.instance_8.setTransform(100,178.5,0.193,0.193,0,0,0,3.1,52.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(124).to({_off:false},0).to({regX:0,regY:53.5,scaleX:1.02,scaleY:1.02,x:97,y:179.5},13,cjs.Ease.get(1)).wait(19).to({scaleX:1,scaleY:1},0).to({alpha:0},4).wait(1).to({regX:3.1,regY:52.5,scaleX:0.19,scaleY:0.19,x:100,y:178.5,alpha:1},0).to({regX:0,regY:53.5,scaleX:1.02,scaleY:1.02,x:97,y:179.5},13,cjs.Ease.get(1)).wait(21).to({scaleX:1,scaleY:1},0).to({alpha:0},4).wait(1).to({regX:3.1,regY:52.5,scaleX:0.19,scaleY:0.19,x:100,y:178.5,alpha:1},0).to({regX:0,regY:53.5,scaleX:1.02,scaleY:1.02,x:97,y:179.5},17,cjs.Ease.get(1)).to({_off:true},31).wait(97));

	// c3
	this.instance_9 = new lib.c3();
	this.instance_9.setTransform(136.3,162.2,0.25,0.25,0,0,0,89,88.6);
	this.instance_9.alpha = 0.488;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(200).to({_off:false},0).to({scaleX:1,scaleY:1,x:239,y:68.6,alpha:1},17,cjs.Ease.get(1)).to({_off:true},31).wait(97));

	// c2
	this.instance_10 = new lib.c2();
	this.instance_10.setTransform(136.3,162.2,0.25,0.25,0,0,0,89,88.6);
	this.instance_10.alpha = 0.488;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(161).to({_off:false},0).to({regY:88.5,scaleX:1,scaleY:1,x:239,y:68.5,alpha:1},13,cjs.Ease.get(1)).wait(21).to({alpha:0},4).to({_off:true},1).wait(145));

	// c1
	this.instance_11 = new lib.c1();
	this.instance_11.setTransform(136.3,162.2,0.25,0.25,0,0,0,89,88.6);
	this.instance_11.alpha = 0.488;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(124).to({_off:false},0).to({regY:88.5,scaleX:1,scaleY:1,x:239,y:68.5,alpha:1},13,cjs.Ease.get(1)).wait(19).to({alpha:0},4).to({_off:true},1).wait(184));

	// text2
	this.instance_12 = new lib.t2();
	this.instance_12.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(74).to({_off:false},0).to({alpha:1},5).wait(37).to({alpha:0},6).to({_off:true},1).wait(222));

	// text1
	this.instance_13 = new lib.t1();
	this.instance_13.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(64).to({alpha:0},6).to({_off:true},1).wait(274));

	// img1
	this.instance_14 = new lib.img1_1();
	this.instance_14.setTransform(150,125,1.05,1.05,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({scaleX:1,scaleY:1},25,cjs.Ease.get(1)).wait(44).to({x:-150},8).to({_off:true},1).wait(267));

	// hand copy
	this.instance_15 = new lib.hand();
	this.instance_15.setTransform(213,340.5,0.722,0.722,0,0,180,90,118.5);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(71).to({_off:false},0).to({y:160.5},8,cjs.Ease.get(1)).wait(31).to({scaleX:1,scaleY:1,x:280,y:178.5,alpha:0},12,cjs.Ease.get(1)).to({_off:true},1).wait(222));

	// hand
	this.instance_16 = new lib.hand();
	this.instance_16.setTransform(83.1,340.5,0.722,0.722,0,0,0,90,118.5);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(71).to({_off:false},0).to({y:160.5},8,cjs.Ease.get(1)).wait(31).to({scaleX:1,scaleY:1,x:100,y:178.5},12,cjs.Ease.get(1)).to({_off:true},126).wait(97));

	// black
	this.instance_17 = new lib.black();
	this.instance_17.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(68).to({_off:false},0).to({_off:true},180).wait(97));

	// white
	this.instance_18 = new lib.white();
	this.instance_18.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(345));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(142.5,118.8,315,262.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;