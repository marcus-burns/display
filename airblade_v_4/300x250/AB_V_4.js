(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#000000",
	manifest: [
		{src:"images/cta.png", id:"cta"},
		{src:"images/img1.jpg", id:"img1"},
		{src:"images/img2.png", id:"img2"},
		{src:"images/img3.png", id:"img3"},
		{src:"images/img4.png", id:"img4"},
		{src:"images/img5.png", id:"img5"},
		{src:"images/img6.png", id:"img6"},
		{src:"images/img7.jpg", id:"img7"},
		{src:"images/txt1.png", id:"txt1"},
		{src:"images/txt2.png", id:"txt2"},
		{src:"images/txt3.png", id:"txt3"},
		{src:"images/txt4.png", id:"txt4"},
		{src:"images/txt5.png", id:"txt5"},
		{src:"images/txt6.png", id:"txt6"},
		{src:"images/txt7.png", id:"txt7"}
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
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.img3 = function() {
	this.initialize(img.img3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.img4 = function() {
	this.initialize(img.img4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.img5 = function() {
	this.initialize(img.img5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.img6 = function() {
	this.initialize(img.img6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.img7 = function() {
	this.initialize(img.img7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.txt1 = function() {
	this.initialize(img.txt1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.txt2 = function() {
	this.initialize(img.txt2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.txt3 = function() {
	this.initialize(img.txt3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.txt4 = function() {
	this.initialize(img.txt4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.txt5 = function() {
	this.initialize(img.txt5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.txt6 = function() {
	this.initialize(img.txt6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.txt7 = function() {
	this.initialize(img.txt7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.t7 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.txt7();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.t6 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.txt6();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.t5 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.txt5();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.t4 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.txt4();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.t3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.txt3();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.t2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.txt2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.t1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.txt1();
	this.instance.setTransform(0,-10);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-10,300,250);


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


(lib.i7 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.img7();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.i6 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.img6();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.i5 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.img5();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.i4 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.img4();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.i3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.img3();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.i2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.img2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.i1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.img1();

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
(lib.AB_V_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.loopNumber = 0;
	}
	this.frame_316 = function() {
		this.loopNumber = this.loopNumber + 1;
		
		if(this.loopNumber==3){
			this.stop();
		}
	}
	this.frame_361 = function() {
		this.gotoAndPlay(2);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(316).call(this.frame_316).wait(45).call(this.frame_361).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("A3WzcMAutAAAMAAAAm5MgutAAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(362));

	// black copy
	this.instance = new lib.black();
	this.instance.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},8).to({_off:true},1).wait(345).to({_off:false},0).to({alpha:1},6).wait(2));

	// logo
	this.instance_1 = new lib.logo();
	this.instance_1.setTransform(148.3,36.1,0.529,0.529,0,0,0,149.8,20.4);
	this.instance_1.alpha = 0.09;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(70).to({_off:false},0).to({alpha:1},6).wait(286));

	// cta
	this.instance_2 = new lib.cta_1();
	this.instance_2.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_2.alpha = 0.09;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(309).to({_off:false},0).to({alpha:1},6).wait(47));

	// t1
	this.instance_3 = new lib.t1();
	this.instance_3.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.instance_4 = new lib.t2();
	this.instance_4.setTransform(150,148,1,1,0,0,0,150,125);
	this.instance_4.alpha = 0.25;
	this.instance_4._off = true;

	this.instance_5 = new lib.t3();
	this.instance_5.setTransform(150,148,1,1,0,0,0,150,125);
	this.instance_5.alpha = 0.25;
	this.instance_5._off = true;

	this.instance_6 = new lib.t4();
	this.instance_6.setTransform(150,148,1,1,0,0,0,150,125);
	this.instance_6.alpha = 0.25;
	this.instance_6._off = true;

	this.instance_7 = new lib.t5();
	this.instance_7.setTransform(150,148,1,1,0,0,0,150,125);
	this.instance_7.alpha = 0.25;
	this.instance_7._off = true;

	this.instance_8 = new lib.t6();
	this.instance_8.setTransform(150,148,1,1,0,0,0,150,125);
	this.instance_8.alpha = 0.25;
	this.instance_8._off = true;

	this.instance_9 = new lib.t7();
	this.instance_9.setTransform(150,137,1,1,0,0,0,150,125);
	this.instance_9.alpha = 0.09;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(11).to({_off:false},0).to({alpha:1},8).wait(39).to({alpha:0},7,cjs.Ease.get(-1)).to({_off:true},1).wait(296));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(73).to({_off:false},0).to({alpha:1},3).wait(30).to({_off:true},1).wait(255));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(115).to({_off:false},0).to({alpha:1},3).wait(27).to({alpha:0.25},4).to({_off:true},1).wait(212));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(158).to({_off:false},0).to({alpha:1},3).wait(29).to({alpha:0.25},4).to({_off:true},1).wait(167));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(203).to({_off:false},0).to({alpha:1},3).wait(32).to({alpha:0.25},4).to({_off:true},1).wait(119));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(251).to({_off:false},0).to({alpha:1},3).wait(34).to({alpha:0.25},4).to({_off:true},1).wait(69));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(309).to({_off:false},0).to({alpha:1},6).wait(47));

	// circles
	this.instance_10 = new lib.i2();
	this.instance_10.setTransform(450,145,1,1,0,0,0,150,125);
	this.instance_10._off = true;

	this.instance_11 = new lib.i3();
	this.instance_11.setTransform(450,145,1,1,0,0,0,150,125);
	this.instance_11._off = true;

	this.instance_12 = new lib.i4();
	this.instance_12.setTransform(450,145,1,1,0,0,0,150,125);
	this.instance_12._off = true;

	this.instance_13 = new lib.i5();
	this.instance_13.setTransform(450,145,1,1,0,0,0,150,125);
	this.instance_13._off = true;

	this.instance_14 = new lib.i6();
	this.instance_14.setTransform(450,145,1,1,0,0,0,150,125);
	this.instance_14._off = true;

	this.instance_15 = new lib.i7();
	this.instance_15.setTransform(150,125,0.88,0.88,0,0,0,150,125);
	this.instance_15.alpha = 0.09;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(68).to({_off:false},0).to({x:150},8,cjs.Ease.get(1)).wait(27).to({x:-150},6,cjs.Ease.get(-1)).to({_off:true},1).wait(252));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(110).to({_off:false},0).to({x:150},8,cjs.Ease.get(1)).wait(28).to({x:-150},6,cjs.Ease.get(-1)).to({_off:true},1).wait(209));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(153).to({_off:false},0).to({x:150},8,cjs.Ease.get(1)).wait(30).to({x:-150},6,cjs.Ease.get(-1)).to({_off:true},1).wait(164));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(198).to({_off:false},0).to({x:150},8,cjs.Ease.get(1)).wait(33).to({x:-150},6,cjs.Ease.get(-1)).to({_off:true},1).wait(116));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(246).to({_off:false},0).to({x:150},8,cjs.Ease.get(1)).wait(35).to({x:-150},6,cjs.Ease.get(-1)).to({_off:true},1).wait(66));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(301).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},6).wait(55));

	// i1
	this.instance_16 = new lib.i1();
	this.instance_16.setTransform(100,125,1.086,1.086,0,0,0,150,125);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1).to({_off:false},0).to({scaleX:1,scaleY:1,x:150},15,cjs.Ease.get(1)).wait(38).to({x:-150},11,cjs.Ease.get(-1)).to({_off:true},1).wait(296));

	// black
	this.instance_17 = new lib.black();
	this.instance_17.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(362));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149.5,124.5,301,251);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;