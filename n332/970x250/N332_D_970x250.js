(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 970,
	height: 250,
	fps: 23,
	color: "#FFFFFF",
	manifest: [
		{src:"images/end.jpg", id:"end"},
		{src:"images/endcontent.png", id:"endcontent"},
		{src:"images/hand.jpg", id:"hand"},
		{src:"images/start.jpg", id:"start"},
		{src:"images/turn1.jpg", id:"turn1"},
		{src:"images/turn2.jpg", id:"turn2"},
		{src:"images/turn3.jpg", id:"turn3"},
		{src:"images/turn4.jpg", id:"turn4"}
	]
};



// symbols:



(lib.end = function() {
	this.initialize(img.end);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,250);


(lib.endcontent = function() {
	this.initialize(img.endcontent);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,210,96);


(lib.hand = function() {
	this.initialize(img.hand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,105,250);


(lib.start = function() {
	this.initialize(img.start);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,970,250);


(lib.turn1 = function() {
	this.initialize(img.turn1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,250);


(lib.turn2 = function() {
	this.initialize(img.turn2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,250);


(lib.turn3 = function() {
	this.initialize(img.turn3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,250);


(lib.turn4 = function() {
	this.initialize(img.turn4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,250);


(lib.white = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhLxATiMAAAgnDMCXjAAAMAAAAnDg");
	this.shape.setTransform(485,125);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,970,250);


(lib.turn4_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.turn4();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,200,250);


(lib.turn3_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.turn3();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,200,250);


(lib.turn2_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.turn2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,200,250);


(lib.turn1_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.turn1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,200,250);


(lib.start_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.start();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,970,250);


(lib.hand_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.hand();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,105,250);


(lib.endcontent_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.endcontent();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,210,96);


(lib.end_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.end();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,200,250);


(lib.text = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AwjBzIAAjlMAhHAAAIAADlg");
	mask.setTransform(106,47.5);

	// Layer 1
	this.instance = new lib.endcontent_1();
	this.instance.setTransform(105,48,1,1,0,0,0,105,48);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,36,210,23);


(lib.main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_46 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(46).call(this.frame_46).wait(6));

	// start
	this.instance = new lib.start_1();
	this.instance.setTransform(485.5,91,0.23,0.23,0,0,0,484.9,124.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},12).wait(40));

	// end
	this.instance_1 = new lib.end_1();
	this.instance_1.setTransform(484,125,1,1,0,0,0,100,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13).to({alpha:0.09},5).to({_off:true},1).wait(33));

	// turn4
	this.instance_2 = new lib.turn4_1();
	this.instance_2.setTransform(484,125,1,1,0,0,0,100,125);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(30).to({_off:false},0).to({alpha:1},4).wait(18));

	// turn3
	this.instance_3 = new lib.turn3_1();
	this.instance_3.setTransform(484,125,1,1,0,0,0,100,125);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(27).to({_off:false},0).to({alpha:1},4).wait(21));

	// turn2
	this.instance_4 = new lib.turn2_1();
	this.instance_4.setTransform(484,125,1,1,0,0,0,100,125);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(24).to({_off:false},0).to({alpha:1},4).wait(24));

	// turn1
	this.instance_5 = new lib.turn1_1();
	this.instance_5.setTransform(484,125,1,1,0,0,0,100,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(52));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(374.1,0,223,250);


(lib.logo = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AwjCQIAAkgMAhHAAAIAAEgg");
	mask.setTransform(106,14.5);

	// Layer 1
	this.instance = new lib.endcontent_1();
	this.instance.setTransform(105,48,1,1,0,0,0,105,48);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,210,29);


(lib.cta = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnzCMIAAkWIPmAAIAAEWg");
	mask.setTransform(105,84);

	// Layer 1
	this.instance = new lib.endcontent_1();
	this.instance.setTransform(105,48,1,1,0,0,0,105,48);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(55,70,100,26);


// stage content:
(lib.N332_D_970x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.loopCount = 0;
	}
	this.frame_2 = function() {
		this.main.gotoAndPlay(1);
	}
	this.frame_64 = function() {
		this.loopCount++;
		
		if(this.loopCount == 2)
		{
			this.stop();
		}
	}
	this.frame_173 = function() {
		this.gotoAndPlay(2);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(62).call(this.frame_64).wait(109).call(this.frame_173).wait(4));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,1).p("EhLsgTcMCXZAAAMAAAAm5MiXZAAAg");
	this.shape.setTransform(485,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(177));

	// white copy
	this.instance = new lib.white();
	this.instance.setTransform(485,125,1,1,0,0,0,485,125);
	this.instance.alpha = 0.051;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(158).to({_off:false},0).to({alpha:1},8).wait(11));

	// logo
	this.instance_1 = new lib.logo();
	this.instance_1.setTransform(774,125,1,1,0,0,0,105,48);
	this.instance_1.alpha = 0.238;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(31).to({_off:false},0).wait(1).to({regY:14.5,x:760.1,y:91.5,alpha:0.275},0).wait(1).to({x:743.1,alpha:0.319},0).wait(1).to({x:723.1,alpha:0.372},0).wait(1).to({x:700.6,alpha:0.431},0).wait(1).to({x:676.1,alpha:0.495},0).wait(1).to({x:650.1,alpha:0.564},0).wait(1).to({x:623.5,alpha:0.634},0).wait(1).to({x:596.9,alpha:0.704},0).wait(1).to({x:571.2,alpha:0.771},0).wait(1).to({x:547.3,alpha:0.834},0).wait(1).to({x:526.2,alpha:0.889},0).wait(1).to({x:508.5,alpha:0.936},0).wait(1).to({x:495.2,alpha:0.97},0).wait(1).to({x:486.9,alpha:0.992},0).wait(1).to({regY:48,x:484,y:125,alpha:1},0).wait(131));

	// cta
	this.instance_2 = new lib.cta();
	this.instance_2.setTransform(484,115,1,1,0,0,0,105,48);
	this.instance_2.alpha = 0.238;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(55).to({_off:false},0).to({y:125,alpha:1},5,cjs.Ease.get(1)).wait(117));

	// text
	this.instance_3 = new lib.text();
	this.instance_3.setTransform(484,115,1,1,0,0,0,105,48);
	this.instance_3.alpha = 0.238;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(51).to({_off:false},0).to({y:125,alpha:1},6,cjs.Ease.get(1)).wait(120));

	// hand
	this.instance_4 = new lib.hand_1();
	this.instance_4.setTransform(1022.5,125,1,1,0,0,0,52.5,125);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(31).to({_off:false},0).wait(1).to({x:1010.5},0).wait(1).to({x:995.6},0).wait(1).to({x:978.3},0).wait(1).to({x:958.7},0).wait(1).to({x:937.4},0).wait(1).to({x:914.9},0).wait(1).to({x:891.7},0).wait(1).to({x:868.6},0).wait(1).to({x:846.3},0).wait(1).to({x:825.5},0).wait(1).to({x:807.1},0).wait(1).to({x:791.8},0).wait(1).to({x:780.3},0).wait(1).to({x:773},0).wait(1).to({x:770.5},0).wait(131));

	// main
	this.main = new lib.main();
	this.main.setTransform(485.3,413.8,8.454,8.454,0,0,0,485.2,125);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1).to({regX:485,scaleX:1,scaleY:1,x:485,y:125},21,cjs.Ease.get(1)).wait(10).to({regX:485.5,x:471.2},0).wait(1).to({x:453.6},0).wait(1).to({x:432.9},0).wait(1).to({x:409.6},0).wait(1).to({x:384.3},0).wait(1).to({x:357.4},0).wait(1).to({x:329.8},0).wait(1).to({x:302.3},0).wait(1).to({x:275.7},0).wait(1).to({x:251},0).wait(1).to({x:229.2},0).wait(1).to({x:210.9},0).wait(1).to({x:197.2},0).wait(1).to({x:188.5},0).wait(1).to({regX:485,x:185},0).wait(131));

	// white
	this.instance_5 = new lib.white();
	this.instance_5.setTransform(485,125,1,1,0,0,0,485,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(177));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(30.6,-517.9,1884.9,2113.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;