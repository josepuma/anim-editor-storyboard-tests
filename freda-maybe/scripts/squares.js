// Configurable parameters from the interface
var params = {
    bpm: 169.4,
    startTime: 0,
    endTime: 100000,
    dotSpritePath: "sb/square.png",
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
    squares(35464, 36527)
    squares(46092, 46801)
    squares(57961, 59201)
    squares(57961, 59201, true, 407, 840)
    squares(67704, 69121)
    squares(69121, 69830, true, 407, 840)
    squares(137500, 138917)
    squares(148837, 150254)
    squares(148837, 150254, true, 407, 840)
}

function squares(startTime, endTime, isInvert = false, rangeX = -407, rangeY = 140) {
    const duration = endTime - startTime;
    const colors = [
        { r: 253, g: 252, b: 229 },
        { r: 255, g: 166, b: 49 },
        { r: 250, g: 210, b: 79 },
        { r: 141, g: 63, b: 22 },
    ];

    for (let i = 0; i < 80; i++) {
        const height = Sprite.random(0.1, 0.5);
        const width = Sprite.random(0.1, 0.25);
        const sq = Sprite.createSprite(params.dotSpritePath);
        const y = Sprite.random(480, 960);
        const easings = ["circin", "circout"];
        const color = colors[Sprite.randomInt(0, colors.length - 1)];
        const easing = easings[Sprite.randomInt(0, easings.length - 1)];
        const lengthSquare = duration / 2;

        sq.addScaleVecTween(startTime, endTime, width, height, width, height, easing);

        if (isInvert) {
            const angle = -45;
            const rotation = angle * (Math.PI / 180);
            const x = Sprite.random(rangeX, rangeY);
            sq.addMoveXTween(startTime, endTime, x, x - 880, easing);
            sq.addMoveYTween(startTime, endTime, y, y - 880, easing);
            sq.addRotateTween(startTime, startTime, rotation, rotation);
        } else {
            const angle = 45;
            const rotation = angle * (Math.PI / 180);
            const x = Sprite.random(rangeX, rangeY);
            sq.addMoveXTween(startTime, endTime, x, x + 880, easing);
            sq.addMoveYTween(startTime, endTime, y, y - 880, easing);
            sq.addRotateTween(startTime, startTime, rotation, rotation);
        }

        sq.addFadeTween(endTime - lengthSquare, endTime, 1, 0, easing);
        sq.addColorTween(startTime, startTime, color.r, color.g, color.b, color.r, color.g, color.b);
        sq.addBlendMode(startTime, startTime);
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