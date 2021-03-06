(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
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
p.nominalBounds = new cjs.Rectangle(0,0,201,57);


(lib.endtext = function() {
	this.initialize(img.endtext);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


(lib.hero = function() {
	this.initialize(img.hero);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.text1 = function() {
	this.initialize(img.text1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


(lib.text2 = function() {
	this.initialize(img.text2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


(lib.text3 = function() {
	this.initialize(img.text3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


(lib.text3_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.text3();
	this.instance.setTransform(0,0,0.5,0.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.text2_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.text2();
	this.instance.setTransform(0,0,0.5,0.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.text1_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.text1();
	this.instance.setTransform(0,0,0.5,0.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


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
	this.shape.graphics.f("#C21924").s().p("ACdHKQiAAAhahPQhnhWAAiNIAAphICNAAIAAEbIAAAAIAAAFICTAAIAACHIiTAAIAACtQAABGAaAqQAnA8BlAPIAWADIAACBg");
	this.shape.setTransform(807.1,49.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C21924").s().p("ACuHDIAAkwQAAhXg2g1QgxgvhHAAQhFAAgwAtQg2AygCBUIAAE4IiMAAIAAuFICMAAIAAFIQBPg1BeAAQCCAABcBcQBcBaAACCIAAE6g");
	this.shape_1.setTransform(680.9,48.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0094CD").s().p("AhGHDIAAuFICNAAIAAOFg");
	this.shape_2.setTransform(1105.7,48.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0094CD").s().p("AjiDiQheheAAiEQAAiEBehdQBeheCEAAQCFAABeBeQBeBdAACEQAACEheBeQheBeiFAAQiEAAhehegAiCiEQg2A3AABNQAABNA2A4QA3A4BMgBQBNABA2g4QA1g4AAhNQAAhNg1g3Qg2g3hNgBQhMABg3A3g");
	this.shape_3.setTransform(1057.9,63.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0094CD").s().p("AjhDiQhfheAAiEQAAiEBfhdQBdheCEAAQCFAABeBeQBeBdAACEQAACEheBeQheBeiFAAQiDAAhehegAiCiEQg2A3AABNQAABNA2A4QA3A4BMgBQBNABA2g4QA1g4AAhNQAAhNg1g3Qg2g3hNgBQhMABg3A3g");
	this.shape_4.setTransform(987.8,63.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0094CD").s().p("AirDfQhZhfAAiAQAAiYBuhbQBchMBwAAQA7AAA1AUQA3AVAnAnIhTBaQgbgUgWgHQgfgMgrAAQg8AAg3AyQhAA4AABSQAABSBAA6QA3AwA5AAQAwAAAagIQAXgIAcgWIBVBaQgoAng4AUQg1AVg6AAQiFAAhchhg");
	this.shape_5.setTransform(927.7,63.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgwEnIAAj4IjxAAIAAheIDxAAIAAj3IBgAAIAAD3IDyAAIAABeIjyAAIAAD4g");
	this.shape_6.setTransform(861,64.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C21924").s().p("AjiDiQheheABiEQgBiEBehdQBeheCEAAQCFAABeBeQBeBdgBCEQABCEheBeQheBeiFAAQiDAAhfhegAiBiEQg3A3AABNQAABNA3A4QA2A4BMgBQBNABA2g4QA1g4AAhNQAAhNg1g3Qg2g3hNgBQhMABg2A3g");
	this.shape_7.setTransform(751,63.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#939598").s().p("ACuE6IAAkxQAAhVg2g1QgxgwhHAAQhGAAgyAwQg1A1AABVIAAExIiMAAIAAk6QAAiABchdQBchcCBAAQCBAABdBcQBcBdAACAIAAE6g");
	this.shape_8.setTransform(1215.2,62.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#939598").s().p("ABoHDIj+kEIAAEEIiPAAIAAuFICPAAIAAICID1jjIDHAAIlAEgIE1FGg");
	this.shape_9.setTransform(1285.8,48.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#939598").s().p("AhFE0IAApnICLAAIAAJng");
	this.shape_10.setTransform(1166.9,63.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#939598").s().p("Ag3A6QgYgYAAgiQAAghAXgXQAYgZAgAAQAhAAAXAZQAYAXAAAhQAAAhgYAZQgXAXggAAQggAAgYgXg");
	this.shape_11.setTransform(1167.1,11.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#939598").s().p("AhGHDIAAuFICNAAIAAOFg");
	this.shape_12.setTransform(1142.6,48.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#8FD2F2").s().p("AiyE6IAAklQAAidBnhdQBbhUCBAAIAiAAIAACAQgRgBgkAGQhSAOgqA1QgoAzAABUIAAEkg");
	this.shape_13.setTransform(542.5,62.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#8FD2F2").s().p("AjZDjQhfhdAAiaIAAkkICLAAIAAEkQAABgA2A2QAwAwBHABQBIgBAwgwQA2g2AAhgIAAkkICLAAIAAEkQAACXhdBeQhZBZiDAAQiBAAhYhXg");
	this.shape_14.setTransform(485.9,63.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#8FD2F2").s().p("AlAHJIAApNQAAiFBdhfQBdhgCFAAQCKAABcBcQBcBbAACNQAACEhiBaQhhBciFAAIitAAIAAETgAiAkJQg0A2AABPIAACzICzAAQBJAAA2gzQA3g3AAhOQAAhYg8gyQg0gshGAAQhLAAg0A2g");
	this.shape_15.setTransform(415,76.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#8FD2F2").s().p("AjpDaQhXhdABiAQgBiKBnhcQBghWB7AAQB/AABfBdQBhBdAACCQgBAMgGAlInqAAQALA9AvAqQA0AuBEAAQBZAABjhAIBOBiQg3ApgyAUQhIAehRAAQiVAAhehmgAhuiZQgxAmgMAzIFWAAQgLgugqgmQgzguhBAAQg9AAgzApg");
	this.shape_16.setTransform(594.8,63);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ai5G5QgngRgjgXQgQgLgOgMIBThyQAeATAaAMQA7AcAvABQBzADAyhlQAcg6AAhMQgZAbgvARQgrAQgiAAQiEAAhdhbQhdhZAAiFIAAk4ICoABIABE3QgBA/AtAsQAsAtA9AAQA+AAAsgtQAtgsgBg/IAAk3ICpgBIAAE4QAACegCAuQgFBwgUBLQgyC+izArQgvALgsAAQhQAAhNghg");
	this.shape_17.setTransform(104.8,79.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgFE/IgdgDQiLgXhehIIBRhvQAlAcBDAUQBRAZA4gNQAngJAJgXQAIgWgbgQQgOgIhjgbQhigbgtgcQhRgxABhWQAAgbAIgbIAIgVQAvhXBugYQA3gLAsAFQBMAFA+AYQAyASAfAaIhPBtQg6gag7gIQg5gJgoALQgdAIgGATQgHARATANQATAMBbAaQBhAbApAWQBlA0gEBfQgDA/ggAoQg8BLhuAOQgZAEgZAAIgSgBg");
	this.shape_18.setTransform(170.5,63.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ak+E5IAAkzQAAiCBeheQBdheCDAAQCEAABeBeQBdBeAACCIAAEyIioAAIAAkyQAAg8gsgtQgtgsg+AAQg9AAgsAsQgsAtAAA8IAAEzg");
	this.shape_19.setTransform(304.7,62.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AjhDhQhdhdAAiEQAAiDBdheQBehdCDAAQCEAABeBdQBdBeAACDQAACEhdBdQheBeiEAAQiDAAhehegAhrhrQgtAtAAA+QAAA/AtAsQAtAtA+AAQA+AAAtgtQAtgsAAg/QAAg+gtgtQgtgsg+AAQg+AAgtAsg");
	this.shape_20.setTransform(234,63.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AjhF9QheheAAiEQAAiFBehbQBdheCEAAICXAAIAAk3ICoAAIAAJ1QABCEheBeQheBeiEAAQiEAAhdhegAhqAwQgtAsAAA/QAAA/AtAtQAsAsA+ABQA+gBAsgsQAtgtAAg/IAAiYIiXAAQg+AAgsAtg");
	this.shape_21.setTransform(32,47.6);

	this.addChild(this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1315.3,127.2);


(lib.gradientgrey = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#BBBBBB","#000000"],[0,0.769],0,-450,0,450).s().p("EgXbBGUMAAAiMnMAu2AAAMAAACMng");
	this.shape.setTransform(150,450);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,900);


(lib.gradientblue = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#0093D9","#5DCBEE"],[0,1],0,-300,0,300).s().p("EgXbAu4MAAAhdvMAu2AAAMAAABdvg");
	this.shape.setTransform(150,300);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.endtext_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.endtext();
	this.instance.setTransform(0,0,0.5,0.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.cta_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.cta();
	this.instance.setTransform(0,0,0.5,0.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,100.5,28.5);


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
	this.instance.setTransform(202,100.7,1,1,0,0,0,125,68.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:427,y:95.2},14).to({_off:true},1).wait(5));

	// Layer 1
	this.instance_1 = new lib.hero();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,327,250);


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
	this.frame_15 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(15).call(this.frame_15).wait(8));

	// Layer 1
	this.instance = new lib.dropletmc();
	this.instance.setTransform(22.9,0,0.364,0.364,0,0,0,22.9,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:22.8,scaleX:0.93,scaleY:0.93},3,cjs.Ease.get(1)).to({regX:22.9,scaleX:1,scaleY:1,x:16.4,y:16.5},2).to({x:-98.1,y:220},9,cjs.Ease.get(-0.5)).to({_off:true},1).wait(8));

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



(lib.N455_thermal_300x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_286 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(286).call(this.frame_286).wait(16));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,1).p("EgXWguyMAutAAAMAAABdlMgutAAAg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(302));

	// cta
	this.instance = new lib.cta_1();
	this.instance.setTransform(143.5,452,1,1,0,0,0,43.5,12);
	this.instance.alpha = 0.102;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(280).to({_off:false},0).to({alpha:1},5).wait(17));

	// logo
	this.instance_1 = new lib.logo();
	this.instance_1.setTransform(148.4,62,0.185,0.185,0,0,0,657.4,63.4);
	this.instance_1.alpha = 0.102;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(252).to({_off:false},0).to({alpha:1},5).wait(45));

	// end text
	this.instance_2 = new lib.endtext_1();
	this.instance_2.setTransform(300,250,1,1,0,0,0,300,250);
	this.instance_2.alpha = 0.102;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(264).to({_off:false},0).to({alpha:1},5).wait(33));

	// text3
	this.instance_3 = new lib.text3_1();
	this.instance_3.setTransform(150,25,1,1,0,0,0,150,25);
	this.instance_3.alpha = 0.102;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(166).to({_off:false},0).to({alpha:1},4).wait(70).to({alpha:0.102},4).to({_off:true},1).wait(57));

	// text2
	this.instance_4 = new lib.text2_1();
	this.instance_4.setTransform(150,25,1,1,0,0,0,150,25);
	this.instance_4.alpha = 0.102;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(79).to({_off:false},0).to({alpha:1},4).wait(49).to({alpha:0.102},4).to({_off:true},1).wait(165));

	// text1
	this.instance_5 = new lib.text1_1();
	this.instance_5.setTransform(150,25,1,1,0,0,0,150,25);
	this.instance_5.alpha = 0.102;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(19).to({_off:false},0).to({alpha:1},4).wait(48).to({alpha:0.102},4).to({_off:true},1).wait(226));

	// product
	this.instance_6 = new lib.hero_1();
	this.instance_6.setTransform(300,500,1,1,0,0,0,300,250);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(163).to({_off:false},0).to({y:330},10,cjs.Ease.get(1)).wait(129));

	// rain
	this.instance_7 = new lib.Rainmc();
	this.instance_7.setTransform(64,280.9,1,1,0,0,0,2.7,8);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(92).to({_off:false},0).wait(59).to({y:30.9,alpha:0.102},11,cjs.Ease.get(-1)).to({_off:true},1).wait(139));

	// cloud
	this.instance_8 = new lib.cloud();
	this.instance_8.setTransform(-81.9,216.9,1.012,1.012,0,0,0,50.9,30.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(16).to({x:108.1},44,cjs.Ease.get(1)).wait(91).to({y:-33.1},11,cjs.Ease.get(-1)).to({_off:true},1).wait(139));

	// cloudmask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgmQAuGMAAAhOHMBMhAAAMAAABOHgA6TyJQh/BggsCYQh8AEhXBYQhXBaAAB8QAAB/BaBZQBZBZB+AAIONAAQCRAABohnQBnhoAAiRQAAiThnhnQhohoiRAAQgTAAgSADQhAh2hwhDQhxhDiEAAQigABh/Bfg");
	var mask_graphics_16 = new cjs.Graphics().p("EgmQAuGMAAAhOHMBMhAAAMAAABOHgA6TyJQh/BggsCYQh8AEhXBYQhXBaAAB8QAAB/BaBZQBZBZB+AAIONAAQCRAABohnQBnhoAAiRQAAiThnhnQhohoiRAAQgTAAgSADQhAh2hwhDQhxhDiEAAQigABh/Bfg");
	var mask_graphics_17 = new cjs.Graphics().p("EgmQAuGMAAAhOHMBMhAAAMAAABOHgA6TyJQh/BggsCYQh8AEhXBYQhXBaAAB8QAAB/BaBZQBZBZB+AAIONAAQCRAABohnQBnhoAAiRQAAiThnhnQhohoiRAAQgTAAgTADQg+h2hxhDQhwhDiFAAQigABh/Bfg");
	var mask_graphics_18 = new cjs.Graphics().p("EgmQAuGMAAAhOHMBMhAAAMAAABOHgA6TyJQh/BggsCYQh8AEhXBYQhXBaAAB8QAAB/BaBZQBZBZB+AAIOMAAQCSAABohnQBnhoAAiRQAAiThnhnQhohoiSAAQgSAAgTADQg+h2hxhDQhwhDiFAAQigABh/Bfg");
	var mask_graphics_19 = new cjs.Graphics().p("EgmRAuGMAAAhOHMBMjAAAMAAABOHgA6TyJQh/BggsCYQh8AEhXBYQhXBaAAB8QAAB/BZBZQBaBZB+AAIOMAAQCTAABnhnQBnhoAAiRQAAiThnhnQhnhoiTAAQgSAAgTADQg/h2hwhDQhwhDiFAAQigABh/Bfg");
	var mask_graphics_20 = new cjs.Graphics().p("EgmRAuGMAAAhOHMBMiAAAMAAABOHgA6TyJQh/BggsCYQh8AEhXBYQhXBaAAB8QAAB/BaBZQBaBZB9AAIONAAQCRAABohnQBnhoAAiRQAAiThnhnQhohoiRAAQgTAAgSADQhAh2hwhDQhxhDiEAAQigABh/Bfg");
	var mask_graphics_21 = new cjs.Graphics().p("EgmQAuGMAAAhOHMBMhAAAMAAABOHgA6TyJQh/BggsCYQh8AEhXBYQhXBaAAB8QAAB/BZBZQBbBZB9AAIOMAAQCSAABohnQBnhoAAiRQAAiThnhnQhohoiSAAQgSAAgTADQg+h2hxhDQhwhDiFAAQigABh/Bfg");
	var mask_graphics_22 = new cjs.Graphics().p("EgmRAuGMAAAhOHMBMiAAAMAAABOHgA6TyJQh/BggsCYQh8AEhXBYQhXBaAAB8QAAB/BaBZQBaBZB9AAIONAAQCRAABohnQBnhoAAiRQAAiThnhnQhohoiRAAQgTAAgSADQhAh2hwhDQhxhDiEAAQigABh/Bfg");
	var mask_graphics_23 = new cjs.Graphics().p("EgmRAuGMAAAhOHMBMjAAAMAAABOHgA6TyJQh/BggsCYQh8AEhXBYQhXBaAAB8QAAB/BZBZQBaBZB+AAIOMAAQCTAABnhnQBnhoAAiRQAAiThnhnQhnhoiTAAQgSAAgTADQg/h2hwhDQhwhDiFAAQigABh/Bfg");
	var mask_graphics_24 = new cjs.Graphics().p("EgmQAuGMAAAhOHMBMhAAAMAAABOHgA6TyJQh/BggsCYQh8AEhXBYQhXBaAAB8QAAB/BaBZQBZBZB+AAIOMAAQCSAABohnQBnhoAAiRQAAiThnhnQhohoiSAAQgSAAgTADQg+h2hxhDQhwhDiFAAQigABh/Bfg");
	var mask_graphics_25 = new cjs.Graphics().p("EgmQAuGMAAAhOHMBMhAAAMAAABOHgA6TyJQh/BggsCYQh8AEhXBYQhXBaAAB8QAAB/BaBZQBZBZB+AAIONAAQCRAABohnQBnhoAAiRQAAiThnhnQhohoiRAAQgTAAgSADQhAh2hwhDQhxhDiEAAQigABh/Bfg");
	var mask_graphics_26 = new cjs.Graphics().p("EgmQAuGMAAAhOHMBMhAAAMAAABOHgA6TyJQh/BggsCYQh8AEhXBYQhXBaAAB8QAAB/BaBZQBaBZB9AAIONAAQCSAABnhnQBnhoAAiRQAAiThnhnQhnhoiSAAQgTAAgSADQhAh2hwhDQhxhDiEAAQigABh/Bfg");
	var mask_graphics_27 = new cjs.Graphics().p("EgmRAuGMAAAhOHMBMiAAAMAAABOHgA6TyJQh/BggsCYQh8AEhXBYQhXBaAAB8QAAB/BaBZQBaBZB9AAIONAAQCRAABohnQBnhoAAiRQAAiThnhnQhohoiRAAQgTAAgSADQhAh2hwhDQhxhDiEAAQigABh/Bfg");
	var mask_graphics_28 = new cjs.Graphics().p("EgmQAuGMAAAhOHMBMhAAAMAAABOHgA6TyJQh/BggsCYQh8AEhXBYQhXBaAAB8QAAB/BaBZQBZBZB+AAIONAAQCSAABnhnQBnhoAAiRQAAiThnhnQhnhoiSAAQgTAAgSADQhAh2hwhDQhxhDiEAAQigABh/Bfg");
	var mask_graphics_29 = new cjs.Graphics().p("EgmQAuGMAAAhOHMBMhAAAMAAABOHgA6TyJQh/BggsCYQh8AEhXBYQhXBaAAB8QAAB/BaBZQBZBZB+AAIONAAQCRAABohnQBnhoAAiRQAAiThnhnQhohoiRAAQgTAAgTADQg+h2hxhDQhwhDiFAAQigABh/Bfg");
	var mask_graphics_30 = new cjs.Graphics().p("EgmQAuGMAAAhOHMBMiAAAMAAABOHgA6TyJQh/BggsCYQh8AEhXBYQhXBaAAB8QAAB/BZBZQBbBZB9AAIOMAAQCTAABnhnQBnhoAAiRQAAiThnhnQhnhoiTAAQgSAAgTADQg+h2hxhDQhwhDiFAAQigABh/Bfg");
	var mask_graphics_31 = new cjs.Graphics().p("EgmRAuGMAAAhOHMBMjAAAMAAABOHgA6TyJQh/BggsCYQh8AEhXBYQhXBaAAB8QAAB/BZBZQBbBZB9AAIONAAQCRAABohnQBnhoAAiRQAAiThnhnQhohoiRAAQgTAAgSADQhAh2hwhDQhxhDiEAAQigABh/Bfg");
	var mask_graphics_32 = new cjs.Graphics().p("EgmQAuGMAAAhOHMBMhAAAMAAABOHgA6TyJQh/BggsCYQh8AEhXBYQhXBaAAB8QAAB/BaBZQBZBZB+AAIONAAQCRAABohnQBnhoAAiRQAAiThnhnQhohoiRAAQgTAAgTADQg+h2hxhDQhwhDiFAAQigABh/Bfg");
	var mask_graphics_33 = new cjs.Graphics().p("EgmRAuGMAAAhOHMBMjAAAMAAABOHgA6TyJQh/BggsCYQh8AEhXBYQhXBaAAB8QAAB/BZBZQBaBZB+AAIONAAQCSAABnhnQBnhoAAiRQAAiThnhnQhnhoiSAAQgTAAgSADQhAh2hwhDQhxhDiEAAQigABh/Bfg");
	var mask_graphics_34 = new cjs.Graphics().p("EgmQAuGMAAAhOHMBMhAAAMAAABOHgA6TyJQh/BggsCYQh8AEhXBYQhXBaAAB8QAAB/BZBZQBbBZB9AAIOMAAQCSAABohnQBnhoAAiRQAAiThnhnQhohoiSAAQgSAAgTADQg+h2hxhDQhwhDiFAAQigABh/Bfg");
	var mask_graphics_35 = new cjs.Graphics().p("EgmQAuGMAAAhOHMBMhAAAMAAABOHgA6TyJQh/BggsCYQh8AEhXBYQhXBaAAB8QAAB/BaBZQBZBZB+AAIONAAQCRAABohnQBnhoAAiRQAAiThnhnQhohoiRAAQgTAAgSADQhAh2hwhDQhxhDiEAAQigABh/Bfg");
	var mask_graphics_36 = new cjs.Graphics().p("EgmRAuGMAAAhOHMBMjAAAMAAABOHgA6TyJQh/BggsCYQh8AEhXBYQhXBaAAB8QAAB/BaBZQBaBZB9AAIONAAQCRAABohnQBnhoAAiRQAAiThnhnQhohoiRAAQgTAAgSADQhAh2hwhDQhxhDiEAAQigABh/Bfg");
	var mask_graphics_37 = new cjs.Graphics().p("EgmRAuGMAAAhOHMBMjAAAMAAABOHgA6TyJQh/BggsCYQh8AEhXBYQhXBaAAB8QAAB/BZBZQBaBZB+AAIONAAQCSAABnhnQBnhoAAiRQAAiThnhnQhnhoiSAAQgTAAgSADQhAh2hwhDQhxhDiEAAQigABh/Bfg");
	var mask_graphics_38 = new cjs.Graphics().p("EgmRAuGMAAAhOHMBMjAAAMAAABOHgA6TyJQh/BggsCYQh8AEhXBYQhXBaAAB8QAAB/BZBZQBaBZB+AAIOMAAQCTAABnhnQBnhoAAiRQAAiThnhnQhnhoiTAAQgSAAgSADQhAh2hwhDQhxhDiEAAQigABh/Bfg");
	var mask_graphics_39 = new cjs.Graphics().p("EgmRAuGMAAAhOHMBMjAAAMAAABOHgA6TyJQh/BggsCYQh8AEhXBYQhXBaAAB8QAAB/BZBZQBbBZB9AAIONAAQCRAABohnQBnhoAAiRQAAiThnhnQhohoiRAAQgTAAgSADQhAh2hwhDQhxhDiEAAQigABh/Bfg");
	var mask_graphics_40 = new cjs.Graphics().p("EgmRAuGMAAAhOHMBMiAAAMAAABOHgA6TyJQh/BggsCYQh8AEhXBYQhXBaAAB8QAAB/BaBZQBaBZB9AAIONAAQCSAABnhnQBnhoAAiRQAAiThnhnQhnhoiSAAQgTAAgSADQhAh2hwhDQhxhDiEAAQigABh/Bfg");
	var mask_graphics_41 = new cjs.Graphics().p("EgmQAuGMAAAhOHMBMhAAAMAAABOHgA6TyJQh/BggsCYQh8AEhXBYQhXBaAAB8QAAB/BaBZQBZBZB+AAIONAAQCRAABohnQBnhoAAiRQAAiThnhnQhohoiRAAQgTAAgTADQg+h2hxhDQhwhDiFAAQigABh/Bfg");
	var mask_graphics_42 = new cjs.Graphics().p("EgmRAuGMAAAhOHMBMjAAAMAAABOHgA6TyJQh/BggsCYQh8AEhXBYQhXBaAAB8QAAB/BZBZQBaBZB+AAIOMAAQCTAABnhnQBnhoAAiRQAAiThnhnQhnhoiTAAQgSAAgTADQg/h2hwhDQhwhDiFAAQigABh/Bfg");
	var mask_graphics_43 = new cjs.Graphics().p("EgmQAuGMAAAhOHMBMhAAAMAAABOHgA6TyJQh/BggsCYQh8AEhXBYQhXBaAAB8QAAB/BaBZQBaBZB9AAIONAAQCSAABnhnQBnhoAAiRQAAiThnhnQhnhoiSAAQgTAAgSADQhAh2hwhDQhxhDiEAAQigABh/Bfg");
	var mask_graphics_44 = new cjs.Graphics().p("EgmRAuGMAAAhOHMBMjAAAMAAABOHgA6TyJQh/BggsCYQh8AEhXBYQhXBaAAB8QAAB/BZBZQBbBZB9AAIOMAAQCTAABnhnQBnhoAAiRQAAiThnhnQhnhoiTAAQgSAAgTADQg/h2hwhDQhwhDiFAAQigABh/Bfg");
	var mask_graphics_45 = new cjs.Graphics().p("EgmQAuGMAAAhOHMBMhAAAMAAABOHgA6TyJQh/BggsCYQh8AEhXBYQhXBaAAB8QAAB/BaBZQBZBZB+AAIONAAQCRAABohnQBnhoAAiRQAAiThnhnQhohoiRAAQgTAAgSADQhAh2hwhDQhxhDiEAAQigABh/Bfg");
	var mask_graphics_46 = new cjs.Graphics().p("EgmRAuGMAAAhOHMBMjAAAMAAABOHgA6TyJQh/BggsCYQh8AEhXBYQhXBaAAB8QAAB/BZBZQBaBZB+AAIONAAQCSAABnhnQBnhoAAiRQAAiThnhnQhnhoiSAAQgTAAgSADQhAh2hwhDQhxhDiEAAQigABh/Bfg");
	var mask_graphics_47 = new cjs.Graphics().p("EgmRAuGMAAAhOHMBMjAAAMAAABOHgA6TyJQh/BggsCYQh8AEhXBYQhXBaAAB8QAAB/BZBZQBaBZB+AAIOMAAQCTAABnhnQBnhoAAiRQAAiThnhnQhnhoiTAAQgSAAgTADQg/h2hwhDQhwhDiFAAQigABh/Bfg");
	var mask_graphics_48 = new cjs.Graphics().p("EgmQAuGMAAAhOHMBMiAAAMAAABOHgA6TyJQh/BggsCYQh8AEhXBYQhXBaAAB8QAAB/BZBZQBbBZB9AAIOMAAQCSAABohnQBnhoAAiRQAAiThnhnQhohoiSAAQgSAAgTADQg+h2hxhDQhwhDiFAAQigABh/Bfg");
	var mask_graphics_49 = new cjs.Graphics().p("EgmQAuGMAAAhOHMBMiAAAMAAABOHgA6TyJQh/BggsCYQh8AEhXBYQhXBaAAB8QAAB/BZBZQBbBZB9AAIOMAAQCSAABohnQBnhoAAiRQAAiThnhnQhohoiSAAQgSAAgTADQg+h2hxhDQhwhDiFAAQigABh/Bfg");
	var mask_graphics_50 = new cjs.Graphics().p("EgmQAuGMAAAhOHMBMiAAAMAAABOHgA6TyJQh/BggsCYQh8AEhXBYQhXBaAAB8QAAB/BZBZQBbBZB9AAIOMAAQCSAABohnQBnhoAAiRQAAiThnhnQhohoiSAAQgSAAgTADQg/h2hwhDQhwhDiFAAQigABh/Bfg");
	var mask_graphics_51 = new cjs.Graphics().p("EgmRAuGMAAAhOHMBMjAAAMAAABOHgA6TyJQh/BggsCYQh8AEhXBYQhXBaAAB8QAAB/BZBZQBaBZB+AAIOMAAQCTAABnhnQBnhoAAiRQAAiThnhnQhnhoiTAAQgSAAgTADQg/h2hwhDQhwhDiFAAQigABh/Bfg");
	var mask_graphics_52 = new cjs.Graphics().p("EgmRAuGMAAAhOHMBMjAAAMAAABOHgA6TyJQh/BggsCYQh8AEhXBYQhXBaAAB8QAAB/BZBZQBbBZB9AAIONAAQCRAABohnQBnhoAAiRQAAiThnhnQhohoiRAAQgTAAgSADQhAh2hwhDQhxhDiEAAQigABh/Bfg");
	var mask_graphics_53 = new cjs.Graphics().p("EgmQAuGMAAAhOHMBMhAAAMAAABOHgA6TyJQh/BggsCYQh8AEhXBYQhXBaAAB8QAAB/BaBZQBZBZB+AAIONAAQCRAABohnQBnhoAAiRQAAiThnhnQhohoiRAAQgTAAgTADQg+h2hxhDQhwhDiFAAQigABh/Bfg");
	var mask_graphics_54 = new cjs.Graphics().p("EgmRAuGMAAAhOHMBMjAAAMAAABOHgA6TyJQh/BggsCYQh8AEhXBYQhXBaAAB8QAAB/BZBZQBaBZB+AAIOMAAQCTAABnhnQBnhoAAiRQAAiThnhnQhnhoiTAAQgSAAgTADQg/h2hwhDQhwhDiFAAQigABh/Bfg");
	var mask_graphics_55 = new cjs.Graphics().p("EgmQAuGMAAAhOHMBMhAAAMAAABOHgA6TyJQh/BggsCYQh8AEhXBYQhXBaAAB8QAAB/BaBZQBZBZB+AAIONAAQCRAABohnQBnhoAAiRQAAiThnhnQhohoiRAAQgTAAgSADQhAh2hwhDQhxhDiEAAQigABh/Bfg");
	var mask_graphics_56 = new cjs.Graphics().p("EgmRAuGMAAAhOHMBMjAAAMAAABOHgA6TyJQh/BggsCYQh8AEhXBYQhXBaAAB8QAAB/BZBZQBaBZB+AAIOMAAQCTAABnhnQBnhoAAiRQAAiThnhnQhnhoiTAAQgSAAgSADQhAh2hwhDQhwhDiFAAQigABh/Bfg");
	var mask_graphics_57 = new cjs.Graphics().p("EgmQAuGMAAAhOHMBMhAAAMAAABOHgA6TyJQh/BggsCYQh8AEhXBYQhXBaAAB8QAAB/BZBZQBbBZB9AAIOMAAQCSAABohnQBnhoAAiRQAAiThnhnQhohoiSAAQgSAAgTADQg+h2hxhDQhwhDiFAAQigABh/Bfg");
	var mask_graphics_58 = new cjs.Graphics().p("EgmQAuGMAAAhOHMBMhAAAMAAABOHgA6TyJQh/BggsCYQh8AEhXBYQhXBaAAB8QAAB/BaBZQBZBZB+AAIONAAQCRAABohnQBnhoAAiRQAAiThnhnQhohoiRAAQgTAAgTADQg+h2hxhDQhwhDiFAAQigABh/Bfg");
	var mask_graphics_59 = new cjs.Graphics().p("EgmQAuGMAAAhOHMBMhAAAMAAABOHgA6TyJQh/BggsCYQh8AEhXBYQhXBaAAB8QAAB/BaBZQBaBZB9AAIONAAQCSAABnhnQBnhoAAiRQAAiThnhnQhnhoiSAAQgTAAgSADQhAh2hwhDQhxhDiEAAQigABh/Bfg");
	var mask_graphics_60 = new cjs.Graphics().p("EgmRAuGMAAAhOHMBMiAAAMAAABOHgA6TyJQh/BggsCYQh8AEhXBYQhXBaAAB8QAAB/BaBZQBaBZB9AAIONAAQCSAABnhnQBnhoAAiRQAAiThnhnQhnhoiSAAQgTAAgSADQhAh2hwhDQhxhDiEAAQigABh/Bfg");
	var mask_graphics_151 = new cjs.Graphics().p("EgmRAuGMAAAhOHMBMiAAAMAAABOHgA6TyJQh/BggsCYQh8AEhXBYQhXBaAAB8QAAB/BaBZQBaBZB9AAIONAAQCSAABnhnQBnhoAAiRQAAiThnhnQhnhoiSAAQgTAAgSADQhAh2hwhDQhxhDiEAAQigABh/Bfg");
	var mask_graphics_152 = new cjs.Graphics().p("EgmRAt7MAAAhOGMBMiAAAMAAABOGgA6TyTQh/BfgsCZQh8AEhXBYQhXBZAAB9QAAB+BaBaQBaBZB9AAIONAAQCSAABnhnQBnhoAAiSQAAiShnhnQhnhoiSAAQgTAAgSACQhAh1hwhDQhxhDiEAAQigAAh/Bgg");
	var mask_graphics_153 = new cjs.Graphics().p("EgmRAtcMAAAhOGMBMiAAAMAAABOGgA6TyyQh/BfgsCZQh8AEhXBYQhXBZAAB9QAAB+BaBaQBaBZB9AAIONAAQCSAABnhnQBnhoAAiSQAAiShnhnQhnhoiSAAQgTAAgSACQhAh1hwhDQhxhDiEAAQigAAh/Bgg");
	var mask_graphics_154 = new cjs.Graphics().p("EgmRAspMAAAhOGMBMiAAAMAAABOGgA6TzmQh/BggsCZQh8ADhXBZQhXBZAAB9QAAB+BaBZQBaBZB9AAIONAAQCSAABnhnQBnhoAAiRQAAiShnhoQhnhoiSAAQgTAAgSADQhAh1hwhDQhxhDiEAAQigAAh/Bfg");
	var mask_graphics_155 = new cjs.Graphics().p("EgmRArgMAAAhOGMBMiAAAMAAABOGgA6T0uQh/BfgsCZQh8AEhXBYQhXBZAAB9QAAB+BaBaQBaBZB9AAIONAAQCSAABnhnQBnhoAAiSQAAiShnhnQhnhoiSAAQgTAAgSACQhAh1hwhDQhxhDiEAAQigAAh/Bgg");
	var mask_graphics_156 = new cjs.Graphics().p("EgmRAqDMAAAhOGMBMiAAAMAAABOGgA6T2LQh/BfgsCZQh8AEhXBYQhXBZAAB9QAAB+BaBaQBaBZB9AAIONAAQCSAABnhnQBnhoAAiSQAAiShnhnQhnhoiSAAQgTAAgSACQhAh1hwhDQhxhDiEAAQigAAh/Bgg");
	var mask_graphics_157 = new cjs.Graphics().p("EgmRAoSMAAAhOGMBMiAAAMAAABOGgA6T39Qh/BggsCZQh8ADhXBZQhXBZAAB9QAAB+BaBZQBaBZB9AAIONAAQCSAABnhnQBnhoAAiRQAAiShnhoQhnhoiSAAQgTAAgSADQhAh1hwhDQhxhDiEAAQigAAh/Bfg");
	var mask_graphics_158 = new cjs.Graphics().p("EgmRAnDMAAAhOGMBMiAAAMAAABOGgA6T5LQh/BfgsCaQh8ADhXBZQhXBYAAB+QAAB+BaBZQBaBZB9AAIONAAQCSAABnhnQBnhoAAiSQAAiRhnhoQhnhoiSAAQgTAAgSACQhAh0hwhDQhxhEiEAAQigABh/Bfg");
	var mask_graphics_159 = new cjs.Graphics().p("EgmRAnEMAAAhOHMBMiAAAMAAABOHgA6T5LQh/BfgsCZQh8AEhXBZQhXBYAAB9QAAB/BaBZQBaBZB9AAIONAAQCSAABnhnQBnhoAAiSQAAiRhnhoQhnhoiSAAQgTAAgSACQhAh1hwhCQhxhDiEgBQigAAh/Bgg");
	var mask_graphics_160 = new cjs.Graphics().p("EgmRAnDMAAAhOFMBMiAAAMAAABOFgA6T5LQh/BfgsCaQh8ADhXBYQhXBaAAB9QAAB+BaBZQBaBZB9AAIONAAQCSAABnhnQBnhoAAiSQAAiRhnhoQhnhoiSAAQgTAAgSACQhAh0hwhEQhxhCiEAAQigAAh/Bfg");
	var mask_graphics_161 = new cjs.Graphics().p("EgmRAnDMAAAhOFMBMiAAAMAAABOFgA6T5LQh/BfgsCaQh8ADhXBYQhXBaAAB9QAAB+BaBZQBaBZB9AAIONAAQCSAABnhnQBnhoAAiSQAAiRhnhoQhnhoiSAAQgTAAgSACQhAh0hwhEQhxhCiEAAQigAAh/Bfg");
	var mask_graphics_162 = new cjs.Graphics().p("EgmRAnEMAAAhOHMBMiAAAMAAABOHgA6T5LQh/BfgsCZQh8AEhXBZQhXBYAAB9QAAB/BaBZQBaBZB9AAIONAAQCSAABnhnQBnhoAAiSQAAiRhnhoQhnhoiSAAQgTAAgSACQhAh1hwhCQhxhDiEgBQigAAh/Bgg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:55,y:295}).wait(16).to({graphics:mask_graphics_16,x:55,y:295}).wait(1).to({graphics:mask_graphics_17,x:63.5,y:295}).wait(1).to({graphics:mask_graphics_18,x:71.9,y:295}).wait(1).to({graphics:mask_graphics_19,x:80,y:295}).wait(1).to({graphics:mask_graphics_20,x:88,y:295}).wait(1).to({graphics:mask_graphics_21,x:95.7,y:295}).wait(1).to({graphics:mask_graphics_22,x:103.3,y:295}).wait(1).to({graphics:mask_graphics_23,x:110.6,y:295}).wait(1).to({graphics:mask_graphics_24,x:117.8,y:295}).wait(1).to({graphics:mask_graphics_25,x:124.8,y:295}).wait(1).to({graphics:mask_graphics_26,x:131.5,y:295}).wait(1).to({graphics:mask_graphics_27,x:138.1,y:295}).wait(1).to({graphics:mask_graphics_28,x:144.5,y:295}).wait(1).to({graphics:mask_graphics_29,x:150.7,y:295}).wait(1).to({graphics:mask_graphics_30,x:156.7,y:295}).wait(1).to({graphics:mask_graphics_31,x:162.5,y:295}).wait(1).to({graphics:mask_graphics_32,x:168.1,y:295}).wait(1).to({graphics:mask_graphics_33,x:173.5,y:295}).wait(1).to({graphics:mask_graphics_34,x:178.7,y:295}).wait(1).to({graphics:mask_graphics_35,x:183.7,y:295}).wait(1).to({graphics:mask_graphics_36,x:188.5,y:295}).wait(1).to({graphics:mask_graphics_37,x:193.1,y:295}).wait(1).to({graphics:mask_graphics_38,x:197.5,y:295}).wait(1).to({graphics:mask_graphics_39,x:201.7,y:295}).wait(1).to({graphics:mask_graphics_40,x:205.7,y:295}).wait(1).to({graphics:mask_graphics_41,x:209.6,y:295}).wait(1).to({graphics:mask_graphics_42,x:213.2,y:295}).wait(1).to({graphics:mask_graphics_43,x:216.6,y:295}).wait(1).to({graphics:mask_graphics_44,x:219.9,y:295}).wait(1).to({graphics:mask_graphics_45,x:222.9,y:295}).wait(1).to({graphics:mask_graphics_46,x:225.8,y:295}).wait(1).to({graphics:mask_graphics_47,x:228.4,y:295}).wait(1).to({graphics:mask_graphics_48,x:230.9,y:295}).wait(1).to({graphics:mask_graphics_49,x:233.1,y:295}).wait(1).to({graphics:mask_graphics_50,x:235.2,y:295}).wait(1).to({graphics:mask_graphics_51,x:237.1,y:295}).wait(1).to({graphics:mask_graphics_52,x:238.7,y:295}).wait(1).to({graphics:mask_graphics_53,x:240.2,y:295}).wait(1).to({graphics:mask_graphics_54,x:241.5,y:295}).wait(1).to({graphics:mask_graphics_55,x:242.5,y:295}).wait(1).to({graphics:mask_graphics_56,x:243.4,y:295}).wait(1).to({graphics:mask_graphics_57,x:244.1,y:295}).wait(1).to({graphics:mask_graphics_58,x:244.6,y:295}).wait(1).to({graphics:mask_graphics_59,x:244.9,y:295}).wait(1).to({graphics:mask_graphics_60,x:245,y:295}).wait(91).to({graphics:mask_graphics_151,x:245,y:295}).wait(1).to({graphics:mask_graphics_152,x:245,y:294}).wait(1).to({graphics:mask_graphics_153,x:245,y:290.9}).wait(1).to({graphics:mask_graphics_154,x:245,y:285.7}).wait(1).to({graphics:mask_graphics_155,x:245,y:278.5}).wait(1).to({graphics:mask_graphics_156,x:245,y:269.2}).wait(1).to({graphics:mask_graphics_157,x:245,y:257.8}).wait(1).to({graphics:mask_graphics_158,x:245,y:238.8}).wait(1).to({graphics:mask_graphics_159,x:245,y:207.8}).wait(1).to({graphics:mask_graphics_160,x:245,y:172.6}).wait(1).to({graphics:mask_graphics_161,x:245,y:133.4}).wait(1).to({graphics:mask_graphics_162,x:245,y:90}).wait(1).to({graphics:null,x:0,y:0}).wait(139));

	// sun
	this.sun = new lib.sun();
	this.sun.setTransform(-69.8,491,1.812,1.812,0,0,0,16.1,16);

	this.sun.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.sun).to({x:151.2,y:230},40,cjs.Ease.get(1)).wait(111).to({y:-20},11,cjs.Ease.get(-1)).to({_off:true},1).wait(139));

	// gradient grey
	this.instance_9 = new lib.gradientgrey();
	this.instance_9.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(61).to({_off:false},0).to({alpha:1},16).wait(74).to({y:-525},11,cjs.Ease.get(-1)).wait(140));

	// black
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("EgXbAu4MAAAhdvMAu2AAAMAAABdvg");
	this.shape_1.setTransform(150,300);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(151).to({_off:false},0).wait(151));

	// gradient blue
	this.instance_10 = new lib.gradientblue();
	this.instance_10.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({_off:true},77).wait(225));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.8,299.5,461.4,601);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;