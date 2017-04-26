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
		{src:"images/img2.png", id:"img2"},
		{src:"images/img3.png", id:"img3"},
		{src:"images/img4.jpg", id:"img4"},
		{src:"images/img5.png", id:"img5"},
		{src:"images/img6.jpg", id:"img6"},
		{src:"images/txt1.png", id:"txt1"},
		{src:"images/txt2.png", id:"txt2"},
		{src:"images/txt3.png", id:"txt3"}
	]
};



// symbols:



(lib.cta = function() {
	this.initialize(img.cta);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,107,30);


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


(lib.white = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.text3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.txt3();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.text2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.txt2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.text1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.txt1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.logo = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B2B2B2").s().p("AhfCWIAAkrIBKAAQAdAAAWAWQAXAWgBAfQAAAWgMATQAaAMAPAVQAPAYAAAdQAAAogcAdQgcAcgoAAgAg0BrIA0AAQAWAAAQgQQAQgQAAgWQgBgWgPgQQgQgPgWAAIg0AAgAg0gqIAfAAQAOAAAIgJQAIgKABgNQgBgNgIgKQgIgJgOAAIgfAAg");
	this.shape.setTransform(308.4,15.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B2B2B2").s().p("AhLBHQgcgfAAgoQgBgtAigeQAfgcAnAAQAqAAAfAeQAfAfABAqIgCAPIifAAQADAUAQANQARAPAUAAQAcAAAigVIAaAgQgoAegtAAQgwAAgeghgAgjgxQgQAMgEARIBvAAQgEgPgNgNQgRgPgWAAQgSAAgRAOg");
	this.shape_1.setTransform(254.5,20.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B2B2B2").s().p("AhIB9QgdgeAAgsQAAgqAfgbQAggeAoAAIA3AAIAAhpIAtAAIAADMQAAAqgeAeQgdAfgrgBQgqAAgegcgAgmAKQgSASAAAYQAAAcATAQQARAOAUAAQAYAAARgRQAQgRAAgZIAAg4Ig5AAQgVAAgRAPg");
	this.shape_2.setTransform(285.7,15.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B2B2B2").s().p("AhHB9QgdgeAAgsQAAgqAegbQAfgeApAAIA3AAIAAhpIAsAAIAADMQABAqgeAeQgeAfgqgBQgrAAgcgcgAgnAKQgRASgBAYQAAAcAUAQQAQAOAVAAQAXAAARgRQARgRAAgZIAAg4Ig5AAQgWAAgRAPg");
	this.shape_3.setTransform(230.8,15.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B2B2B2").s().p("AhLBHQgdgfAAgoQABguAhgeQAfgbAnAAQAoAAAfAbQAiAeAAAuIAABiIgsAAIAAgOQgcAUghAAQgsAAgfghgAgqgpQgRASAAAXQAAAYAQASQASATAZAAQAYAAATgSQARgSABgZQAAgbgUgRQgSgQgXAAQgXAAgTATg");
	this.shape_4.setTransform(207.1,20.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B2B2B2").s().p("AgVCWIAAkrIAqAAIAAErg");
	this.shape_5.setTransform(191.1,15.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B2B2B2").s().p("AhIB6QgcgeAAgpIAAjMIAsAAIAABpIA0AAQArAAAgAeQAeAcAAApQAAAsgdAeQgdAcgrAAQgrABgdgggAg4A4QAAASAOARQARAUAZgBQAaABARgUQAOgQAAgXQAAgXgOgQQgSgRgdgBIg0AAg");
	this.shape_6.setTransform(175.5,15.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B2B2B2").s().p("Ag3BlIAAhhQAAgwAhgdQAbgbApAAIAKAAIAAAoQgGAAgKACQgaAEgOARQgLARAAAZIAABgg");
	this.shape_7.setTransform(157,20);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B2B2B2").s().p("AgVCLIAAjDIArAAIAADDgAgQhfQgHgIAAgKQAAgKAHgIQAHgHAJAAQAKAAAHAHQAHAIAAAKQAAALgHAHQgHAHgKAAQgIAAgIgHg");
	this.shape_8.setTransform(145.4,16.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B2B2B2").s().p("AhLBHQgcgfAAgoQAAguAhgeQAfgbAnAAQApAAAeAbQAhAeAAAuIAABiIgsAAIAAgOQgbAUghAAQgtAAgeghgAgpgpQgSASAAAXQAAAYAQASQASATAZAAQAYAAASgSQASgSAAgZQAAgbgTgRQgRgQgYAAQgYAAgRATg");
	this.shape_9.setTransform(129.1,20.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#020203").s().p("Ag6CNIgigUIAbglQAHAFALAFQATAJAPABQAkAAAPggQAKgTAAgYQgIAJgQAFQgNAFgLAAQgqAAgdgdQgegbAAgrIAAhkIA2AAIAABkQAAAUAOAPQAOAOATAAQAUAAAOgOQAOgOAAgVIAAhkIA2AAIAABkQAABbgJAhQgQA9g5AOQgPAEgNAAQgZAAgZgLg");
	this.shape_10.setTransform(33.7,25.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#020203").s().p("AgKBmQgsgHgfgYIAagjQAMAJAVAGQAaAIARgEQANgDADgIQADgHgJgFQgFgCgegJQgggJgOgJQgagOAAgbIAFgZQAPgcAkgHQASgEAMACQAtADAZAUIgZAjQgSgIgUgDQgRgCgMADQgKADgCAGQgCAFAGAEQAGAEAcAIQAfAJAOAHQAgAPgBAfQgBAUgLANQgTAYgjAFg");
	this.shape_11.setTransform(54.8,20.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#020203").s().p("AAwBkIAAhiQAAgTgPgNQgOgPgTAAQgTAAgOAPQgOANAAATIAABiIg2AAIAAhiQAAgpAegeQAegeApAAQAqAAAeAeQAeAeAAApIAABig");
	this.shape_12.setTransform(97.9,20.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#020203").s().p("AhHBIQgegeAAgqQAAgpAegeQAegeApAAQAqAAAeAeQAeAeAAApQAAAqgeAeQgeAegqAAQgpAAgegegAghghQgPAOAAATQAAAUAPAOQAOAOATAAQAUAAAOgOQAOgOAAgUQAAgTgOgOQgOgPgUAAQgTAAgOAPg");
	this.shape_13.setTransform(75.2,20.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#020203").s().p("AhHB6QgegegBgrQABgqAegcQAegeApAAIAwAAIAAhkIA2AAIAADIQABArgfAeQgeAegqAAQgpAAgegegAghAPQgPAOAAAUQAAAVAPAOQAOAOATAAQATAAAPgOQAOgOAAgVIAAgwIgwAAQgTAAgOAOg");
	this.shape_14.setTransform(10.3,15.3);

	this.addChild(this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,318.1,40.9);


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
	this.instance.setTransform(0,40);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,40,300,250);


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


(lib.ctabutton = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.cta();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,107,30);


// stage content:
(lib.AB_dB_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.loopNumber = 0;
	}
	this.frame_308 = function() {
		this.loopNumber = this.loopNumber + 1;
		
		if(this.loopNumber==3){
			this.stop();
		}
	}
	this.frame_344 = function() {
		this.gotoAndPlay(2);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(308).call(this.frame_308).wait(36).call(this.frame_344).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("A3WzcMAutAAAMAAAAm5MgutAAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(345));

	// white copy
	this.instance = new lib.white();
	this.instance.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.129},3).to({_off:true},1).wait(334).to({_off:false,alpha:0.039},0).to({alpha:1},4).wait(3));

	// CTA
	this.instance_1 = new lib.ctabutton();
	this.instance_1.setTransform(148.5,89,1,1,0,0,0,53.5,15);
	this.instance_1.alpha = 0.039;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(290).to({_off:false},0).to({alpha:1},6).wait(49));

	// logo
	this.instance_2 = new lib.logo();
	this.instance_2.setTransform(149,41.5,0.742,0.742,0,0,0,158.9,20.4);
	this.instance_2.alpha = 0.039;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(280).to({_off:false},0).to({alpha:1},6).wait(59));

	// text1
	this.instance_3 = new lib.text1();
	this.instance_3.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_3.alpha = 0.039;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(8).to({_off:false},0).to({alpha:1},7).wait(40).to({x:0,alpha:0.039},5).to({_off:true},1).wait(284));

	// text3
	this.instance_4 = new lib.text3();
	this.instance_4.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_4.alpha = 0.039;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(223).to({_off:false},0).to({alpha:1},6).wait(34).to({y:-175,alpha:0.039},8).to({_off:true},1).wait(73));

	// text2
	this.instance_5 = new lib.text2();
	this.instance_5.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_5.alpha = 0.039;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(154).to({_off:false},0).to({alpha:1},6).wait(52).to({y:15},7).to({_off:true},1).wait(125));

	// img5
	this.instance_6 = new lib.i5();
	this.instance_6.setTransform(150,125,0.912,0.912,0,0,0,150,125);
	this.instance_6.alpha = 0.039;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(214).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},7).wait(42).to({y:-175,alpha:0.039},8).to({_off:true},1).wait(73));

	// img6
	this.instance_7 = new lib.i6();
	this.instance_7.setTransform(150,255,1,1,0,0,0,150,125);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(265).to({_off:false},0).to({y:125},10,cjs.Ease.get(1)).wait(70));

	// img3
	this.instance_8 = new lib.i3();
	this.instance_8.setTransform(150,375,1,1,0,0,0,150,125);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(97).to({_off:false},0).to({y:125},7,cjs.Ease.get(1)).wait(34).to({y:-125},8).to({_off:true},1).wait(198));

	// img4
	this.instance_9 = new lib.i4();
	this.instance_9.setTransform(0,295);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(138).to({_off:false},0).to({y:0},13,cjs.Ease.get(1)).wait(61).to({y:130},7).to({_off:true},1).wait(125));

	// img2
	this.instance_10 = new lib.i2();
	this.instance_10.setTransform(150,125,0.872,0.872,0,0,0,150,125);
	this.instance_10.alpha = 0.039;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(57).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},5).wait(35).to({y:-125},7,cjs.Ease.get(1)).to({_off:true},1).wait(240));

	// img1
	this.instance_11 = new lib.i1();
	this.instance_11.setTransform(143,125,1.046,1.046,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({scaleX:1,scaleY:1,x:150},18,cjs.Ease.get(1)).wait(37).to({x:350,alpha:0.039},5,cjs.Ease.get(1)).to({_off:true},1).wait(284));

	// white
	this.instance_12 = new lib.white();
	this.instance_12.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(345));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(136.1,119.2,314.5,261.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;