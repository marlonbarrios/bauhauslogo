const canvasSketch = require('canvas-sketch');
// Start the sketch
//canvasSketch(sketch, settings);
const settings = {
  dimensions: [ 1024, 1024 ],

   // The file name without extension, defaults to current time stamp
   name: 'simple.png',
   // Optional prefix applied to the file name
   prefix: 'bauhaus',

   suffix: '.draft'

};

const sketch = () => {
  return ({ context, width, height }) => {

// background
    context.fillStyle = '#E7E5df';
    context.fillRect(0, 0, width, height);
//porportion for lines based on width and height
  let proportion = height;
   if (width < height) {
      proportion = width;
   }

   //draw lines
 let thickness =  0.018;

 //geometries

//blue circle
context.strokeStyle = '#1a477f';
context.lineWidth = proportion * thickness;
context.beginPath();
context.ellipse(width/2, height/2, width * 0.4, height * 0.4, 0, 0, 2 * Math.PI);

context.stroke();

//yellow triangle
context.strokeStyle = '#f1be1f';
context.lineWidth = proportion * thickness;;
context.beginPath();
context.moveTo(width * 0.60, height * 0.14);
context.lineTo(width * 0.125, height * 0.5);
context.lineTo(width * 0.60, height * 0.86);
context.closePath();
context.stroke();





//red square


context.strokeStyle = '#db3744';
context.lineWidth = proportion * thickness;;
context.strokeRect(width * 0.42 , height * 0.30, width * 0.40, height * 0.40);





   
  };
};

canvasSketch(sketch, settings);
