// Configurable parameters from the interface
var params = {
    bpm: 169.4,
    startTime: 0,
    endTime: 100000,
    background: "sb/bg_blur.jpg",
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
    generatePulse(46801, 69476)
    generatePulse(137500, 160174)
}

function generatePulse(startTime, endTime) {
    const durationQuarterNote = 60000 / params.bpm
    const opacityFlash = Sprite.random(.15, .2)
    const sizeGrow = Sprite.random(.01,.02)
    let flash = Sprite.createSprite(params.background)
    flash.startLoop(startTime, (endTime - startTime) / durationQuarterNote)
    flash.addFadeTween(0, durationQuarterNote, opacityFlash, 0, "circout")
    flash.addScaleTween(0, durationQuarterNote, 854 / flash.width, (854 / flash.width) + sizeGrow, "easeout")
    flash.endLoop()
    flash.addBlendMode(startTime, endTime)
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