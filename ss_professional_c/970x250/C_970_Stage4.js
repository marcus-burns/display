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



(lib.BKG = function() {
	this.initialize(img.BKG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,970,250);


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
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


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


(lib.zoomOutCover = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A9hdhQsOsOAAxTQAAxRMOsPQMPsPRSAAQRTAAMOMPQMPMPAARRQAARTsPMOQsOMPxTAAQxSAAsPsPg");
	this.shape.setTransform(267.2,267.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.zoomOutCover, new cjs.Rectangle(0,0,534.4,534.4), null);


(lib.White = function(mode,startPosition,loop) {
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
	this.shape_20.graphics.f("#FFFFFF").s().p("AgSBFQgNgDgLgKIAMgQQALAHANACQAQAAAIgOQAEgJAAgMQgKAJgMAAQgSAAgOgNQgOgNAAgTIAAgvIAZAAIAAAuQAAAJAGAHQAGAHAJAAQAJAAAHgHQAGgHABgJIAAguIAZAAIAAAuQgBArgEAPQgHAcgbAGQgHABgGAAQgHAAgHgBg");
	this.shape_20.setTransform(15.6,11.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgJBbQglgGgdgWIAXgfQALAIASAGQAXAHAQgFQALgCACgHQACgGgHgFIgggKQgbgHgNgIQgQgIgFgRQgFgRAIgRQANgYAfgIQAQgDAMACQAhABAdATIgXAfQgdgNgfAEQgIACgCAFQgCAGAGADIAAAAQAFAFAZAHQAcAHAMAGQAcAOgBAcQgBASgJALQgRAVgfAFg");
	this.shape_21.setTransform(25.3,9.4,0.521,0.521);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AArBZIAAhXQAAgRgNgMQgMgNgSAAQgRAAgNANQgMAMAAARIAABXIgvAAIAAhXQgBglAbgaQAbgbAkAAQAlAAAbAbQAaAaABAlIAABXg");
	this.shape_22.setTransform(45.2,9.3,0.521,0.521);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("Ag/BAQgbgaAAgmQAAgkAbgbQAagaAlgBQAmAAAaAbQAbAaAAAlQAAAmgbAaQgaAbgmAAQgkAAgbgbgAgdgdQgNAMAAARQAAASAMANQANANARAAQASAAANgNQAMgNAAgSQAAgRgMgMQgNgNgSAAQgRAAgMANg");
	this.shape_23.setTransform(34.7,9.3,0.521,0.521);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("Ag/BtQgbgbAAglQAAgmAagaQAbgaAlgBIArAAIAAhYIAwAAIAACyQgBAmgaAbQgbAaglAAQglAAgagagAgeAOQgMAMAAASQAAASAMANQANAMARAAQARAAANgMQANgNAAgSIgBgrIgqAAQgRAAgNANg");
	this.shape_24.setTransform(4.7,7.1,0.521,0.521);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.White, new cjs.Rectangle(0,0,144.2,20.2), null);


(lib.Text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Text, null, null);


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


(lib.Quotesvg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(229,67.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,457.9,135.3);


(lib.ProductShot_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ProductShot();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ProductShot_1, new cjs.Rectangle(0,0,300,600), null);


(lib.NEW_CTA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjGCmIAAjiIAZAAIAAAdQAIgQAPgJQAPgJASAAQAhAAATAWQAVAWAAAlQAAAmgVAWQgTAWggAAQgTABgPgKQgOgJgIgQIAABmgAifgZQgOAPAAAaQAAAaAPAPQAOAQAXAAQAWAAAOgOQANgPAAgZQAAgbgOgQQgMgQgYAAQgXAAgOAPgAG7BiQgjAAgVgXQgVgXgBglQABgjAVgWQAVgXAiAAQAhAAAUAVQAUAWAAAkIAAAFIh5AAIAAADQAAAYAOAPQAOAPAWAAQAfAAATghIAUAOQgKATgTAMQgSAKgUAAIgEAAgAHngBQgDgpgrAAQgTgBgNAMQgOAMgBASIBdAAIAAAAgABUBKQgZgXAAgjQAAgiAZgXQAYgZAjABQAhgBAZAZIABABQAXAYABAhQgBAhgYAYQgYAXgiABQgjAAgYgYgABpgVQgRAPgBAWIAAABQAAAXAQARQARAQAXABQAVgBARgPQAQgPABgWQABgWgQgRQgQgRgWgBIgDAAQgWAAgPAPgAEHBcIAAiXIAXAAIAAAfQAKgTAMgJQAMgJARAAQAKAAAIADIgJAYIgQgDQgpAAAAA6IAABLgAgFBcIAAkBIAZAAIAAEBgAj+BcIgpg7IgqA7IggAAIA7hPIg5hIIAgAAIAoA2IAog2IAhAAIg6BIIA7BPgAoCBcIAAjzICBAAIAAAbIhjAAIAABGIBjAAIAAAaIhjAAIAABdIBjAAIAAAbg");
	this.shape.setTransform(57.9,18.7,0.5,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C4398D").s().p("AyvFeIAAq7MAlfAAAIAAK7g");
	this.shape_1.setTransform(60,17.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.NEW_CTA, new cjs.Rectangle(0,0,120,35), null);


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


(lib.HeadTop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.HeadShot();
	this.instance.parent = this;
	this.instance.setTransform(4,0,0.493,0.493);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.HeadTop, new cjs.Rectangle(4,0,102,102), null);


(lib.FinalMessaging = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AG5EvIAWgvIgghIIAQAAIAYA6IAYg6IAPAAIg1B3gAC8EvIAWgvIgghIIAQAAIAYA6IAYg6IAPAAIg2B3gApcEtQgHgBgFgEQgFgFgDgGQgCgGAAgHIAOAAIAAABQAAAEADAEQABADADADQADACAFABIAJABQAJABAGgDQAFgCAEgGQACgFABgNIAAgOIgGAIIgGAGIgIADIgJABQgIAAgIgDQgHgDgFgGQgFgFgDgIQgDgIAAgKQAAgKADgIQADgIAFgGQAFgFAHgDQAHgDAIAAQAFAAAFABIAIADIAGAHQAEACACAFIAAgPIANAAIAABPIgBAQQgBAHgFAFQgFAHgJACQgIADgLAAQgJAAgHgCgApXDFQgEABgEAEQgDAEgCAFQgCAFAAAIQAAAHACAGQACAFADAEQAEAEAFACQAEACAHAAQAGAAAFgCQAEgCAEgEQADgEACgFQACgGAAgGQAAgIgCgFQgCgFgEgFQgDgDgFgCQgFgDgGAAQgGAAgFADgAJjEIQgIgDgGgGQgGgGgDgIQgEgIAAgIQAAgJAEgIQADgIAGgHQAGgGAIgDQAIgDAJAAQAIAAAIADQAJADAGAHQAGAGAEAIQACAIAAAJQAAAIgCAIQgEAIgGAGQgGAGgJADQgIAEgIAAQgJAAgIgEgAJpDFQgGACgEAEQgEAEgCAFQgDAGABAHQgBAGADAGQACAFAEAEQAEAFAGACQAFACAGAAQAFAAAGgCQAFgCAEgFQAFgEABgFQACgGAAgGQAAgHgCgGQgBgFgFgEQgEgEgFgCQgGgDgFAAQgGAAgFADgAIWELQgGgBgDgCIgHgGIgGgHIAMgIQADAHAGADQAEADAIAAQAGAAAEgDQAEgEABgFQgBgFgDgCQgDgDgGgDIgNgEIgKgFQgFgDgBgDQgDgFAAgFQAAgGACgEQACgFAEgDQAEgDAFgCQAFgCAHAAIAKABIAIADIAGAGIAEAGIgLAHQgCgGgFgDQgFgDgGAAQgHABgDADQgEADAAAFQAAAGAGADIAOAGIALADQAEADADACQADADACAEQABADAAAGQAAAFgCAFQgCAEgEAEQgEADgFACQgGACgGAAIgKgBgAB9EKIgIgCIgHgHIgGgHIAAAOIgMAAIAAiHIANAAIAABGIAGgHIAGgHIAIgDQAEgBAFAAQAJAAAHADQAHADAFAFQAFAHADAIQADAHAAALQAAAJgDAJQgDAHgFAGQgFAGgIADQgHADgIAAIgJgCgAB5DFQgFACgDAEQgEAEgDAFQgBAGgBAHQABAHABAFQACAGAEAEQAEAEAFACQAFABAGAAQAFAAAFgBQAFgDAEgEQADgEACgFQACgGAAgIQAAgGgCgGQgCgFgDgEQgEgEgEgBQgFgCgGAAQgGAAgFACgAgoEJQgIgDgFgGQgEgGgDgHQgDgJAAgJQAAgLADgHQADgIAEgHQAFgFAIgDQAGgDAJAAQAFAAAFABIAHADIAHAHQACACACAFIAAhGIAOAAIAACHIgNAAIAAgOIgFAHIgHAHIgHACIgJACQgJAAgHgDgAghDFQgFABgDAEQgEAEgCAFQgBAGAAAGQAAAIABAGQACAFAEAEQADAEAFADQAEABAHAAQAGAAAFgBQAFgCAEgEQACgEACgGQACgFAAgHQAAgHgCgGQgCgFgDgEQgEgEgFgCQgEgCgGAAQgHAAgEACgAiBEJQgIgEgFgFQgFgGgDgIQgEgJAAgJQAAgKAEgHQADgIAFgGQAFgGAIgDQAHgDAJAAQAIAAAHADQAIADAFAFQAFAGADAIQACAIAAAKIAAADIg/AAIAAAAQAAAHABAFQACAGAEADQADAFAGABQAEACAHAAQAHABAHgFQAGgFAGgIIAKAHQgDAGgEADIgJAIIgKADIgLACQgKAAgHgDgAhaDXQAAgFgCgEQgBgEgDgDQgDgDgFgCQgEgBgGAAQgFAAgEABQgEACgDADQgEADgCAEQgCAEAAAFIAwAAIAAAAgAkXEJQgHgEgFgFQgGgGgDgIQgDgJAAgJQAAgKADgHQADgIAGgGQAEgGAIgDQAHgDAJAAQAJAAAHADQAIADAEAFQAFAGADAIQADAIAAAKIAAADIhAAAIAAAAQAAAHACAFQACAGADADQAEAFAFABQAFACAGAAQAIABAHgFQAGgFAFgIIAKAHQgCAGgEADIgJAIIgKADIgMACQgJAAgIgDgAjvDXQAAgFgCgEQgCgEgDgDQgDgDgFgCQgEgBgGAAQgEAAgFABQgEACgDADQgEADgBAEQgDAEAAAFIAxAAIAAAAgAlwEJQgIgEgFgFQgGgGgCgIQgDgJAAgJQAAgKADgHQACgIAGgGQAFgGAHgDQAIgDAIAAQAJAAAIADQAHADAFAFQAFAGACAIQADAIAAAKIAAADIhAAAIAAAAQAAAHADAFQABAGAEADQAEAFAEABQAFACAGAAQAJABAGgFQAHgFAEgIIALAHQgDAGgEADIgIAIIgKADIgNACQgIAAgIgDgAlIDXQAAgFgCgEQgDgEgDgDQgCgDgFgCQgFgBgFAAQgFAAgEABQgFACgDADQgDADgCAEQgCAEgBAFIAyAAIAAAAgAMXEHQgDgDAAgEQAAgEADgEQAEgDAEAAQAFAAACADQADAEAAAEQAAAEgDADQgCADgFAAQgEAAgEgDgALtEIIAAgvIgCgKQgBgFgDgDQgCgDgEgCQgEgBgGAAQgGAAgFACQgEADgEADQgDAEgBAGIgBAMIAAApIgOAAIAAhQIAOAAIAAANQAFgJAIgDQAHgEAKAAQAGAAAGACQAFACAEAEQAFADACAGQABAFAAAGIAAA3gAE/EIIAAiAIAYAAIAgABQAIACAGACQAHACAGAFQAFAEAEAFQAEAGADAHQADAGABAIQACAHAAAJQAAAJgCAIQgBAHgDAHQgDAGgEAGQgEAFgFAFQgGAEgGACIgNAEIgdABgAFOD6IAKAAIAcgBIALgDIAJgFIAHgHIAEgKQADgFABgGIABgNIgBgNIgDgLQgCgFgDgEIgHgIQgEgDgFgCIgLgCQgIgCgUAAIgKAAgAjPEIIAAhQIANAAIAAARIAFgJIAHgGIAHgEIAIAAQAFgBAFACIgGAMQgEgCgEAAQgFAAgFACQgEADgCADQgDAEgBAGQgCAHABAIIAAAmgAmoEIIAAgvIgBgKQgBgFgCgDQgDgDgEgCQgEgBgFAAQgHAAgEACQgGADgDADQgDAEgBAGIgBAMIAAApIgNAAIAAhQIANAAIAAANQAFgJAIgDQAHgEAJAAQAIAAAFACQAGACAEAEQADADADAGQACAFAAAGIAAA3gAoKEIIAAhQIAOAAIAABQgAqUEIIAAgvIgBgKQgCgFgDgDQgCgDgEgCQgEgBgFAAQgGAAgGACQgFADgDADQgDAEgBAGIgBAMIAAApIgOAAIAAhQIAOAAIAAANQAGgJAGgDQAIgEAJAAQAIAAAFACQAFACAFAEQADADACAGQACAFAAAGIAAA3gAspEIIAAiAIBEAAIAAAOIg0AAIAAAkIA0AAIAAAPIg0AAIAAAyIA0AAIAAANgAoLCZQgCgEAAgDQAAgFACgDQADgDAEABQAFAAADACQACAEAAAEQAAADgCAEQgDACgFAAQgEAAgDgCgAHfBZIAVgwIgfhGIAAALIgPAAIAABDIgOAAIAAhDIgOAAIAAgMIAOAAIAAggIAOAAIAAAgIAeAAIAYA5IAZg5IAOAAIg1B3gAlCBZIAAh3IANAAIAAAPIAGgIIAGgFIAIgEIAJgBQAJAAAHADQAIADAEAGQAGAFACAJQADAHAAAKQAAAKgDAIQgCAIgGAFQgEAGgIADQgHADgIAAIgKgBIgIgEIgGgGIgGgHIAAA2gAklgRQgFACgDADQgEAEgCAGQgBAEgBAIQABAGABAGQACAFAEAEQAEAFAFACQAFABAFAAQAGAAAFgBQAFgCADgEQAEgDACgGQACgFAAgHQAAgHgCgGQgCgFgEgEQgDgEgFgCQgFgCgGgBQgGABgFACgABAgGIgaA9IgkhVIAPAAIAVA2IAYg5IADAAIAYA5IAWg2IAPAAIgkBVgAqCgeIAQAAIAYA3IAYg3IAQAAIgoBVgAL9A0QgFgBgEgDIgHgEIgGgIIAMgIQAEAHAFADQAFADAHAAQAHAAAEgDQAEgEAAgFQAAgFgDgDQgDgCgGgCIgOgFIgKgFQgEgDgCgDQgDgEAAgFQAAgGADgEQACgFADgDQAEgDAFgCQAGgCAGAAIAKABIAIADIAGAFIAFAHIgMAHQgCgFgEgDQgGgEgGAAQgGABgEADQgDADAAAGQAAAFAFADIAPAEIAKAFQAFACACACQADADACAEQABAEABAFQAAAFgCAFQgDAFgDADQgEADgFACQgGACgGAAIgLgBgAKMA0QgGgBgDgDIgHgEIgGgIIAMgIQADAHAGADQAEADAIAAQAGAAAEgDQAFgEAAgFQAAgFgEgDQgDgCgGgCIgNgFIgKgFQgFgDgBgDQgDgEAAgFQAAgGACgEQACgFAEgDQADgDAGgCQAGgCAGAAIAJABIAJADIAGAFIAEAHIgLAHQgDgFgEgDQgFgEgGAAQgHABgDADQgEADAAAGQAAAFAGADIAPAEIAKAFQAFACACACQADADABAEQACAEAAAFQAAAFgCAFQgCAFgEADQgDADgGACQgGACgGAAIgKgBgAF9A0QgFgBgEgDIgHgEIgGgIIANgIQADAHAFADQAFADAHAAQAGAAAFgDQAEgEAAgFQAAgFgDgDQgDgCgHgCIgNgFIgKgFQgEgDgCgDQgCgEAAgFQAAgGACgEQABgFAFgDQADgDAGgCQAFgCAGAAIAKABIAIADIAHAFIADAHIgKAHQgDgFgEgDQgFgEgHAAQgGABgDADQgFADAAAGQABAFAFADIAPAEIALAFQAEACACACQAEADABAEQACAEgBAFQAAAFgBAFQgCAFgFADQgDADgGACQgFACgGAAIgLgBgAh1AyQgHgDgFgGQgEgGgEgHQgCgIAAgKQAAgKACgHQAEgIAEgHQAFgFAHgDQAIgDAIAAQAFAAAEABIAIADIAHAGQADADACAFIAAhHIAOAAIAACHIgOAAIAAgOIgFAHIgHAGIgIADQgEACgFAAQgIAAgIgDgAhugRQgEACgEADQgDAEgBAFQgCAFgBAGQABAIACAFQABAHADADQAEAFAFACQAFABAFAAQAHAAAFgBQAFgCAEgEQADgEABgGQACgFAAgHQAAgHgCgFQgCgFgDgEQgDgEgFgCQgGgCgGAAQgGAAgFACgAjNAyQgIgDgFgGQgGgGgDgIQgCgIAAgKQAAgJACgHQADgIAGgGQAFgGAHgDQAIgDAIAAQAJAAAHADQAIADAFAFQAFAGACAIQADAIABAJIAAACIhBAAIAAABQABAHACAFQACAGADADQAEAFAEABQAGACAFAAQAIABAHgFQAGgEAFgJIALAHQgDAFgEAEIgIAHIgKAEQgHACgGAAQgIAAgIgDgAilAAQAAgEgCgEQgCgEgEgDQgDgDgEgCQgFgBgFAAQgFAAgEABQgEACgEADQgDADgCAEQgCAEgBAEIAyAAIAAAAgAmQAxQgIgDgHgGQgGgGgDgIQgEgIABgIQgBgKAEgGQADgIAGgHQAHgFAIgEQAHgDAKAAQAIAAAIADQAIAEAGAGQAGAGAEAIQADAGAAAKQAAAIgDAIQgEAIgGAGQgGAGgIADQgIAEgIAAQgKAAgHgEgAmLgRQgGACgEAEQgDAEgCAFQgDAFAAAHQAAAGADAFQACAGADAEQAEAFAGACQAFACAHAAQAFAAAGgCQAFgCAEgFQAEgEACgGQACgFAAgGQAAgHgCgFQgCgFgEgEQgEgEgFgCQgGgDgFAAQgHAAgFADgAoWAyQgHgDgFgGQgGgGgDgIQgDgIAAgKQAAgJADgHQADgIAGgGQAFgGAHgDQAIgDAIAAQAJAAAHADQAIADAFAFQAEAGADAIQADAIAAAJIAAACIhAAAIAAABQAAAHACAFQACAGAEADQADAFAFABQAFACAGAAQAIABAHgFQAGgEAFgJIALAHQgDAFgFAEIgIAHIgKAEQgGACgGAAQgJAAgIgDgAnuAAQAAgEgCgEQgCgEgDgDQgDgDgEgCQgFgBgFAAQgGAAgDABQgFACgDADQgEADgCAEQgCAEAAAEIAxAAIAAAAgAq9AyQgHgDgFgGQgGgGgDgIQgDgIAAgKQAAgJADgHQADgIAGgGQAEgGAIgDQAHgDAJAAQAJAAAHADQAIADAEAFQAFAGADAIQADAIAAAJIAAACIhAAAIAAABQAAAHACAFQACAGADADQAEAFAFABQAFACAGAAQAIABAGgFQAHgEAFgJIAKAHQgDAFgDAEIgJAHIgKAEQgGACgGAAQgJAAgIgDgAqVAAQAAgEgCgEQgCgEgDgDQgDgDgFgCQgEgBgGAAQgFAAgEABQgEACgDADQgDADgCAEQgCAEgBAEIAxAAIAAAAgAM7AwQgDgDAAgEQAAgFADgDQADgDAEAAQAFAAADADQADADAAAFQAAAEgDADQgDADgFAAQgEAAgDgDgALGAxIAAhDIgOAAIAAgMIAOAAIAAggIAPAAIAAAgIAPAAIAAAMIgPAAIAABDgAJXAxIAAhPIANAAIAABPgAIuAxIAAiHIAPAAIAACHgAEYAxIAAgvIgBgJQgBgFgDgDQgCgDgFgCQgEgBgFAAQgGAAgFACQgFACgEAEQgCAFgBAFIgCALIAAApIgNAAIAAiHIANAAIAABFQAGgJAHgDQAIgEAJAAQAHAAAFACQAGACAEAEQAEADACAGQACAFAAAGIAAA2gACzAxIAAhDIgOAAIAAgMIAOAAIAAggIAPAAIAAAgIAPAAIAAAMIgPAAIAABDgACKAxIAAhPIANAAIAABPgAnNAxIAAiHIAPAAIAACHgAtMAxIAAh/IAYAAIAhABQAIACAFACQAIACAFAFQAFAEAFAFQAEAGADAHQACAGACAIQACAHgBAJQABAJgCAHQgCAHgCAHQgDAGgEAGQgFAFgFAFQgFADgHADIgMAEIgdABgAs9AjIAKAAIAcgBIAMgDIAJgFIAGgHIAFgKQADgFAAgFIABgNIgBgNIgCgLQgDgFgDgEIgGgHQgFgEgEgCIgMgCQgIgCgUAAIgKAAgAJXg9QgDgDAAgFQAAgEADgDQACgDAFABQAEAAACACQAEADAAAEQAAAFgEADQgCACgEAAQgFAAgCgCgACKg9QgEgDAAgFQAAgEAEgDQACgDAEABQAFAAACACQADADABAEQgBAFgDADQgCACgFAAQgEAAgCgCgAmeiAQgHgCgFgDQgEgFgEgGQgCgFAAgJIAPAAIAAACQAAAEACAEQABAEADACQADACAFABIAKABQAIAAAGgCQAGgDADgFQADgFAAgOIAAgNIgFAIIgGAFIgIAEIgJABQgJAAgIgDQgGgDgFgGQgGgGgCgHQgDgJAAgJQAAgKADgIQACgIAGgGQAFgFAGgDQAIgDAIAAQAEAAAFABIAJAEIAGAFQADADACAFIAAgPIAOAAIAABPIgBAQQgCAHgEAFQgGAHgIACQgJAEgKAAQgJAAgIgDgAmYjoQgFACgEADQgDAEgCAFQgCAFAAAIQAAAHACAFQACAGADAEQAEAEAFACQAFACAGAAQAHAAAEgCQAFgCADgEQAEgDACgGQABgGAAgGQAAgIgBgFQgCgFgEgFQgDgDgGgCQgFgCgFAAQgHAAgEACgAKniiQgFgBgEgDIgHgEIgGgIIANgIQADAHAFACQAFAEAHAAQAGAAAFgEQAEgDAAgFQAAgFgDgDQgDgCgHgCIgNgFIgKgFQgEgDgCgDQgDgFABgFQAAgFACgFQABgEAFgEQADgDAGgCQAFgCAGAAIAKABIAIAEIAHAEIADAHIgKAHQgDgFgFgDQgEgEgHAAQgGAAgDAEQgFADAAAGQAAAFAGADIAPAFIALAFQAEACADACQACADACAEQACAEgBAFQAAAFgCAEQgBAFgFAEQgDADgGACQgFACgHAAIgKgBgAHrilQgIgDgHgGQgGgGgDgIQgDgHAAgJQAAgKADgHQADgIAGgHQAHgFAIgEQAHgDAKAAQAIAAAIADQAIAEAGAGQAHAGADAIQADAHAAAKQAAAJgDAHQgDAIgHAGQgGAGgIADQgIAEgIAAQgKAAgHgEgAHwjoQgFACgFAEQgEAEgBAGQgDAFAAAHQAAAGADAFQABAGAEAEQAFAEAFACQAFADAHAAQAFAAAFgDQAGgCAEgEQAEgEACgGQACgFAAgGQAAgHgCgFQgCgGgEgEQgEgEgGgCQgFgDgFAAQgHAAgFADgAFbikQgHgDgFgGQgFgGgDgHQgDgJAAgJQAAgLADgHQADgJAFgGQAFgFAHgDQAHgDAIAAQAGAAAEABIAIAEIAGAFQAEADACAFIAAgPIANAAIAABQIgNAAIAAgOIgGAIIgGAFIgIAEIgJABQgIAAgIgDgAFijoQgEABgEAEQgDAEgCAFQgCAGAAAHQAAAHACAGQACAFADAEQAEAFAFABQAEACAHAAQAGAAAFgCQAEgBAEgFQADgDACgGQACgFAAgHQAAgHgCgFQgCgGgEgEQgDgEgFgCQgFgCgGAAQgGAAgFACgAESiiQgGgBgDgDIgHgEIgGgIIAMgIQADAHAGACQAEAEAHAAQAHAAAEgEQAFgDAAgFQAAgFgEgDQgDgCgGgCIgNgFIgKgFQgFgDgBgDQgDgFAAgFQAAgFACgFQACgEAEgEQADgDAGgCQAGgCAGAAIAJABIAJAEIAGAEIAEAHIgLAHQgDgFgEgDQgFgEgGAAQgHAAgDAEQgEADAAAGQAAAFAGADIAPAFIAKAFQAFACACACQADADACAEQABAEAAAFQAAAFgCAEQgCAFgEAEQgDADgGACQgGACgGAAIgKgBgABIilQgIgDgGgGQgGgGgDgIQgEgHAAgJQAAgKAEgHQADgIAGgHQAGgFAIgEQAIgDAJAAQAJAAAHADQAJAEAGAGQAGAGAEAIQACAHAAAKQAAAJgCAHQgEAIgGAGQgGAGgJADQgHAEgJAAQgJAAgIgEgABOjoQgGACgEAEQgEAEgCAGQgCAFgBAHQABAGACAFQACAGAEAEQAEAEAGACQAFADAGAAQAGAAAFgDQAFgCAFgEQADgEACgGQACgFAAgGQAAgHgCgFQgCgGgDgEQgFgEgFgCQgFgDgGAAQgGAAgFADgAiBikQgIgDgEgGQgGgGgCgHQgDgJAAgJQAAgLADgHQACgJAGgGQAEgFAIgDQAGgDAJAAQAFAAAFABIAIAEIAGAFQADADACAFIAAhHIAOAAIAACIIgNAAIAAgOIgGAIIgGAFIgIAEIgJABQgJAAgHgDgAh6joQgFACgDADQgEAEgCAFQgCAFABAHQgBAIACAFQACAHAEADQADAFAFABQAFACAGAAQAGAAAFgCQAFgCADgDQAEgEACgGQACgFAAgHQAAgHgCgFQgCgGgEgEQgEgEgFgCQgFgCgFAAQgHAAgEACgAjaikQgHgEgGgFQgFgGgDgIQgEgIAAgKQAAgKAEgHQADgIAFgGQAFgGAHgDQAIgDAJAAQAIAAAIADQAHADAFAFQAFAGADAIQACAIAAAKIAAACIhAAAIAAABQAAAHACAGQACAEAEAFQAEAEAFABQAFACAFAAQAJABAGgFQAHgEAFgJIAKAHQgDAFgEAEIgJAHIgKAFIgLABQgKAAgHgDgAizjWQAAgFgCgEQgCgFgCgCQgEgDgEgBQgEgCgGAAQgFAAgEACQgEABgDADQgEADgCAEQgCAEgBAFIAxAAIAAAAgAoSiiQgEgBgFgDIgGgEIgGgIIAMgIQADAHAFACQAGAEAHAAQAGAAAFgEQADgDAAgFQAAgFgDgDQgCgCgHgCIgOgFIgKgFQgDgDgCgDQgDgFAAgFQAAgFACgFQACgEAEgEQADgDAGgCQAFgCAHAAIAKABIAIAEIAGAEIAEAHIgLAHQgCgFgFgDQgFgEgHAAQgGAAgDAEQgEADAAAGQAAAFAGADIAOAFIALAFQAEACADACQADADACAEQABAEAAAFQAAAFgCAEQgCAFgEAEQgDADgGACQgFACgHAAIgLgBgApnikQgHgEgFgFQgGgGgDgIQgDgIAAgKQAAgKADgHQADgIAGgGQAFgGAHgDQAIgDAIAAQAJAAAHADQAIADAFAFQAEAGADAIQADAIAAAKIAAACIhAAAIAAABQAAAHACAGQACAEAEAFQADAEAFABQAFACAGAAQAIABAHgFQAGgEAFgJIALAHQgDAFgFAEIgIAHIgKAFIgMABQgJAAgIgDgAo/jWQAAgFgCgEQgCgFgDgCQgDgDgEgBQgFgCgFAAQgGAAgDACQgFABgDADQgEADgCAEQgCAEAAAFIAxAAIAAAAgALlimQgDgDAAgEQAAgEADgDQADgEAFAAQAEAAADAEQADADAAAEQAAAEgDADQgDADgEAAQgFAAgDgDgAJ0ilIAAgvIgBgKQgCgFgCgDQgDgDgDgBQgEgCgGAAQgGAAgFACQgFACgDAEQgEAEgBAGIgBAMIAAApIgNAAIAAhQIANAAIAAANQAGgJAHgDQAIgEAJAAQAHAAAGACQAFACAEAEQAEAEACAFQACAFAAAGIAAA3gAGuilIAAiIIAPAAIAACIgACWilIAAhQIANAAIAAARIAFgJIAHgGIAHgEIAIgBQAFABAFABIgGANQgEgCgEgBQgGABgDACQgEACgDADQgDAFgBAFQgBAGAAAIIAAAngAAGilIAAhEIgPAAIAAgMIAPAAIAAgXIABgQQABgGADgEQACgEAEgDQAFgCAIAAQAGAAAFACIAAAPQgFgDgFAAIgHABQgBABgBADQgCAEAAANIAAAWIAVAAIAAAMIgVAAIAABEgAkRilIAAgvIgBgKQgCgFgDgDQgCgDgEgBQgEgCgFAAQgGAAgGACQgFACgDAEQgDAEgBAGIgBAMIAAApIgOAAIAAhQIAOAAIAAANQAGgJAGgDQAIgEAJAAQAIAAAFACQAFACAFAEQADAEACAFQACAFAAAGIAAA3gAnXilIAAhQIANAAIAABQgAr2ilIAAiAIAZAAIAgABQAHABAHADQAGADAGAEQAFAEAEAFQAFAGACAHQADAGACAIQABAIABAIQgBAJgBAHQgCAIgDAHQgCAHgFAFQgEAFgFAEQgGAEgGADIgMAEIgdABgArmizIAJAAIAcgBIALgDIAJgFIAHgHIAFgKQACgFACgGIAAgNIAAgNIgDgLQgDgFgDgEIgHgHQgDgEgGgCIgLgCQgIgCgUAAIgJAAgAnYkUQgDgEAAgEQAAgEADgDQADgCAEgBQAEAAADADQADAEAAADQAAAEgDAEQgDACgEAAQgEAAgDgCg");
	this.shape.setTransform(84.5,30.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.FinalMessaging, new cjs.Rectangle(0,0,169,60.7), null);


(lib.BLK = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Blk();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.BLK, new cjs.Rectangle(0,0,32,32), null);


(lib.Akinsvgcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Akin.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABtCPQghgfAAguQgBguAigeQAgggAtABQAuAAAgAgIAAABQAfAfAAAsQAAAsgfAfQggAgguABQguAAgfgggACJAQQgWAUgCAeIAAABQgBAfAWAWQAWAWAeAAQAdAAAVgUQAVgUABgdQACgegVgWQgUgWgegBIgEAAQgcAAgUASgARACmIAAjIIAjAAIAADIgAPmCmIAAh2QAAg7g1AAQgdgCgUAWQgIAKgCAOQgCAJABAUIAABoIgjAAIAAjIIAiAAIAAAfQAMgTATgKQAUgKAWABQAkAAATASQAVATAAAhIAACJgAL3CmIAAjIIAjAAIAADIgAImCmIByiqIhsAAIAAgeICpAAIhzCqIByAAIAAAegAHlCmIAAh2QAAg7g0AAQgfgCgTAWQgHAKgDAOQgBAJAAAUIAABoIgjAAIAAjIIAjAAIAAAfQALgTAUgKQATgKAWABQAkAAAUASQAUATAAAhIAACJgAAeCmIiPisIAACsIgmAAIAAlBIAmAAIAACQICGiQIAuAAIiJCRICXCwgAlkCmIAAh2QAAg7g1AAQgdgCgTAWQgIAKgCAOQgCAJAAAUIAABoIgiAAIAAjIIAhAAIAAAfQANgTATgKQAUgKAWABQAjAAAUASQAVATAAAhIAACJgApTCmIAAjIIAiAAIAADIgAqfCmIhohqIAABqIgiAAIAAlUIAiAAIAADmIBhhaIAtAAIhkBbIBuBtgAtuCmIgqhiIh+AAIgpBiIgqAAICSlNICSFNgAukAjIgzh2IgzB2IBmAAgApFhnQgLgBgGgIQgHgIACgLIgBAAQAAgLAIgHQAHgHAKAAQALAAAHAHQAIAIAAAKIAAAHQgCAKgIAGQgGAGgJAAIgDgBgARChyQgJgGgBgLIAAAAQgBgLAIgHQAIgHAJAAQAMAAAGAHQAIAIAAAKQgBAJgGAGQgHAGgIABIgDAAQgIAAgHgFgAL4hyQgJgGgBgLIAAAAQAAgLAIgHQAHgHAKAAQALAAAHAHQAIAIAAAKQgCAJgFAGQgHAGgJABIgCAAQgJAAgHgFg");
	this.shape.setTransform(121.2,17.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("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");
	this.shape_1.setTransform(121.8,93.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,243.6,130.3);


(lib.AkinKonzinisvg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Akin Konzini.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABpCPQggggABgsQgBguAggfQAhggAtABQAuAAAfAgIABABQAgAeAAAtQgBAtggAeQgfAhguAAQgugBgggfgACGAQQgXAUgBAfIAAABQAAAfAVAVQAWAWAeAAQAdAAAVgUQAVgUACgdQABgegUgWQgVgVgegCIgEAAQgcAAgUASgARVCnIAAjJIAiAAIAADJgAP2CnIAAh3QAAg7g1gBQgegBgSAWQgJAKgCAOQgCAJAAAUIAABpIghAAIAAjJIAhAAIAAAfQAMgSAUgLQATgKAXABQAiAAAVATQAUASAAAiIAACJgAMCCnIAAjJIAjAAIAADJgAIsCnIBziqIhsAAIAAgfICpAAIhzCqIByAAIAAAfgAHnCnIAAh3QAAg7g0gBQgfgBgTAWQgHAKgDAOQgCAJABAUIAABpIgjAAIAAjJIAiAAIAAAfQAMgSATgLQAUgKAXABQAjAAAUATQAUASAAAiIAACJgAifCnIAAlCIAmAAIAACPICGiPIAuAAIiJCRICWCwIgxAAIiQisIAACtgAlsCnIAAh3QAAg7g1gBQgdgBgTAWQgIAKgDAOQgBAJAAAUIAABpIgjAAIAAjJIAiAAIAAAfQAMgSAUgLQAUgKAWABQAjAAAUATQAVASAAAiIAACJgApfCnIAAjJIAiAAIAADJgAqwCnIhohrIAABrIgjAAIAAlVIAjAAIAADnIBhhbIAtAAIhkBcIBuBtgAuECnIgphjIh+AAIgqBjIgpAAICSlOICSFOgAu5AjIgzh2Ig0B2IBnAAgARUhwQgIgIABgKQAAgLAIgHQAGgIALAAQAKAAAIAIQAHAIAAAKQAAAKgIAIQgHAHgLAAQgKgBgHgGgAMBhwQgHgIAAgKQAAgLAIgHQAHgIAKAAQALAAAHAIQAHAIAAAKQAAAKgHAIQgIAHgKAAQgLgBgHgGgApghwQgIgIAAgKIAAgBQAAgKAIgHQAHgIALAAQAKAAAIAIQAGAIAAAKQABAKgIAIQgHAHgLAAQgLgBgGgGg");
	this.shape.setTransform(115.1,14.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-2.5,230.2,34.9);


(lib._2015hairdresseroftheyearsvg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 2015 hair dresser of the year.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("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");
	this.shape.setTransform(118.6,36.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,237.3,73.2);


(lib.Tween8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._2015hairdresseroftheyearsvg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0.1,19.6,0.627,0.627,0,0,0,118.7,36.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACkBjQgMgFgJgJQgJgJgFgMQgFgMAAgNQAAgNAFgMQAFgLAJgJQAJgJAMgFQAMgEANAAQAOAAALAEQAMAGAJAJQAKAIAEALQAGAMAAANQAAANgGAMQgEAMgKAJQgJAJgMAFQgMAFgNAAQgNAAgMgFgACsgCQgIADgGAGQgGAGgDAIQgDAJAAAJQAAAKADAJQADAIAGAGQAHAGAHADQAIAEAJAAQAJAAAIgEQAIgDAGgGQAGgGADgIQADgJAAgKQAAgJgDgJQgDgIgGgGQgGgGgIgDQgIgDgJAAQgJAAgIADgAJpBjIAAh3IAVAAIAAB3gAHkBjIBEhlIhAAAIAAgSIBlAAIhFBlIBEAAIAAASgAG1BjIAAh3IAUAAIAAB3gAF2BjIAAhHQAAgJgBgGQgDgHgDgFQgEgDgGgDQgGgCgIAAQgKAAgHAEQgIADgEAFQgFAGgCAJIAAARIAAA+IgVAAIAAh3IAUAAIAAASQAIgLALgGQALgFAOAAQAKAAAJACQAIADAGAGQAGAGADAHQADAHAAAKIAABSgABWBjIhWhmIAABmIgVAAIAAi/IAVAAIAABVIBRhVIAbAAIhSBWIBaBpgAikBjIAAhHQAAgJgCgGQgCgHgDgFQgFgDgFgDQgGgCgIAAQgKAAgHAEQgIADgFAFQgEAGgCAJIgBARIAAA+IgUAAIAAh3IAUAAIAAASQAIgLALgGQALgFAOAAQAKAAAJACQAIADAGAGQAGAGADAHQADAHAAAKIAABSgAk8BjIAAh3IAVAAIAAB3gAluBjIg+g/IAAA/IgVAAIAAjKIAVAAIAACJIA6g2IAbAAIg8A2IBCBBgAnrBjIgZg7IhLAAIgZA7IgZAAIBYjHIBXDHgAoLAVIgehGIgfBGIA9AAgAJphDQgFgFAAgGQAAgGAFgFQAEgEAGAAQAHAAAEAEQAEAFAAAGQAAAHgEAEQgEAEgHAAQgGAAgEgEgAG0hDQgEgFAAgGQAAgGAEgFQAEgEAHAAQAGAAAEAEQAFAFAAAGQAAAHgFAEQgEAEgGAAQgHAAgEgEgAk8hDQgFgFAAgGQAAgGAFgFQAEgEAGAAQAHAAAEAEQAEAFAAAGQAAAHgEAEQgEAEgHAAQgGAAgEgEg");
	this.shape.setTransform(0.9,-30.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.4,-40.9,148.8,83.4);


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Quotesvg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,-7.6,0.542,0.542,0,0,0,226.7,67.7);

	this.instance_1 = new lib.Akinsvgcopy("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(3,0.5,0.677,0.677,0,0,0,121.9,65.3);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122.8,-44.3,248.1,88.8);


// stage content:
(lib.C_970_Stage4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_292 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(292).call(this.frame_292).wait(1));

	// CTA.svg
	this.instance = new lib.NEW_CTA();
	this.instance.parent = this;
	this.instance.setTransform(485,198,1,1,0,0,0,60,17.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(279).to({_off:false},0).to({y:208,alpha:1},10).wait(4));

	// Border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#888888").ss(1,1,1).p("EhLxgThMCXjAAAMAAAAnDMiXjAAAg");
	this.shape.setTransform(485,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(293));

	// EndText
	this.instance_1 = new lib.FinalMessaging();
	this.instance_1.parent = this;
	this.instance_1.setTransform(485,126.9,1,1,0,0,0,84.5,30.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(270).to({_off:false},0).to({y:136.9,alpha:1},9).wait(14));

	// Final Strap
	this.instance_2 = new lib.Strap();
	this.instance_2.parent = this;
	this.instance_2.setTransform(484,46.2,1.448,1.448,0,0,0,72.6,18.4);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(262).to({_off:false},0).to({y:56.2,alpha:1},8).wait(23));

	// FinalLogo
	this.instance_3 = new lib.Logo();
	this.instance_3.parent = this;
	this.instance_3.setTransform(486.3,47.8,1.399,1.399,0,0,0,72.5,18.2);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(262).to({_off:false},0).to({y:57.8,alpha:1},8).wait(23));

	// Akin
	this.instance_4 = new lib._2015hairdresseroftheyearsvg("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(793.8,140.7,0.627,0.627,0,0,0,118.7,36.6);
	this.instance_4.alpha = 0;

	this.instance_5 = new lib.AkinKonzinisvg("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(792.5,95.5,0.627,0.627,0,0,0,115.2,17.4);
	this.instance_5.alpha = 0;

	this.instance_6 = new lib.Tween8("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(783.8,124.1);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4}]}).to({state:[{t:this.instance_6}]},176).to({state:[{t:this.instance_6}]},5).to({state:[{t:this.instance_6}]},58).to({state:[{t:this.instance_6}]},4).to({state:[]},1).wait(49));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(176).to({_off:false},0).to({alpha:1},5).wait(58).to({startPosition:0},0).to({alpha:0},4).to({_off:true},1).wait(49));

	// New_Quote
	this.instance_7 = new lib.Quotesvg("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(796,118.1,0.542,0.542,0,0,0,226.7,67.7);
	this.instance_7.alpha = 0;

	this.instance_8 = new lib.Akinsvgcopy("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(799,126.3,0.677,0.677,0,0,0,121.9,65.3);
	this.instance_8.alpha = 0;

	this.instance_9 = new lib.Tween7("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(786,125.8);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7}]}).to({state:[{t:this.instance_9}]},95).to({state:[{t:this.instance_9}]},11).to({state:[{t:this.instance_9}]},63).to({state:[{t:this.instance_9}]},4).to({state:[]},1).wait(119));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(95).to({_off:false},0).to({regX:0.1,regY:0.1,x:786.4,y:125.9,alpha:0.859},11).wait(63).to({startPosition:0},0).to({alpha:0},4).to({_off:true},1).wait(119));

	// Strap
	this.instance_10 = new lib.Strap();
	this.instance_10.parent = this;
	this.instance_10.setTransform(166.1,116.3,1.646,1.649,0,0,0,72.5,18.3);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(19).to({_off:false},0).to({regY:18.4,scaleY:1.65,y:121.5,alpha:0.75},6).wait(214).to({alpha:0},4).to({_off:true},1).wait(49));

	// Blk copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_71 = new cjs.Graphics().p("AAAzaMCXkAAAMAAAAnDMiXkAAAg");
	var mask_graphics_72 = new cjs.Graphics().p("AsszaMCXjAAAMAAAAnCMiXjAAAg");
	var mask_graphics_73 = new cjs.Graphics().p("A5YzbMCXjAAAMAAAAnDMiXjAAAg");
	var mask_graphics_74 = new cjs.Graphics().p("EgmFgTcMCXkAAAMAAAAnDMiXkAAAg");
	var mask_graphics_75 = new cjs.Graphics().p("EgyxgTdMCXjAAAMAAAAnDMiXjAAAg");
	var mask_graphics_76 = new cjs.Graphics().p("Eg/dgTdMCXjAAAMAAAAnCMiXjAAAg");
	var mask_graphics_77 = new cjs.Graphics().p("EhLxgTeMCXjAAAMAAAAnDMiXjAAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(71).to({graphics:mask_graphics_71,x:970,y:125.7}).wait(1).to({graphics:mask_graphics_72,x:888.7,y:125.6}).wait(1).to({graphics:mask_graphics_73,x:807.5,y:125.6}).wait(1).to({graphics:mask_graphics_74,x:726.3,y:125.5}).wait(1).to({graphics:mask_graphics_75,x:645,y:125.4}).wait(1).to({graphics:mask_graphics_76,x:563.8,y:125.3}).wait(1).to({graphics:mask_graphics_77,x:480.1,y:125.3}).wait(167).to({graphics:null,x:0,y:0}).wait(49));

	// White
	this.instance_11 = new lib.White();
	this.instance_11.parent = this;
	this.instance_11.setTransform(170.3,116.2,1.634,1.633,0,0,0,72.8,15.2);
	this.instance_11._off = true;

	var maskedShapeInstanceList = [this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(77).to({_off:false},0).wait(162).to({alpha:0},4).to({_off:true},1).wait(49));

	// JobTitle
	this.instance_12 = new lib.Text();
	this.instance_12.parent = this;
	this.instance_12.setTransform(877.5,30.9,1,1,0,0,0,119.9,106.5);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(170).to({_off:false},0).to({scaleX:0.72,scaleY:0.72,x:811.3,y:108.6,alpha:0.828},5).to({_off:true},1).wait(117));

	// HeadTop
	this.instance_13 = new lib.HeadTop();
	this.instance_13.parent = this;
	this.instance_13.setTransform(487.3,123.6,1.186,1.182,0,0,0,51.1,51.1);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(95).to({_off:false},0).to({scaleX:1.18,scaleY:1.18,x:487.1,y:123.7,alpha:1},11).wait(133).to({regY:51.2,scaleX:1.18,y:123.8},0).to({regY:51.1,y:123.7,alpha:0},4).to({_off:true},1).wait(49));

	// ProductShot_LockUp
	this.instance_14 = new lib.Logo();
	this.instance_14.parent = this;
	this.instance_14.setTransform(169.7,111.1,1.634,1.634,0,0,0,72.4,18.2);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(9).to({_off:false},0).to({y:121.1,alpha:1},10).to({_off:true},62).wait(212));

	// Blk
	this.instance_15 = new lib.BLK();
	this.instance_15.parent = this;
	this.instance_15.setTransform(1455,124.1,30.313,7.812,0,0,0,16,16);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(73).to({_off:false},0).to({x:485,y:125},5).wait(171).to({x:-485.9},6).to({_off:true},1).wait(37));

	// Layer 2
	this.instance_16 = new lib.QuietMarkLogo();
	this.instance_16.parent = this;
	this.instance_16.setTransform(902,177.5,0.481,0.481);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(239).to({_off:false},0).wait(54));

	// Final BKG
	this.instance_17 = new lib.BKG();
	this.instance_17.parent = this;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(239).to({_off:false},0).wait(54));

	// Layer 4
	this.instance_18 = new lib.zoomOutCover();
	this.instance_18.parent = this;
	this.instance_18.setTransform(548.2,173.6,0.991,0.991,0,0,0,267.2,267.2);
	this.instance_18.alpha = 0.59;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(3).to({x:544.1,y:177.7,alpha:1},0).to({regX:267.8,regY:267.8,scaleX:0.12,scaleY:0.12,x:613.6,y:74.7,alpha:0},11).wait(279));

	// ProductShot
	this.instance_19 = new lib.ProductShot_1();
	this.instance_19.parent = this;
	this.instance_19.setTransform(544.8,1063.5,9.973,9.973,0,0,0,149.7,299.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(3).to({y:1067.6},0).to({regX:150,regY:299.9,scaleX:1.23,scaleY:1.23,x:614.1,y:193.5},11).to({_off:true},80).wait(199));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-463.1,-1801.2,2991.8,5983.5);
// library properties:
lib.properties = {
	width: 970,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/BKG.jpg", id:"BKG"},
		{src:"images/Blk.png", id:"Blk"},
		{src:"images/HeadShot.png", id:"HeadShot"},
		{src:"images/ProductShot.jpg", id:"ProductShot"},
		{src:"images/QuietMarkLogo.png", id:"QuietMarkLogo"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;