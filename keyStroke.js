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
        console.log('\nClient Took Off')//\nEnter a Command:')
        client.takeoff()
    } else if (key.name === 'space') {
        console.log('\nClient Landed')//\nEnter a Command:')
        client.land()
    } else if (key.name === 'w') {
        console.log('\nGoing Up!')//\nEnter a Command:')
        client.up(1)
    } else if (key.name === 's') {
        console.log('\nGoing Down!')//\nEnter a Command:')
        client.down(1)
    } else if (key.name === 'a') {
        console.log('\nRotating CCW')//\nEnter a Command:')
        client.counterClockwise(1)
    } else if (key.name === 'd') {
        console.log('\nRotating CW')//\nEnter a Command:')
        client.clockwise(1)
    } else if (key.name === 'up') {
        console.log('\nGoing Forward')//\nEnter a Command:')
        client.front(1)
    } else if (key.name === 'down') {
        console.log('\nGoing Backwards')//\nEnter a Command:')
        client.back(1)
    } else if (key.name === 'left') {
        console.log('\nTo The Left <-')//\nEnter a Command:')
        client.left(1)
    } else if (key.name === 'right') {
        console.log('\nTo The Right ->')//\nEnter a Command:')
        client.right(1)
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
