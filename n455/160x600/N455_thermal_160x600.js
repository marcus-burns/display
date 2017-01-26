(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 160,
	height: 600,
	fps: 23,
	color: "#33B2E4",
	manifest: [
		{src:"images/cta.png", id:"cta"},
		{src:"images/endtext.png", id:"endtext"},
		{src:"images/hero.jpg", id:"hero"},
		{src:"images/text1.png", id:"text1"},
		{src:"images/text2.png", id:"text2"},
		{src:"images/text3.png", id:"text3"}
	]
};



// symbols:



(lib.cta = function() {
	this.initialize(img.cta);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,174,48);


(lib.endtext = function() {
	this.initialize(img.endtext);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,1200);


(lib.hero = function() {
	this.initialize(img.hero);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,300);


(lib.text1 = function() {
	this.initialize(img.text1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,1200);


(lib.text2 = function() {
	this.initialize(img.text2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,1200);


(lib.text3 = function() {
	this.initialize(img.text3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,1200);


(lib.text3_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.text3();
	this.instance.setTransform(0,0,0.5,0.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.text2_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.text2();
	this.instance.setTransform(0,0,0.5,0.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.text1_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.text1();
	this.instance.setTransform(0,0,0.5,0.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.sunstreak = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFE04E").ss(5,1,1).p("AgnAoIBPhP");
	this.shape.setTransform(1,7.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.5,0.8,13,13);


(lib.raindrop = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5).p("AFUquQitB4i3CbQl0E3hACvQhCCyBXCvQBXCvC7BFQC6BECzhNQCzhOBBiyQBBixhSnbQgaiVglihgAhzIuQh2gqhKh5QhUiJA0iNQAsh3Edj8QCNh+CGhmIAVBqQAZCBARB2QA3F3gsB4Qg0CNiZAyQiGAshzgrg");
	this.shape.setTransform(48.2,69.6,1,1,0,0,0,0,0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AidKXQi7hEhXivQhXivBCizQBAiuF0k3QC3icCth4IAgCEQAlCgAaCWQBSHahBCxQhBCzizBOQhfAphhAAQhUAAhZghgAgKkGQkdD8gsB2Qg0CNBUCKQBKB4B2ArQBzArCGgsQCZgzA0iMQAsh5g3l3QgRh2gZiBIgVhpQiGBmiNB+g");
	this.shape_1.setTransform(48.2,69.6);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.5,-4.3,101.3,146);


(lib.logo = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#008CC8").s().p("AjqDqQhhhhAAiJQAAiJBhhgQBhhhCJAAQCJAABiBhQBhBgAACJQAACJhhBhQhiBhiJAAQiIAAhihhgAiGiJQg4A5AABQQAABQA4A5QA4A6BPAAQBQAAA3g6QA3g5AAhQQAAhQg3g5Qg3g5hQAAQhPAAg4A5g");
	this.shape.setTransform(639.1,146.4,1.175,1.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#008CC8").s().p("AjqDqQhghhgBiJQABiJBghgQBhhhCJAAQCJAABhBhQBhBgAACJQAACJhhBhQhhBhiJAAQiIAAhihhgAiGiJQg5A5ABBQQgBBQA5A5QA5A6BOAAQBQAAA3g6QA3g5AAhQQAAhQg3g5Qg2g5hRAAQhOAAg5A5g");
	this.shape_1.setTransform(553.9,146.4,1.175,1.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#008CC8").s().p("AixDmQhchhAAiFQAAidByheQBfhPBzAAQA+AAA2AVQA5AVApApIhWBdQgcgUgXgIQgfgMguAAQg+AAg5AzQhBA6AABVQAABVBCA7QA5AzA6AAQAyAAAbgJQAYgIAdgXIBYBdQgqAog5AWQg4AVg8AAQiJAAhfhlg");
	this.shape_2.setTransform(481,146.4,1.175,1.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgxExIAAkAIj6AAIAAhiID6AAIAAj/IBjAAIAAD/ID6AAIAABiIj6AAIAAEAg");
	this.shape_3.setTransform(399.9,147,1.175,1.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BE131A").s().p("ACcHLQh/AAhahOQhmhWAAiNIAApkICMAAIAAEVICTAAIAACFIiTAAIAAC+QAABGAZAqQAoA7BlAPIAVADIAACAg");
	this.shape_4.setTransform(333.9,131.3,1.175,1.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BE131A").s().p("AjpDqQhihhAAiJQAAiJBihgQBhhhCIAAQCKAABhBhQBhBgAACJQAACJhhBhQhiBhiJAAQiIAAhhhhgAiGiJQg4A5AABQQAABQA4A5QA4A6BPAAQBQAAA3g6QA3g5AAhQQAAhQg3g5Qg3g5hQAAQhPAAg4A5g");
	this.shape_5.setTransform(266.2,146.4,1.175,1.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BE131A").s().p("ACvHBIAAk0QAAhmgwgwQgsgvhTAAQhJAAgxA0Qg1A0AABZIAAE4IiMAAIAAuBICMAAIAAFDQAkgfAygSQAwgSAwAAQCCAABXBYQBcBbAACOIAAFAg");
	this.shape_6.setTransform(180.8,130.1,1.175,1.175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A1D6F4").s().p("AiyE6IAAklQAAidBnhdQBbhUCBAAIAiAAIAACAQgRgBgkAGQhSAOgqA1QgoAzAABUIAAEkg");
	this.shape_7.setTransform(780.8,-25.4,1.175,1.175);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A1D6F4").s().p("AjZDjQhfhdAAiaIAAkkICLAAIAAEkQAABgA2A2QAwAwBHABQBIgBAwgwQA2g2AAhgIAAkkICLAAIAAEkQAACXhdBeQhZBZiDAAQiBAAhYhXg");
	this.shape_8.setTransform(714.3,-24,1.175,1.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A1D6F4").s().p("AlAHJIAApNQAAiFBdhfQBdhgCFAAQCKAABcBcQBcBbAACNQAACEhiBaQhhBciFAAIitAAIAAETgAiAkJQg0A2AABPIAACzICzAAQBJAAA2gzQA3g3AAhOQAAhYg8gyQg0gshGAAQhLAAg0A2g");
	this.shape_9.setTransform(631.1,-8.5,1.175,1.175);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A1D6F4").s().p("AjpDaQhXhdABiAQgBiKBnhcQBghWB7AAQB/AABfBdQBgBdAACCQAAAMgGAlInqAAQALA9AvAqQA0AuBEAAQBZAABjhAIBOBiQg3ApgyAUQhIAehRAAQiVAAhehmgAhuiZQgyAmgLAzIFWAAQgLgugqgmQgzguhBAAQg9AAgzApg");
	this.shape_10.setTransform(842.2,-24.7,1.175,1.175);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ai5G5QgngRgjgXQgQgLgOgMIBThyQAeATAaAMQA7AcAvABQBzADAyhlQAcg6AAhMQgZAbgvARQgrAQgiAAQiEAAhdhbQhdhZAAiFIAAk4ICoABIABE3QgBA/AtAsQAsAtA9AAQA+AAAsgtQAtgsgBg/IAAk3ICpgBIAAE4QAACegCAuQgFBwgUBLQgyC+izArQgvALgsAAQhQAAhNghg");
	this.shape_11.setTransform(266.7,-5,1.175,1.175);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgFE/IgdgDQiLgXhehIIBRhvQAlAcBDAUQBRAZA4gNQAngJAJgXQAIgWgbgQQgOgIhjgbQhigbgtgcQhRgxABhWQAAgbAIgbIAIgVQAvhXBugYQA3gLAsAFQBMAFA+AYQAyASAfAaIhPBtQg6gag7gIQg5gJgoALQgdAIgGATQgHARATANQATAMBbAaQBhAbApAWQBlA0gEBfQgDA/ggAoQg8BLhuAOQgZAEgZAAIgSgBg");
	this.shape_12.setTransform(344,-24.5,1.175,1.175);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ak+E5IAAkzQAAiCBeheQBdheCDAAQCEAABeBeQBdBeAACCIAAEyIioAAIAAkyQAAg8gsgtQgtgsg+AAQg9AAgsAsQgsAtAAA8IAAEzg");
	this.shape_13.setTransform(501.5,-25.3,1.175,1.175);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AjhDhQhdhdAAiEQAAiDBdheQBehdCDAAQCEAABeBdQBdBeAACDQAACEhdBdQheBeiEAAQiDAAhehegAhrhrQgtAtAAA+QAAA/AtAsQAtAtA+AAQA+AAAtgtQAtgsAAg/QAAg+gtgtQgtgsg+AAQg+AAgtAsg");
	this.shape_14.setTransform(418.5,-24.6,1.175,1.175);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AjhF9QhdhegBiEQABiFBdhbQBdheCEAAICXAAIAAk3ICoAAIAAJ1QABCEheBeQheBeiEAAQiEAAhdhegAhqAwQgtAsAAA/QAAA/AtAtQAsAsA+ABQA+gBAsgsQAtgtAAg/IAAiYIiXAAQg+AAgsAtg");
	this.shape_15.setTransform(181.2,-42.8,1.175,1.175);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#008CC8").s().p("AhGHDIAAuFICNAAIAAOFg");
	this.shape_16.setTransform(696.8,130,1.175,1.175);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#9D9D9C").s().p("ACuE6IAAkxQAAhVg2g1QgxgxhHABQhGgBgxAxQg2A1AABVIAAExIiMAAIAAk6QAAiBBchcQBdhcCAAAQCCAABcBcQBcBcAACBIAAE6g");
	this.shape_17.setTransform(826,146.3,1.175,1.175);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#9D9D9C").s().p("ABoHDIj/kEIAAEEIiOAAIAAuFICOAAIAAICID2jjIDHAAIlAEgIE1FGg");
	this.shape_18.setTransform(909,130.2,1.175,1.175);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#9D9D9C").s().p("AhGE0IAApnICNAAIAAJng");
	this.shape_19.setTransform(769.3,147.1,1.175,1.175);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#9D9D9C").s().p("Ag3A6QgYgYAAgiQAAggAYgYQAXgYAgAAQAhAAAXAYQAYAXAAAhQAAAhgYAYQgXAYghAAQggAAgXgXg");
	this.shape_20.setTransform(769.3,86.7,1.175,1.175);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#9D9D9C").s().p("AhGHDIAAuFICNAAIAAOFg");
	this.shape_21.setTransform(740.8,130.2,1.175,1.175);

	this.addChild(this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(143.7,-98.7,800,284);


(lib.gradientgrey = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#BBBBBB","#000000"],[0,1],0,-650,0,650).s().p("EgMfBljMAAAjLGIY/AAMAAADLGg");
	this.shape.setTransform(80,650);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,160,1300);


(lib.gradientblue = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#0093D9","#5DCBEE"],[0,1],0,-300,0,300).s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape.setTransform(80,300);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.endtext_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.endtext();
	this.instance.setTransform(0,0,0.5,0.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.cta_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.cta();
	this.instance.setTransform(0,0,0.5,0.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,87,24);


(lib.cloudwhite = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").p("AnShTQhtAAhLBKQhLBJAABqQAABpBLBLQBKBKBpAAIOAAAQB9AABZhYQBYhYAAh9QAAh7hYhZQhZhYh9AAIgsADQgSAFgJgRQg2huhmg/QhnhBh4AAQiTAAhzBbQhzBagjCPQgCAIgGAFQgHAEgIAAgAGpHXIuAAAQh8AAhZhYQhYhYAAh9QAAh7BWhXQBWhXB7gDQAriYB9heQB+heCeAAQCBAABvBCQBvBCA+B0QATgCASAAQCQAABmBnQBmBlAACPQAACPhmBnQhmBmiQAAg");
	this.shape.setTransform(77.4,47.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AnXHXQh8AAhZhYQhYhYAAh9QAAh7BWhXQBWhXB6gDQAriXB+hfQB+heCeAAQCBAABvBCQBvBCA+B0QASgDATABQCQAABmBmQBmBmAACPQAACQhmBmQhmBmiQAAgAqLgIQhLBIABBqQgBBpBLBLQBLBKBpAAIOAAAQB9AABYhZQBZhXgBh9QABh7hZhZQhYhYh9AAIgsADQgSAFgJgRQg2huhng/QhmhAh4AAQiTAAhzBaQhzBagiCPQgDAIgGAFQgIAEgHAAIgGAAQhtAAhMBLg");
	this.shape_1.setTransform(77.4,47.2);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,156.7,96.3);


(lib.cloudshape = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").p("AGpHXIuAAAQh8AAhZhYQhYhZAAh8QAAh8BWhWQBWhXB7gDQAriYB9heQB+heCeAAQCBAABvBCQBvBCA+B0QATgDASAAQCQAABmBnQBmBmAACPQAACQhmBmQhmBmiQAAgAnShTQhtAAhLBKQhLBJAABqQAABpBLBLQBKBKBpAAIOAAAQB9AABZhZQBYhYAAh8QAAh7hYhZQhZhYh9AAIgsADQgSAFgJgSQg2hthmhAQhnhAh4AAQiTAAhyBbQh0BagjCOQgCAIgGAFQgHAFgIAAg");
	this.shape.setTransform(77.4,47.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AnXHXQh8AAhZhYQhYhZAAh8QAAh8BWhVQBWhYB7gDQAriXB9heQB9hfCfAAQCAAABwBCQBvBDA+BzQATgDARAAQCRAABmBoQBmBlAACPQAACPhmBnQhmBmiRAAgAqKgJQhMBJAABqQAABpBMBKQBKBLBpAAIN/AAQB9AABahYQBYhZAAh8QAAh7hYhZQhahYh9AAIgsADQgRAFgJgRQg2huhmhAQhog/h3gBQiTAAhzBbQhzBagjCOQgCAIgHAGQgGAEgIAAIgGAAQhtAAhLBKg");
	this.shape_1.setTransform(77.4,47.2);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,156.7,96.3);


(lib.chuffhider = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","#000000"],[0,0.145],-125,-0.2,125,-0.2).s().p("AzhJLIAAyaMAnDgBaIAAVTg");
	this.shape.setTransform(125,68.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,250,136.5);


(lib.streaks = function() {
	this.initialize();

	// sun streak
	this.instance = new lib.sunstreak();
	this.instance.setTransform(-4.6,38.5,1,1,29.7,0,0,-20.1,28.9);

	// sun streak
	this.instance_1 = new lib.sunstreak();
	this.instance_1.setTransform(-4.7,38.6,1,1,0,0,0,-20,29);

	// sun streak
	this.instance_2 = new lib.sunstreak();
	this.instance_2.setTransform(-4.8,38.6,1,1,-30.4,0,0,-20.1,28.9);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.4,0.4,39.6,38.7);


(lib.hero_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_16 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(16).call(this.frame_16).wait(4));

	// Layer 3
	this.instance = new lib.chuffhider();
	this.instance.setTransform(109,63.2,0.53,0.53,0,0,0,125,68.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:229},14).to({_off:true},1).wait(5));

	// Layer 1
	this.instance_1 = new lib.hero();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,175.3,150);


(lib.dropletmc = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.raindrop("synched",0);
	this.instance.setTransform(11.4,16.3,0.237,0.237,0,0,0,48.1,68.8);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,24.9,35);


(lib.cloud = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_80 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(80).call(this.frame_80).wait(1));

	// grey
	this.instance = new lib.cloudshape("synched",0);
	this.instance.setTransform(50.9,31,1,1,0,0,0,77.4,47.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(56).to({_off:false},0).to({alpha:1},24).wait(1));

	// white
	this.instance_1 = new lib.cloudwhite("synched",0);
	this.instance_1.setTransform(50.9,31,1,1,0,0,0,77.4,47.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60).to({startPosition:0},0).to({alpha:0},19).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.5,-17.1,156.7,96.3);


(lib.sun = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.s1.rotation = this.s1.rotation + 0.25;
		this.s2.rotation = this.s2.rotation + 0.25;
		this.s3.rotation = this.s3.rotation + 0.25;
		this.s4.rotation = this.s4.rotation + 0.25;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 3 copy 7
	this.s1 = new lib.streaks();
	this.s1.setTransform(16,16,1,1,1.3,0,0,-4.7,38.6);

	this.timeline.addTween(cjs.Tween.get(this.s1).wait(2));

	// Layer 3 copy 6
	this.s2 = new lib.streaks();
	this.s2.setTransform(16,16.1,1,1,-88.7,0,0,-4.7,38.6);

	this.timeline.addTween(cjs.Tween.get(this.s2).wait(2));

	// Layer 3 copy 5
	this.s3 = new lib.streaks();
	this.s3.setTransform(16.1,16,1,1,-178.7,0,0,-4.7,38.6);

	this.timeline.addTween(cjs.Tween.get(this.s3).wait(2));

	// Layer 3 copy 5
	this.s4 = new lib.streaks();
	this.s4.setTransform(16,16,1,1,91.3,0,0,-4.7,38.6);

	this.timeline.addTween(cjs.Tween.get(this.s4).wait(2));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFE04E").ss(5,1,1).p("ACgAAQAABCgvAvQgvAvhCAAQhBAAgvgvQgvgvAAhCQAAhBAvgvQAvgvBBAAQBCAAAvAvQAvAvAABBg");
	this.shape.setTransform(16,16);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.1,-22.1,76.3,76.3);


(lib.Rain = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_13 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(13).call(this.frame_13).wait(8));

	// Layer 1
	this.instance = new lib.dropletmc();
	this.instance.setTransform(22.9,0,0.364,0.364,0,0,0,22.9,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:22.8,scaleX:0.93,scaleY:0.93},3,cjs.Ease.get(1)).to({regX:22.9,scaleX:1,scaleY:1,x:16.4,y:16.5},2).to({x:-54.2,y:158.5},7,cjs.Ease.get(-0.5)).to({_off:true},1).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(14.4,-0.3,8.7,12.5);


(lib.Rainmc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.r1.gotoAndPlay(1);
	}
	this.frame_6 = function() {
		this.r2.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(13));

	// Layer 1 copy
	this.r2 = new lib.Rain();
	this.r2.setTransform(11.9,11.3,1,1,0,0,0,11.4,16.3);
	this.r2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.r2).wait(6).to({_off:false},0).to({_off:true},12).wait(1));

	// Layer 1
	this.r1 = new lib.Rain();
	this.r1.setTransform(-3.1,16.3,1,1,0,0,0,11.4,16.3);

	this.timeline.addTween(cjs.Tween.get(this.r1).to({_off:true},18).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.2,-0.3,8.7,12.5);


// stage content:



(lib.N455_thermal_160x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_301 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(301).call(this.frame_301).wait(15));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,1).p("EgMaguyIY1AAMAAABdlI41AAg");
	this.shape.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(316));

	// cta
	this.instance = new lib.cta_1();
	this.instance.setTransform(78.5,462,1,1,0,0,0,43.5,12);
	this.instance.alpha = 0.102;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(294).to({_off:false},0).to({alpha:1},5).wait(17));

	// logo
	this.instance_1 = new lib.logo();
	this.instance_1.setTransform(98.4,72.6,0.144,0.144,0,0,0,657.5,63.4);
	this.instance_1.alpha = 0.102;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(266).to({_off:false},0).to({alpha:1},5).wait(45));

	// end text
	this.instance_2 = new lib.endtext_1();
	this.instance_2.setTransform(300,250,1,1,0,0,0,300,250);
	this.instance_2.alpha = 0.102;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(278).to({_off:false},0).to({alpha:1},5).wait(33));

	// text3
	this.instance_3 = new lib.text3_1();
	this.instance_3.setTransform(150,45,1,1,0,0,0,150,25);
	this.instance_3.alpha = 0.102;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(180).to({_off:false},0).to({alpha:1},4).wait(70).to({alpha:0.102},4).to({_off:true},1).wait(57));

	// text2
	this.instance_4 = new lib.text2_1();
	this.instance_4.setTransform(150,45,1,1,0,0,0,150,25);
	this.instance_4.alpha = 0.102;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(93).to({_off:false},0).to({alpha:1},4).wait(49).to({alpha:0.102},4).to({_off:true},1).wait(165));

	// text1
	this.instance_5 = new lib.text1_1();
	this.instance_5.setTransform(150,45,1,1,0,0,0,150,25);
	this.instance_5.alpha = 0.102;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(33).to({_off:false},0).to({alpha:1},4).wait(48).to({alpha:0.102},4).to({_off:true},1).wait(226));

	// product
	this.instance_6 = new lib.hero_1();
	this.instance_6.setTransform(300,850,1,1,0,0,0,300,250);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(173).to({_off:false},0).to({y:381.4},14,cjs.Ease.get(1)).wait(129));

	// rain
	this.instance_7 = new lib.Rainmc();
	this.instance_7.setTransform(35.8,281.7,0.747,0.747,0,0,0,2.7,8);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(106).to({_off:false},0).wait(59).to({regY:7.9,y:94.9,alpha:0.102},11,cjs.Ease.get(-1)).to({_off:true},1).wait(139));

	// cloud
	this.instance_8 = new lib.cloud();
	this.instance_8.setTransform(-73.3,233.9,0.756,0.756,0,0,0,50.9,30.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(19).to({x:68.7},50,cjs.Ease.get(1)).wait(96).to({regY:31,y:47.2},11,cjs.Ease.get(-1)).to({_off:true},1).wait(139));

	// cloudmask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgclA1zMAAAhrlMA5LAAAMAAABrlgAzpobQhfBIghByQhcADhBBCQhBBCAABeQAABeBDBBQBDBCBeAAIKmAAQBtAABOhNQBNhMAAhsQAAhthNhOQhOhNhtAAQgOAAgNACQgvhYhUgyQhVgyhjAAQh3AAhfBHg");
	var mask_graphics_19 = new cjs.Graphics().p("EgclA1zMAAAhrlMA5LAAAMAAABrlgAzpobQhfBIghByQhcADhBBCQhBBCAABeQAABeBDBBQBDBCBeAAIKmAAQBtAABOhNQBNhMAAhsQAAhthNhOQhOhNhtAAQgOAAgNACQgvhYhUgyQhVgyhjAAQh3AAhfBHg");
	var mask_graphics_20 = new cjs.Graphics().p("EgclA1zMAAAhrlMA5LAAAMAAABrlgAzpobQhfBIghByQhcADhBBCQhBBCAABeQAABeBDBBQBDBCBeAAIKmAAQBtAABOhNQBNhMAAhsQAAhthNhOQhOhNhtAAQgOAAgNACQgvhYhUgyQhVgyhjAAQh3AAhfBHg");
	var mask_graphics_21 = new cjs.Graphics().p("EgclA1zMAAAhrlMA5LAAAMAAABrlgAzpobQhfBIghByQhcADhBBCQhBBCAABeQAABeBDBBQBDBCBeAAIKmAAQBtAABOhNQBNhMAAhsQAAhthNhOQhOhNhtAAQgOAAgNACQgvhYhUgyQhVgyhjAAQh3AAhfBHg");
	var mask_graphics_22 = new cjs.Graphics().p("EgclA1zMAAAhrlMA5LAAAMAAABrlgAzpobQhfBIghByQhcADhBBCQhBBCAABeQAABeBDBBQBDBCBeAAIKmAAQBtAABOhNQBNhMAAhsQAAhthNhOQhOhNhtAAQgOAAgNACQgvhYhUgyQhVgyhjAAQh3AAhfBHg");
	var mask_graphics_23 = new cjs.Graphics().p("EgclA1zMAAAhrlMA5LAAAMAAABrlgAzpobQhfBIghByQhcADhBBCQhBBCAABeQAABeBDBBQBDBCBeAAIKmAAQBtAABOhNQBNhMAAhsQAAhthNhOQhOhNhtAAQgOAAgNACQgvhYhUgyQhVgyhjAAQh3AAhfBHg");
	var mask_graphics_24 = new cjs.Graphics().p("EgclA1zMAAAhrlMA5LAAAMAAABrlgAzpobQhfBIghByQhcADhBBCQhBBCAABeQAABeBDBBQBDBCBeAAIKmAAQBtAABOhNQBNhMAAhsQAAhthNhOQhOhNhtAAQgOAAgNACQgvhYhUgyQhVgyhjAAQh3AAhfBHg");
	var mask_graphics_25 = new cjs.Graphics().p("EgclA1zMAAAhrlMA5LAAAMAAABrlgAzpobQhfBIghByQhcADhBBCQhBBCAABeQAABeBDBBQBDBCBeAAIKmAAQBtAABOhNQBNhMAAhsQAAhthNhOQhOhNhtAAQgOAAgNACQgvhYhUgyQhVgyhjAAQh3AAhfBHg");
	var mask_graphics_26 = new cjs.Graphics().p("EgclA1zMAAAhrlMA5LAAAMAAABrlgAzpobQhfBIghByQhcADhBBCQhBBCAABeQAABeBDBBQBDBCBeAAIKmAAQBtAABOhNQBNhMAAhsQAAhthNhOQhOhNhtAAQgOAAgNACQgvhYhUgyQhVgyhjAAQh3AAhfBHg");
	var mask_graphics_27 = new cjs.Graphics().p("EgclA1zMAAAhrlMA5LAAAMAAABrlgAzpobQhfBIghByQhcADhBBCQhBBCAABeQAABeBDBBQBDBCBeAAIKmAAQBtAABOhNQBNhMAAhsQAAhthNhOQhOhNhtAAQgOAAgNACQgvhYhUgyQhVgyhjAAQh3AAhfBHg");
	var mask_graphics_28 = new cjs.Graphics().p("EgclA1zMAAAhrlMA5LAAAMAAABrlgAzpobQhfBIghByQhcADhBBCQhBBCAABeQAABeBDBBQBDBCBeAAIKmAAQBtAABOhNQBNhMAAhsQAAhthNhOQhOhNhtAAQgOAAgNACQgvhYhUgyQhVgyhjAAQh3AAhfBHg");
	var mask_graphics_29 = new cjs.Graphics().p("EgclA1zMAAAhrlMA5LAAAMAAABrlgAzpobQhfBIghByQhcADhBBCQhBBCAABeQAABeBDBBQBDBCBeAAIKmAAQBtAABOhNQBNhMAAhsQAAhthNhOQhOhNhtAAQgOAAgNACQgvhYhUgyQhVgyhjAAQh3AAhfBHg");
	var mask_graphics_30 = new cjs.Graphics().p("EgclA1zMAAAhrlMA5LAAAMAAABrlgAzpobQhfBIghByQhcADhBBCQhBBCAABeQAABeBDBBQBDBCBeAAIKmAAQBtAABOhNQBNhMAAhsQAAhthNhOQhOhNhtAAQgOAAgNACQgvhYhUgyQhVgyhjAAQh3AAhfBHg");
	var mask_graphics_31 = new cjs.Graphics().p("EgclA1zMAAAhrlMA5LAAAMAAABrlgAzpobQhfBIghByQhcADhBBCQhBBCAABeQAABeBDBBQBDBCBeAAIKmAAQBtAABOhNQBNhMAAhsQAAhthNhOQhOhNhtAAQgOAAgNACQgvhYhUgyQhVgyhjAAQh3AAhfBHg");
	var mask_graphics_32 = new cjs.Graphics().p("EgclA1zMAAAhrlMA5LAAAMAAABrlgAzpobQhfBIghByQhcADhBBCQhBBCAABeQAABeBDBBQBDBCBeAAIKmAAQBtAABOhNQBNhMAAhsQAAhthNhOQhOhNhtAAQgOAAgNACQgvhYhUgyQhVgyhjAAQh3AAhfBHg");
	var mask_graphics_33 = new cjs.Graphics().p("EgclA1zMAAAhrlMA5LAAAMAAABrlgAzpobQhfBIghByQhcADhBBCQhBBCAABeQAABeBDBBQBDBCBeAAIKmAAQBtAABOhNQBNhMAAhsQAAhthNhOQhOhNhtAAQgOAAgNACQgvhYhUgyQhVgyhjAAQh3AAhfBHg");
	var mask_graphics_34 = new cjs.Graphics().p("EgclA1zMAAAhrlMA5LAAAMAAABrlgAzpobQhfBIghByQhcADhBBCQhBBCAABeQAABeBDBBQBDBCBeAAIKmAAQBtAABOhNQBNhMAAhsQAAhthNhOQhOhNhtAAQgOAAgNACQgvhYhUgyQhVgyhjAAQh3AAhfBHg");
	var mask_graphics_35 = new cjs.Graphics().p("EgclA1zMAAAhrlMA5LAAAMAAABrlgAzpobQhfBIghByQhcADhBBCQhBBCAABeQAABeBDBBQBDBCBeAAIKmAAQBtAABOhNQBNhMAAhsQAAhthNhOQhOhNhtAAQgOAAgNACQgvhYhUgyQhVgyhjAAQh3AAhfBHg");
	var mask_graphics_36 = new cjs.Graphics().p("EgclA1zMAAAhrlMA5LAAAMAAABrlgAzpobQhfBIghByQhcADhBBCQhBBCAABeQAABeBDBBQBDBCBeAAIKmAAQBtAABOhNQBNhMAAhsQAAhthNhOQhOhNhtAAQgOAAgNACQgvhYhUgyQhVgyhjAAQh3AAhfBHg");
	var mask_graphics_37 = new cjs.Graphics().p("EgclA1zMAAAhrlMA5LAAAMAAABrlgAzpobQhfBIghByQhcADhBBCQhBBCAABeQAABeBDBBQBDBCBeAAIKmAAQBtAABOhNQBNhMAAhsQAAhthNhOQhOhNhtAAQgOAAgNACQgvhYhUgyQhVgyhjAAQh3AAhfBHg");
	var mask_graphics_38 = new cjs.Graphics().p("EgclA1zMAAAhrlMA5LAAAMAAABrlgAzpobQhfBIghByQhcADhBBCQhBBCAABeQAABeBDBBQBDBCBeAAIKmAAQBtAABOhNQBNhMAAhsQAAhthNhOQhOhNhtAAQgOAAgNACQgvhYhUgyQhVgyhjAAQh3AAhfBHg");
	var mask_graphics_39 = new cjs.Graphics().p("EgclA1zMAAAhrlMA5LAAAMAAABrlgAzpobQhfBIghByQhcADhBBCQhBBCAABeQAABeBDBBQBDBCBeAAIKmAAQBtAABOhNQBNhMAAhsQAAhthNhOQhOhNhtAAQgOAAgNACQgvhYhUgyQhVgyhjAAQh3AAhfBHg");
	var mask_graphics_40 = new cjs.Graphics().p("EgclA1zMAAAhrlMA5LAAAMAAABrlgAzpobQhfBIghByQhcADhBBCQhBBCAABeQAABeBDBBQBDBCBeAAIKmAAQBtAABOhNQBNhMAAhsQAAhthNhOQhOhNhtAAQgOAAgNACQgvhYhUgyQhVgyhjAAQh3AAhfBHg");
	var mask_graphics_41 = new cjs.Graphics().p("EgclA1zMAAAhrlMA5LAAAMAAABrlgAzpobQhfBIghByQhcADhBBCQhBBCAABeQAABeBDBBQBDBCBeAAIKmAAQBtAABOhNQBNhMAAhsQAAhthNhOQhOhNhtAAQgOAAgNACQgvhYhUgyQhVgyhjAAQh3AAhfBHg");
	var mask_graphics_42 = new cjs.Graphics().p("EgclA1zMAAAhrlMA5LAAAMAAABrlgAzpobQhfBIghByQhcADhBBCQhBBCAABeQAABeBDBBQBDBCBeAAIKmAAQBtAABOhNQBNhMAAhsQAAhthNhOQhOhNhtAAQgOAAgNACQgvhYhUgyQhVgyhjAAQh3AAhfBHg");
	var mask_graphics_43 = new cjs.Graphics().p("EgclA1zMAAAhrlMA5LAAAMAAABrlgAzpobQhfBIghByQhcADhBBCQhBBCAABeQAABeBDBBQBDBCBeAAIKmAAQBtAABOhNQBNhMAAhsQAAhthNhOQhOhNhtAAQgOAAgNACQgvhYhUgyQhVgyhjAAQh3AAhfBHg");
	var mask_graphics_44 = new cjs.Graphics().p("EgclA1zMAAAhrlMA5LAAAMAAABrlgAzpobQhfBIghByQhcADhBBCQhBBCAABeQAABeBDBBQBDBCBeAAIKmAAQBtAABOhNQBNhMAAhsQAAhthNhOQhOhNhtAAQgOAAgNACQgvhYhUgyQhVgyhjAAQh3AAhfBHg");
	var mask_graphics_45 = new cjs.Graphics().p("EgclA1zMAAAhrlMA5LAAAMAAABrlgAzpobQhfBIghByQhcADhBBCQhBBCAABeQAABeBDBBQBDBCBeAAIKmAAQBtAABOhNQBNhMAAhsQAAhthNhOQhOhNhtAAQgOAAgNACQgvhYhUgyQhVgyhjAAQh3AAhfBHg");
	var mask_graphics_46 = new cjs.Graphics().p("EgclA1zMAAAhrlMA5LAAAMAAABrlgAzpobQhfBIghByQhcADhBBCQhBBCAABeQAABeBDBBQBDBCBeAAIKmAAQBtAABOhNQBNhMAAhsQAAhthNhOQhOhNhtAAQgOAAgNACQgvhYhUgyQhVgyhjAAQh3AAhfBHg");
	var mask_graphics_47 = new cjs.Graphics().p("EgclA1zMAAAhrlMA5LAAAMAAABrlgAzpobQhfBIghByQhcADhBBCQhBBCAABeQAABeBDBBQBDBCBeAAIKmAAQBtAABOhNQBNhMAAhsQAAhthNhOQhOhNhtAAQgOAAgNACQgvhYhUgyQhVgyhjAAQh3AAhfBHg");
	var mask_graphics_48 = new cjs.Graphics().p("EgclA1zMAAAhrlMA5LAAAMAAABrlgAzpobQhfBIghByQhcADhBBCQhBBCAABeQAABeBDBBQBDBCBeAAIKmAAQBtAABOhNQBNhMAAhsQAAhthNhOQhOhNhtAAQgOAAgNACQgvhYhUgyQhVgyhjAAQh3AAhfBHg");
	var mask_graphics_49 = new cjs.Graphics().p("EgclA1zMAAAhrlMA5LAAAMAAABrlgAzpobQhfBIghByQhcADhBBCQhBBCAABeQAABeBDBBQBDBCBeAAIKmAAQBtAABOhNQBNhMAAhsQAAhthNhOQhOhNhtAAQgOAAgNACQgvhYhUgyQhVgyhjAAQh3AAhfBHg");
	var mask_graphics_50 = new cjs.Graphics().p("EgclA1zMAAAhrlMA5LAAAMAAABrlgAzpobQhfBIghByQhcADhBBCQhBBCAABeQAABeBDBBQBDBCBeAAIKmAAQBtAABOhNQBNhMAAhsQAAhthNhOQhOhNhtAAQgOAAgNACQgvhYhUgyQhVgyhjAAQh3AAhfBHg");
	var mask_graphics_51 = new cjs.Graphics().p("EgclA1zMAAAhrlMA5LAAAMAAABrlgAzpobQhfBIghByQhcADhBBCQhBBCAABeQAABeBDBBQBDBCBeAAIKmAAQBtAABOhNQBNhMAAhsQAAhthNhOQhOhNhtAAQgOAAgNACQgvhYhUgyQhVgyhjAAQh3AAhfBHg");
	var mask_graphics_52 = new cjs.Graphics().p("EgclA1zMAAAhrlMA5LAAAMAAABrlgAzpobQhfBIghByQhcADhBBCQhBBCAABeQAABeBDBBQBDBCBeAAIKmAAQBtAABOhNQBNhMAAhsQAAhthNhOQhOhNhtAAQgOAAgNACQgvhYhUgyQhVgyhjAAQh3AAhfBHg");
	var mask_graphics_53 = new cjs.Graphics().p("EgclA1zMAAAhrlMA5LAAAMAAABrlgAzpobQhfBIghByQhcADhBBCQhBBCAABeQAABeBDBBQBDBCBeAAIKmAAQBtAABOhNQBNhMAAhsQAAhthNhOQhOhNhtAAQgOAAgNACQgvhYhUgyQhVgyhjAAQh3AAhfBHg");
	var mask_graphics_54 = new cjs.Graphics().p("EgclA1zMAAAhrlMA5LAAAMAAABrlgAzpobQhfBIghByQhcADhBBCQhBBCAABeQAABeBDBBQBDBCBeAAIKmAAQBtAABOhNQBNhMAAhsQAAhthNhOQhOhNhtAAQgOAAgNACQgvhYhUgyQhVgyhjAAQh3AAhfBHg");
	var mask_graphics_55 = new cjs.Graphics().p("EgclA1zMAAAhrlMA5LAAAMAAABrlgAzpobQhfBIghByQhcADhBBCQhBBCAABeQAABeBDBBQBDBCBeAAIKmAAQBtAABOhNQBNhMAAhsQAAhthNhOQhOhNhtAAQgOAAgNACQgvhYhUgyQhVgyhjAAQh3AAhfBHg");
	var mask_graphics_56 = new cjs.Graphics().p("EgclA1zMAAAhrlMA5LAAAMAAABrlgAzpobQhfBIghByQhcADhBBCQhBBCAABeQAABeBDBBQBDBCBeAAIKmAAQBtAABOhNQBNhMAAhsQAAhthNhOQhOhNhtAAQgOAAgNACQgvhYhUgyQhVgyhjAAQh3AAhfBHg");
	var mask_graphics_57 = new cjs.Graphics().p("EgclA1zMAAAhrlMA5LAAAMAAABrlgAzpobQhfBIghByQhcADhBBCQhBBCAABeQAABeBDBBQBDBCBeAAIKmAAQBtAABOhNQBNhMAAhsQAAhthNhOQhOhNhtAAQgOAAgNACQgvhYhUgyQhVgyhjAAQh3AAhfBHg");
	var mask_graphics_58 = new cjs.Graphics().p("EgclA1zMAAAhrlMA5LAAAMAAABrlgAzpobQhfBIghByQhcADhBBCQhBBCAABeQAABeBDBBQBDBCBeAAIKmAAQBtAABOhNQBNhMAAhsQAAhthNhOQhOhNhtAAQgOAAgNACQgvhYhUgyQhVgyhjAAQh3AAhfBHg");
	var mask_graphics_59 = new cjs.Graphics().p("EgclA1zMAAAhrlMA5LAAAMAAABrlgAzpobQhfBIghByQhcADhBBCQhBBCAABeQAABeBDBBQBDBCBeAAIKmAAQBtAABOhNQBNhMAAhsQAAhthNhOQhOhNhtAAQgOAAgNACQgvhYhUgyQhVgyhjAAQh3AAhfBHg");
	var mask_graphics_60 = new cjs.Graphics().p("EgclA1zMAAAhrlMA5LAAAMAAABrlgAzpobQhfBIghByQhcADhBBCQhBBCAABeQAABeBDBBQBDBCBeAAIKmAAQBtAABOhNQBNhMAAhsQAAhthNhOQhOhNhtAAQgOAAgNACQgvhYhUgyQhVgyhjAAQh3AAhfBHg");
	var mask_graphics_61 = new cjs.Graphics().p("EgclA1zMAAAhrlMA5LAAAMAAABrlgAzpobQhfBIghByQhcADhBBCQhBBCAABeQAABeBDBBQBDBCBeAAIKmAAQBtAABOhNQBNhMAAhsQAAhthNhOQhOhNhtAAQgOAAgNACQgvhYhUgyQhVgyhjAAQh3AAhfBHg");
	var mask_graphics_62 = new cjs.Graphics().p("EgclA1zMAAAhrlMA5LAAAMAAABrlgAzpobQhfBIghByQhcADhBBCQhBBCAABeQAABeBDBBQBDBCBeAAIKmAAQBtAABOhNQBNhMAAhsQAAhthNhOQhOhNhtAAQgOAAgNACQgvhYhUgyQhVgyhjAAQh3AAhfBHg");
	var mask_graphics_63 = new cjs.Graphics().p("EgclA1zMAAAhrlMA5LAAAMAAABrlgAzpobQhfBIghByQhcADhBBCQhBBCAABeQAABeBDBBQBDBCBeAAIKmAAQBtAABOhNQBNhMAAhsQAAhthNhOQhOhNhtAAQgOAAgNACQgvhYhUgyQhVgyhjAAQh3AAhfBHg");
	var mask_graphics_64 = new cjs.Graphics().p("EgclA1zMAAAhrlMA5LAAAMAAABrlgAzpobQhfBIghByQhcADhBBCQhBBCAABeQAABeBDBBQBDBCBeAAIKmAAQBtAABOhNQBNhMAAhsQAAhthNhOQhOhNhtAAQgOAAgNACQgvhYhUgyQhVgyhjAAQh3AAhfBHg");
	var mask_graphics_65 = new cjs.Graphics().p("EgclA1zMAAAhrlMA5LAAAMAAABrlgAzpobQhfBIghByQhcADhBBCQhBBCAABeQAABeBDBBQBDBCBeAAIKmAAQBtAABOhNQBNhMAAhsQAAhthNhOQhOhNhtAAQgOAAgNACQgvhYhUgyQhVgyhjAAQh3AAhfBHg");
	var mask_graphics_66 = new cjs.Graphics().p("EgclA1zMAAAhrlMA5LAAAMAAABrlgAzpobQhfBIghByQhcADhBBCQhBBCAABeQAABeBDBBQBDBCBeAAIKmAAQBtAABOhNQBNhMAAhsQAAhthNhOQhOhNhtAAQgOAAgNACQgvhYhUgyQhVgyhjAAQh3AAhfBHg");
	var mask_graphics_67 = new cjs.Graphics().p("EgclA1zMAAAhrlMA5LAAAMAAABrlgAzpobQhfBIghByQhcADhBBCQhBBCAABeQAABeBDBBQBDBCBeAAIKmAAQBtAABOhNQBNhMAAhsQAAhthNhOQhOhNhtAAQgOAAgNACQgvhYhUgyQhVgyhjAAQh3AAhfBHg");
	var mask_graphics_68 = new cjs.Graphics().p("EgclA1zMAAAhrlMA5LAAAMAAABrlgAzpobQhfBIghByQhcADhBBCQhBBCAABeQAABeBDBBQBDBCBeAAIKmAAQBtAABOhNQBNhMAAhsQAAhthNhOQhOhNhtAAQgOAAgNACQgvhYhUgyQhVgyhjAAQh3AAhfBHg");
	var mask_graphics_69 = new cjs.Graphics().p("EgclA1zMAAAhrlMA5LAAAMAAABrlgAzpobQhfBIghByQhcADhBBCQhBBCAABeQAABeBDBBQBDBCBeAAIKmAAQBtAABOhNQBNhMAAhsQAAhthNhOQhOhNhtAAQgOAAgNACQgvhYhUgyQhVgyhjAAQh3AAhfBHg");
	var mask_graphics_165 = new cjs.Graphics().p("EgclA1zMAAAhrlMA5LAAAMAAABrlgAzpobQhfBIghByQhcADhBBCQhBBCAABeQAABeBDBBQBDBCBeAAIKmAAQBtAABOhNQBNhMAAhsQAAhthNhOQhOhNhtAAQgOAAgNACQgvhYhUgyQhVgyhjAAQh3AAhfBHg");
	var mask_graphics_166 = new cjs.Graphics().p("EgclA1zMAAAhrlMA5LAAAMAAABrlgAzpobQhfBIghByQhcADhBBCQhBBCAABeQAABeBDBBQBDBCBeAAIKmAAQBtAABOhNQBNhMAAhsQAAhthNhOQhOhNhtAAQgOAAgNACQgvhYhUgyQhVgyhjAAQh3AAhfBHg");
	var mask_graphics_167 = new cjs.Graphics().p("EgclA1zMAAAhrlMA5LAAAMAAABrlgAzpobQhfBIghByQhcADhBBCQhBBCAABeQAABeBDBBQBDBCBeAAIKmAAQBtAABOhNQBNhMAAhsQAAhthNhOQhOhNhtAAQgOAAgNACQgvhYhUgyQhVgyhjAAQh3AAhfBHg");
	var mask_graphics_168 = new cjs.Graphics().p("EgclA1zMAAAhrlMA5LAAAMAAABrlgAzpobQhfBIghByQhcADhBBCQhBBCAABeQAABeBDBBQBDBCBeAAIKmAAQBtAABOhNQBNhMAAhsQAAhthNhOQhOhNhtAAQgOAAgNACQgvhYhUgyQhVgyhjAAQh3AAhfBHg");
	var mask_graphics_169 = new cjs.Graphics().p("EgclA1zMAAAhrlMA5LAAAMAAABrlgAzpobQhfBIghByQhcADhBBCQhBBCAABeQAABeBDBBQBDBCBeAAIKmAAQBtAABOhNQBNhMAAhsQAAhthNhOQhOhNhtAAQgOAAgNACQgvhYhUgyQhVgyhjAAQh3AAhfBHg");
	var mask_graphics_170 = new cjs.Graphics().p("EgclA1zMAAAhrlMA5LAAAMAAABrlgAzpobQhfBIghByQhcADhBBCQhBBCAABeQAABeBDBBQBDBCBeAAIKmAAQBtAABOhNQBNhMAAhsQAAhthNhOQhOhNhtAAQgOAAgNACQgvhYhUgyQhVgyhjAAQh3AAhfBHg");
	var mask_graphics_171 = new cjs.Graphics().p("EgclA1zMAAAhrlMA5LAAAMAAABrlgAzpobQhfBIghByQhcADhBBCQhBBCAABeQAABeBDBBQBDBCBeAAIKmAAQBtAABOhNQBNhMAAhsQAAhthNhOQhOhNhtAAQgOAAgNACQgvhYhUgyQhVgyhjAAQh3AAhfBHg");
	var mask_graphics_172 = new cjs.Graphics().p("EgclA1zMAAAhrlMA5LAAAMAAABrlgAzpobQhfBIghByQhcADhBBCQhBBCAABeQAABeBDBBQBDBCBeAAIKmAAQBtAABOhNQBNhMAAhsQAAhthNhOQhOhNhtAAQgOAAgNACQgvhYhUgyQhVgyhjAAQh3AAhfBHg");
	var mask_graphics_173 = new cjs.Graphics().p("EgclA1zMAAAhrlMA5LAAAMAAABrlgAzpobQhfBIghByQhcADhBBCQhBBCAABeQAABeBDBBQBDBCBeAAIKmAAQBtAABOhNQBNhMAAhsQAAhthNhOQhOhNhtAAQgOAAgNACQgvhYhUgyQhVgyhjAAQh3AAhfBHg");
	var mask_graphics_174 = new cjs.Graphics().p("EgclA1zMAAAhrlMA5LAAAMAAABrlgAzpobQhfBIghByQhcADhBBCQhBBCAABeQAABeBDBBQBDBCBeAAIKmAAQBtAABOhNQBNhMAAhsQAAhthNhOQhOhNhtAAQgOAAgNACQgvhYhUgyQhVgyhjAAQh3AAhfBHg");
	var mask_graphics_175 = new cjs.Graphics().p("EgclA1zMAAAhrlMA5LAAAMAAABrlgAzpobQhfBIghByQhcADhBBCQhBBCAABeQAABeBDBBQBDBCBeAAIKmAAQBtAABOhNQBNhMAAhsQAAhthNhOQhOhNhtAAQgOAAgNACQgvhYhUgyQhVgyhjAAQh3AAhfBHg");
	var mask_graphics_176 = new cjs.Graphics().p("EgclA1zMAAAhrlMA5LAAAMAAABrlgAzpobQhfBIghByQhcADhBBCQhBBCAABeQAABeBDBBQBDBCBeAAIKmAAQBtAABOhNQBNhMAAhsQAAhthNhOQhOhNhtAAQgOAAgNACQgvhYhUgyQhVgyhjAAQh3AAhfBHg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:29,y:259.4}).wait(19).to({graphics:mask_graphics_19,x:29,y:259.4}).wait(1).to({graphics:mask_graphics_20,x:34.6,y:259.4}).wait(1).to({graphics:mask_graphics_21,x:40.2,y:259.4}).wait(1).to({graphics:mask_graphics_22,x:45.6,y:259.4}).wait(1).to({graphics:mask_graphics_23,x:50.8,y:259.4}).wait(1).to({graphics:mask_graphics_24,x:56,y:259.4}).wait(1).to({graphics:mask_graphics_25,x:61.1,y:259.4}).wait(1).to({graphics:mask_graphics_26,x:66,y:259.4}).wait(1).to({graphics:mask_graphics_27,x:70.8,y:259.4}).wait(1).to({graphics:mask_graphics_28,x:75.5,y:259.4}).wait(1).to({graphics:mask_graphics_29,x:80.1,y:259.4}).wait(1).to({graphics:mask_graphics_30,x:84.6,y:259.4}).wait(1).to({graphics:mask_graphics_31,x:89,y:259.4}).wait(1).to({graphics:mask_graphics_32,x:93.2,y:259.4}).wait(1).to({graphics:mask_graphics_33,x:97.4,y:259.4}).wait(1).to({graphics:mask_graphics_34,x:101.4,y:259.4}).wait(1).to({graphics:mask_graphics_35,x:105.3,y:259.4}).wait(1).to({graphics:mask_graphics_36,x:109.1,y:259.4}).wait(1).to({graphics:mask_graphics_37,x:112.8,y:259.4}).wait(1).to({graphics:mask_graphics_38,x:116.4,y:259.4}).wait(1).to({graphics:mask_graphics_39,x:119.9,y:259.4}).wait(1).to({graphics:mask_graphics_40,x:123.2,y:259.4}).wait(1).to({graphics:mask_graphics_41,x:126.5,y:259.4}).wait(1).to({graphics:mask_graphics_42,x:129.6,y:259.4}).wait(1).to({graphics:mask_graphics_43,x:132.6,y:259.4}).wait(1).to({graphics:mask_graphics_44,x:135.5,y:259.4}).wait(1).to({graphics:mask_graphics_45,x:138.3,y:259.4}).wait(1).to({graphics:mask_graphics_46,x:140.9,y:259.4}).wait(1).to({graphics:mask_graphics_47,x:143.5,y:259.4}).wait(1).to({graphics:mask_graphics_48,x:145.9,y:259.4}).wait(1).to({graphics:mask_graphics_49,x:148.3,y:259.4}).wait(1).to({graphics:mask_graphics_50,x:150.5,y:259.4}).wait(1).to({graphics:mask_graphics_51,x:152.6,y:259.4}).wait(1).to({graphics:mask_graphics_52,x:154.6,y:259.4}).wait(1).to({graphics:mask_graphics_53,x:156.4,y:259.4}).wait(1).to({graphics:mask_graphics_54,x:158.2,y:259.4}).wait(1).to({graphics:mask_graphics_55,x:159.8,y:259.4}).wait(1).to({graphics:mask_graphics_56,x:161.4,y:259.4}).wait(1).to({graphics:mask_graphics_57,x:162.8,y:259.4}).wait(1).to({graphics:mask_graphics_58,x:164.1,y:259.4}).wait(1).to({graphics:mask_graphics_59,x:165.3,y:259.4}).wait(1).to({graphics:mask_graphics_60,x:166.4,y:259.4}).wait(1).to({graphics:mask_graphics_61,x:167.3,y:259.4}).wait(1).to({graphics:mask_graphics_62,x:168.2,y:259.4}).wait(1).to({graphics:mask_graphics_63,x:168.9,y:259.4}).wait(1).to({graphics:mask_graphics_64,x:169.6,y:259.4}).wait(1).to({graphics:mask_graphics_65,x:170.1,y:259.4}).wait(1).to({graphics:mask_graphics_66,x:170.5,y:259.4}).wait(1).to({graphics:mask_graphics_67,x:170.8,y:259.4}).wait(1).to({graphics:mask_graphics_68,x:170.9,y:259.4}).wait(1).to({graphics:mask_graphics_69,x:171,y:259.4}).wait(96).to({graphics:mask_graphics_165,x:171,y:259.4}).wait(1).to({graphics:mask_graphics_166,x:171,y:257.8}).wait(1).to({graphics:mask_graphics_167,x:171,y:253.2}).wait(1).to({graphics:mask_graphics_168,x:171,y:245.5}).wait(1).to({graphics:mask_graphics_169,x:171,y:234.7}).wait(1).to({graphics:mask_graphics_170,x:171,y:220.8}).wait(1).to({graphics:mask_graphics_171,x:171,y:203.8}).wait(1).to({graphics:mask_graphics_172,x:171,y:183.7}).wait(1).to({graphics:mask_graphics_173,x:171,y:160.6}).wait(1).to({graphics:mask_graphics_174,x:171,y:134.3}).wait(1).to({graphics:mask_graphics_175,x:171,y:105}).wait(1).to({graphics:mask_graphics_176,x:171,y:72.6}).wait(1).to({graphics:null,x:0,y:0}).wait(139));

	// sun
	this.sun = new lib.sun();
	this.sun.setTransform(-64.2,408.8,1.354,1.354,0,0,0,16.1,16);

	this.sun.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.sun).wait(1).to({regX:16,x:-53,y:397.4},0).wait(1).to({x:-42.1,y:386.5},0).wait(1).to({x:-31.9,y:376.3},0).wait(1).to({x:-22.3,y:366.7},0).wait(1).to({x:-13.3,y:357.7},0).wait(1).to({x:-4.9,y:349.3},0).wait(1).to({x:2.9,y:341.5},0).wait(1).to({x:10.1,y:334.3},0).wait(1).to({x:16.9,y:327.5},0).wait(1).to({x:23.1,y:321.3},0).wait(1).to({x:28.8,y:315.5},0).wait(1).to({x:34.2,y:310.2},0).wait(1).to({x:39.1,y:305.2},0).wait(1).to({x:43.7,y:300.6},0).wait(1).to({x:48,y:296.3},0).wait(1).to({x:52,y:292.4},0).wait(1).to({x:55.6,y:288.7},0).wait(1).to({x:59.1,y:285.3},0).wait(1).to({x:62.2,y:282.1},0).wait(1).to({x:65.2,y:279.2},0).wait(1).to({x:67.9,y:276.4},0).wait(1).to({x:70.5,y:273.8},0).wait(1).to({x:72.9,y:271.5},0).wait(1).to({x:75.1,y:269.2},0).wait(1).to({x:77.2,y:267.2},0).wait(1).to({x:79.1,y:265.2},0).wait(1).to({x:80.9,y:263.4},0).wait(1).to({x:82.6,y:261.8},0).wait(1).to({x:84.2,y:260.2},0).wait(1).to({x:85.6,y:258.7},0).wait(1).to({x:87,y:257.4},0).wait(1).to({x:88.2,y:256.1},0).wait(1).to({x:89.4,y:254.9},0).wait(1).to({x:90.5,y:253.8},0).wait(1).to({x:91.5,y:252.8},0).wait(1).to({x:92.5,y:251.9},0).wait(1).to({x:93.3,y:251},0).wait(1).to({x:94.1,y:250.2},0).wait(1).to({x:94.9,y:249.5},0).wait(1).to({x:95.6,y:248.8},0).wait(1).to({x:96.2,y:248.1},0).wait(1).to({x:96.8,y:247.6},0).wait(1).to({x:97.3,y:247},0).wait(1).to({x:97.8,y:246.5},0).wait(1).to({x:98.3,y:246.1},0).wait(1).to({x:98.6,y:245.7},0).wait(1).to({x:99,y:245.3},0).wait(1).to({x:99.3,y:245},0).wait(1).to({x:99.6,y:244.8},0).wait(1).to({x:99.8,y:244.5},0).wait(1).to({x:100.1,y:244.3},0).wait(1).to({x:100.2,y:244.1},0).wait(1).to({x:100.4,y:244},0).wait(1).to({x:100.5,y:243.9},0).wait(1).to({x:100.6,y:243.8},0).wait(1).to({x:100.7,y:243.7},0).wait(2).to({regX:16.1,x:100.9},0).wait(107).to({regY:16.1,y:57},11,cjs.Ease.get(-1)).to({_off:true},1).wait(139));

	// gradient grey
	this.instance_9 = new lib.gradientgrey();
	this.instance_9.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(75).to({_off:false},0).to({alpha:1},16).wait(74).to({y:-1175},11,cjs.Ease.get(-1)).to({_off:true},1).wait(139));

	// black
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AuAOBIAA8BIcBAAIAAcBg");
	this.shape_1.setTransform(80,300,0.891,3.343);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(165).to({_off:false},0).wait(151));

	// gradient blue
	this.instance_10 = new lib.gradientblue();
	this.instance_10.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({_off:true},91).wait(225));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.2,299.5,292.8,601);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;