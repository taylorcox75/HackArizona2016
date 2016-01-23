var arDrone = require('ar-drone');
var keypress = require('keypress');

/**
 * This code creates an arDrone client (reffered to as a Repl in ar-drone), and looks for keypresses in stdin
 */
var client = arDrone.createClient();
client.createRepl();
keypress(process.stdin);
client._ref.fly = false;

/**
 * These lines of code look for a keypress on stdin.  When one is recieved, it is determined
 * the type of command, and it goes to the corresponding function call.
 */
process.stdin.on('keypress', function (ch, key) {
    //console.log('got "keypress"', key);
    if (key.name === 'space' && client._ref.fly) {
        console.log('Client Landed')
        client.land()
    } else if (key.name === 'space') {
        console.log('Spinning Up!')
        client.takeoff()
    } else if (key.name === 'w') {
        console.log('\nGoing Up!')
        client.up(1)
    } else if (key.name === 's') {
        console.log('Going Down!')
        client.down(1)
    } else if (key.name === 'a') {
        console.log('Rotating CCW')
        client.counterClockwise(1)
    } else if (key.name === 'd') {
        console.log('Rotating CW')
        client.clockwise(1)
    } else if (key.name === 'up') {
        console.log('Going Forward')
        client.front(1)
    } else if (key.name === 'down') {
        console.log('Going Backwards')
        client.back(1)
    } else if (key.name === 'left') {
        console.log('To The Left <-')
        client.left(1)
    } else if (key.name === 'right') {
        console.log('To The Right ->')
        client.right(1)
    }
    else if (key && key.ctrl && key.name == 'c') {
        console.log('EMERGENCY LANDING')
        client.land();

    }

     //This timesout the drone wanting to keep moving after the button is released
    setTimeout(function () {
        client.stop();
        console.log("drone>")
    }, 1250);


});


process.stdin.setRawMode(true);
process.stdin.resume();

