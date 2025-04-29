// Configurable parameters from the interface
var params = {
    circleBlurPath: "sb/starflare.jpg"
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

    let endTime = 79396
	let startTime = 77979
	let duration = 1417

    for (let st = 42549; st < 45384; st += duration) {
        fillCircle(st, st + duration, 220, .2)
    }

    for (let st = 43258; st < 45384; st += duration) {
        fillCircle(st, st + duration, 280, .3)
    }

    for (let st = 43967; st < 45384; st += duration) {
        fillCircle(st, st + duration, 340, .4)
    }

    for (let st = 44675; st < 45384; st += duration) {
        fillCircle(st, st + duration, 400, .5)
    }

    // first before-breaktime
    for (let st = startTime; st < endTime; st += duration) {
        fillCircle(st, st + duration, 220, .2)
    }
    for (let st = startTime; st < endTime; st += duration) {
        fillCircle(st, st + duration, 320, .5)
    }
    for (let st = startTime; st < endTime; st += duration) {
        fillCircle(st, st + duration, 420, .8)
    }

    //first after-breaktime

    for (let st = 99236; st < 102070; st += duration) {
        fillCircle(st, st + duration, 220, .2)
    }

    for (let st = 100653; st < 102070; st += duration) {
        fillCircle(st, st + duration, 280, .3)
    }

    for (let st = 101008; st < 102070; st += duration) {
        fillCircle(st, st + duration, 340, .4)
    }

    for (let st = 101008; st < 102070; st += duration) {
        fillCircle(st, st + duration, 400, .5)
    }

}

function generateCircle(startTime, endTime, startAngle = 0, total = 7, cx = 320, cy = 240, circleRadius = 120, size = .2) {
    const radius = 0
    const endRadius = circleRadius
    const positions = []
    const beat = (endTime - startTime) / total
    for (let angleDegrees = startAngle; angleDegrees < 360 + startAngle; angleDegrees += 360 / total) {
        const angleRadians = angleDegrees * Math.PI / 180;
        positions.push({
            startX: cx + radius * Math.cos(angleRadians),
            startY: cy + radius * Math.sin(angleRadians),
            endX: cx + endRadius * Math.cos(angleRadians),
            endY: cy + endRadius * Math.sin(angleRadians)
        })
    }

    const c = Sprite.createSprite(params.circleBlurPath)
    const colors = [
        { r: 253, g: 252, b: 229 },
        { r: 255, g: 166, b: 49 },
        { r: 250, g: 210, b: 79 },
        { r: 141, g: 63, b: 22 },
    ]
    //c.setScale(startTime, startTime, .05, .05)
    for (let i = 0; i < positions.length; i++) {
        const position = positions[i]
        const colorStart = colors[Sprite.randomInt(0, colors.length - 1)];
        const colorEnd = colors[Sprite.randomInt(0, colors.length - 1)];

        if (i % 2 == 0) {

            c.addScaleTween(startTime + beat * i, (startTime + beat * i) + beat, size, 0, "easein")
            c.addColorTween(startTime + beat * i, (startTime + beat * i) + beat, colorStart.r, colorStart.g, colorStart.b, colorEnd.r, colorEnd.g, colorEnd.g)
        } else {
            c.addScaleTween(startTime + beat * i, (startTime + beat * i) + beat, 0, size, "easeout")
            c.addColorTween(startTime + beat * i, (startTime + beat * i) + beat, colorEnd.r, colorEnd.g, colorEnd.b, colorStart.r, colorStart.g, colorStart.g)
        }
        if (i + 1 < positions.length) {
            c.addMoveXTween(startTime + beat * i, (startTime + beat * i) + beat, position.endX, positions[i + 1].endX)
            c.addMoveYTween(startTime + beat * i, (startTime + beat * i) + beat, position.endY, positions[i + 1].endY)
        } else {
            c.addMoveXTween(startTime + beat * i, (startTime + beat * i) + beat, position.endX, positions[0].endX)
            c.addMoveYTween(startTime + beat * i, (startTime + beat * i) + beat, position.endY, positions[0].endY)
        }

    }

    c.addBlendMode(startTime, startTime)
}

function fillCircle(startTime, endTime, radius, size) {
    const sprites = []
    const total = 12
    const offset = (endTime - startTime) / total
    for (let st = startTime; st < endTime; st += offset) {
        generateCircle(st, st + (endTime - startTime), 90, total, 320, 240, radius, size)
    }
    return sprites
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