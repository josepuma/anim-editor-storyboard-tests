// Configurable parameters from the interface
var params = {
    background: "sb/bg_transparent.png",
    backgroundBorder: "sb/bg_transparent_border.png",
    backgroundOriginal: "sb/bg-max-res.jpg",
    sparkleBlurPath: "sb/sparkle-blur.png"
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
    generateFlash(35464, 36881)
    generateFlash(46801, 47864)
    generateFlash(58138, 59201)
    generateFlash(69476, 71601)

    generateFlash(80813, 82230)
    
    generateFlash(103488, 104905)

    generateFlash(137500, 138917)
    generateFlash(148837, 150254)
    generateFlash(160174, 161237)
}

function generateFlash(startTime, endTime){
    let flash = Sprite.createSprite(params.backgroundOriginal)
	flash.addScaleTween(startTime, endTime, 854 / flash.width , 954 / flash.width, "easeout")
	flash.addFadeTween(startTime, endTime, 1, 0, "easeout")
	flash.addBlendMode(startTime, startTime)

	
	let flash2 = Sprite.createSprite(params.backgroundBorder)
	flash2.addScaleTween(startTime, endTime, 854 / flash2.width , 854 / flash2.width, "easeout")
	flash2.addFadeTween(startTime, endTime, 1, 0, "easeout")
	flash2.addBlendMode(startTime, startTime)

	
	let flash3 = Sprite.createSprite(params.backgroundBorder)
	flash3.addScaleTween(startTime + 100, endTime + 100, 854 / flash3.width , 954 / flash3.width, "easeout")
	flash3.addFadeTween(startTime + 100, endTime + 100, 1, 0, "easeout")
	flash3.addBlendMode(startTime, startTime)

	let flash4 = Sprite.createSprite(params.backgroundBorder)
	flash4.addScaleTween(startTime + 200, endTime + 200, 854 / flash4.width , 1254 / flash4.width, "easeout")
	flash4.addFadeTween(startTime + 200, endTime + 200, 1, 0, "easeout")
	flash4.addBlendMode(startTime, startTime)

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