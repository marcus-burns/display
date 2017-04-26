(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.Blk = function() {
	this.initialize(img.Blk);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,32,32);


(lib.HeadShot = function() {
	this.initialize(img.HeadShot);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,207,207);


(lib.ProductShot = function() {
	this.initialize(img.ProductShot);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1306);


(lib.QuietMarkLogo = function() {
	this.initialize(img.QuietMarkLogo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,106,127);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Text_Lock = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(88.5,37.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Text_Lock, new cjs.Rectangle(-9.4,8.8,196,57.6), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AB/BKQgJgEgHgHQgIgHgEgJQgDgJAAgKQAAgKADgKQAEgIAIgHQAHgHAJgDQAJgEAKAAQALAAAJAEQAJADAIAIQAHAGAEAJQAEAJAAAKQAAAKgEAJQgEAJgHAHQgIAHgJAEQgJAEgLAAQgKAAgJgEgACHAAQgFACgEAEQgEAEgCAGQgCAFAAAHQAAAGACAGQACAFAEAFQAEAEAFACQAGADAGAAQAFAAAGgDQAFgCAEgEQAEgFACgFQACgGAAgGQAAgHgCgFQgCgGgEgEQgEgEgFgCQgGgCgFAAQgGAAgGACgAHgBKIAAhcIAVAAIAABcgAF3BKIAzhKIguAAIAAgSIBRAAIgzBJIAzAAIAAATgAFSBKIAAhcIAWAAIAABcgAEgBKIgBg9QgBgGgCgEQgCgDgEgBQgEgCgGAAQgIAAgGADQgFABgEAFQgCAEgBAHIgBA5IgVAAIAAhcIAUAAIAAAPIAHgIQAEgEAEgCIAJgDIAMgBQAKAAAHADQAIADAEAHQADAFABAGIAAAPIAAA4gAA8BKIg5hJIAABJIgWAAIAAiOIAWAAIAAA7IA0g7IAcAAIg4A/IA/BPgAiCBKIgBg9QgBgGgCgEQgCgDgEgBQgEgCgGAAQgIAAgGADQgFABgEAFQgCAEgBAHIgBA5IgVAAIAAhcIAUAAIAAAPIAHgIQAEgEAEgCIAJgDIAMgBQAKAAAHADQAIADAEAHQADAFABAGIAAAPIAAA4gAj5BKIAAhcIAVAAIAABcgAkiBKIgqgwIAAAwIgVAAIAAiXIAVAAIAABhIAngmIAaAAIgqAoIAuA0gAmFBKIgQglIg5AAIgQAlIgZAAIBFiUIBGCUgAmdASIgUgwIgGAQIgOAgIAoAAgAHhgwQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEADAAAGQAAAGgEAEQgEAEgGAAQgFAAgEgEgAFTgwQgDgEAAgGQAAgFADgEQAEgEAGAAQAFAAAEAEQAEADAAAGQAAAGgEAEQgEAEgFAAQgGAAgEgEgAj4gwQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEADAAAGQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape.setTransform(99.3,13.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(49,6.1,100.7,15.6), null);


(lib.Strap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ao0BLIAAiVIRpAAIAACVg");
	mask.setTransform(72.6,34.2);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AAdA1IAAg7QAAgegbAAQgOgBgKALQgIANACANIAAA1IgRAAIAAhlIARAAIAAAPQAGgJAKgFQAKgFAKAAQASAAAKAKQAKAJAAARIAABFg");
	this.shape.setTransform(119.3,33,0.521,0.521);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AgmAnQgQgQAAgXQgBgVAQgQIABgBIgBAAQAQgQAXAAQAWAAARAQQAQAQAAAWQAAAXgQAPIAAABQgQAQgXAAQgWAAgQgQgAgYgbQgLALgBAQIAAAAQgBAQALALQAKALAQABIAAAAQAQABALgLQAMgLABgQQABgPgLgMQgLgLgQgBIgCAAQgOAAgLAKg");
	this.shape_1.setTransform(112.7,33.1,0.521,0.521);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AgIBSIAAhlIARAAIAABlgAgIg7QgEgDAAgGQAAgFAEgEQAEgEAEAAIAAAAQAFAAAEAEQAEAEAAAFQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_2.setTransform(107.8,31.5,0.521,0.521);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AgIBIIAAhXIgTAAIAAgPIATAAIAAgoIAQAAIAAAoIATAAIAAAPIgTAAIAABXg");
	this.shape_3.setTransform(104.8,32.1,0.521,0.521);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AgHBSIAAhlIAQAAIAABlgAgIg7QgEgDAAgGQAAgFAEgEQAEgEAEAAIAAAAQAFAAAEAEQAEAEAAAFQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_4.setTransform(101.8,31.5,0.521,0.521);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AglBJQgNgPAAgYQAAgZANgOQAOgPAVAAQALgBAKAHQAKAGAFAKIAAhZIARAAIAACrIgQAAIAAgSQgFAKgLAGQgKAGgKAAQgWAAgOgPgAgXAGQgJAJAAARQAAATAJAKQAJALAOAAQAQAAAJgKQAKgKAAgSQAAgSgKgKQgJgJgQAAQgOAAgJAJg");
	this.shape_5.setTransform(96.8,31.4,0.521,0.521);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("AgqBSIAAiiIBVAAIAAASIhBAAIAAAuIBBAAIAAARIhBAAIAAA/IBBAAIAAASg");
	this.shape_6.setTransform(90.7,31.5,0.521,0.521);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AgIBWIAAirIARAAIAACrg");
	this.shape_7.setTransform(83,31.3,0.521,0.521);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("AglAoQgNgPAAgZQAAgYANgPQANgPAWAAQALAAAKAGQAKAGAFALIAAgTIARAAIAABlIgQAAIAAgTQgFALgLAGQgKAGgKAAQgWAAgOgPgAgXgbQgJAKAAARQAAARAJAKQAJALAPAAQAQAAAJgKQAJgKAAgRQAAgRgKgKQgKgKgPAAQgPAAgIAJg");
	this.shape_8.setTransform(78,33.1,0.521,0.521);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("AAdA1IAAg7QAAgegbAAQgOgBgKALQgIANACANIAAA1IgRAAIAAhlIARAAIAAAPQAGgJAKgFQAKgFAKAAQASAAAKAKQAKAJAAARIAABFg");
	this.shape_9.setTransform(71.5,33,0.521,0.521);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("AgmAnQgQgQAAgXQAAgVAQgQIAAgBQAQgQAWAAQAXAAAQARQAQAQAAAVQAAAXgPAQIgBAAQgQAQgXAAQgWAAgQgQgAgXgbQgMALgBAQIAAAAQAAAQAKALQALALAPABIAAAAQAQABAMgLQAMgLAAgQQABgPgLgMQgLgLgQgBIgBAAQgOAAgLAKg");
	this.shape_10.setTransform(64.7,33.1,0.521,0.521);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("AgHBSIAAhlIAQAAIAABlgAgIg7QgEgDAAgGQAAgFAEgEQAEgEAEAAIAAAAQAFAAAEAEQAEAEAAAFQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_11.setTransform(59.9,31.5,0.521,0.521);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("AgUAyQgMgGgFgLIANgJQAEAIAHAEQAIAFAGgBQAJAAAGgEQAEgFAAgGQAAgGgDgEQgDgCgJgDQgWgJgHgDQgKgHAAgNQAAgOAJgIQALgJAOAAQAMgCAKAGQAKAGAFAKIgOAJQgDgHgHgEQgGgEgHAAQgGAAgFAEQgFAEgBAGIAAABQABAHAGAEQADACAQAEQAPAFAHAGQAHAHAAALQABAPgLAJQgKAJgRAAIgCAAQgLAAgIgFg");
	this.shape_12.setTransform(56.1,33.1,0.521,0.521);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("AgVAyQgLgGgGgLIAPgJQAHARASgBQAIAAAGgEQAFgFAAgGQAAgGgEgEQgEgCgIgDQgXgJgFgDQgLgHAAgNQAAgOAKgIQAKgJAPAAQALgCAKAGQAKAGAFAKIgOAJQgHgQgQABQgFgBgGAEQgEAEgBAHIAAABQgBAHAHAEQADACAQAEQAPAFAHAGQAHAHABALQAAAPgKAJQgLAJgQAAIgDAAQgKAAgKgFg");
	this.shape_13.setTransform(51.2,33.1,0.521,0.521);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#999999").s().p("AACA3QgWAAgOgPQgPgQAAgYQAAgYAOgPQAOgPAWAAQAWAAANAPQAOAOAAAZIAAACIhQAAIAAACQgBAOAJALQAIALAOABIADAAQAXgBAKgVIANAJQgHANgNAHQgLAHgOAAIgCAAgAgUgfQgJAIgBAMIA9AAQAAgLgIgJQgIgIgMAAIgDAAIgBAAQgLAAgIAIg");
	this.shape_14.setTransform(45.8,33.2,0.521,0.521);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#999999").s().p("AgMBXIAAhXIgTAAIAAgOIATAAIAAgdQABgYAFgJQAGgKARAAQAGAAAJACIAAASQgFgDgJAAQgJAAgDAHQgBAEAAARIAAAcIAbAAIAAANIgbAAIAABXg");
	this.shape_15.setTransform(41.1,31.2,0.521,0.521);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#999999").s().p("AgmAnQgQgQAAgXQAAgVAQgQIAAgBQAQgQAWAAQAXAAAQARQAQAQAAAVQAAAXgPAQIgBAAQgQAQgXAAQgWAAgQgQgAgXgbQgMALgBAQIAAAAQAAAQAKALQALALAPABIAAAAQAQABAMgLQAMgLAAgQQABgPgLgMQgLgLgQgBIgBAAQgOAAgLAKg");
	this.shape_16.setTransform(35.9,33.1,0.521,0.521);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#999999").s().p("AgeA1IAAhmIAQAAIAAAWQAHgNAHgGQAHgGAMAAQAGAAAGACIgGAQIgLgCQgbAAAAAnIAAAyg");
	this.shape_17.setTransform(30.9,33.1,0.521,0.521);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#999999").s().p("AgtBSIAAiiIAiAAQAdgBALAJQAPANACAUQABAVgNAOIgFAEQgHAFgLADIgWABIgPAAIAABJgAgagIIAKAAQAWAAAJgFQAKgGAAgPQAAgQgKgHQgKgGgVABIgKAAg");
	this.shape_18.setTransform(25.9,31.5,0.521,0.521);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#9D9D9C").s().p("AnWCpIAAioQAAglAagbQAbgbAlAAIAHAAQAlABAZAbQAZAbgBAkQgBAmgbAaQgcAbgmgBIgxAAIAABOgAmhgjQgOAQAAAUIAAAzIAzAAQAWAAAPgPQAQgQgBgVQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAgUgQgOQgPgOgVAAIgBAAQgVABgPAQgAD1BAQgbgaABgmQAAgkAagbQAbgbAlAAQAmAAAbAbQAbAaAAAlQAAAmgbAaQgaAbgmAAQgmAAgbgbgAESglQgPAPgBAVQAAAVAPARQAPAQAWABIABAAQAWgBAPgQQAPgPgBgWIAAAAQAAgVgPgQQgPgQgWAAQgVABgPAPgAjyBBQgbgagBgmQAAglAagbQAbgbAlAAQAmgBAbAbQAbAaABAmIgCANIiMAAQAEASAOANQAPAMASgBQAdAAAZgSIAWAcQghAagpAAIgBAAIgCAAQglAAgagagAjRgsQgNAKgGARIBiAAQgFgQgNgLQgNgKgRAAQgRAAgOAKgAMNBbQgmAAgagbQgbgaAAglIABgBQgBgkAagbQAagbAlAAIACAAQAhgBAZAXIgXAaQgQgMgUABQgWACgPAQQgOARABAVQABAUAOAOQAOAPAVACQAUACAPgNIAZAZQgYAXggAAIgDAAgAAxA/IAVgbQAaARAgADQAgAAAAgRQAAgIgRgHIglgLQg2gPAAgjQAAgWATgPQAUgPAfAAQAmAAAfATIgUAbQgWgLgagBQgdAAAAARQAAAIA1AQQA1APAAAiQAAAbgYAPQgUANgdABQgrgCgjgagApGBbQglAAgZgZQgbgaAAgsIAAhTIAoAAIAABTQAAAbAPAPQAOAOAVABQAVgBAOgOQAPgPAAgbIAAhTIAoAAIAABTQAAArgbAaQgZAZglABgAtHA/IAWgbQAZARAhADQAfAAAAgRQAAgIgRgHIglgLQg1gPAAgjQAAgWATgPQAUgPAfAAQAlAAAgATIgUAbQgXgLgagBQgdAAAAARQAAAHARAGIAlALQA1APAAAiQAAAbgYAPQgVANgdABQgqgCgkgagAGmgHQABgkAcgaQAbgZAlABQAkABAaAbQAZAbgBAlIAABYIgoAAIAAhWQABgFgBgGQgCgUgRgNQgQgNgVACQgUADgNAQQgNAQACAUIAABWIgnABgAhDBYIAAhZQABgmAbgZQAbgbAlABIAJAAIAAAlQgHgBgIACQguAIAAAwIAABUgAJ1BXIAAiuIAoAAIAACugAKKh6QgJAAgHgGQgHgIAAgJQAAgJAHgHQAHgHAJAAQAKAAAGAHQAHAHAAAJQAAAJgGAIQgHAGgJAAg");
	this.shape_19.setTransform(100.4,9.4,0.521,0.521);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1D1D1B").s().p("AgiCEQgbgHgVgRIAYggQAUAOAaADQAgABAOgcQAIgRAAgWQgTARgXAAQgkAAgbgaQgbgZAAglIAAhaIAwAAIAABZQAAASAMAMQANANARAAQARAAANgNQANgMAAgSIAAhZIAwAAIAABZQAABSgHAdQgPA2gzAMQgNADgNAAQgNAAgNgDg");
	this.shape_20.setTransform(15.5,11.8,0.521,0.521);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#1D1D1B").s().p("AgJBbQglgGgdgWIAXgfQALAIASAGQAXAHAQgFQALgCACgHQACgGgHgFIgggKQgbgHgNgIQgQgIgFgRQgFgRAIgRQANgYAfgIQAQgDAMACQAhABAdATIgXAfQgdgNgfAEQgIACgCAFQgCAGAGADIAAAAQAFAFAZAHQAcAHAMAGQAcAOgBAcQgBASgJALQgRAVgfAFg");
	this.shape_21.setTransform(25.3,9.4,0.521,0.521);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#1D1D1B").s().p("AArBZIAAhXQAAgRgNgMQgMgNgSAAQgRAAgNANQgMAMAAARIAABXIgvAAIAAhXQgBglAbgaQAbgbAkAAQAlAAAbAbQAaAaABAlIAABXg");
	this.shape_22.setTransform(45.2,9.3,0.521,0.521);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#1D1D1B").s().p("Ag/BAQgbgaAAgmQAAgkAbgbQAagaAlgBQAmAAAaAbQAbAaAAAlQAAAmgbAaQgaAbgmAAQgkAAgbgbgAgdgdQgNAMAAARQAAASAMANQANANARAAQASAAANgNQAMgNAAgSQAAgRgMgMQgNgNgSAAQgRAAgMANg");
	this.shape_23.setTransform(34.7,9.3,0.521,0.521);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#1D1D1B").s().p("Ag/BtQgbgbAAglQAAgmAagaQAbgaAlgBIArAAIAAhYIAwAAIAACyQgBAmgaAbQgbAaglAAQglAAgagagAgeAOQgMAMAAASQAAASAMANQANAMARAAQARAAANgMQANgNAAgSIgBgrIgqAAQgRAAgNANg");
	this.shape_24.setTransform(4.7,7.1,0.521,0.521);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Strap, new cjs.Rectangle(16.2,26.6,112.9,9.4), null);


(lib.ProductShot_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.ProductShot();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ProductShot_1, new cjs.Rectangle(0,0,300,653), null);


(lib.Logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AriB/IAAj+IXFAAIAAD+g");
	mask.setTransform(72.8,7.5);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AAdA1IAAg7QAAgegbAAQgOgBgKALQgIANACANIAAA1IgRAAIAAhlIARAAIAAAPQAGgJAKgFQAKgFAKAAQASAAAKAKQAKAJAAARIAABFg");
	this.shape.setTransform(119.3,33,0.521,0.521);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AgmAnQgQgQAAgXQgBgVAQgQIABgBIgBAAQAQgQAXAAQAWAAARAQQAQAQAAAWQAAAXgQAPIAAABQgQAQgXAAQgWAAgQgQgAgYgbQgLALgBAQIAAAAQgBAQALALQAKALAQABIAAAAQAQABALgLQAMgLABgQQABgPgLgMQgLgLgQgBIgCAAQgOAAgLAKg");
	this.shape_1.setTransform(112.7,33.1,0.521,0.521);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AgIBSIAAhlIARAAIAABlgAgIg7QgEgDAAgGQAAgFAEgEQAEgEAEAAIAAAAQAFAAAEAEQAEAEAAAFQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_2.setTransform(107.8,31.5,0.521,0.521);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AgIBIIAAhXIgTAAIAAgPIATAAIAAgoIAQAAIAAAoIATAAIAAAPIgTAAIAABXg");
	this.shape_3.setTransform(104.8,32.1,0.521,0.521);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AgHBSIAAhlIAQAAIAABlgAgIg7QgEgDAAgGQAAgFAEgEQAEgEAEAAIAAAAQAFAAAEAEQAEAEAAAFQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_4.setTransform(101.8,31.5,0.521,0.521);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AglBJQgNgPAAgYQAAgZANgOQAOgPAVAAQALgBAKAHQAKAGAFAKIAAhZIARAAIAACrIgQAAIAAgSQgFAKgLAGQgKAGgKAAQgWAAgOgPgAgXAGQgJAJAAARQAAATAJAKQAJALAOAAQAQAAAJgKQAKgKAAgSQAAgSgKgKQgJgJgQAAQgOAAgJAJg");
	this.shape_5.setTransform(96.8,31.4,0.521,0.521);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("AgqBSIAAiiIBVAAIAAASIhBAAIAAAuIBBAAIAAARIhBAAIAAA/IBBAAIAAASg");
	this.shape_6.setTransform(90.7,31.5,0.521,0.521);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AgIBWIAAirIARAAIAACrg");
	this.shape_7.setTransform(83,31.3,0.521,0.521);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("AglAoQgNgPAAgZQAAgYANgPQANgPAWAAQALAAAKAGQAKAGAFALIAAgTIARAAIAABlIgQAAIAAgTQgFALgLAGQgKAGgKAAQgWAAgOgPgAgXgbQgJAKAAARQAAARAJAKQAJALAPAAQAQAAAJgKQAJgKAAgRQAAgRgKgKQgKgKgPAAQgPAAgIAJg");
	this.shape_8.setTransform(78,33.1,0.521,0.521);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("AAdA1IAAg7QAAgegbAAQgOgBgKALQgIANACANIAAA1IgRAAIAAhlIARAAIAAAPQAGgJAKgFQAKgFAKAAQASAAAKAKQAKAJAAARIAABFg");
	this.shape_9.setTransform(71.5,33,0.521,0.521);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("AgmAnQgQgQAAgXQAAgVAQgQIAAgBQAQgQAWAAQAXAAAQARQAQAQAAAVQAAAXgPAQIgBAAQgQAQgXAAQgWAAgQgQgAgXgbQgMALgBAQIAAAAQAAAQAKALQALALAPABIAAAAQAQABAMgLQAMgLAAgQQABgPgLgMQgLgLgQgBIgBAAQgOAAgLAKg");
	this.shape_10.setTransform(64.7,33.1,0.521,0.521);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("AgHBSIAAhlIAQAAIAABlgAgIg7QgEgDAAgGQAAgFAEgEQAEgEAEAAIAAAAQAFAAAEAEQAEAEAAAFQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_11.setTransform(59.9,31.5,0.521,0.521);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("AgUAyQgMgGgFgLIANgJQAEAIAHAEQAIAFAGgBQAJAAAGgEQAEgFAAgGQAAgGgDgEQgDgCgJgDQgWgJgHgDQgKgHAAgNQAAgOAJgIQALgJAOAAQAMgCAKAGQAKAGAFAKIgOAJQgDgHgHgEQgGgEgHAAQgGAAgFAEQgFAEgBAGIAAABQABAHAGAEQADACAQAEQAPAFAHAGQAHAHAAALQABAPgLAJQgKAJgRAAIgCAAQgLAAgIgFg");
	this.shape_12.setTransform(56.1,33.1,0.521,0.521);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("AgVAyQgLgGgGgLIAPgJQAHARASgBQAIAAAGgEQAFgFAAgGQAAgGgEgEQgEgCgIgDQgXgJgFgDQgLgHAAgNQAAgOAKgIQAKgJAPAAQALgCAKAGQAKAGAFAKIgOAJQgHgQgQABQgFgBgGAEQgEAEgBAHIAAABQgBAHAHAEQADACAQAEQAPAFAHAGQAHAHABALQAAAPgKAJQgLAJgQAAIgDAAQgKAAgKgFg");
	this.shape_13.setTransform(51.2,33.1,0.521,0.521);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#999999").s().p("AACA3QgWAAgOgPQgPgQAAgYQAAgYAOgPQAOgPAWAAQAWAAANAPQAOAOAAAZIAAACIhQAAIAAACQgBAOAJALQAIALAOABIADAAQAXgBAKgVIANAJQgHANgNAHQgLAHgOAAIgCAAgAgUgfQgJAIgBAMIA9AAQAAgLgIgJQgIgIgMAAIgDAAIgBAAQgLAAgIAIg");
	this.shape_14.setTransform(45.8,33.2,0.521,0.521);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#999999").s().p("AgMBXIAAhXIgTAAIAAgOIATAAIAAgdQABgYAFgJQAGgKARAAQAGAAAJACIAAASQgFgDgJAAQgJAAgDAHQgBAEAAARIAAAcIAbAAIAAANIgbAAIAABXg");
	this.shape_15.setTransform(41.1,31.2,0.521,0.521);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#999999").s().p("AgmAnQgQgQAAgXQAAgVAQgQIAAgBQAQgQAWAAQAXAAAQARQAQAQAAAVQAAAXgPAQIgBAAQgQAQgXAAQgWAAgQgQgAgXgbQgMALgBAQIAAAAQAAAQAKALQALALAPABIAAAAQAQABAMgLQAMgLAAgQQABgPgLgMQgLgLgQgBIgBAAQgOAAgLAKg");
	this.shape_16.setTransform(35.9,33.1,0.521,0.521);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#999999").s().p("AgeA1IAAhmIAQAAIAAAWQAHgNAHgGQAHgGAMAAQAGAAAGACIgGAQIgLgCQgbAAAAAnIAAAyg");
	this.shape_17.setTransform(30.9,33.1,0.521,0.521);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#999999").s().p("AgtBSIAAiiIAiAAQAdgBALAJQAPANACAUQABAVgNAOIgFAEQgHAFgLADIgWABIgPAAIAABJgAgagIIAKAAQAWAAAJgFQAKgGAAgPQAAgQgKgHQgKgGgVABIgKAAg");
	this.shape_18.setTransform(25.9,31.5,0.521,0.521);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#9D9D9C").s().p("AnWCpIAAioQAAglAagbQAbgbAlAAIAHAAQAlABAZAbQAZAbgBAkQgBAmgbAaQgcAbgmgBIgxAAIAABOgAmhgjQgOAQAAAUIAAAzIAzAAQAWAAAPgPQAQgQgBgVQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAgUgQgOQgPgOgVAAIgBAAQgVABgPAQgAD1BAQgbgaABgmQAAgkAagbQAbgbAlAAQAmAAAbAbQAbAaAAAlQAAAmgbAaQgaAbgmAAQgmAAgbgbgAESglQgPAPgBAVQAAAVAPARQAPAQAWABIABAAQAWgBAPgQQAPgPgBgWIAAAAQAAgVgPgQQgPgQgWAAQgVABgPAPgAjyBBQgbgagBgmQAAglAagbQAbgbAlAAQAmgBAbAbQAbAaABAmIgCANIiMAAQAEASAOANQAPAMASgBQAdAAAZgSIAWAcQghAagpAAIgBAAIgCAAQglAAgagagAjRgsQgNAKgGARIBiAAQgFgQgNgLQgNgKgRAAQgRAAgOAKgAMNBbQgmAAgagbQgbgaAAglIABgBQgBgkAagbQAagbAlAAIACAAQAhgBAZAXIgXAaQgQgMgUABQgWACgPAQQgOARABAVQABAUAOAOQAOAPAVACQAUACAPgNIAZAZQgYAXggAAIgDAAgAAxA/IAVgbQAaARAgADQAgAAAAgRQAAgIgRgHIglgLQg2gPAAgjQAAgWATgPQAUgPAfAAQAmAAAfATIgUAbQgWgLgagBQgdAAAAARQAAAIA1AQQA1APAAAiQAAAbgYAPQgUANgdABQgrgCgjgagApGBbQglAAgZgZQgbgaAAgsIAAhTIAoAAIAABTQAAAbAPAPQAOAOAVABQAVgBAOgOQAPgPAAgbIAAhTIAoAAIAABTQAAArgbAaQgZAZglABgAtHA/IAWgbQAZARAhADQAfAAAAgRQAAgIgRgHIglgLQg1gPAAgjQAAgWATgPQAUgPAfAAQAlAAAgATIgUAbQgXgLgagBQgdAAAAARQAAAHARAGIAlALQA1APAAAiQAAAbgYAPQgVANgdABQgqgCgkgagAGmgHQABgkAcgaQAbgZAlABQAkABAaAbQAZAbgBAlIAABYIgoAAIAAhWQABgFgBgGQgCgUgRgNQgQgNgVACQgUADgNAQQgNAQACAUIAABWIgnABgAhDBYIAAhZQABgmAbgZQAbgbAlABIAJAAIAAAlQgHgBgIACQguAIAAAwIAABUgAJ1BXIAAiuIAoAAIAACugAKKh6QgJAAgHgGQgHgIAAgJQAAgJAHgHQAHgHAJAAQAKAAAGAHQAHAHAAAJQAAAJgGAIQgHAGgJAAg");
	this.shape_19.setTransform(100.4,9.4,0.521,0.521);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1D1D1B").s().p("AgiCEQgbgHgVgRIAYggQAUAOAaADQAgABAOgcQAIgRAAgWQgTARgXAAQgkAAgbgaQgbgZAAglIAAhaIAwAAIAABZQAAASAMAMQANANARAAQARAAANgNQANgMAAgSIAAhZIAwAAIAABZQAABSgHAdQgPA2gzAMQgNADgNAAQgNAAgNgDg");
	this.shape_20.setTransform(15.5,11.8,0.521,0.521);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#1D1D1B").s().p("AgJBbQglgGgdgWIAXgfQALAIASAGQAXAHAQgFQALgCACgHQACgGgHgFIgggKQgbgHgNgIQgQgIgFgRQgFgRAIgRQANgYAfgIQAQgDAMACQAhABAdATIgXAfQgdgNgfAEQgIACgCAFQgCAGAGADIAAAAQAFAFAZAHQAcAHAMAGQAcAOgBAcQgBASgJALQgRAVgfAFg");
	this.shape_21.setTransform(25.3,9.4,0.521,0.521);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#1D1D1B").s().p("AArBZIAAhXQAAgRgNgMQgMgNgSAAQgRAAgNANQgMAMAAARIAABXIgvAAIAAhXQgBglAbgaQAbgbAkAAQAlAAAbAbQAaAaABAlIAABXg");
	this.shape_22.setTransform(45.2,9.3,0.521,0.521);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#1D1D1B").s().p("Ag/BAQgbgaAAgmQAAgkAbgbQAagaAlgBQAmAAAaAbQAbAaAAAlQAAAmgbAaQgaAbgmAAQgkAAgbgbgAgdgdQgNAMAAARQAAASAMANQANANARAAQASAAANgNQAMgNAAgSQAAgRgMgMQgNgNgSAAQgRAAgMANg");
	this.shape_23.setTransform(34.7,9.3,0.521,0.521);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#1D1D1B").s().p("Ag/BtQgbgbAAglQAAgmAagaQAbgaAlgBIArAAIAAhYIAwAAIAACyQgBAmgaAbQgbAaglAAQglAAgagagAgeAOQgMAMAAASQAAASAMANQANAMARAAQARAAANgMQANgNAAgSIgBgrIgqAAQgRAAgNANg");
	this.shape_24.setTransform(4.7,7.1,0.521,0.521);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Logo, new cjs.Rectangle(0,0,144.2,20.2), null);


(lib.LockUp_Black = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AgiAoIAAhMIANAAIAAAMQAKgQARABQALgBAIAHQAIAGACALIAAA4IgOAAIAAgtQABgWgVAAQgKAAgHAIQgGAJACAKIAAAog");
	this.shape.setTransform(138.3,48.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AgcAdQgMgMAAgRQAAgQALgMIAAAAQANgMAQAAQARAAAMAMQAMAMAAAQQAAASgMALQgLAMgSAAQgQAAgMgMgAgSgUQgJAIAAAMIAAAAQgBAMAIAIQAIAJAMAAIAAAAQALABAJgJQAJgIABgMQAAgLgIgJQgIgIgMgBIgCAAQgKAAgIAIg");
	this.shape_1.setTransform(128.6,48.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AgGA+IAAhMIAMAAIAABMgAgEgnQgEgCgBgEIAAgGQAAgIAJgCQADAAADAEQADACAAAEQABAFgCADQgBAEgEABIgDAAIgEgBg");
	this.shape_2.setTransform(121.6,46.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AgGA2IAAhBIgOAAIAAgLIAOAAIAAgfIAMAAIAAAfIAPAAIAAALIgPAAIAABBg");
	this.shape_3.setTransform(117.3,46.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AgGA+IAAhMIAMAAIAABMgAgCgsQgEAAgDgHQABgIAIgCQAEAAACAEQADACABAEQgCAFgDABIgFACIgCgBg");
	this.shape_4.setTransform(113,46.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AgcA3QgKgLAAgSQAAgTAKgLQALgLAPAAQATAAAIAQIAAhCIAOAAIAACBIgNAAIAAgPQgJASgSgBQgRAAgKgLgAgQADQgIAHAAAJIABAFQAAAOAGAIQAHAIAKAAQAMAAAGgIQAIgHAAgNQABgLgGgIQgGgHgLgCIgEAAIAAAAQgJAAgHAFg");
	this.shape_5.setTransform(105.7,45.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("AgfA9IAAh5IA/AAIAAANIgxAAIAAAjIAxAAIAAANIgxAAIAAAuIAxAAIAAAOg");
	this.shape_6.setTransform(96.8,46.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AgGBBIAAiBIANAAIAACBg");
	this.shape_7.setTransform(85.7,45.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("AgbAeQgLgLAAgTQAAgRAKgMQAKgLAQAAQATAAAIARIAAgOIAOAAIgBBLIgMAAIAAgOQgIARgTAAQgQAAgKgLgAgYAAQAAANAHAHQAHAIALAAQAZAAAAgbQABgKgHgJQgHgIgKgBIgDAAQgYAAAAAbg");
	this.shape_8.setTransform(78.5,48.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("AghAoIgBhMIANAAIAAAMQAKgQARABQALgBAIAHQAJAGABALIAAA4IgNAAIAAgtQAAgWgUAAQgLAAgHAIQgGAKACAJIAAAog");
	this.shape_9.setTransform(69.1,48.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("AgcAdQgMgMAAgRQAAgQALgMIAAAAQAMgMARAAQARAAAMAMQAMAMAAAQQAAARgLAMQgNAMgRAAQgQAAgMgMgAgSgUQgIAIgBAMIAAAAQgBAMAJAIQAIAJALAAIAAAAQAMABAJgJQAIgIABgMQABgLgJgJQgIgIgMgBIgBAAQgKAAgJAIg");
	this.shape_10.setTransform(59.5,48.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("AgGA+IAAhMIAMAAIAABMgAgCgsQgFAAgCgHQABgIAIgCQAEAAACAEQADACAAAEQAAAFgEABIgFACIgCgBg");
	this.shape_11.setTransform(52.5,46.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("AgPAlQgIgEgFgIIAKgHQAGANANgBQAPAAAAgLQAAgFgEgCQgBgCgIgDQgQgGgFgCQgIgFAAgKQABgKAHgHQAHgHALAAIAAAAQATgBAJAQIgLAHQgFgMgMABQgEAAgEADQgEADAAAFQAAAFAEADIAPAFQALAEAGADQAFAGAAAJQAAAKgIAHQgHAHgKAAIgDAAIgCAAQgHAAgHgEg");
	this.shape_12.setTransform(46.9,48.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("AABApQgTABgKgRIAKgHQAGANANgBQAOAAAAgLQAAgFgDgCQgCgCgHgDQgQgGgFgCQgIgFAAgKQAAgKAIgHQAHgHAKAAIABAAQAJAAAHAEQAIAEAEAHIgLAHQgFgLgMAAQgEgBgEADQgEADgBAFIAAABQAAAFAFADIAOAFQAMAEAFAEQAGAFAAAJQAAAKgIAHQgHAHgLAAg");
	this.shape_13.setTransform(40,48.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#999999").s().p("AgRAjQgTgMAAgXQgBgPAKgLQAKgMAPgCIADAAQARAAAKALQAKALAAASIAAACIg8AAIAAACQAAAKAGAIQAHAIAJABIADAAQARgBAHgPIAKAGQgIAOgQAEIgLACQgJAAgKgGgAgOgWQgHAGgBAJIAuAAQAAgJgGgGQgGgGgJAAIgCAAIgBAAQgIAAgGAGg");
	this.shape_14.setTransform(32,48.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#999999").s().p("AgIBBIAAhBIgQAAIAAgKIAQAAIAAgWQAAgSADgGQAFgJAMABIAMABIAAAOQgEgCgGgBQgIAAgBAGQgCADAAANIAAAUIAWAAIAAAKIgWAAIAABBg");
	this.shape_15.setTransform(25.3,45.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#999999").s().p("AgcAdQgMgMAAgRQAAgQALgMIAAAAQANgMAQAAQARAAAMAMQAMAMAAAQQAAARgLAMQgNAMgRAAQgQAAgMgMgAgSgUQgIAIgBAMIAAAAQAAAMAIAIQAIAJALAAIAAAAQAMABAJgJQAIgIABgMQABgLgJgJQgIgIgMgBIgBAAQgKAAgJAIg");
	this.shape_16.setTransform(17.8,48.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#999999").s().p("AgWAoIAAhMIAMAAIAAAQQAKgTAOAAIAJACIgFAMQgDgCgFAAQgTAAAAAdIAAAmg");
	this.shape_17.setTransform(10.6,48.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#999999").s().p("AgiA9IAAh5IAaAAQAPgCAPAIQALAKABAPQABAQgKALIgDACQgOAIgQgBIgMAAIAAA2gAgUgGIAIAAQAQAAAGgEQAIgEAAgMQAAgMgHgFQgHgEgQAAIgIAAg");
	this.shape_18.setTransform(3.4,46.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#9D9D9C").s().p("AlhB/IAAh/QAAgcAUgUQAUgUAcAAIAAAAIAFAAQAcABASAUQATAVgBAbQAAAcgVAUQgUATgdAAIglAAIAAA7gAk5gbQgLAMABAPIgBAnIAnAAQAQgBAMgMQALgLAAgQIAAgCQAAgQgMgLQgLgKgQAAIgBAAQgQABgLAMgADpBFQgcAAgUgUQgUgUAAgdQAAgbAUgUQAUgUAcAAQAcgBAVAVQAUAUAAAbQAAAdgUAUQgUAUgcAAgADqgnQgRAAgMAMQgMALAAARQAAAQAMAMQAMAMARAAIAAAAQAQAAAMgMQALgNAAgQIAAAAQAAgQgLgMQgMgMgRAAgAo8BEQgfgBgbgUIAQgUQATAOAYABQAYAAAAgMQAAgIgogMQgpgLAAgbQAAgQAPgMQAOgLAYAAQAdAAAXAPIgPAUQgSgIgTAAQgWgBAAAMQAAAHAoAMQAoAMAAAYQAAAUgSANQgPAKgWgBgAJLBEIAAAAQgcAAgUgUQgUgTAAgcIAAgBQAAgbAUgVQATgTAcAAIAAgBIABAAQAaAAASASIgSATQgLgKgPABQgRAAgMAMQgMAMAAAQQAAAQAMAMQAMAMAQAAQAPADAMgLIASATQgSARgYAAIgCAAgAi3AxQgUgVAAgbQgBgcAUgVQAUgTAdgBQAcAAAUAUQAUATABAcIgBALIhqAAQADANALAJQALAKAOgBQAXgBARgMIARAVQgZATgfAAIgBAAIgBAAQgcAAgUgTgAidghQgLAHgEANIBKAAQgEgMgJgIQgLgHgMgBQgNAAgKAIgAm2BEQgbAAgTgTQgVgTAAghIAAg+IAeAAIAAA+QAAAVAMALQAKAKAQAAQAQAAAKgKQAMgLAAgVIAAg+IAeAAIAAA+QAAAggUAUQgTATgcAAgABgBEIAAgBQgggBgbgTIAQgVQAUAOAYABQAXAAAAgMQAAgIgogLQgogMAAgbQAAgPAOgMQAPgLAXAAQAdgBAXAQIgPAUQgRgJgTAAQgWAAAAAMQAAAGAoAMQAoAMAAAYQAAAVgSAMQgPAKgUAAIgCAAgAGmBCIAAhCQABgDgBgEQgCgQgMgJQgMgKgQACQgPACgKALQgKAMACAPIAABBIgeABIAAhJQACgdAVgSQAUgSAcAAQAcACATAVQASAVgBAbIAABDgAgyBCIAAhDQABgcAUgTQAUgUAbAAIAIAAIAAAcIgMAAQgiAGAAAlIAAA/gAHZBBIAAiCIAeAAIAACCgAHphcQgHABgFgFQgFgGAAgHQAAgHAFgFQAFgFAHAAQAHAAAFAFQAFAFAAAHQAAAHgFAGQgFAEgHAAg");
	this.shape_19.setTransform(144.9,13.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1D1D1B").s().p("AgaBjQgTgFgRgNIATgYQAOAKAUADQAYABALgWQAGgNAAgQQgOAMgSABQgbAAgUgUQgUgSAAgcIAAhEIAkAAIAABDQgBANAJAKQAIALAOAAQANABAKgJQAKgJAAgNIAAgEIAAhDIAlAAIAABEQgBA9gFAWQgLAogmAJQgLACgJAAQgKAAgKgCg");
	this.shape_20.setTransform(22.4,17);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#1D1D1B").s().p("AgGBEQgcgEgWgQIARgYQAXAQAcgDQAJgDACgEQACgFgHgDIgXgIQgVgGgKgGQgMgFgEgOQgEgNAGgMQAKgSAYgFQAMgDAJABQAZABAVAPIgRAXQgVgLgYAEQgGACgBAEQgCAEAEACQAEADATAGQAVAGAJAEQAEACACACQAMAIACAPQACAOgJAMQgNAPgXAEg");
	this.shape_21.setTransform(36.5,13.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#1D1D1B").s().p("AhDBEIAAhBQgBgbATgVQATgVAcgBQAcgBAUATQAVATABAcIAABGIgkAAIAAhBQAAgNgJgJQgKgKgNAAQgNAAgJAKQgJAJAAANIAABBg");
	this.shape_22.setTransform(65.2,13.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#1D1D1B").s().p("AgvAwQgUgUAAgcIAAAAQAAgbAUgUQAUgUAbAAQAcAAAUAUQAUAUAAAbQAAAcgUAUQgUAUgcAAQgbAAgUgUgAgWgWQgKAJAAANQAAANAKAKQAJAKANAAQANAAAKgKQAKgJAAgOQAAgMgKgKQgJgKgOAAQgMAAgKAKg");
	this.shape_23.setTransform(50.1,13.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#1D1D1B").s().p("AgvBSQgUgUAAgdQAAgcAUgTQAUgUAbAAIAgAAIAAhDIAkAAIAACGQAAAcgUAUQgUAUgcAAIAAABQgcAAgTgUgAgWAKQgKAKAAANQAAANAKAKQAJAJANAAQANAAAKgJQAJgKAAgNIAAghIggAAQgNAAgJAKg");
	this.shape_24.setTransform(6.8,10.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.LockUp_Black, new cjs.Rectangle(0,0,208.1,52.5), null);


(lib.HeadTop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.HeadShot();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.493,0.493);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.HeadTop, new cjs.Rectangle(0,0,102,102), null);


(lib.EndText = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AHXBUIAVgtIgehEIAQAAIAWA2IAYg2IAOAAIg0BxgAlCBUIAAhxIAMAAIAAAOQACgEAEgDIAGgGIAIgDIAIgBQAJAAAGADQAHADAFAGQAFAFACAIQADAHAAAJQAAAJgDAIQgCAIgFAFQgFAFgGADQgHADgIAAQgFAAgEgBQgEgBgEgDIgGgFIgFgHIAAAzgAkmgRQgFACgEADQgDAEgCAGQgCAEAAAHQAAAGACAFIAGAJQADAEAFACQAFACAGAAQAFAAAFgCQAFgCADgDQADgDACgFQABgFAAgHQAAgHgBgFIgFgJQgEgEgEgCQgFgCgGAAQgGAAgEACgAA5gHIgZA7IghhRIANAAIAVAzIAXg2IACAAIAXA2IAUgzIAPAAIgiBRgAp+gdIAPAAIAXA1IAXg1IAPAAIgmBRgAL3AxQgEgBgEgCQgEgCgDgDIgGgHIAMgIQADAGAFADQAFAEAGAAQAHAAAEgEQAEgDAAgFQAAgFgDgCQgDgDgGgCIgNgEIgJgFIgHgGQgCgDAAgGQAAgFACgEIAGgHQAEgDAFgCQAFgCAFAAIAKABIAIADIAGAFIAEAGIgKAHQgDgFgFgDQgEgDgGAAQgGAAgEADQgDADAAAFQAAAGAFACIAPAFIAJAEIAHAEQADADACADQABAEAAAEQAAAGgCAEIgGAIQgDAEgFABQgGACgGAAQgGAAgEgBgAKFAxQgEgBgEgCIgHgFQgDgDgCgEIALgIQAEAGAEADQAFAEAGAAQAIAAADgEQAEgDAAgFQAAgFgDgCQgCgDgHgCIgNgEIgJgFQgEgDgCgDQgDgDAAgGQAAgFADgEQACgEADgDQAEgDAFgCQAFgCAGAAIAJABIAIADIAGAFIAFAGIgLAHQgDgFgEgDQgFgDgGAAQgGAAgDADQgEADAAAFQAAAGAFACIAPAFIAJAEIAIAEIAEAGQABAEAAAEQAAAGgCAEIgGAIQgDAEgFABQgGACgGAAQgFAAgFgBgAF1AxQgEgBgEgCIgHgFQgDgDgCgEIALgIQAEAGAEADQAFAEAGAAQAIAAADgEQAEgDAAgFQAAgFgDgCQgCgDgHgCIgNgEIgJgFQgEgDgCgDQgDgDAAgGQAAgFADgEQACgEADgDQAEgDAFgCQAFgCAGAAIAJABIAIADIAGAFIAFAGIgLAHQgDgFgEgDQgFgDgGAAQgGAAgDADQgEADAAAFQAAAGAFACIAPAFIAJAEIAIAEIAEAGQABAEAAAEQAAAGgCAEQgCAEgEAEQgDAEgFABQgGACgGAAQgFAAgFgBgAh4AvQgHgDgFgFQgFgGgCgHQgDgIAAgJQAAgJADgHQACgIAFgGQAFgFAHgDQAGgDAIAAIAJABIAIADIAGAGIAFAHIAAhEIAOAAIAACCIgNAAIAAgOIgFAHIgHAFIgIAEQgEABgEAAQgIAAgHgDgAhygRQgEACgEADIgFAJQgBAEAAAGQAAAHABAGIAFAJQAEAEAEACQAFACAGAAQAGAAAFgCQAEgCAEgEQADgDACgFQACgGAAgGQAAgHgCgEQgCgFgDgEQgEgEgFgCQgEgCgGAAQgGAAgFACgAjPAvQgIgDgFgGQgFgFgDgIQgDgIAAgJQAAgIADgHQADgIAFgFQAFgGAHgDQAHgDAJAAQAIAAAHADQAHACAEAGQAFAFADAIQACAHAAAJIAAACIg8AAIAAACIABALIAFAJQAEADAFACQAEACAGAAQAIAAAGgFQAGgDAFgJIAKAHIgGAJIgJAGQgEADgFACQgGABgGAAQgIAAgHgDgAiqAAIgCgIQgBgEgEgDIgHgEQgEgBgFAAIgJABQgEACgDACIgFAHQgCADAAAFIAuAAIAAAAgAmQAvQgIgDgGgGQgFgGgEgIQgDgHAAgIQAAgJADgGQAEgIAFgGQAGgGAIgDQAHgDAJAAQAIAAAIADQAHAEAHAFQAGAGACAIQAEAGAAAJQAAAIgEAHQgCAIgGAFQgHAHgHADQgIADgIAAQgIAAgIgDgAmLgRQgFACgEAEQgDAEgCAFQgCAEAAAHQAAAFACAGQACAFADAEQAEAEAFACQAFACAGAAQAGAAAFgCQAFgCAEgEIAGgJQACgGAAgFQAAgHgCgEQgDgFgDgEQgEgEgFgCQgFgDgGAAQgGAAgFADgAoUAvQgIgDgFgGQgFgFgDgIQgDgIAAgJQAAgIADgHQADgIAFgFQAFgGAHgDQAHgDAJAAQAIAAAHADQAHACAEAGQAFAFADAIQACAHAAAJIAAACIg8AAIAAACIABALIAFAJQAEADAFACQAEACAGAAQAIAAAGgFQAGgDAFgJIAKAHIgGAJIgJAGQgEADgFACQgGABgGAAQgIAAgHgDgAnuAAIgDgIQgBgEgEgDIgHgEQgEgBgFAAIgJABIgHAEIgFAHQgCADAAAFIAvAAIAAAAgAq5AvQgHgDgGgGQgFgFgDgIQgDgIAAgJQAAgIADgHQADgIAFgFQAGgGAGgDQAHgDAJAAQAJAAAGADQAHACAFAGQAFAFACAIQADAHAAAJIAAACIg9AAIAAACIACALIAFAJQADADAFACQAFACAFAAQAIAAAGgFQAHgDAFgJIAKAHIgHAJIgIAGQgFADgFACQgFABgGAAQgJAAgHgDgAqTAAIgCgIQgCgEgDgDIgHgEQgFgBgFAAIgIABQgFACgCACIgFAHQgDADAAAFIAvAAIAAAAgAM1AtQgDgDAAgDQAAgFADgCQADgDAEAAQAEAAADADQADACAAAFQAAADgDADQgDADgEAAQgEAAgDgDgALBAvIAAhBIgPAAIAAgLIAPAAIAAgfIANAAIAAAfIAOAAIAAALIgOAAIAABBgAJQAvIAAhMIANAAIAABMgAInAvIAAiCIANAAIAACCgAGxAvIAAhBIgPAAIAAgLIAPAAIAAgfIANAAIAAAfIAOAAIAAALIgOAAIAABBgAEQAvIAAgtIgBgJQgBgFgDgDIgGgEQgEgBgFAAQgGAAgFACQgEACgEAEQgDADAAAGIgBAKIAAAoIgNAAIAAiCIANAAIAABCQAFgIAGgDQAHgEAKAAQAGAAAGACQAFACADADQAFAEABAFQACAFAAAGIAAA0gACuAvIAAhBIgPAAIAAgLIAPAAIAAgfIANAAIAAAfIAOAAIAAALIgOAAIAABBgACDAvIAAhMIANAAIAABMgAnMAvIAAiCIANAAIAACCgAtFAvIAAh6IAYAAIAfABQAHABAGADQAGACAFAEQAGAEAEAGIAHALQADAGAAAIQACAHAAAIQAAAJgCAGQAAAHgDAGQgDAHgEAFIgKAJIgLAHIgMADIgbACgAs2AhIAJAAQATAAAIgBIAKgDQAFgCAEgDIAHgHQADgEABgFIAEgKIABgMIgBgMIgEgLIgEgIQgDgFgEgDIgIgFQgFgCgGAAQgIgCgTAAIgJAAgAJQg7QgDgDAAgEQAAgEADgDQADgCAEAAQADAAADACQADADAAAEQAAAEgDADQgDADgDAAQgEAAgDgDgACCg7QgDgDAAgEQAAgEADgDQADgCAEAAQAEAAADACQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDg");
	this.shape.setTransform(83.8,30.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("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");
	this.shape_1.setTransform(109.4,30.9,1,1,0,0,0,29.6,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.EndText, new cjs.Rectangle(0,0,167.6,61.7), null);


(lib.CTA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiiCHIAAi3IAUAAIAAAXQAGgMANgIQAMgHAOAAQAbAAARASQAQASAAAdQAAAfgQATQgQARgbAAQgOABgNgIQgMgHgGgNIAABSgAiCgUQgMANAAAUQAAAWAMAMQAMAMASAAQATABALgMQALgLAAgVQAAgWgLgNQgLgNgTAAQgTAAgLAMgAFsBQQgdAAgSgSQgRgTAAgfQAAgbARgTQASgSAbAAQAcAAAQARQAQARAAAeIAAAEIhjAAIAAAGQAAASANALQAMAMARAAQANgBALgHQALgHAFgMIARAKQgIAQgRAKQgOAIgQAAIgDAAgAGQAAQgDgigkAAQgPAAgLAJQgKAKgCAPIBNAAIAAAAgABFA9QgVgVABgbQgBgaAVgUQAUgUAcABQAcAAAUATIABABQATAUAAAaQgBAcgTASQgUAUgcAAIgDAAQgZAAgUgTgABWgRQgOANgBARIAAABQABATANANQANAOATAAQASAAANgNQAOgMAAgSQABgSgNgOQgNgNgTgCIgBAAQgSAAgNANgADXBLIAAh7IATAAIAAAaQAJgQAJgHQALgHAOAAQAJAAAGACIgIATQgGgCgHAAQgiAAAAAvIAAA9gAgEBLIAAjRIAVAAIAADRgAjQBLIgigwIgiAwIgbAAIAxhAIgvg7IAbAAIAgAsIAhgsIAaAAIgvA7IAxBAgAmmBLIAAjFIBqAAIAAAWIhSAAIAAA4IBSAAIAAAWIhSAAIAABLIBSAAIAAAWg");
	this.shape.setTransform(47.6,15.3,0.5,0.501);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C4398D").s().p("AvYEdIAAo5IexAAIAAI5g");
	this.shape_1.setTransform(49.3,14.3,0.5,0.501);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.CTA, new cjs.Rectangle(0,0,98.5,28.6), null);


(lib.Circle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AtONPQlelfAAnwQAAnvFelfQFfleHvAAQHwAAFfFeQFeFfAAHvQAAHwleFfQlfFenwAAQnvAAlfleg");
	this.shape.setTransform(119.7,119.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Circle, new cjs.Rectangle(0,0,239.4,239.4), null);


(lib.BLK = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Blk();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.BLK, new cjs.Rectangle(0,0,32,32), null);


(lib.New = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AKkBKIASgnIgag8IANAAIATAvIAVgvIANAAIgtBjgANDAqQgGgDgEgFQgEgFgCgGQgDgHAAgIQAAgIADgGQACgHAEgFQAEgEAGgDQAGgCAHAAIAIABIAGADQAEABACADIAEAHIAAgNIAMAAIAABCIgLAAIAAgMIgFAHIgGAEIgGADIgIABQgHAAgGgCgANJgOQgEABgDAEQgDADgBAEIgBAJIABALQABAFADADQADADAEACQAFACAFAAQAFAAAEgCQAEgCADgDQADgDABgEQACgFAAgGQAAgFgCgEIgFgIIgHgFQgEgCgFAAQgFAAgEACgAL3ApQgGgCgFgFQgEgFgDgHQgCgGAAgJQAAgHACgGQADgHAEgEQAFgFAGgDQAGgCAHAAQAHAAAGACQAGADAFAEQAEAFACAGQACAHAAAHIAAACIg1AAIAAABQAAAGACAEQABAFADADQADADAEACQAFACAEAAQAHAAAGgEQAFgEAEgHIAJAGIgGAIQgDADgEACQgEADgEABIgKABQgIAAgGgDgAMYAAIgCgHIgEgGIgGgDIgIgBIgIABIgGAEIgFAFIgCAHIApAAIAAAAgAI8ApQgGgCgFgFQgEgFgDgHQgCgGAAgJQAAgHACgGQADgHAEgEQAFgFAGgDQAGgCAHAAQAHAAAGACQAGADAFAEQAEAFACAGQACAHAAAHIAAACIg1AAIAAABQAAAGACAEQABAFADADQADADAEACQAFACAEAAQAHAAAGgEQAFgEAEgHIAJAGIgGAIQgDADgEACQgEADgEABIgKABQgIAAgGgDgAJdAAIgCgHIgEgGIgGgDIgIgBIgIABIgGAEIgFAFIgCAHIApAAIAAAAgAEYApQgGgCgFgGQgGgFgCgGQgDgHAAgHQAAgHADgGQACgHAGgFQAFgFAGgDQAHgCAIAAQAHAAAGADQAHACAFAFQAGAFACAHQADAGAAAHQAAAHgDAHQgCAGgGAFQgFAGgHACQgGADgHAAQgIAAgHgDgAEdgOQgEABgEAEQgDADgCAFQgCAEAAAFQAAAFACAFQACAFADADQAEADAEACQAFACAFAAQAEAAAFgCQAEgCAEgDQADgDACgFQACgFAAgFQAAgFgCgEIgFgIQgEgEgEgBQgFgCgEAAQgFAAgFACgABoApQgGgCgEgFQgFgFgCgHQgDgGAAgJQAAgHADgGQACgHAEgEQAFgFAGgDQAGgCAIAAQAHAAAGACQAGADAEAEQAEAFADAGQACAHAAAHIAAACIg1AAIAAABQAAAGABAEQACAFADADQADADAEACQAEACAFAAQAHAAAFgEQAFgEAFgHIAIAGIgFAIQgEADgEACQgDADgFABIgKABQgHAAgHgDgACKAAIgCgHIgEgGIgHgDIgIgBIgIABIgGAEIgEAFIgCAHIApAAIAAAAgAAoArIgIgCIgGgFIgEgGIAKgHQACAGAFACQAEADAGAAQAFAAAEgDQADgDAAgEQAAgEgCgCIgIgEIgLgEIgJgEQgDgDgCgDQgCgCAAgFQAAgEACgEQACgEADgCQADgDAEgCQAFgBAFAAIAIABIAHACIAFAEIAEAGIgJAGQgCgFgEgCQgEgDgGAAQgFAAgDADQgDADAAAEQAAAFAEACIANAEIAJADIAGAEIAEAGIABAHQAAAEgCAEIgFAHIgIAEQgEACgGAAIgIgBgAgUArIgIgCIgGgFIgEgGIAKgHQACAGAFACQAEADAGAAQAFAAAEgDQACgDAAgEQAAgEgBgCIgIgEIgLgEIgJgEQgDgDgCgDQgCgCAAgFQAAgEACgEQACgEADgCQADgDAEgCQAFgBAFAAIAIABIAGACIAFAEIAEAGIgJAGQgCgFgDgCQgEgDgGAAQgFAAgDADQgDADAAAEQAAAFAEACIANAEIAIADIAGAEIAEAGIABAHQAAAEgCAEIgFAHIgHAEQgEACgGAAIgIgBgAheApQgGgCgEgFQgFgFgCgHQgDgGAAgJQAAgHADgGQACgHAEgEQAFgFAGgDQAGgCAIAAQAHAAAGACQAGADAEAEQAEAFADAGQACAHAAAHIAAACIg1AAIAAABQAAAGABAEQACAFADADQADADAEACQAEACAFAAQAHAAAFgEQAFgEAFgHIAIAGIgFAIQgEADgEACQgDADgFABIgKABQgHAAgHgDgAg8AAIgCgHIgEgGIgHgDIgIgBIgIABIgGAEIgEAFIgCAHIApAAIAAAAgAjoAqQgGgDgEgFQgFgFgCgGQgCgHAAgIQAAgIACgGQACgHAFgFQAEgEAGgDQAGgCAGAAIAIABIAHADQADABADADIAEAHIAAg7IALAAIAABwIgLAAIAAgMIgEAGIgGAFIgHADIgHABQgHAAgGgCgAjigOQgEABgDADQgDADgCAFIgBAJQAAAGACAFQABAFADADIAHAFQAEACAFAAQAFAAAEgCQAEgBADgDQADgEACgEQABgFAAgGQAAgFgBgEQgCgFgDgDQgDgDgEgCQgEgCgFAAQgFAAgEACgAnCAqQgGgDgEgFQgEgFgCgGQgDgHAAgIQAAgIADgGQACgHAEgFQAEgEAGgDQAGgCAHAAIAIABIAGADQAEABACADIAEAHIAAgNIAMAAIAABCIgLAAIAAgMIgFAHIgGAEIgGADIgIABQgHAAgGgCgAm8gOQgEABgDAEQgDADgBAEIgBAJIABALQABAFADADQADADAEACQAFACAFAAQAFAAAEgCQAEgCADgDQADgDABgEQACgFAAgGQAAgFgCgEIgFgIIgHgFQgEgCgFAAQgFAAgEACgAqWArIgIgDIgIgFIgGgHIAJgKQACAEACACIAGAFIAGADIAIABQAFAAAFgCQAFgCADgDQAEgEABgFQACgFAAgGQAAgGgBgEQgCgEgEgEQgDgDgFgCQgFgCgGAAQgHAAgFACQgGACgFAEIgDgBIANg0IAvAAIAAALIgmAAIgHAcIAIgDIAJgBQAIAAAGACQAGADAFAEQAEAFACAGQADAHAAAHQAAAJgDAHQgDAHgFAFQgFAGgHACQgHADgKAAIgKgBgAs+ArIgIgDQgDgBgDgDIgGgGIgHgSQgCgHgBgQQAAgIADgPQACgHAFgLIAGgGQADgDADgBIAHgDIAIgBIAJABIAHADQADABADADIAGAGIAEAIIADAKQADAPAAAIQgBAQgCAHIgHASIgGAGQgDADgDABIgHADIgIABIgIgBgAtBg1QgEADgDAGQgDAGgCAIQgCAJAAAKQAAALACAIQACAIADAGQADAGAEADQAFADAFAAQAGAAAFgDQAEgDADgGQADgFACgJQACgIAAgKQAAgMgCgIQgCgJgDgFQgDgGgEgDQgFgDgGAAQgFAAgFADgAOLApIAAhCIAKAAIAAAOIAEgHIAFgFIAGgDIAHgBIAIABIgEALIgHgCQgEAAgEACQgDACgCADQgDADgBAFQgBAEAAAHIAAAggAILApIAAgnIgBgIIgDgGIgGgEIgHgBQgFAAgFACQgEABgDAEQgCADgBAFIgBAJIAAAiIgLAAIAAhwIALAAIAAA5QAFgHAGgDQAGgDAIAAQAFAAAFABQAFACADADQADADACAFQACAEAAAGIAAAsgAG1ApIAAg4IgMAAIAAgKIAMAAIAAgbIAMAAIAAAbIAMAAIAAAKIgMAAIAAA4gAFfApIAAg4IgMAAIAAgKIAMAAIAAgTIABgNQABgGACgDQACgDAEgCQAEgCAGAAQAFAAAFACIAAAMQgFgDgEAAIgFABQgBABAAAAQgBABAAAAQAAAAAAABQgBABAAAAQgBADAAALIAAASIASAAIAAAKIgSAAIAAA4gACnApIAAhCIAKAAIAAAOIAFgHIAFgFIAGgDIAHgBIAIABIgEALIgHgCQgFAAgDACQgEACgCADQgCADgBAFQgCAEAAAHIAAAggAigApIAAhCIAKAAIAAAOIAEgHIAFgFIAGgDIAHgBIAIABIgEALIgHgCQgEAAgEACQgDACgCADQgDADgBAFQgBAEAAAHIAAAggAlWApIAAhCIAKAAIAAAOIAEgHIAFgFIAGgDIAHgBIAIABIgEALIgHgCQgEAAgEACQgDACgCADQgDADgBAFQgBAEAAAHIAAAggAl6ApIAAhCIALAAIAABCgAnyApIAAgnIgBgIIgDgGIgGgEIgHgBQgFAAgFACQgEABgDAEQgCADgBAFIgBAJIAAAiIgLAAIAAhwIALAAIAAA5QAFgHAGgDQAGgDAIAAQAFAAAFABQAFACADADQADADACAFQACAEAAAGIAAAsgAriApIAAheIgWAAIAHgLIAcAAIAABpgAuyApIAWgbIAYgbIAHgMQACgGAAgFIgBgHQgCgEgDgCQgDgDgDgBQgEgBgFAAQgFAAgEABQgEACgDACIgEAHQgBAEAAAGIAAABIgMAAIAAgDQAAgHACgGQACgGAFgFQAEgEAGgCQAGgCAIAAQAIAAAGACQAHACAEAEQAEAEACAFQADAGAAAHQAAAFgCAGQgCAGgEAGIgIAMIgcAeIAoAAIAAAMgAl6gzQgDgCAAgEQAAgEADgCQACgCAEAAQADAAADACQACADAAADQAAAEgCACQgDACgDAAQgEAAgCgCg");
	this.shape.setTransform(97.6,37.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(97.2,23.4,1,1,0,0,0,97.2,23.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.New, new cjs.Rectangle(2.9,6.1,189.5,38.8), null);


(lib.HairDresserOfTheYear = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.HeadTop();
	this.instance.parent = this;
	this.instance.setTransform(45.5,45.5,0.891,0.891,0,0,0,51.1,51.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.HairDresserOfTheYear, new cjs.Rectangle(0,0,90.9,90.9), null);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.New();
	this.instance.parent = this;
	this.instance.setTransform(-179.3,46.5,1,1,0,0,0,97.2,23.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-273.6,29.2,189.5,38.8);


// stage content:
(lib.C_MPU_Stage4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_286 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(286).call(this.frame_286).wait(1));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(287));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_232 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_233 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_234 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_235 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_236 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_237 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_238 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:150,y:125}).wait(232).to({graphics:mask_graphics_232,x:150,y:125}).wait(1).to({graphics:mask_graphics_233,x:100,y:125}).wait(1).to({graphics:mask_graphics_234,x:50,y:125}).wait(1).to({graphics:mask_graphics_235,x:0,y:125}).wait(1).to({graphics:mask_graphics_236,x:-50,y:125}).wait(1).to({graphics:mask_graphics_237,x:-100,y:125}).wait(1).to({graphics:mask_graphics_238,x:-150,y:125}).wait(1).to({graphics:null,x:0,y:0}).wait(48));

	// Blk copy (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_53 = new cjs.Graphics().p("EAAAgvpMAu4AAAMAAABfTMgu4AAAg");
	var mask_1_graphics_54 = new cjs.Graphics().p("EgDEgvpMAvEAAAMAAABfTMgvEAAAg");
	var mask_1_graphics_55 = new cjs.Graphics().p("EgGJgvpMAvQAAAMAAABfTMgvQAAAg");
	var mask_1_graphics_56 = new cjs.Graphics().p("EgJOgvpMAvdAAAMAAABfTMgvdAAAg");
	var mask_1_graphics_57 = new cjs.Graphics().p("EgMTgvpMAvqAAAMAAABfTMgvqAAAg");
	var mask_1_graphics_58 = new cjs.Graphics().p("EgPXgvpMAv1AAAMAAABfTMgv1AAAg");
	var mask_1_graphics_59 = new cjs.Graphics().p("EgScgvpMAwCAAAMAAABfTMgwCAAAg");
	var mask_1_graphics_60 = new cjs.Graphics().p("EgVhgvpMAwOAAAMAAABfTMgwOAAAg");
	var mask_1_graphics_61 = new cjs.Graphics().p("EgYNgvpMAwbAAAMAAABfTMgwbAAAg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(53).to({graphics:mask_1_graphics_53,x:300,y:300}).wait(1).to({graphics:mask_1_graphics_54,x:281.6,y:300}).wait(1).to({graphics:mask_1_graphics_55,x:263.1,y:300}).wait(1).to({graphics:mask_1_graphics_56,x:244.7,y:300}).wait(1).to({graphics:mask_1_graphics_57,x:226.3,y:300}).wait(1).to({graphics:mask_1_graphics_58,x:207.8,y:300}).wait(1).to({graphics:mask_1_graphics_59,x:189.4,y:300}).wait(1).to({graphics:mask_1_graphics_60,x:170.9,y:300}).wait(1).to({graphics:mask_1_graphics_61,x:150,y:300}).wait(226));

	// HeadTop
	this.instance = new lib.HairDresserOfTheYear();
	this.instance.parent = this;
	this.instance.setTransform(251.3,76.9,1.116,1.116,0,0,0,136.2,45.5);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(53).to({_off:false},0).to({_off:true},101).wait(133));

	// Blk MaskOut (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_232 = new cjs.Graphics().p("EgXbgvpMAu3AAAMAAABfTMgu3AAAg");
	var mask_2_graphics_233 = new cjs.Graphics().p("EgXbgvpMAu3AAAMAAABfTMgu3AAAg");
	var mask_2_graphics_234 = new cjs.Graphics().p("EgXbgvpMAu3AAAMAAABfTMgu3AAAg");
	var mask_2_graphics_235 = new cjs.Graphics().p("EgXbgvpMAu3AAAMAAABfTMgu3AAAg");
	var mask_2_graphics_236 = new cjs.Graphics().p("EgXbgvpMAu3AAAMAAABfTMgu3AAAg");
	var mask_2_graphics_237 = new cjs.Graphics().p("EgXbgvpMAu3AAAMAAABfTMgu3AAAg");
	var mask_2_graphics_238 = new cjs.Graphics().p("EgX+gvpMAu3AAAMAAABfTMgu3AAAg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(232).to({graphics:mask_2_graphics_232,x:150,y:305}).wait(1).to({graphics:mask_2_graphics_233,x:98.8,y:305}).wait(1).to({graphics:mask_2_graphics_234,x:47.7,y:305}).wait(1).to({graphics:mask_2_graphics_235,x:-3.5,y:305}).wait(1).to({graphics:mask_2_graphics_236,x:-54.7,y:305}).wait(1).to({graphics:mask_2_graphics_237,x:-105.8,y:305}).wait(1).to({graphics:mask_2_graphics_238,x:-153.5,y:305}).wait(49));

	// HeadTop copy
	this.instance_1 = new lib.HairDresserOfTheYear();
	this.instance_1.parent = this;
	this.instance_1.setTransform(251.3,76.9,1.116,1.116,0,0,0,136.2,45.5);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(154).to({_off:false},0).to({_off:true},85).wait(48));

	// Text2
	this.instance_2 = new lib.Tween5("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(329.3,124.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(158).to({_off:false},0).to({alpha:1},8).to({_off:true},73).wait(48));

	// NewQuote
	this.instance_3 = new lib.Text_Lock();
	this.instance_3.parent = this;
	this.instance_3.setTransform(158.6,178.8,1,1,0,0,0,95.6,30.7);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(70).to({_off:false},0).to({alpha:1},10).wait(70).to({alpha:0},8).to({_off:true},2).wait(127));

	// Blk
	this.instance_4 = new lib.BLK();
	this.instance_4.parent = this;
	this.instance_4.setTransform(450,125,9.375,7.812,0,0,0,16,16);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(53).to({_off:false},0).to({scaleX:9.69,x:150},8).to({_off:true},178).wait(48));

	// ProductShot_LockUp
	this.instance_5 = new lib.Logo();
	this.instance_5.parent = this;
	this.instance_5.setTransform(150.5,27.5,1.44,1.44,0,0,0,72.4,18.2);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(11).to({_off:false},0).to({y:37.5,alpha:1},3).to({_off:true},215).wait(58));

	// LockUp_Black.svg
	this.instance_6 = new lib.LockUp_Black();
	this.instance_6.parent = this;
	this.instance_6.setTransform(104.8,34.3,0.792,0.792,0,0,0,104.2,26.4);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(258).to({_off:false},0).to({y:39.3,alpha:1},8).wait(21));

	// EndframeText
	this.instance_7 = new lib.EndText();
	this.instance_7.parent = this;
	this.instance_7.setTransform(109.4,99.8,0.796,0.796,0,0,0,109.7,31);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(266).to({_off:false},0).to({y:104.8,alpha:1},8).wait(13));

	// CTA.svg
	this.instance_8 = new lib.CTA();
	this.instance_8.parent = this;
	this.instance_8.setTransform(69.7,159.2,0.983,0.983,0,0,0,48.5,15);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(274).to({_off:false},0).to({y:164.2,alpha:1},8).wait(5));

	// Strap
	this.instance_9 = new lib.Strap();
	this.instance_9.parent = this;
	this.instance_9.setTransform(149.8,27.7,1.45,1.45,0,0,0,72.4,18.3);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(19).to({_off:false},0).to({y:37.7,alpha:1},8).to({_off:true},189).wait(71));

	// Layer 3
	this.instance_10 = new lib.Circle();
	this.instance_10.parent = this;
	this.instance_10.setTransform(147.8,124.8,0.768,0.768,0,0,0,120,119.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(3).to({regX:119.9,regY:119.9,scaleX:0.18,scaleY:0.18,x:150.5,y:137,alpha:0},11).wait(273));

	// Quiet
	this.instance_11 = new lib.QuietMarkLogo();
	this.instance_11.parent = this;
	this.instance_11.setTransform(22.7,195,0.33,0.331);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(215).to({_off:false},0).wait(72));

	// EndFrame_BG
	this.instance_12 = new lib.ProductShot_1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(151.2,436.7,3.498,3.498,0,0,0,150.5,299.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(3).to({regY:299.8,scaleX:0.84,scaleY:0.84,y:211.8},11).wait(163).to({regX:150.7,regY:299.9,scaleX:0.48,scaleY:0.48,x:245.2,y:89.3},0).wait(110));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-225.2,-486.3,1049.4,2284.2);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Blk.png", id:"Blk"},
		{src:"images/HeadShot.png", id:"HeadShot"},
		{src:"images/ProductShot.jpg", id:"ProductShot"},
		{src:"images/QuietMarkLogo.png", id:"QuietMarkLogo"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;