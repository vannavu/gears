//dimensions of grid (e.g. a 5x10 grid)
var rows = 10;
var cols = 10;

//center coordinates of any circle being drawn
var x;
var y;

//center coordinates of first circle being drawn
var xstart = 100;
var ystart = 100;

// distance between center coordinates
var xspacing = 200;
var yspacing = 200;

var radius = 100;
var strokeWidth = '1px'
var strokeColor = 'white';

// create grid and draw circles
for(var row = 1; row <= rows; row++) {
    y = ystart + (row - 1) * yspacing;

    for(var col = 1; col <= cols; col++) {
        x = xstart + (col - 1) * xspacing;
        new Path.Circle(new Point(x, y), radius).strokeColor = strokeColor;
    }
}
