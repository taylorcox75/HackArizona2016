var arDrone = require('ar-drone');

var client  = arDrone.createClient();
client.createRepl();
//client.takeoff();

var keypress = require('keypress');

// make `process.stdin` begin emitting "keypress" events
keypress(process.stdin);

// listen for the "keypress" event

process.stdin.on('keypress', function (ch, key) {
  //console.log('got "keypress"', key);
  if(key.name === 'up'){
  	up();
	  console.log('Enter Command:')
  }else if(key.name === 'left'){
  	left();
  }else if(key.name === 'down'){
  	down();
  }else if(key.name === 'right'){
  	right();
  }else if(key.name === null){
      nothing();
  }else if(key.name === 'space'){
      space();
  }else if(key.name === 'w'){
      altUp();
  }else if(key.name === 's'){
      altDown();
  }else if(key.name === 'a'){
      counterClockwise();
  }else if(key.name === 'd'){
      clockwise();
  }else if(key.name === 't'){
      takeOff();
  }
  if (key && key.ctrl && key.name == 'c') {
    process.stdin.pause();
  }
});

function takeOff(){
	console.log("\ntakeOff");
	client.takeoff();
}
function counterClockwise(){
	console.log("\ncounterClockwise");
	client.counterClockwise(0.75);
}
function clockwise(){
	console.log("\nclockwise");
	client.clockwise(0.75);
}
function altUp(){
	console.log("\naltUp");
	client.up(0.75);
}
function altDown(){
	console.log("\naltDown");
	client.down(0.75);
}
function space(){
	console.log("\nland");
	client.land();
}
function up(){
	console.log("\nforward");
	client.front(1)
}
function left(){
	console.log("\nleft");
	client.left(0.75)
}
function down(){
	console.log("\ndown");
	client.back(1)
}
function right(){
	console.log("\nright");
	client.right(0.75)

}
function nothing() {
    console.log('nothing')
}

process.stdin.setRawMode(true);
process.stdin.resume();
