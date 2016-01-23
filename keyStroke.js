var arDrone = require('ar-drone');
var keypress = require('keypress');

/**
 * This code creates an arDrone client (reffered to as a Repl in ar-drone), and looks for keypresses in stdin
 * As the ar-drone author stated,  set navdata to true so we recieve information
 * Fly status is set to false so that the space bar can be dual purpose
 */
var client = arDrone.createClient();
client.createRepl();
keypress(process.stdin);
client.config('general:navdata_demo', 'TRUE');
client._ref.fly = false;

/**
 * These lines of code look for a keypress on stdin.  When one is recieved, it is determined
 * the type of command, and it goes to the corresponding function call.
 */
process.stdin.on('keypress', function (ch, key) {
    // console.log('got "keypress"', key);
    if (key.name === 'space' && client._ref.fly) {
        client.land();
                console.log('Client Landed');
        console.log("Battery: " + client._lastBattery);
    } else if (key.name === 'space') {
        console.log('Spinning Up!');
        client.takeoff();
        console.log("Battery: " + client._lastBattery);
    } else if (key.name === 'w') {
        console.log('\nGoing Up!');
        client.up(1)
    } else if (key.name === 's') {
        console.log('Going Down!');
        client.down(1)
    } else if (key.name === 'a') {
        console.log('Rotating CCW');
        client.counterClockwise(.5)
    } else if (key.name === 'd') {
        console.log('Rotating CW');
        client.clockwise(.5)
    } else if (key.name === 'up') {
        console.log('Going Forward');
        client.front(1)
    } else if (key.name === 'down') {
        console.log('Going Backwards');
        client.back(1)
    } else if (key.name === 'left') {
        console.log('To The Left <-');
        client.left(1)
    } else if (key.name === 'right') {
        console.log('To The Right ->');
        client.right(1)
    } else if (key && key.ctrl && key.name == 'c') {
        console.log('EMERGENCY LANDING');
        client.land();
    } else if (key.name == 'o') {
        console.log('Flip Left');
        client.animate('flipLeft', 1000);
        client.stop();
    } else if (key.name == 'p') {
        console.log('Flip Right');
        client.animate('flipRight', 1000);
        client.stop();
    } else if (key.name == 'b') {
        console.log("Battery: " + client._lastBattery);
        client.stop();
    } else if (key.name == 'x') {
        console.log("Stopped!");
        client.stop();
    }
    //This was used to make the input not infinitely execute, but caused to much of a lag
    //This timesout the drone wanting to keep moving after the button is released
    // setTimeout(function () {
    //     client.stop();
    //     console.log("drone>")
    // }, 1300);

});
process.stdin.setRawMode(true);
process.stdin.resume();

