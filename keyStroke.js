var arDrone = require('ar-drone');
var keypress = require('keypress');

/**
 * This code creates an arDrone client (reffered to as a Repl in ar-drone), and looks for keypresses in stdin
 */
var client = arDrone.createClient();
client.createRepl();
keypress(process.stdin);

/**
 * These lines of code look for a keypress on stdin.  When one is recieved, it is determined
 * the type of command, and it goes to the corresponding function call.
 */
process.stdin.on('keypress', function (ch, key) {
    //console.log('got "keypress"', key);
    if (key.name === 't') {
        client.takeoff();
        console.log('\nClient Took Off\nEnter a Command:')
    } else if (key.name === 'space') {
        client.land();
        console.log('\nClient Landed\nEnter a Command:')
    } else if (key.name === 'w') {
        altUp();
        console.log('\nGoing Up!\nEnter a Command:')
    } else if (key.name === 's') {
        altDown();
        console.log('\nGoing Down!\nEnter a Command:')
    } else if (key.name === 'a') {
        counterClockwise();
        console.log('\nRotating CounterCW\nEnter a Command:')
    } else if (key.name === 'd') {
        clockwise();
        console.log('\nRotating ClockWise\nEnter a Command:')
    } else if (key.name === 'up') {
        console.log('\nGoing Forward')//\nEnter a Command:')
        up();
    } else if (key.name === 'down') {
        console.log('\nGoing Backwards')//\nEnter a Command:')
        down();
    } else if (key.name === 'left') {
        console.log('\nTo The Left <-')//\nEnter a Command:')
        left();
    } else if (key.name === 'right') {
        console.log('\nTo The Right ->')//\nEnter a Command:')
        right();
    }
    // This timesout the drone wanting to keep moving after the button is released
    setTimeout(function () {
        client.stop();
        console.log("\nEnter a Command:")
    }, 1250);

});
function takeOff() {
    console.log("\ntakeOff");
    client.takeoff();
}
function counterClockwise() {
    console.log("\ncounterClockwise");
    client.counterClockwise(0.75);
}
function clockwise() {
    console.log("\nclockwise");
    client.clockwise(0.75);
}
function altUp() {
    console.log("\naltUp");
    client.up(0.75);
}
function altDown() {
    console.log("\naltDown");
    client.down(0.75);
}
function space() {
    console.log("\nland");
    client.land();
}
function up() {
    console.log("\nforward");
    client.front(1)
}
function left() {
    console.log("\nleft");
    client.left(0.75)
}
function down() {
    console.log("\ndown");
    client.back(1)
}
function right() {
    console.log("\nright");
    client.right(0.75)

}
function nothing() {
    console.log('nothing')
}

process.stdin.setRawMode(true);
process.stdin.resume();
