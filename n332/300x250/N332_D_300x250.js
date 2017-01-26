(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 23,
	color: "#FFFFFF",
	manifest: [
		{src:"images/end.jpg", id:"end"},
		{src:"images/normal.jpg", id:"normal"},
		{src:"images/start.jpg", id:"start"},
		{src:"images/textcta.png", id:"textcta"},
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


(lib.normal = function() {
	this.initialize(img.normal);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.start = function() {
	this.initialize(img.start);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,450);


(lib.textcta = function() {
	this.initialize(img.textcta);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,54);


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
	this.shape.graphics.f("#FFFFFF").s().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


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


(lib.text = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A3bBjIAAjGMAu2AAAIAADGg");
	mask.setTransform(150,10);

	// Layer 1
	this.instance = new lib.textcta();

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,20);


(lib.start_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.start();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,450);


(lib.logogrey = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9D9D9C").s().p("Ah0DOIAAjBQAAhlBDg+QA7g3BVAAIAXAAIAABUQgRAAgTADQg1AJgcAjQgaAiABA2IAADAg");
	this.shape.setTransform(442.2,41.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9D9D9C").s().p("ABzDOIAAjIQAAg3gkgjQgggggvAAQgtAAghAgQgjAjAAA3IAADIIhcAAIAAjOQAAhUA9g9QA8g8BUAAQBVAAA9A8QA8A9AABUIAADOg");
	this.shape_1.setTransform(564.4,41.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9D9D9C").s().p("AgtDKIAAmTIBbAAIAAGTg");
	this.shape_2.setTransform(596.5,41.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9D9D9C").s().p("AgkAmQgPgQAAgWQAAgVAPgPQAPgQAVAAQAVAAAQAPQAPAQAAAVQAAAVgPAQQgPAQgWAAQgUAAgQgPg");
	this.shape_3.setTransform(596.7,7.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#9D9D9C").s().p("AiOCVQg/g+AAhkIAAjAIBcAAIAADAQAAA/AjAjQAfAgAvAAQAvAAAgggQAjgjAAg/IAAjAIBcAAIAADAQAABjg+A+Qg6A6hWAAQhUAAg6g5g");
	this.shape_4.setTransform(311.4,41.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9D9D9C").s().p("AjSEtIAAmDQAAhXA9g/QA+g/BXAAQBaAAA8A8QA9A8AABdQAABWhBA7Qg/A9hXAAIhyAAIAAC1gAhTiuQgjAkAAA0IAAB1IB2AAQAvgBAkggQAkglAAgzQAAg6gnghQgigcguAAQgxAAgiAjg");
	this.shape_5.setTransform(358,50.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#9D9D9C").s().p("AhXC/QgygRglgcIAxg/QAeATAiAMQAoAPAdAAQAcAAAUgIQAZgLAAgUQAAgVgngPIhUgZQh8gkAAhSQAAgxAtgjQAugkBIAAQAoAAArANQAsANAfAWIgwA8Qg4gbg2AAQhDAAAAAmQAAASAmAOQAYAIA7ARQB8AkAABMQAAA/g4AkQgwAghCAAQgqAAgygTg");
	this.shape_6.setTransform(474.9,41.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#9D9D9C").s().p("AhXC/QgygRglgcIAyg/QAeATAhAMQAoAPAdAAQAcAAAUgIQAZgLAAgUQAAgVgngPIhTgZQh9gkAAhSQAAgxAtgjQAvgkBHAAQApAAArANQAsANAeAWIgvA8Qg5gbg2AAQhDAAAAAmQAAASAnAOQAXAIA8ARQB7AkAABMQAAA/g4AkQgwAghCAAQgpAAgzgTg");
	this.shape_7.setTransform(269,41.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#9D9D9C").s().p("AiUCVQg+g+AAhXQAAhXA+g9QA9g+BXAAQBXAAA+A+QA+A9AABXQAABXg+A+Qg+A+hXAAQhWAAg+g+gAhVhWQgkAkAAAyQAAAzAkAkQAkAlAxAAQAzAAAkglQAjgkAAgzQAAgygjgkQgkglgzAAQgxAAgkAlg");
	this.shape_8.setTransform(517.7,41.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#9D9D9C").s().p("AiZCPQg5g9AAhUQAAhbBEg8QA/g4BQAAQBUAAA+A8QBAA+AABVQAAAFgFAbIlBAAQAHAoAgAcQAhAeAsAAQA7AABBgqIAzBAQgkAbghAOQgvATg2AAQhhAAg+hDgAhIhkQggAZgIAiIDhAAQgIgfgcgZQghgegrAAQgnAAgiAbg");
	this.shape_9.setTransform(404.4,41.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#9D9D9C").s().p("AhwCSQg6g+AAhUQAAhjBIg8QA8gyBJAAQAnAAAjANQAkAOAaAaIg2A6QgTgMgOgFQgUgIgdAAQgnAAgkAgQgqAlABA2QgBA2AqAlQAlAhAlAAQAfAAARgGQAQgFASgOIA3A6QgaAaglAOQgjANgmAAQhXAAg8hAg");
	this.shape_10.setTransform(623.3,41.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1D1D1C").s().p("Ah6EiQgZgLgXgPIgTgPIA2hLIAlAUQAnATAfAAQBLACAghCQATgnAAgyQgQASggALQgcALgWAAQhXAAg9g8Qg+g7AAhXIAAjNIBwAAIAADNQAAAqAdAdQAeAdAnAAQApAAAdgdQAdgdAAgqIAAjNIBvAAIAADNQAAC+gSBDQghB+h2AcQgeAHgdAAQg0AAg0gWg");
	this.shape_11.setTransform(69.1,52.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1D1D1C").s().p("AgVDRQhcgPg+gwIA1hJQAZATAsANQA1AQAkgJQAagFAGgPQAFgPgSgKQgJgFhAgTQhBgRgdgTQg2gfAAg4QAAgSAGgSIAFgOQAfg5BJgQQAkgHAcADQAyAEApAPQAhAMAUARIg0BIQgmgRgngFQglgGgaAHQgTAFgEAMQgEAMAMAIQANAIA6ARQBAASAcAPQBCAhgDA/QgCApgVAaQgnAxhJAKg");
	this.shape_12.setTransform(112.4,41.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1D1D1C").s().p("AjQDNIAAjJQAAhWA9g9QA+g+BVAAQBXAAA9A+QA+A9AABWIAADJIhvAAIAAjJQAAgngdgdQgdgdgpAAQgoAAgdAdQgdAdAAAnIAADJg");
	this.shape_13.setTransform(200.9,41.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1D1D1C").s().p("AiTCUQg+g+AAhWQAAhWA+g9QA9g+BWAAQBWAAA+A+QA+A9AABWQAABWg+A+Qg+A+hWAAQhWAAg9g+gAhGhGQgeAeAAAoQAAApAeAdQAdAeApAAQAoAAAegeQAdgdAAgpQAAgogdgeQgegdgoAAQgpAAgdAdg");
	this.shape_14.setTransform(154.3,41.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1D1D1C").s().p("AiTD7Qg+g+AAhXQAAhXA+g8QA9g9BWAAIBjAAIAAjOIBvAAIAAGeQAABXg+A+Qg9A+hXAAQhWAAg9g+gAhGAfQgdAeAAApQAAApAdAeQAeAdAoAAQApAAAdgdQAdgeAAgpIAAhkIhjAAQgoAAgeAdg");
	this.shape_15.setTransform(21.1,31.3);

	this.addChild(this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640.5,83.9);


(lib.end_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.end();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.cta = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlwCCIAAkDILiAAIAAEDg");
	mask.setTransform(151,41);

	// Layer 1
	this.instance = new lib.textcta();

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(114,28,74,26);


(lib.normal_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(2));

	// Layer 5
	this.instance = new lib.turnmax_1();
	this.instance.setTransform(150,300,1,1,0,0,0,150,300);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(17).to({_off:false},0).to({alpha:1},3).wait(7).to({alpha:0},4).to({_off:true},1).wait(29));

	// Layer 4
	this.instance_1 = new lib.turnmid_1();
	this.instance_1.setTransform(150,300,1,1,0,0,0,150,300);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({alpha:1},3).wait(14).to({alpha:0},4).to({_off:true},1).wait(25));

	// Layer 3
	this.instance_2 = new lib.turnmin_1();
	this.instance_2.setTransform(150,300,1,1,0,0,0,150,300);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(11).to({_off:false},0).to({alpha:1},3).wait(21).to({alpha:0},4).to({_off:true},1).wait(21));

	// hand
	this.instance_3 = new lib.end_1();
	this.instance_3.setTransform(150,300,1,1,0,0,0,150,300);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(39).to({_off:false},0).to({alpha:1},12).wait(10));

	// start
	this.instance_4 = new lib.start_1();
	this.instance_4.setTransform(150,243,0.4,0.4,0,0,0,150,225);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},14).wait(47));

	// normal
	this.instance_5 = new lib.normal();

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(61));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


// stage content:
(lib.N332_D_300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.loopCounter=0;
	}
	this.frame_2 = function() {
		this.n331.gotoAndPlay(2);
	}
	this.frame_68 = function() {
		this.loopCounter++;
		
		if(this.loopCounter==2)
		{
			this.stop();
		}
	}
	this.frame_160 = function() {
		this.gotoAndPlay(2);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(66).call(this.frame_68).wait(92).call(this.frame_160).wait(4));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,1).p("A3WzcMAutAAAMAAAAm5MgutAAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(164));

	// white
	this.instance = new lib.white();
	this.instance.setTransform(150,300,1,1,0,0,0,150,300);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(147).to({_off:false},0).to({alpha:1},7).wait(10));

	// logo
	this.instance_1 = new lib.logogrey();
	this.instance_1.setTransform(150.5,-9.5,0.283,0.283,0,0,0,320.2,42);
	this.instance_1.alpha = 0.09;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({y:40.5,alpha:1},10,cjs.Ease.get(1)).wait(145));

	// cta
	this.instance_2 = new lib.cta();
	this.instance_2.setTransform(149,77,1,1,0,0,0,150,27);
	this.instance_2.alpha = 0.09;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(56).to({_off:false},0).to({y:87,alpha:1},9,cjs.Ease.get(1)).wait(99));

	// text
	this.instance_3 = new lib.text();
	this.instance_3.setTransform(150,77,1,1,0,0,0,150,27);
	this.instance_3.alpha = 0.09;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(49).to({_off:false},0).to({y:87,alpha:1},11,cjs.Ease.get(1)).wait(104));

	// n332
	this.n331 = new lib.normal_1();
	this.n331.setTransform(150,614,5.6,5.6,0,0,0,150,300);

	this.timeline.addTween(cjs.Tween.get(this.n331).wait(1).to({scaleX:0.55,scaleY:0.55,y:207},22,cjs.Ease.get(1)).wait(141));

	// white
	this.instance_4 = new lib.white();
	this.instance_4.setTransform(150,300,1,1,0,0,0,150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(164));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-540,-941,1680,3360);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;