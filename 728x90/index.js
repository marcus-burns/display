(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 728,
	height: 90,
	fps: 23,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/ends.png?1483633568569", id:"ends"},
		{src:"images/machine.jpg?1483633568569", id:"machine"}
	]
};



lib.ssMetadata = [];


// symbols:



(lib.ends = function() {
	this.initialize(img.ends);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1456,180);


(lib.machine = function() {
	this.initialize(img.machine);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1456,180);


(lib.white = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.gradient = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#B24284","#77174C","#74174B","#B92678","#E07DAF","#ED99C0","#CC4C91","#871854","#651845","#AD2273"],[0,0.063,0.145,0.263,0.361,0.471,0.584,0.718,0.867,1],-80,0,80,0).s().p("EgMfECPMAAAoEdIY/AAMAAAIEdg");
	this.shape.setTransform(80,646.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("EizHEscMAFtpemMFgiAFvMgFtJemg");
	this.shape_1.setTransform(1219.9,848.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1111,2366.4,3919.1);


(lib.endcontent = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ends();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.end = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ends();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.dust1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(204,204,204,0.478)","rgba(255,255,255,0.486)"],[0,1],0,0,0,0,0,43.3).s().p("AkOFEQgKgCgCgFQgEgGAFgLQAPggAuguQA/g/CAh6QBuhsBEhUQAYgeAMgWQAQgegBgcIAAgXQAAgOAFgJQAOgUAlAFQATACAGAJQAEAHgBANQgCAxgIAZQgJAXgZAhQhDBZhsBqIi9C3QgvAtgSAbIgPAXQgJAMgLAEQgJAEgLAAQgMAAgOgEg");
	this.shape.setTransform(102.6,58.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["rgba(204,204,204,0.608)","rgba(204,204,204,0.8)","rgba(255,255,255,0.337)"],[0,0.008,1],0,0,0,0,0,43.3).s().p("AkOFEQgKgCgCgFQgEgGAFgLQAPggAuguQA/g/CAh6QBuhsBEhUQAYgeAMgWQAQgegBgcIAAgXQAAgOAFgJQAOgUAlAFQATACAGAJQAEAHgBANQgCAxgIAZQgJAXgZAhQhDBZhsBqIi9C3QgvAtgSAbIgPAXQgJAMgLAEQgJAEgLAAQgMAAgOgEg");
	this.shape_1.setTransform(128.9,63.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(74.1,26,83.3,70.6);


(lib.black = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.machine();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6 copy
	this.instance = new lib.dust1();
	this.instance.setTransform(543.2,49.6,0.309,0.492,0,58,74,80.3,55);
	this.instance.alpha = 0.488;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({regX:80.5,regY:54.8,scaleX:0.31,scaleY:0.49,skewX:59.4,skewY:74.6,x:543.1,y:49.3,alpha:0.461},2).to({regY:55,scaleX:0.31,scaleY:0.49,skewX:60.4,skewY:75.1,y:48.9,alpha:0.391},2).to({regX:80.3,scaleX:0.31,scaleY:0.49,skewX:58,skewY:74,x:543.2,y:49.8,alpha:0.449},3).wait(1));

	// Layer 6
	this.instance_1 = new lib.dust1();
	this.instance_1.setTransform(543.9,57.5,0.205,0.457,70.8,0,0,80.1,55.1);
	this.instance_1.alpha = 0.738;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:80.4,regY:55,scaleX:0.2,rotation:71.8,y:57.3,alpha:0.91},2).to({regY:55.1,rotation:72.5,y:57.1,alpha:0.75},2).to({regX:80.1,scaleX:0.21,rotation:70.8,y:57.6,alpha:0.91},3).to({y:57.5,alpha:0.781},2).wait(1));

	// Layer 1
	this.instance_2 = new lib.bg();
	this.instance_2.setTransform(353,39,1,1,0,0,0,364,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-6,728,90);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.loopCount=0;
	}
	this.frame_130 = function() {
		this.loopCount++;
		
		if(this.loopCount > 1){
			
			this.stop();
			this.main.stop();
		}
	}
	this.frame_212 = function() {
		this.gotoAndPlay(5);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(130).call(this.frame_130).wait(82).call(this.frame_212).wait(2));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,1).p("Eg4ygG8MBxlAAAIAAN5MhxlAAAg");
	this.shape.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(214));

	// black
	this.instance = new lib.black();
	this.instance.setTransform(364,45,1,1,0,0,0,364,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},6).wait(195).to({_off:false,alpha:0},0).to({alpha:1},10).wait(3));

	// blur
	this.instance_1 = new lib.gradient();
	this.instance_1.setTransform(784.7,41,0.343,0.343,-156.2,0,0,79.9,1646.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).to({regX:80,regY:1646.4,rotation:-21.7},20,cjs.Ease.get(0.15)).to({_off:true},1).wait(187));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EhvWBhsMBtij1zMBxLAycMhtiD1zg");
	var mask_graphics_6 = new cjs.Graphics().p("EhvWBhsMBtij1zMBxLAycMhtiD1zg");
	var mask_graphics_7 = new cjs.Graphics().p("Eh7cBR3MCNfjk4MBpaBBLMiNfDk4g");
	var mask_graphics_8 = new cjs.Graphics().p("EiFNBAzMCqkjQIMBf3BOjMiqkDQIg");
	var mask_graphics_9 = new cjs.Graphics().p("EiMiAu1MDEUi4DMBUxBaaMjEUC4Dg");
	var mask_graphics_10 = new cjs.Graphics().p("EiRZAcUMDaZidMMBIaBklMjaZCdMg");
	var mask_graphics_11 = new cjs.Graphics().p("EiT0AJmMDsoiAJMA7BBs+MjsoCAJg");
	var mask_graphics_12 = new cjs.Graphics().p("EiT2gJAMD61hheMAs4BzfMj61Bheg");
	var mask_graphics_13 = new cjs.Graphics().p("EiRmgbOMEE9hBtMAeQB4KMkE9BBtg");
	var mask_graphics_14 = new cjs.Graphics().p("EiNMgsxMELBghZMAPYB68MkLBAhZg");
	var mask_graphics_15 = new cjs.Graphics().p("EiGyg9bMENGgBDMAAfB76MkNGABDg");
	var mask_graphics_16 = new cjs.Graphics().p("EiMwAuJMAOMh7GMELVAe1MgOMB7Gg");
	var mask_graphics_17 = new cjs.Graphics().p("EiRLAdaMAcdh4mMEF6A9zMgcdB4mg");
	var mask_graphics_18 = new cjs.Graphics().p("EiTmAMhMAqJh0hMD9EBbgMgqJB0hg");
	var mask_graphics_19 = new cjs.Graphics().p("EiUEgEPMA3DhvCMDxGB3hMg3DBvCg");
	var mask_graphics_20 = new cjs.Graphics().p("EiSrgUtMBDFhoNMDiSCRoMhDFBoNg");
	var mask_graphics_21 = new cjs.Graphics().p("EiPhgkqMBOHhgPMDQ8CpkMhOHBgPg");
	var mask_graphics_22 = new cjs.Graphics().p("EiKugz7MBYChXQMC9bC/HMhYCBXQg");
	var mask_graphics_23 = new cjs.Graphics().p("EiEbhCXMBgyhNaMCoFDSJMhgyBNag");
	var mask_graphics_24 = new cjs.Graphics().p("Eh8xhP0MBoVhC5MCRODiiMhoVBC5g");
	var mask_graphics_25 = new cjs.Graphics().p("Ehr7hcNMBung31MB5PDwQMhuqA31g");
	var mask_graphics_26 = new cjs.Graphics().p("EhXRhnbMBzrgsYMBgYD7PMhztAsYg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:172.7,y:464.9}).wait(6).to({graphics:mask_graphics_6,x:172.7,y:464.9}).wait(1).to({graphics:mask_graphics_7,x:121.5,y:378.9}).wait(1).to({graphics:mask_graphics_8,x:82.7,y:288.1}).wait(1).to({graphics:mask_graphics_9,x:56.5,y:194.2}).wait(1).to({graphics:mask_graphics_10,x:42.9,y:99}).wait(1).to({graphics:mask_graphics_11,x:41.7,y:4.1}).wait(1).to({graphics:mask_graphics_12,x:52.3,y:-88.8}).wait(1).to({graphics:mask_graphics_13,x:74.1,y:-178.4}).wait(1).to({graphics:mask_graphics_14,x:106.2,y:-263.4}).wait(1).to({graphics:mask_graphics_15,x:147.8,y:-342.8}).wait(1).to({graphics:mask_graphics_16,x:197.9,y:-415.5}).wait(1).to({graphics:mask_graphics_17,x:255.2,y:-480.9}).wait(1).to({graphics:mask_graphics_18,x:318.8,y:-538.3}).wait(1).to({graphics:mask_graphics_19,x:387.4,y:-587.3}).wait(1).to({graphics:mask_graphics_20,x:460,y:-627.6}).wait(1).to({graphics:mask_graphics_21,x:535.3,y:-659.2}).wait(1).to({graphics:mask_graphics_22,x:612.4,y:-682}).wait(1).to({graphics:mask_graphics_23,x:690.2,y:-696.3}).wait(1).to({graphics:mask_graphics_24,x:767.8,y:-702.1}).wait(1).to({graphics:mask_graphics_25,x:793.1,y:-699.9}).wait(1).to({graphics:mask_graphics_26,x:798.7,y:-690.2}).wait(1).to({graphics:null,x:0,y:0}).wait(187));

	// white
	this.instance_2 = new lib.white();
	this.instance_2.setTransform(80,300,1,1,0,0,0,80,300);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},27).wait(187));

	// btn mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_118 = new cjs.Graphics().p("ArZDWIAAmrIWyAAIAAGrg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(118).to({graphics:mask_1_graphics_118,x:655.1,y:72.5}).wait(96));

	// end copy 3
	this.instance_3 = new lib.end();
	this.instance_3.setTransform(644.2,66.5,0.95,0.95,0,0,0,644.2,66.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.instance_3.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(118).to({_off:false},0).to({scaleX:1.05,scaleY:1.05,alpha:1},7).to({scaleX:1,scaleY:1},4).wait(48).to({scaleX:0.95,scaleY:0.95},4).to({scaleX:1.05,scaleY:1.05},4).to({scaleX:1,scaleY:1},4).wait(25));

	// offer mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_95 = new cjs.Graphics().p("A3bD6IAAnzMAu2AAAIAAHzg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(95).to({graphics:mask_2_graphics_95,x:735,y:25}).wait(119));

	// end
	this.instance_4 = new lib.endcontent();
	this.instance_4.setTransform(364,45,1,1,0,0,0,364,45);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.instance_4.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(95).to({_off:false},0).to({alpha:1},7).wait(112));

	// text mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_74 = new cjs.Graphics().p("A0sD6IAAnzMApYAAAIAAHzg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(74).to({graphics:mask_3_graphics_74,x:132.5,y:65}).wait(140));

	// end
	this.instance_5 = new lib.endcontent();
	this.instance_5.setTransform(728,90,1,1,0,0,0,728,90);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.instance_5.mask = mask_3;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(74).to({_off:false},0).to({alpha:1},8).wait(132));

	// logo mask (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("AsfDHIAAmOIY/AAIAAGOg");
	mask_4.setTransform(80,20);

	// end
	this.instance_6 = new lib.endcontent();
	this.instance_6.setTransform(728,90,1,1,0,0,0,728,90);

	this.instance_6.mask = mask_4;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(214));

	// bg
	this.main = new lib.mc();
	this.main.setTransform(-634,653,2.5,2.5,0,0,0,80,300);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(49).to({regX:80.1,regY:300.1,scaleX:0.94,scaleY:0.94,x:90.1,y:283.1},33).wait(132));

	// white
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape_1.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(214));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-497.5,-67,1820,225);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;