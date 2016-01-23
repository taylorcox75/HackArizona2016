var keypress = require('keypress');

// make `process.stdin` begin emitting "keypress" events
keypress(process.stdin);

// listen for the "keypress" event

process.stdin.on('keypress', function (ch, key) {
  //console.log('got "keypress"', key);
  if(key.name === 'up'){
  	up();
  }else if(key.name === 'left'){
  	left();
  }else if(key.name === 'down'){
  	down();
  }else if(key.name === 'right'){
  	right();
  }else if(key.name === null){
      nothing();
  }
  if (key && key.ctrl && key.name == 'c') {
    process.stdin.pause();
  }
});


function up(){
	console.log("forward");
}
function left(){
	console.log("counter clockwise");
}
function down(){
	console.log("down");
}
function right(){
	console.log("clockwise");
}
function nothing() {
    console.log('nothing')
}

process.stdin.setRawMode(true);
process.stdin.resume();
