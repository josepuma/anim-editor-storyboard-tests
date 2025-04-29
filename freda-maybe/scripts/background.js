// Configurable parameters from the interface
var params = {
    bpm: 169.4,
    startTime: 0,
    endTime: 100000,
    textureName: "sb/bg_blur.jpg",
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
    let durationQuarterNote = 60000 / params.bpm
    const bg = Sprite.createSprite(params.textureName);

    // Opacity tweens
    bg.addFadeTween(0, 11372, 0, 1);
    bg.addFadeTween(11372, 126162, 1, 1);
    bg.addFadeTween(126163, 126163, 0, 0);
    bg.addFadeTween(137500, 175819, 1, 1);

    // Scale tweens
    bg.addScaleTween(0, 35464, 1180 / bg.width, 1180 / bg.width);
    bg.addScaleTween(35464, 35464, 854 / bg.width, 854 / bg.width);

    // MoveX tweens
    bg.addMoveXTween(0, 35464, 440, 440);
    bg.addMoveXTween(35464, 35464, 320, 320);
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