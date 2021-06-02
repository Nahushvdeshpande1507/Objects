var b1, b2, b3, b4, b5, b6, b7, b8, b9, b10;

function setup(params) {

  createCanvas(1280,573);

  b1 = new Building();
  b1.position = 2.5;
  b1.floors = 18;

  b2 = new Building();
  b2.position = 4.5;
  b2.floors = 16;

  b3 = new Building();
  b3.position = 7;
  b3.floors = 20;

  b4 = new Building();
  b4.position = 9;
  b4.floors = 17;

  b5 = new Building();
  b5.position = 11;
  b5.floors = 19;

  b6 = new Building();
  b6.position = 13.5;
  b6.floors = 19;

  b7 = new Building();
  b7.position = 15.5;
  b7.floors = 17;

  b8 = new Building();
  b8.position = 17.5;
  b8.floors = 20;

  b9 = new Building();
  b9.position = 20;
  b9.floors = 16;

  b10 = new Building();
  b10.position = 22;
  b10.floors = 18;

}

function draw() {

background("lightblue");

b1.display();
b2.display();
b3.display();
b4.display();
b5.display();
b6.display();
b7.display();
b8.display();
b9.display();
b10.display();

}