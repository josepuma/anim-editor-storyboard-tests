// Configurable parameters from the interface
var params = {
    bpm: 169.4,
    startTime: 0,
    endTime: 100000,
    textureName: "sb/bg_transparent.png",
    backgroundBorder: "sb/bg_transparent_border.png",
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
    generateBackground()
    generateFlash()
}

function generateBackground(){
    const bg = Sprite.createSprite(params.textureName);

    bg.addFadeTween(0, 11372, 0, 1, "easein");
    bg.addFadeTween(38601, 40601, 1, 0.5);
    bg.addFadeTween(41132, 42132, 0.5, 1);
    bg.addFadeTween(80813, 82230, 1, 0, "easeout");
    bg.addFadeTween(11372, 126162, 1, 1);
    bg.addFadeTween(126163, 126163, 0, 0);
    bg.addFadeTween(137500, 175819, 1, 1);

    // Scale tweens
    bg.addScaleTween(0, 35464, 1480 / bg.width, 1180 / bg.width);
    bg.addScaleTween(35464, params.endSongTime, 854 / bg.width, 854 / bg.width);

    // MoveX tweens
    bg.addMoveXTween(0, 35464, 440, 440);
    bg.addMoveXTween(35464, 35464, 320, 320);
}

function generateFlash(){
    let durationQuarterNote = 60000 / params.bpm //354
    const bg = Sprite.createSprite(params.backgroundBorder);
    bg.startLoop(69830, 30)
    bg.addScaleTween(0, durationQuarterNote * 2, 854 / bg.width, 954 / bg.width, "easeout");
    bg.addFadeTween(0, durationQuarterNote * 2, 0.5, 0, "easeout");
    bg.endLoop()
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