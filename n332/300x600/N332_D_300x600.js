(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 600,
	fps: 23,
	color: "#FFFFFF",
	manifest: [
		{src:"images/end.jpg", id:"end"},
		{src:"images/logotextcta.png", id:"logotextcta"},
		{src:"images/normal.jpg", id:"normal"},
		{src:"images/start.jpg", id:"start"},
		{src:"images/turnmax.jpg", id:"turnmax"},
		{src:"images/turnmid.jpg", id:"turnmid"},
		{src:"images/turnmin.jpg", id:"turnmin"}
	]
};



// symbols:



(lib.end = function() {
	this.initialize(img.end);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.logotextcta = function() {
	this.initialize(img.logotextcta);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,250);


(lib.normal = function() {
	this.initialize(img.normal);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.start = function() {
	this.initialize(img.start);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,450);


(lib.turnmax = function() {
	this.initialize(img.turnmax);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.turnmid = function() {
	this.initialize(img.turnmid);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.turnmin = function() {
	this.initialize(img.turnmin);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.white = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgXbAu4MAAAhdvMAu2AAAMAAABdvg");
	this.shape.setTransform(150,300);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.turnmin_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.turnmin();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.turnmid_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.turnmid();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.turnmax_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.turnmax();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.start_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.start();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,450);


(lib.endcontent = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.logotextcta();
	this.instance.setTransform(0,0,0.5,0.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,125);


(lib.end_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.end();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.text = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A3bB4IAAjvMAu2AAAIAADvg");
	mask.setTransform(150,76);

	// Layer 1
	this.instance = new lib.endcontent();
	this.instance.setTransform(150,62.5,1,1,0,0,0,150,62.5);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,64,300,24);


(lib.normal_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_57 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(57).call(this.frame_57).wait(2));

	// Layer 5
	this.instance = new lib.turnmax_1();
	this.instance.setTransform(150,300,1,1,0,0,0,150,300);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(18).to({_off:false},0).to({alpha:1},3).wait(5).to({alpha:0},4).to({_off:true},1).wait(28));

	// Layer 4
	this.instance_1 = new lib.turnmid_1();
	this.instance_1.setTransform(150,300,1,1,0,0,0,150,300);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15).to({_off:false},0).to({alpha:1},3).wait(12).to({alpha:0},4).to({_off:true},1).wait(24));

	// Layer 3
	this.instance_2 = new lib.turnmin_1();
	this.instance_2.setTransform(150,300,1,1,0,0,0,150,300);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(12).to({_off:false},0).to({alpha:1},3).wait(19).to({alpha:0},4).to({_off:true},1).wait(20));

	// hand
	this.instance_3 = new lib.end_1();
	this.instance_3.setTransform(150,300,1,1,0,0,0,150,300);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(40).to({_off:false},0).to({alpha:1},12).wait(7));

	// start
	this.instance_4 = new lib.start_1();
	this.instance_4.setTransform(150,243,0.4,0.4,0,0,0,150,225);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},15).wait(44));

	// normal
	this.instance_5 = new lib.normal();

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(59));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.logo = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A3bC+IAAl7MAu2AAAIAAF7g");
	mask.setTransform(150,41);

	// Layer 1
	this.instance = new lib.endcontent();
	this.instance.setTransform(150,62.5,1,1,0,0,0,150,62.5);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,22,300,38);


(lib.cta = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A3bCCIAAkDMAu2AAAIAAEDg");
	mask.setTransform(150,113);

	// Layer 1
	this.instance = new lib.endcontent();
	this.instance.setTransform(150,62.5,1,1,0,0,0,150,62.5);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,100,300,25);


// stage content:
(lib.N332_D_300x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.loopCounter=0;
	}
	this.frame_2 = function() {
		this.n331.gotoAndPlay(2);
	}
	this.frame_62 = function() {
		this.loopCounter++;
		
		if(this.loopCounter==2)
		{
			this.stop();
		}
	}
	this.frame_154 = function() {
		this.gotoAndPlay(2);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(60).call(this.frame_62).wait(92).call(this.frame_154).wait(4));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,1).p("EgXWguyMAutAAAMAAABdlMgutAAAg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(158));

	// white
	this.instance = new lib.white();
	this.instance.setTransform(150,300,1,1,0,0,0,150,300);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(141).to({_off:false},0).to({alpha:1},7).wait(10));

	// cta
	this.instance_1 = new lib.cta();
	this.instance_1.setTransform(150,52.5,1,1,0,0,0,150,62.5);
	this.instance_1.alpha = 0.09;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(53).to({_off:false},0).to({y:62.5,alpha:1},7,cjs.Ease.get(0.55)).wait(98));

	// text
	this.instance_2 = new lib.text();
	this.instance_2.setTransform(150,52.5,1,1,0,0,0,150,62.5);
	this.instance_2.alpha = 0.09;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(48).to({_off:false},0).to({y:62.5,alpha:1},8,cjs.Ease.get(0.55)).wait(102));

	// logo
	this.instance_3 = new lib.logo();
	this.instance_3.setTransform(150,62.5,1,1,0,0,0,150,62.5);
	this.instance_3.alpha = 0.09;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(8).to({_off:false},0).to({alpha:1},3).wait(147));

	// n332
	this.n331 = new lib.normal_1();
	this.n331.setTransform(150,784,5.6,5.6,0,0,0,150,300);

	this.timeline.addTween(cjs.Tween.get(this.n331).wait(1).to({scaleX:1,scaleY:1,y:300},19,cjs.Ease.get(1)).wait(138));

	// white
	this.instance_4 = new lib.white();
	this.instance_4.setTransform(150,300,1,1,0,0,0,150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(158));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-540,-596,1680,3360);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;