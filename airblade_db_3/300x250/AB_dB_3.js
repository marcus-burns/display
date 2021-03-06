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
		{src:"images/img4.jpg", id:"img4"},
		{src:"images/text1.png", id:"text1"},
		{src:"images/text2.png", id:"text2"},
		{src:"images/text4.png", id:"text4"}
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


(lib.img4 = function() {
	this.initialize(img.img4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.text1 = function() {
	this.initialize(img.text1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.text2 = function() {
	this.initialize(img.text2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.text4 = function() {
	this.initialize(img.text4);
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


(lib.t4 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.text4();

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


(lib.i4 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.img4();

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


// stage content:
(lib.AB_dB_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.loopNumber = 0;
	}
	this.frame_274 = function() {
		this.loopNumber = this.loopNumber + 1;
		
		if(this.loopNumber==3){
			this.stop();
		}
	}
	this.frame_309 = function() {
		this.gotoAndPlay(2);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(274).call(this.frame_274).wait(35).call(this.frame_309).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("A3WzcMAutAAAMAAAAm5MgutAAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(310));

	// white copy
	this.instance = new lib.white();
	this.instance.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.129},5).to({_off:true},1).wait(73).to({_off:false,alpha:0.039},0).to({alpha:1},8).wait(7).to({alpha:0.039},5).to({_off:true},1).wait(92).to({_off:false},0).to({alpha:1},8).wait(9).to({alpha:0.039},5).to({_off:true},1).wait(84).to({_off:false},0).to({alpha:1},4).wait(7));

	// logo
	this.instance_1 = new lib.logo();
	this.instance_1.setTransform(21,35.3,0.528,0.528);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(206).to({_off:false},0).wait(104));

	// cta
	this.instance_2 = new lib.cta_1();
	this.instance_2.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_2.alpha = 0.078;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(253).to({_off:false},0).to({alpha:1},5).wait(52));

	// text4
	this.instance_3 = new lib.t4();
	this.instance_3.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_3.alpha = 0.078;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(230).to({_off:false},0).to({alpha:1},7).wait(73));

	// img4
	this.instance_4 = new lib.i4();
	this.instance_4.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(206).to({_off:false},0).wait(104));

	// t2
	this.instance_5 = new lib.t2();
	this.instance_5.setTransform(150.1,123,0.983,0.983,0,0,0,150.1,125);
	this.instance_5.alpha = 0.078;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(104).to({_off:false},0).to({regX:150,scaleX:1,scaleY:1,x:150,y:125,alpha:1},7).to({_off:true},90).wait(109));

	// img2
	this.instance_6 = new lib.i2();
	this.instance_6.setTransform(150,140,1,1,0,0,0,150,125);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(94).to({_off:false},0).to({y:125},17,cjs.Ease.get(1)).to({_off:true},90).wait(109));

	// t1
	this.instance_7 = new lib.t1();
	this.instance_7.setTransform(150,130,0.953,0.953,0,0,0,150,125);
	this.instance_7.alpha = 0.129;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(5).to({_off:false},0).to({scaleX:1,scaleY:1,y:125,alpha:1},7,cjs.Ease.get(0.3)).to({_off:true},79).wait(219));

	// img1
	this.instance_8 = new lib.i1();
	this.instance_8.setTransform(150,125,1.184,1.184,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({scaleX:1,scaleY:1},87,cjs.Ease.get(0.5)).to({_off:true},4).wait(219));

	// white
	this.instance_9 = new lib.white();
	this.instance_9.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(310));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(122.4,102,355.2,296);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;