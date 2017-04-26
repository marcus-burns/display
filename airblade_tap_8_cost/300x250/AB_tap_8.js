(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 23,
	color: "#FFFFFF",
	manifest: [
		{src:"images/Bitmap1.png", id:"Bitmap1"},
		{src:"images/Bitmap2.png", id:"Bitmap2"},
		{src:"images/Bitmap3.png", id:"Bitmap3"}
	]
};



// symbols:



(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,103,143);


(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,87,159);


(lib.Bitmap3 = function() {
	this.initialize(img.Bitmap3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,188,167);


(lib.white = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bThMAAAgnBMAu2AAAMAAAAnBg");
	this.shape.setTransform(150,125);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.txt0 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AGeFRQgGgCgFgDQgFgCgEgFQgEgDgCgHIATgKQACAHAGAEQAGAFAIAAQAJgBAEgDQAEgEAAgGQABgHgIgEIgRgHIgNgFQgFgEgDgDQgFgEgCgEQgBgFAAgFQAAgGACgGQAEgGAEgEQAGgEAHgCQAHgCAJAAQAMgBAJAFQAHAEAEAIIgQAMQgCgFgEgDQgFgDgGAAQgHAAgEADQgEAEAAAFQAAAGAIAEIATAIIALAFIAJAGQADAEABAFQADAEAAAFQAAAIgEAGQgCAGgGAFQgFAEgHACQgJACgJAAIgOgBgADgFOQgIgDgGgIQgHgGgCgLQgEgKAAgNQAAgMAEgLQADgJAGgIQAGgGAIgFQAJgDAKAAQAGAAAGABQAFABAEADIAIAGIAFAJIAAgRIAYAAIAABmIgYAAIAAgNQgGAIgIAFQgJAEgKAAQgLAAgJgEgADuD7QgFADgEAFQgEAEgCAGQgCAGAAAJQAAAHACAHQACAGAEAFQAEAEAFACQAFACAGAAQAHAAAEgCQAGgDADgEQAFgEABgHQADgGAAgIQAAgIgCgGQgCgGgDgFQgFgEgEgDQgGgBgGAAQgHAAgFABgAioFOQgLgEgHgIQgIgIgFgKQgEgKAAgLQAAgLAEgKQAFgKAIgIQAHgHALgFQAKgDALAAQAMAAAJADQALAFAIAHQAIAJAEAJQAEAKAAALQAAALgEAKQgEAKgIAIQgIAIgLAEQgJAEgMAAQgLAAgKgEgAifD8QgGADgEAEQgFAFgCAGQgDAGAAAIQAAAHADAFQACAHAFAEQAEAFAGACQAGADAGAAQAHAAAFgDQAGgCAEgFQAEgEADgHQACgFAAgHQAAgIgCgGQgCgGgFgFQgEgEgGgDQgFgDgHABQgGgBgGADgAm0FPQgJgDgIgHQgGgFgEgJQgDgIgBgLIAYAAIAAACQAAAEACAFQACAEAEAEQAEADAFABQAFACAGAAQAHAAAGgCQAGgCADgDQAEgDACgGQACgFAAgHQAAgHgCgFQgCgFgEgEQgEgEgGgBQgGgCgIAAIgFAAIAAgUIAFAAQAHAAAFgBQAGgCADgDQADgDACgEQACgEAAgHQAAgEgBgFIgGgGQgDgEgEgBQgEgCgGABQgFgBgFACQgFACgDACQgDADgBAEQgCAEAAAEIgYAAQABgJAEgIQADgIAGgFQAHgFAIgDQAJgDALAAQALAAAJADQAIADAGAGQAHAFACAHQAEAJAAAJQAAAHgCAGQgBAGgEAFQgEAEgFADQgEADgHABQAHABAGAEQAGADADAFQAFAFACAHQABAHAAAJQAAAKgDAIQgEAJgHAFQgHAHgKADQgKADgNAAQgLAAgJgDgAFSFOIAAhSIgSAAIAAgUIASAAIAAgmIAYAAIAAAmIARAAIAAAUIgRAAIAABSgACWFOIAAg1IgBgOQAAgGgCgEQgDgFgEgBQgDgDgHAAQgHAAgFADQgFACgDAFQgDAFgBAHQgBAHgBAKIAAAvIgXAAIgBhDQAAgHgDgEQgDgEgDgCQgEgCgGAAQgHAAgFADQgHADgCAGQgDAFgBAGIgBA/IgXAAIAAhmIAWAAIAAARIAHgJIAJgHQAEgCAFgBIAMgBIALABIAJADIAGAHIAGAJIAIgJIAJgHIAJgDIALgBQALAAAHADQAHAEAEAHQADAEABAFIABAMIAABGgAhCFOIAAhmIAXAAIAAARQAEgLAGgFQAGgEAJAAQAKgBAIAFIgHAUQgGgEgIAAQgHAAgDACQgFADgDAFQgCAFgBAHIgBASIAAAtgAkDFOIAAhSIgSAAIAAgUIASAAIAAgbQAAgKACgIQACgHAEgFQAFgFAGgCQAHgDAIAAQAIAAAIADIAAAUQgFgCgGAAQgJgBgEAGQgDAFAAAMIAAAYIAZAAIAAAUIgZAAIAABSgAmsBfQgHgCgGgEQgFgEgDgFQgDgFAAgGIAWAAQABAGAEADQAFACAJAAQAHABAFgCQAEgCADgDQADgCABgFQABgFAAgHIAAgLQgFAHgHAEQgHAEgKAAQgJAAgHgDQgIgDgEgHQgGgGgDgIQgCgKAAgLQAAgKACgHQADgJAGgFQAFgHAHgDQAHgDAJgBIAKABIAIAEIAHAFQADAEABAEIAAgOIAVAAIAABQQgBAMgCAJQgCAJgFAGQgFAFgJADQgIADgNAAQgJAAgIgCgAmkgOQgFADgDADQgDAEgCAEQgBAFgBAHQABAHABAGQACAFADAEQADADAFADQAEABAGAAQAFAAAFgCQAEgCADgEQADgEACgFQACgGAAgHQAAgHgCgEQgBgFgDgDQgEgEgEgCQgEgCgGAAQgGAAgEACgArABhIAYgxIgfhLIgGAPQgGgEgHAAQgFAAgEACQgDACgCAEQgDAEgBAFIgBAQIAAAmIgTAAIAAhVIATAAIAAANQAEgIAFgEQAFgFAJAAQAHAAAHAEIAWAAIAPArQAEAJABAJQABgGAFgKIAWgtIAVAAIg/B/gAADAPIgEgPIgbA9IguhbIAVAAIAVAoQACAGACAMQAAgHAFgJIAVguIABAAIAVAuQADAIAAAIQACgLAEgHIATgoIAVAAIguBbgAJtA6IgKgEIgHgGQgEgDgCgFIARgJQABAGAGAEQAEADAIAAQAHAAAEgDQAEgEAAgEQAAgHgGgCIgPgHIgLgFIgIgGQgEgDgBgDQgCgDAAgFQAAgFADgFQACgEAEgEQAFgEAGgCQAHgCAHAAQAKABAIADQAHAEADAHIgOAKQgCgEgEgDQgEgDgFABQgFAAgEACQgEADABAEQgBAGAHADIARAFIAKAFIAHAGIAEAHQABAEABAEQgBAHgCAFQgCAFgFAEQgFADgGACQgHACgIAAIgMgBgAILA4QgJgEgGgGQgFgGgEgIQgDgJAAgLQAAgKADgHQAEgIAFgHQAHgHAJgDQAIgDAKgBQALAAAIAEQAIACAGAHQAGAFADAJQADAHAAAKIAAAFIhGAAQAAAGACAFQACAEADAEIAIAFIAKACQAJAAAHgFQAGgEAFgIIARAJQgDAHgFAEQgEAFgGADQgGAEgGACQgHABgHAAQgLAAgIgDgAI2ABIgCgHIgFgFQgDgDgEgBQgFgBgEgBQgGABgDABQgFABgDADIgFAFIgDAHIAwAAIAAAAgAD4A3QgJgDgHgHQgGgGgEgJQgEgJABgKQgBgJAEgHQAEgIAGgHQAHgHAJgDQAJgDAJgBQALABAIADQAJADAHAIQAHAGADAIQAEAHABAJQgBAKgEAJQgDAJgHAGQgHAHgJADQgIAEgLAAQgJAAgJgEgAEBgNQgFACgFAEQgDAEgCADQgCAGgBAGQABAGACAGQACAEADAFQAFAEAFACQAEACAGAAQAFAAAFgCQAGgCADgEQAEgFACgEQACgGAAgGQAAgGgCgGQgCgDgEgEQgDgEgGgCQgFgCgFgBQgGABgEACgACgA3QgIgDgGgGQgHgHgDgIQgDgJgBgKQABgLADgHQAEgIAGgGQAHgHAIgDQAJgDALgBQAHABAFABQAGABAFADIAAAWQgEgFgGgCQgHgDgGAAQgGAAgGACQgFACgDAEQgEAEgCAEQgBAEAAAHQAAAHABAGQACAFAEAEQADAEAFABQAGADAHAAQAHAAAFgDQAGgDAEgGIAAAYQgFADgGACQgHABgHAAQgKAAgJgEgAiSA3QgKgDgHgHQgGgGgEgJQgEgJABgKQgBgJAEgHQAEgIAGgHQAHgHAKgDQAIgDAJgBQAKABAJADQAJADAHAIQAHAGADAIQAEAHAAAJQAAAKgEAJQgDAJgGAGQgIAHgJADQgJAEgKAAQgJAAgIgEgAiKgNQgFACgEAEQgEAEgCADQgCAGgBAGQABAGACAGQACAEAEAFQAEAEAFACQAEACAGAAQAGAAAEgCQAFgCAEgEQAEgFACgEQACgGAAgGQAAgGgCgGQgCgDgEgEQgEgEgFgCQgEgCgGgBQgGABgEACgAteA4QgIgDgFgHQgFgGgDgIQgDgKABgLQAAgKACgHQADgJAFgFQAGgHAHgDQAIgDAIgBIAKABIAIAEIAHAFQADAEACAEIAAhHIAUAAIAACOIgUAAIAAgLQgGAHgHAEQgHAEgKAAQgIAAgIgDgAtSgOQgFADgDADQgDAEgCAEQgBAFgBAHQABAHABAGQABAFAEAEQADADAFADQAEABAGAAQAFAAAEgCQAFgCADgEQAEgEABgFQACgGAAgHQAAgHgCgEQgBgFgDgDQgDgEgFgCQgFgCgFAAQgFAAgFACgANbA3IAAg3QgBgGgCgDQgCgEgDgCQgFgCgFAAQgIABgGACQgFADgDAEQgCAEgCAEIAAA2IgUAAIAAhVIATAAIAAAOIAHgIQADgDAEgCIAJgEIALgBQAJAAAIAEQAGADAFAGQADAEAAAHIABAMIAAA1gALqA3IAAhVIAVAAIAABVgAHHA3IAAgtIAAgKQAAgGgCgDQgCgEgEgCQgDgBgGgBQgGAAgEACQgEACgDAFQgCAEgBAEIgBAQIAAAnIgVAAIgBg3QgBgGgCgDQgCgEgDgCQgDgBgFgBQgGABgGACQgEADgDAEQgCAFgBADIgBA2IgTAAIAAhVIATAAIAAAOIAGgIQADgDAEgCIAIgEIAKgBIAKABIAHAEIAGAFIAFAHIAGgHQAEgDAEgCIAIgEIAKgBQAJAAAHAEQAGADAEAGQACADAAAFIAABEgAjZA3IgBg3QAAgGgCgDQgCgEgEgCQgEgCgGAAQgHABgGACQgFADgDAEQgDAEgBAEIgBA2IgTAAIAAhVIASAAIAAAOIAHgIQAEgDAEgCIAJgEIALgBQAJAAAHAEQAHADAEAGQADAEAAAHIABAMIAAA1gAnwA3IgBg3QgBgGgBgDQgCgEgEgCQgEgCgGAAQgHABgGACQgFADgDAEQgDAEgBAEIgBA2IgUAAIAAhVIATAAIAAAOIAHgIQAEgDAEgCIAJgEIALgBQAJAAAHAEQAHADAEAGQADAEAAAHIABAMIAAA1gAphA3IAAhVIAUAAIAABVgALsg8QgFgDAAgGQAAgEAFgFQADgDAGAAQAEAAAFADQADAEAAAFQAAAGgDADQgFAEgEAAQgGAAgDgEgApgg8QgEgDAAgGQAAgEAEgFQADgDAGAAQAFAAAEADQADAEAAAFQAAAGgDADQgEAEgFAAQgGAAgDgEgAAYiZQgHgCgFgFQgFgDgDgGQgDgFAAgGIAVAAQABAGAFADQAFADAIAAQAIAAAEgCQAEgBADgDQADgDACgFQABgFAAgGIAAgMQgFAIgIAEQgGADgKABQgJAAgHgDQgIgEgFgGQgGgGgCgJQgBgJAAgLQAAgLABgJQACgIAGgGQAFgGAIgDQAHgEAJAAIAKABIAIAEIAGAFQAEADABAEIAAgOIAUAAIAABTQAAAMgCAIQgDAKgEAFQgGAGgJADQgIACgNAAQgJAAgIgBgAAgkIQgFACgDADQgCAFgCAFQgCAFAAAIQAAAGACAGQABAFADAEQADAEAFACQAEABAGABQAFAAAFgCQAEgCADgFQAEgEACgFQACgFAAgHQgBgHgBgGQgCgFgDgEQgDgEgFgBQgEgCgGAAQgFAAgFACgAhZiYIAYgwIghhRIAXAAIAQAuQADAIABAJQACgFAFgLIAVgvIAWAAIg/CBgAObjAQgHgEgFgGQgFgGgDgJQgDgJAAgLQAAgLADgJQADgIAFgGQAGgGAGgDQAIgEAJAAIAJABIAJAEIAHAFQADADABAEIAAhGIAUAAIAACQIgUAAIAAgMQgGAIgGAEQgIADgJABQgJAAgIgDgAOnkIQgEACgDADQgEAFgBAFQgCAFAAAIQAAAGACAGQABAFAEAEQADAEAEACQAFABAFABQAFAAAFgCQAEgCADgFQAEgEACgFQACgFgBgHQABgHgCgGQgCgFgDgEQgDgEgEgBQgFgCgFAAQgGAAgFACgAK9jAQgHgEgFgGQgGgGgDgJQgCgJAAgLQAAgLADgJQACgIAGgGQAGgGAGgDQAIgEAIAAIAKABIAJAEIAHAFQACADACAEIAAgOIAUAAIAABYIgUAAIAAgMQgFAIgIAEQgHADgJABQgJAAgIgDgALKkIQgGACgCADQgEAFgCAFQgBAFAAAIQAAAGABAGQACAFAEAEQADAEAEACQAFABAFABQAGAAAEgCQAFgCADgFQADgEABgFQACgFABgHQAAgHgCgGQgBgFgEgEQgDgEgFgBQgEgCgFAAQgGAAgEACgAHEjBQgKgDgGgHQgGgGgDgIQgDgKAAgJQAAgLADgJQAEgJAGgGQAGgGAKgDQAIgEALAAQAHAAAFACQAGABAGACIAAAXQgFgFgGgCQgHgEgGAAQgHAAgEADQgGABgDAEQgEAFgCAFQgCAFABAHQgBAGACAGQACAGAEADQADAEAGACQAFACAHAAQAHAAAFgCQAGgDAFgGIAAAXQgGADgHACQgFABgIABQgKgBgIgDgAC4jAQgIgEgHgHQgFgFgEgJQgDgJAAgKQAAgLADgIQAEgJAFgGQAHgHAIgDQAJgEAKAAQAKAAAJADQAIADAGAGQAGAGADAIQADAJAAALIAAAEIhGAAQAAAGACAFQACAFADADIAIAGIAJABQALAAAGgEQAGgEAFgJIARAJQgEAHgEAFQgFAFgFADQgFADgHACQgGABgIABQgKAAgJgDgADjj4IgCgIIgFgGQgDgCgEgCQgFgBgFAAQgFAAgEABQgDACgEACIgEAGIgEAIIAwAAIAAAAgAlZjAQgIgEgFgGQgFgGgDgJQgDgJAAgLQAAgLADgJQADgIAFgGQAFgGAIgDQAHgEAJAAIAKABIAIAEIAGAFQAEADABAEIAAhGIAUAAIAACQIgUAAIAAgMQgGAIgGAEQgIADgJABQgJAAgHgDgAlOkIQgEACgEADQgCAFgCAFQgCAFAAAIQAAAGACAGQABAFADAEQAEAEAEACQAEABAGABQAGAAAEgCQAEgCADgFQAEgEACgFQABgFAAgHQAAgHgBgGQgCgFgDgEQgDgEgFgBQgEgCgGAAQgFAAgFACgAo4jAQgHgEgFgGQgFgGgDgJQgDgJAAgLQAAgLADgJQADgIAFgGQAGgGAGgDQAIgEAIAAIAKABIAJAEIAHAFQADADABAEIAAgOIAUAAIAABYIgUAAIAAgMQgGAIgGAEQgIADgJABQgJAAgIgDgAorkIQgGACgCADQgEAFgCAFQgBAFAAAIQAAAGABAGQACAFAEAEQADAEAEACQAEABAGABQAGAAAEgCQAFgCADgFQADgEABgFQACgFAAgHQAAgHgBgGQgCgFgDgEQgDgEgEgBQgFgCgFAAQgGAAgEACgAr/i+IgKgEIgHgGQgEgEgBgFIAQgJQACAHAFADQAFAEAIgBQAGABAFgEQADgDAAgFQAAgGgFgDIgPgGIgLgFIgIgHQgEgCgCgEQgBgEAAgFQAAgGACgFQACgEAFgEQAFgEAFgBQAHgCAIAAQAKAAAIAEQAGADAEAHIgPAKQgBgEgEgDQgEgCgFAAQgGAAgDADQgEACAAAFQAAAFAGAEIASAHIAJAEIAIAGIADAHQACAEAAAFQAAAGgDAFQgBAFgGAEQgEAEgHACQgGACgJAAIgMgBgAtpjAQgIgEgEgGQgGgGgDgJQgCgJAAgLQAAgLACgJQADgIAGgGQAFgGAHgDQAHgEAJAAIAKABIAIAEIAHAFQADADABAEIAAgOIAVAAIAABYIgVAAIAAgMQgFAIgHAEQgHADgKABQgJAAgHgDgAtdkIQgFACgDADQgDAFgCAFQgBAFgBAIQABAGABAGQACAFADAEQADAEAFACQAEABAGABQAFAAAFgCQAEgCADgFQAEgEABgFQACgFAAgHQAAgHgCgGQgBgFgDgEQgEgEgEgBQgEgCgGAAQgGAAgEACgANbjBIAAg6QgBgGgCgDQgCgEgDgBQgFgCgFAAQgIAAgGADQgFADgDAEQgCAEgCAGIAAA2IgUAAIAAhYIATAAIAAAOIAHgIQADgDAEgCIAJgDIALgBQAJAAAIADQAGADAFAHQADAEAAAHIABAOIAAA1gAJ9jBIAAg6QgBgGgCgDQgCgEgEgBQgDgCgHAAQgHAAgFADQgGADgDAEQgCAEgCAGIAAA2IgUAAIAAiQIAUAAIAABGIAGgIQAEgDAEgCIAJgDIAKgBQAJAAAIADQAGADAEAHQADAEABAHIABAOIAAA1gAF+jBIAAhYIATAAIAABYgAFOjBIgBg6QgBgGgCgDQgCgEgDgBQgFgCgGAAQgHAAgGADQgFADgDAEQgDAEAAAGIgBA2IgUAAIAAhYIATAAIAAAOIAGgIQAEgDAEgCIAJgDIALgBQAJAAAHADQAIADADAHQAEAEAAAHIABAOIAAA1gABzjBIAAhYIAUAAIAABYgAiCjBIgBg6QgBgGgCgDQgCgEgDgBQgFgCgFAAQgIAAgGADQgFADgDAEQgCAEgBAGIgBA2IgUAAIAAiQIAUAAIAABGIAHgIQADgDAEgCIAIgDIALgBQAKAAAGADQAHADAFAHQACAEABAHIABAOIAAA1gAmZjBIgBg6QgBgGgCgDQgCgEgDgBQgFgCgFAAQgIAAgGADQgFADgDAEQgCAEgBAGIgBA2IgUAAIAAhYIATAAIAAAOIAGgIQAEgDAEgCIAJgDIALgBQAKAAAGADQAHADAFAHQACAEABAHIABAOIAAA1gAq3jBIAAhGIgPAAIAAgSIAPAAIAAgiIAVAAIAAAiIAPAAIAAASIgPAAIAABGgAvcjBIAAiIIBMAAIAAATIg2AAIAAAiIA2AAIAAATIg2AAIAABAgAF/k2QgEgEAAgFQAAgFAEgEQADgDAFgBQAFABAFADQADAEAAAFQAAAFgDAEQgFADgFABQgFgBgDgDgAB0k2QgEgEAAgFQAAgFAEgEQADgDAGgBQAFABAEADQADAEABAFQgBAFgDAEQgEADgFABQgGgBgDgDg");
	this.shape.setTransform(99,33.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,197.9,67.7);


(lib.logo3tap = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5F5F5F").s().p("AhkCRIAAi6QAAgqAdgeQAegfApAAQAqAAAdAcQAeAdAAAuQABAngeAcQgfAfgtAAIg0AAIAABYgAgohTQgQARAAAZIAAA3IA0AAQAcAAASgRQAPgRAAgXQAAgZgSgRQgQgQgXAAQgXAAgRASg");
	this.shape.setTransform(322.6,24.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5F5F5F").s().p("AhLBHQgdgfABgoQgBguAjgeQAegbAnAAQApAAAeAbQAhAeAAAuIAABiIgsAAIAAgOQgbAUghAAQgtAAgeghgAgpgpQgSASAAAXQAAAYARASQARATAZAAQAYAAASgRQASgSAAgaQAAgagTgSQgSgQgXAAQgYAAgRATg");
	this.shape_1.setTransform(298.9,20.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5F5F5F").s().p("AAxCRQgoAAgbgZQghgbAAgtIAAjAIAtAAIAABYIAsAAIAAAqIgsAAIAAA7QAAAWAGANQAMATAhAEIAHABIAAApg");
	this.shape_2.setTransform(282.1,16.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5F5F5F").s().p("AhLBHQgcgeAAgpQgBgtAigfQAfgbAnAAQAqAAAfAeQAfAfABAqIgCAPIifAAQADAUAQANQARAQAUAAQAdAAAhgWIAaAhQgoAdgtAAQgvAAgfghgAgjgxQgQAMgEARIBvAAQgEgPgNgNQgRgPgWAAQgSAAgRAOg");
	this.shape_3.setTransform(254.5,20.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5F5F5F").s().p("AhHB9QgdgeAAgsQAAgqAegbQAfgeApAAIA3AAIAAhpIAsAAIAADMQABAqgeAeQgeAfgqgBQgqAAgdgcgAgnAKQgRARgBAZQAAAcAUAQQAQAOAVAAQAYAAAQgRQARgRAAgZIAAg4Ig5AAQgWAAgRAPg");
	this.shape_4.setTransform(230.8,15.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5F5F5F").s().p("AhLBHQgdgfAAgoQABguAhgeQAfgcAnABQAogBAfAcQAiAeAAAuIAABiIgsAAIAAgOQgaAUgjAAQgsAAgfghgAgqgpQgRATAAAWQAAAYAQASQASATAZAAQAZABASgTQARgSABgZQAAgbgUgRQgSgQgXAAQgXAAgTATg");
	this.shape_5.setTransform(207,20.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5F5F5F").s().p("AgVCWIAAkrIArAAIAAErg");
	this.shape_6.setTransform(191.1,15.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5F5F5F").s().p("AhIB6QgcgeAAgpIAAjMIAsAAIAABpIA0AAQArAAAgAeQAeAcAAApQABAsgdAeQgdAcgsAAQgrABgdgggAg4A4QAAASAOARQARAUAZgBQAaABARgUQAOgQAAgXQAAgWgOgRQgSgSgdAAIg0AAg");
	this.shape_7.setTransform(175.4,15.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#5F5F5F").s().p("Ag3BlIAAhhQAAgwAggeQAbgaAqAAIAKAAIAAAoIgRACQgaAEgNARQgLARAAAZIAABgg");
	this.shape_8.setTransform(157,20);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#5F5F5F").s().p("AgVCLIAAjDIArAAIAADDgAgQhfQgHgIAAgKQAAgKAHgIQAHgHAJAAQAKAAAHAHQAHAIAAAKQAAALgHAHQgHAHgKAAQgIAAgIgHg");
	this.shape_9.setTransform(145.4,16.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5F5F5F").s().p("AhLBHQgcgfAAgoQAAguAhgeQAfgcAnABQApgBAeAcQAhAeAAAuIAABiIgsAAIAAgOQgaAUgiAAQgsAAgfghgAgpgpQgSASAAAXQAAAYAQASQASATAZAAQAZABARgTQASgSAAgZQABgbgUgRQgRgQgYAAQgYAAgRATg");
	this.shape_10.setTransform(129,20.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1D1D1C").s().p("Ag6CNIghgUIAaglQAGAFAMAFQATAJAPAAQAkABAPggQAKgTAAgYQgIAIgQAGQgOAFgKAAQgqAAgdgdQgegbAAgrIAAhkIA2AAIAABkQAAAVAOAOQAPAOASAAQAUAAAOgOQAOgPAAgUIAAhkIA2AAIAABkQAABcgIAgQgRA9g5AOQgPAEgNAAQgaAAgYgLg");
	this.shape_11.setTransform(33.6,25.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1D1D1C").s().p("AgKBmQgtgIgegXIAagjQAMAIAWAHQAZAIASgEQAMgDADgIQACgHgIgFQgFgCgegJQgggJgOgJQgagOAAgbIAFgZQAPgcAkgHQASgEAMACQAuADAZAUIgaAjQgTgIgSgDQgSgCgMADQgJADgCAGQgDAFAGAEQAGAEAcAIQAfAJAOAHQAgAQgBAeQgBAVgLAMQgTAYgjAFg");
	this.shape_12.setTransform(54.7,20.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1D1D1C").s().p("AAwBkIAAhiQAAgTgOgNQgPgPgTAAQgTAAgOAPQgOANAAATIAABiIg2AAIAAhiQAAgpAegeQAegeApAAQAqAAAeAeQAeAeAAApIAABig");
	this.shape_13.setTransform(97.8,20.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1D1D1C").s().p("AhHBIQgegeAAgqQAAgpAegeQAegeApAAQAqAAAeAeQAeAeAAApQAAAqgeAeQgeAegqAAQgpAAgegegAghghQgPAOAAATQAAAUAPAOQAOAOATAAQAUAAAOgOQAOgOAAgUQAAgTgOgOQgOgPgUAAQgTAAgOAPg");
	this.shape_14.setTransform(75.1,20.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1D1D1C").s().p("AhHB6QgegeAAgrQAAgqAegcQAegeApAAIAwAAIAAhkIA2AAIAADIQAAArgeAeQgeAegqAAQgpAAgegegAghAPQgPAOAAAUQAAAVAPAOQAOAOATAAQAUAAAOgOQAOgOAAgVIAAgxIgwAAQgTAAgOAPg");
	this.shape_15.setTransform(10.3,15.3);

	this.addChild(this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,332.8,40.9);


(lib.logo2db = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5F5F5F").s().p("AhfCWIAAkrIBKAAQAdAAAWAWQAXAWgBAfQAAAWgMATQAaAMAPAVQAPAYAAAdQAAAogcAdQgcAcgoAAgAg0BrIA0AAQAWAAAQgQQAQgQAAgWQgBgWgPgQQgQgPgWAAIg0AAgAg0gqIAfAAQAOAAAIgJQAIgKABgNQgBgNgIgKQgIgJgOAAIgfAAg");
	this.shape.setTransform(308.4,15.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5F5F5F").s().p("AhLBHQgcgfAAgoQgBgtAigeQAfgcAnAAQAqAAAfAeQAfAfABAqIgCAPIifAAQADAUAQANQARAPAUAAQAcAAAigVIAaAgQgoAegtAAQgwAAgeghgAgjgxQgQAMgEARIBvAAQgEgPgNgNQgRgPgWAAQgSAAgRAOg");
	this.shape_1.setTransform(254.5,20.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5F5F5F").s().p("AhIB9QgdgeAAgsQAAgqAfgbQAggeAoAAIA3AAIAAhpIAtAAIAADMQAAAqgeAeQgdAfgrgBQgqAAgegcgAgmAKQgSASAAAYQAAAcATAQQARAOAUAAQAYAAARgRQAQgRAAgZIAAg4Ig5AAQgVAAgRAPg");
	this.shape_2.setTransform(285.7,15.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5F5F5F").s().p("AhHB9QgdgeAAgsQAAgqAegbQAfgeApAAIA3AAIAAhpIAsAAIAADMQABAqgeAeQgeAfgqgBQgrAAgcgcgAgnAKQgRASgBAYQAAAcAUAQQAQAOAVAAQAXAAARgRQARgRAAgZIAAg4Ig5AAQgWAAgRAPg");
	this.shape_3.setTransform(230.8,15.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5F5F5F").s().p("AhLBHQgdgfAAgoQABguAhgeQAfgbAnAAQAoAAAfAbQAiAeAAAuIAABiIgsAAIAAgOQgcAUghAAQgsAAgfghgAgqgpQgRASAAAXQAAAYAQASQASATAZAAQAYAAATgSQARgSABgZQAAgbgUgRQgSgQgXAAQgXAAgTATg");
	this.shape_4.setTransform(207.1,20.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5F5F5F").s().p("AgVCWIAAkrIAqAAIAAErg");
	this.shape_5.setTransform(191.1,15.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5F5F5F").s().p("AhIB6QgcgeAAgpIAAjMIAsAAIAABpIA0AAQArAAAgAeQAeAcAAApQAAAsgdAeQgdAcgrAAQgrABgdgggAg4A4QAAASAOARQARAUAZgBQAaABARgUQAOgQAAgXQAAgXgOgQQgSgRgdgBIg0AAg");
	this.shape_6.setTransform(175.5,15.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5F5F5F").s().p("Ag3BlIAAhhQAAgwAhgdQAbgbApAAIAKAAIAAAoQgGAAgKACQgaAEgOARQgLARAAAZIAABgg");
	this.shape_7.setTransform(157,20);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#5F5F5F").s().p("AgVCLIAAjDIArAAIAADDgAgQhfQgHgIAAgKQAAgKAHgIQAHgHAJAAQAKAAAHAHQAHAIAAAKQAAALgHAHQgHAHgKAAQgIAAgIgHg");
	this.shape_8.setTransform(145.4,16.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#5F5F5F").s().p("AhLBHQgcgfAAgoQAAguAhgeQAfgbAnAAQApAAAeAbQAhAeAAAuIAABiIgsAAIAAgOQgbAUghAAQgtAAgeghgAgpgpQgSASAAAXQAAAYAQASQASATAZAAQAYAAASgSQASgSAAgZQAAgbgTgRQgRgQgYAAQgYAAgRATg");
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


(lib.logo1v = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag6CNIghgUIAaglQAGAFAMAFQATAJAPAAQAkABAPggQAKgTAAgYQgIAIgQAGQgOAFgKAAQgqAAgdgdQgegbAAgrIAAhkIA2AAIAABkQAAAVAOAOQAPAOASAAQAUAAAOgOQAOgPAAgUIAAhkIA2AAIAABkQAABcgIAgQgRA9g5AOQgPAEgNAAQgaAAgYgLg");
	this.shape.setTransform(33.6,25.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgKBmQgtgIgegXIAagjQAMAIAWAHQAZAIASgEQAMgDADgIQACgHgIgFQgFgCgegJQgggJgOgJQgagOAAgbIAFgZQAPgcAkgHQASgEAMACQAuADAZAUIgaAjQgTgIgSgDQgSgCgMADQgJADgCAGQgDAFAGAEQAGAEAcAIQAfAJAOAHQAgAQgBAeQgBAVgLAMQgTAYgjAFg");
	this.shape_1.setTransform(54.7,20.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAwBkIAAhiQAAgTgOgNQgPgPgTAAQgTAAgOAPQgOANAAATIAABiIg2AAIAAhiQAAgpAegeQAegeApAAQAqAAAeAeQAeAeAAApIAABig");
	this.shape_2.setTransform(97.8,20.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhHBIQgegeAAgqQAAgpAegeQAegeApAAQAqAAAeAeQAeAeAAApQAAAqgeAeQgeAegqAAQgpAAgegegAghghQgPAOAAATQAAAUAPAOQAOAOATAAQAUAAAOgOQAOgOAAgUQAAgTgOgOQgOgPgUAAQgTAAgOAPg");
	this.shape_3.setTransform(75.1,20.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhHB6QgegeAAgrQAAgqAegcQAegeApAAIAwAAIAAhkIA2AAIAADIQAAArgeAeQgeAegqAAQgpAAgegegAghAPQgPAOAAAUQAAAVAPAOQAOAOATAAQAUAAAOgOQAOgOAAgVIAAgxIgwAAQgTAAgOAPg");
	this.shape_4.setTransform(10.3,15.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5F5F5F").s().p("AiDiZIAzAAIBCCcQAKAYAEAYQAFgWAKgaIBDicIAyAAIiEEzg");
	this.shape_5.setTransform(286.4,15.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5F5F5F").s().p("AhMBHQgcgeAAgpQABgtAhgeQAggdAmAAQAqAAAfAfQAgAfAAAqIgDAPIifAAQAEAUAQAOQAQAPAVgBQAdAAAhgUIAaAgQgpAdgsABQgvgBggghgAgjgxQgQANgEAQIBvAAQgEgPgOgMQgQgPgWgBQgSABgRANg");
	this.shape_6.setTransform(254.6,20.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5F5F5F").s().p("AhHB9QgdgeAAgtQgBgpAggcQAfgdAoAAIA3AAIAAhoIAsAAIAADKQAAArgdAeQgeAegqABQgqAAgdgdgAgmAKQgSARAAAZQAAAcATAQQAQAOAVAAQAYAAARgRQAQgSAAgZIAAg3Ig5AAQgWAAgQAPg");
	this.shape_7.setTransform(230.9,15.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#5F5F5F").s().p("AhLBHQgdgfAAgoQAAguAigeQAfgcAnAAQApAAAeAcQAiAfAAAtIAABiIgtAAIAAgOQgaAVgiAAQgtgBgeghgAgqgpQgRASAAAXQAAAYAQASQASAUAZgBQAZAAARgSQASgRAAgaQAAgbgTgRQgSgQgXAAQgYAAgSATg");
	this.shape_8.setTransform(207.1,20.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#5F5F5F").s().p("AgVCWIAAkrIArAAIAAErg");
	this.shape_9.setTransform(191.2,15.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5F5F5F").s().p("AhIB6QgcgeAAgqIAAjKIAsAAIAABoIA0AAQArAAAgAeQAeAbAAApQAAAtgdAeQgdAdgrAAQgrgBgdgfgAg4A4QAAATAOARQARASAZABQAagBARgSQAOgRAAgXQAAgXgPgRQgRgRgdAAIg0AAg");
	this.shape_10.setTransform(175.5,15.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#5F5F5F").s().p("Ag3BlIAAhhQAAgwAhgeQAbgaApAAIAKAAIAAAoIgRACQgyAJAAA2IAABgg");
	this.shape_11.setTransform(157,20);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#5F5F5F").s().p("AgUCLIAAjDIAqAAIAADDgAgQhfQgIgHAAgLQAAgKAIgHQAHgIAJAAQAKAAAHAIQAHAHABAKQgBALgHAHQgHAHgKAAQgJAAgHgHg");
	this.shape_12.setTransform(145.5,16.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#5F5F5F").s().p("AhLBHQgcgfgBgoQAAguAigeQAfgcAnAAQApAAAeAcQAiAeAAAuIAABiIgsAAIAAgOQgcAVghAAQgtgBgeghgAgqgpQgRASAAAXQAAAYARASQARAUAZgBQAYAAATgSQASgRAAgaQgBgbgTgRQgRgQgYAAQgXAAgTATg");
	this.shape_13.setTransform(129.1,20.3);

	this.addChild(this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,299.6,40.9);


(lib.logo = function() {
	this.initialize();

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5E5F5F").s().p("AhlBfQgmgpAAg2QAAg9AtgoQAqgmA1ABQA3AAAqAoQAqApAAA5QAAAEgDAQIjVAAQAFAbAVASQAWAUAdAAQAmAAAsgdIAiAsQg1Aog8AAQhAAAgpgtgAgvhCQgWARgFAWICVAAQgGgUgSgRQgWgUgcAAQgaAAgWASg");
	this.shape.setTransform(338.7,28);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5E5F5F").s().p("AhgCnQgngoAAg7QAAg4AqgmQApgnA3AAIBKAAIAAiLIA7AAIAAEQQAAA4gnApQgoAog4AAQg6AAgngmgAg0AOQgYAXAAAhQAAAlAaAWQAWASAdAAQAfAAAXgXQAWgXAAghIAAhLIhMAAQgeAAgXAVg");
	this.shape_1.setTransform(307,21.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5E5F5F").s().p("AhlBfQgmgpAAg2QAAg+AtgoQApglA1ABQA2gBApAlQAtAoAAA+IAACDIg7AAIAAgTQgkAcgtAAQg9AAgogtgAg4g3QgXAYAAAfQAAAfAWAZQAXAaAiAAQAhAAAYgXQAYgZAAgiQAAgkgagYQgYgVgfAAQggAAgYAag");
	this.shape_2.setTransform(275.3,28);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5E5F5F").s().p("AgcDJIAAmRIA5AAIAAGRg");
	this.shape_3.setTransform(254,21);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5E5F5F").s().p("AhhCjQgmgoAAg3IAAkQIA7AAIAACLIBHAAQA5AAAqAoQAqAmAAA3QAAA7gnAnQgnAng6AAQg6AAgngqgAhMBLQAAAZAUAWQAWAZAiABQAjAAAWgaQAUgWAAgeQAAgfgUgWQgYgYgmAAIhHAAg");
	this.shape_4.setTransform(233.1,21.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5E5F5F").s().p("AhKCHIAAiBQAAhBAsgoQAlgjA2AAIAPAAIAAA2QgLAAgMACQgiAGgTAWQgPAWAAAiIAACBg");
	this.shape_5.setTransform(208.5,27.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5E5F5F").s().p("AgcC6IAAkFIA6AAIAAEFgAgWiAQgKgJAAgOQAAgOAKgKQAKgKAMAAQANAAAKAKQAJAJAAAOQAAAOgJAKQgKAKgNAAQgMAAgKgKg");
	this.shape_6.setTransform(193,22.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5E5F5F").s().p("AhlBfQgmgpAAg2QAAg+AtgoQApglA1ABQA2gBApAlQAtAoAAA+IAACDIg7AAIAAgTQgkAcgtAAQg9AAgogtgAg4g3QgYAYAAAfQAAAfAWAZQAYAaAiAAQAhAAAYgXQAYgZAAgiQAAgkgagYQgYgVgfAAQggAAgYAag");
	this.shape_7.setTransform(171.1,28);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#010202").s().p("AhOC9IgtgbIAkgxQALAIAMAGQAZALAVABQAwABAVgrQANgZAAggQgLALgUAHQgTAHgOAAQg4AAgognQgoglAAg5IAAiGIBJABIAACFQAAAbATATQATATAZAAQAaAAATgTQATgTAAgbIAAiFIBJgBIgBCGQAAB7gLArQgWBShMASQgUAFgSAAQgiAAghgOg");
	this.shape_8.setTransform(45.2,35.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#010202").s().p("AgOCIQg7gKgpgfIAjgvQAQAMAcAIQAjAKAXgFQARgEAEgKQADgJgLgHQgGgDgqgMQgqgLgTgNQgjgTAAglIAHggQAUgmAwgKQAYgFARADQAgACAbAKQAWAIANALIgiAuQgZgLgZgDQgYgEgQAFQgNADgDAIQgCAIAIAFQAIAGAmALQApALASAKQArAUgCAqQgBAagOASQgZAggwAGg");
	this.shape_9.setTransform(73.4,28);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#010202").s().p("ABACGIAAiEQAAgYgTgTQgTgTgaAAQgZAAgUATQgSATgBAYIAACEIhHAAIAAiEQgBg2AogpQAogoA4AAQA4AAAoAoQAoApAAA2IAACEg");
	this.shape_10.setTransform(131,27.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#010202").s().p("AhfBhQgpgpAAg4QAAg3ApgpQAogoA3ABQA4gBApAoQAoApAAA3QAAA4goApQgpAng4AAQg3AAgogngAgtgsQgTASAAAaQAAAaATAUQATATAaAAQAbAAATgTQATgUAAgaQAAgagTgSQgTgUgbAAQgaAAgTAUg");
	this.shape_11.setTransform(100.6,28);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#010202").s().p("AhgCjQgogoAAg5QAAg4AognQApgoA3AAIBBAAIAAiFIBIAAIAAEMQAAA5goAoQgoAog5AAQg3AAgpgogAgtAUQgTATAAAbQAAAbATAUQATATAaAAQAaAAAUgTQASgUABgbIAAhBIhBAAQgaAAgTATg");
	this.shape_12.setTransform(14,21.3);

	this.addChild(this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.3,0.9,352.5,54.6);


(lib.img3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap3();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,188,167);


(lib.img2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,87,159);


(lib.img1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,103,143);


(lib.cta = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AlqA7IAAhbIAQAAIAAAKQADgFAGgEQAFgDAHAAQAMAAAIAKQAIAJAAAPQAAAQgIAJQgIAKgMAAQgFAAgFgCQgFgDgFgFIAAAigAlUgPQgFAFAAAKQAAAKAFAFQAEAGAHAAQAGAAAEgFQAEgFAAgLQAAgJgEgFQgEgGgHAAQgGAAgEAFgAHRAXQgHgJAAgOQAAgPAJgJQAJgKANAAQAPAAAJAKQAJAKgBATIgsAAQAAAIAEAEQAEAEAGAAQAEAAADgCQADgCACgFIARADQgDAKgHAFQgIAFgLAAQgSAAgIgMgAH4gEQgBgIgDgEQgEgEgGAAQgFAAgEAEQgEAEAAAIIAbAAIAAAAgAD6AhQgEgBgBgDQgCgDgBgEIgBgNIAAgbIgIAAIAAgOIAIAAIAAgOIASgKIAAAYIAMAAIAAAOIgMAAIABAjIABACIADABIAHgCIACAOQgGADgIAAQgFAAgEgCgABiAXQgHgJAAgOQAAgPAJgJQAJgKANAAQAPAAAJAKQAJAKgBATIgsAAQAAAIAEAEQAEAEAGAAQAEAAADgCQADgCACgFIARADQgDAKgHAFQgIAFgLAAQgSAAgIgMgACJgEQgBgIgDgEQgEgEgGAAQgFAAgEAEQgEAEAAAIIAbAAIAAAAgAAdAZQgIgJAAgQQAAgPAIgJQAJgKAPAAQANAAAHAGQAHAFADALIgRADQgBgFgDgDQgDgDgFAAQgHAAgEAFQgEAFAAAKQAAAKAEAFQAEAFAHAAQAFAAADgDQADgDACgHIARADQgCAMgIAHQgIAGgNAAQgPAAgJgKgAh7AXQgHgJAAgOQAAgPAJgJQAJgKANAAQAPAAAJAKQAJAKgBATIgsAAQAAAIAEAEQAEAEAGAAQAEAAADgCQADgCACgFIARADQgDAKgHAFQgIAFgLAAQgSAAgIgMgAhUgEQgBgIgDgEQgEgEgGAAQgFAAgEAEQgEAEAAAIIAbAAIAAAAgAkZAXQgHgJAAgOQAAgPAJgJQAIgKAOAAQAPAAAJAKQAIAKAAATIgtAAQAAAIAEAEQAFAEAGAAQAEAAADgCQADgCABgFIASADQgEAKgHAFQgHAFgLAAQgSAAgIgMgAjzgEQAAgIgEgEQgEgEgFAAQgGAAgEAEQgEAEAAAIIAbAAIAAAAgAGaAhIgbhBIATAAIAQAsIARgsIASAAIgbBBgAFkAhIAAhBIARAAIAABBgAFAAhIAAhbIARAAIAABbgADNAhIAAhBIARAAIAABBgAgJAhIAAghQAAgKgBgDQgBgDgDgCQgCgCgEAAQgFAAgDADQgEACgBAEQgCAEAAAKIAAAeIgSAAIAAhBIARAAIAAAKQAJgMANAAQAGAAAFACQADADACADQADADABAEIABAMIAAAogAigAhIAAhBIARAAIAABBgAjUAhIAAhBIARAAIAAAJQAEgGAEgDQADgCAEAAQAGAAAGAEIgGAPQgEgDgEAAQgEAAgCACQgDACgBAGQgCAFAAAPIAAAVgAmKAhIgOgVIgOAVIgUAAIAYghIgXggIAVAAIAMASIANgSIAVAAIgXAgIAZAhgAoIAhIAAhbIBFAAIAAAQIgzAAIAAAVIAvAAIAAAPIgvAAIAAAYIA0AAIAAAPgAFkgpIAAgRIARAAIAAARgADNgpIAAgRIARAAIAAARgAiggpIAAgRIARAAIAAARg");
	this.shape.setTransform(74.5,15.5);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("AoaCQQg9AAgqgqQgqgqAAg8QAAg6AqgrQAqgqA9gBIQ2AAQA7ABArAqQArArAAA6QAAA8grAqQgrAqg7AAg");
	this.shape_1.setTransform(73.5,14.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(5,0,137,29);


// stage content:
(lib.AB_tap_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.loopNumber = 0;
	}
	this.frame_306 = function() {
		this.loopNumber = this.loopNumber + 1;
		
		if(this.loopNumber==3){
			this.stop();
		}
	}
	this.frame_343 = function() {
		this.gotoAndPlay(2);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(306).call(this.frame_306).wait(37).call(this.frame_343).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,1).p("AXXTdMgutAAAMAAAgm5MAutAAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(344));

	// white copy
	this.instance = new lib.white();
	this.instance.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(336).to({_off:false},0).to({alpha:1},5).wait(3));

	// cta
	this.instance_1 = new lib.cta();
	this.instance_1.setTransform(149.5,90.5,1,1,0,0,0,73.5,14.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(294).to({_off:false},0).to({alpha:1},11).wait(39));

	// logo airblade
	this.instance_2 = new lib.logo();
	this.instance_2.setTransform(150.3,77.3,0.487,0.487,0,0,0,176.2,27.3);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1},10).wait(87).to({alpha:0},9).to({_off:true},1).wait(157).to({_off:false,y:47.3},0).to({alpha:1},10).wait(70));

	// text0
	this.instance_3 = new lib.txt0();
	this.instance_3.setTransform(150.1,139.5,0.882,0.882,0,0,0,99,33.9);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(44).to({_off:false},0).to({scaleX:1,scaleY:1,y:143.5,alpha:1},9).wait(44).to({alpha:0},9).to({_off:true},1).wait(237));

	// txt3
	this.instance_4 = new lib.logo3tap();
	this.instance_4.setTransform(150.3,214.9,0.66,0.66,0,0,0,166.3,20.4);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(210).to({_off:false},0).to({alpha:1},5).wait(32).to({alpha:0},5).to({_off:true},1).wait(91));

	// img3
	this.instance_5 = new lib.img3();
	this.instance_5.setTransform(237,149.5,0.557,0.557,0,0,0,94,83.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(18).to({_off:false},0).to({alpha:1},8).wait(12).to({alpha:0},6).to({_off:true},1).wait(159).to({_off:false,scaleX:1,scaleY:1,x:397,y:106.5,alpha:1},0).to({x:157},6,cjs.Ease.get(1)).wait(40).to({x:-103},6).to({_off:true},1).wait(16).to({_off:false,scaleX:0.56,scaleY:0.56,x:237,y:159.5,alpha:0},0).to({alpha:1},8).wait(63));

	// txt2
	this.instance_6 = new lib.logo2db();
	this.instance_6.setTransform(148,214.9,0.66,0.66,0,0,0,159,20.4);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(162).to({_off:false},0).to({alpha:1},5).wait(28).to({alpha:0},5).to({_off:true},1).wait(143));

	// img2
	this.instance_7 = new lib.img2();
	this.instance_7.setTransform(142.8,160.5,0.557,0.557,0,0,0,43.5,79.5);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(14).to({_off:false},0).to({alpha:1},8).wait(14).to({alpha:0},6).to({_off:true},1).wait(113).to({_off:false,scaleX:1,scaleY:1,x:359.5,y:106.5,alpha:1},0).to({x:149.5},6,cjs.Ease.get(1)).wait(35).to({x:-50.5},6).to({_off:true},1).wait(65).to({_off:false,scaleX:0.56,scaleY:0.56,x:147.8,y:170.5,alpha:0},0).to({alpha:1},8).wait(67));

	// txt1
	this.instance_8 = new lib.logo1v();
	this.instance_8.setTransform(149.8,214.5,0.66,0.66,0,0,0,149.8,20.4);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(114).to({_off:false},0).to({alpha:1},5).wait(28).to({alpha:0},5).to({_off:true},1).wait(191));

	// img1
	this.instance_9 = new lib.img1();
	this.instance_9.setTransform(62.9,159.1,0.557,0.557,0,0,0,51.6,71.5);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(10).to({_off:false},0).to({alpha:1},8).wait(16).to({alpha:0},6).to({_off:true},1).wait(67).to({_off:false,regX:51.5,scaleX:1,scaleY:1,x:359.5,y:116.5,alpha:1},0).to({x:149.5},6,cjs.Ease.get(1)).wait(35).to({x:-60.5},6).to({_off:true},1).wait(109).to({_off:false,regX:51.6,scaleX:0.56,scaleY:0.56,x:72.9,y:169.1,alpha:0},0).to({alpha:1},8).wait(71));

	// white
	this.instance_10 = new lib.white();
	this.instance_10.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(344));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149.5,124.5,301,251);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;