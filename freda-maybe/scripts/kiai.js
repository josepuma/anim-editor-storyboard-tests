// Configurable parameters from the interface
var params = {
    bpm: 169.4,
    startTime: 0,
    endTime: 100000,
    dotSpritePath: "sb/starflare.jpg",
    kiaiTimeStart: 46801,
    endKiaiTime: 69476,
    endSongTime: 175819
};



/**
 * Initialization function - runs when the script is loaded
 */
function init() {
    
}

/**
 * Main function - runs when the script is activated
 * This is where you will create your effects
 */
function main() {
    for (let i = 0; i < 480; i += 60) {
        //createExplosion(46801, 58138, i);
    }
}

function createExplosion(startTime, endTime, y = 240) {
    const size = 0.03;
    const duration = endTime - startTime;
    const beat = duration / 4;
    const distance = Sprite.random(-120, 180);
    let i = 0;
    while (startTime < endTime) {
        const dot = Sprite.createSprite(params.dotSpritePath);

        dot.addScaleTween(startTime, startTime + beat, 0, size);
        dot.addMoveXTween(startTime, startTime + beat * 8, -127, 780, "linear");

        dot.addMoveYTween(startTime, startTime + beat, y, y - distance, "easeout");
        dot.addMoveYTween(startTime + beat, (startTime + beat) + (beat * 2), y - distance, y, "easein");
        dot.addMoveYTween((startTime + beat) + (beat * 2), (startTime + beat) + (beat * 4), y, y + distance, "easeout");
        dot.addMoveYTween((startTime + beat) + (beat * 4), (startTime + beat) + (beat * 8), y + distance, 0, "easein");

        dot.addBlendMode(startTime, startTime);
        startTime += beat / 8;
        i++;
    }
}

/**
 * Function to get parameters from the interface
 * Do not modify this function unless you add new parameters
 * that you want to be configurable from the interface
 */
function getParameters() {
    return params;
}

/**
 * Function to update parameters from the interface
 * Do not modify this function
 */
function updateParameter(name, value) {
    if (params.hasOwnProperty(name)) {
        params[name] = value;
    }
}