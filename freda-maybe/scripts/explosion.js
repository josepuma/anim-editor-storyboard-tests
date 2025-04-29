// Configurable parameters from the interface
var params = {
    bpm: 169.4,
    startTime: 131185,
    endTime: 137145,
    textureName: "sb/bg_transparent.png",
    backgroundBorder: "sb/bg_transparent_border.png",
    kiaiTimeStart: 46801,
    endKiaiTime: 69476,
    endSongTime: 175819
};

const colors = [
    { r: 253, g: 252, b: 229 },
    { r: 255, g: 166, b: 49 },
    { r: 250, g: 210, b: 79 },
    { r: 141, g: 63, b: 22 },
]

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
    generateStreaks(params.startTime, params.endTime)
    generateStreaksOut(params.startTime  + 1250, params.endTime)
    generateSparkles(params.startTime, params.endTime)
    generateSparklesOut(params.startTime + 1250, params.endTime)
    generateStars(params.startTime, params.endTime)
}

function circlePositionsRadius(total = 36, startAngle = 0, radius = 200, cx = 320, cy = 240){
	const positions = [] 
	for(let angleDegrees = startAngle; angleDegrees < 360 + startAngle; angleDegrees += 360/total){
		const angleRadians = angleDegrees * Math.PI / 180;
		positions.push({
			angle: angleRadians,
			startX: cx + radius * Math.cos(angleRadians),
			startY: cy + radius * Math.sin(angleRadians)
		})
	}
	return positions
}

function generateStreaks(startTime, endTime){
	const startPositions = circlePositionsRadius(72, 0, 200, 320, 240)
	const duration = 1250
	while(startTime < endTime){
		const line = Sprite.createSprite("sb/line.png", "centreLeft")
		const pos = startPositions[Sprite.randomInt(0, startPositions.length - 1)]
		const size = Sprite.random(0.25, 0.6)
		const sizeHeight = Sprite.random(0.25, 2)
		const color = colors[Sprite.randomInt(0, colors.length - 1)]
		line.addFadeTween(startTime, startTime + duration / 4, 0, 1)
		line.addMoveTween(startTime, startTime + duration, pos.startX, pos.startY, 320, 240)
		line.addScaleVecTween(startTime, startTime + duration, sizeHeight, size, 0, size)
		line.addRotateTween(startTime, startTime, pos.angle, pos.angle)
		line.addColorTween(startTime, startTime, color.r, color.g, color.b, color.r, color.g, color.b)
		line.addBlendMode(startTime, startTime)
		startTime += 10
	}
}

function generateStreaksOut(startTime, endTime){
	const startPositions = circlePositionsRadius(72, 0, 200, 320, 240)
	const duration = 450
	while(startTime < endTime){
		const line = Sprite.createSprite("sb/line-b.png", "centreLeft")
		const pos = startPositions[Sprite.randomInt(0, startPositions.length - 1)]
		const size = Sprite.random(0.25, 0.6)
		const sizeHeight = Sprite.random(0.25, 3)
		const color = colors[Sprite.randomInt(0, colors.length - 1)]
		line.addFadeTween(startTime, startTime + duration / 4, 0, 1)
		line.addMoveTween(startTime, startTime + duration, 320, 240, pos.startX, pos.startY)
		line.addScaleVecTween(startTime, startTime + duration, 0, 0, sizeHeight, size)
		line.addRotateTween(startTime, startTime, pos.angle, pos.angle)
		line.addColorTween(startTime, startTime, color.r, color.g, color.b, color.r, color.g, color.b)
		line.addBlendMode(startTime, startTime)
		startTime += 20
	}
}

function generateSparkles(startTime, endTime){
	const startPositions = circlePositionsRadius(72, 0, 300, 320, 240)
	const duration = 1250
	while(startTime < endTime){
		const line = Sprite.createSprite("sb/starflare.jpg")
		const pos = startPositions[Sprite.randomInt(0, startPositions.length - 1)]
		const size = Sprite.random(0.1, 1.5)
		const sizeHeight = Sprite.random(0.05, .3)
		const opacity = Sprite.random(0.1, .8)
		const color = colors[Sprite.randomInt(0, colors.length - 1)]
		line.addFadeTween(startTime, startTime + duration / 4, 0, opacity)
		line.addMoveTween(startTime, startTime + duration, pos.startX, pos.startY, 320, 240, "easeout")
		line.addScaleTween(startTime, startTime + duration, 0, size)
		line.addColorTween(startTime, startTime, color.r, color.g, color.b, color.r, color.g, color.b)
		line.addBlendMode(startTime, startTime)
		startTime += 25
	}
}

function generateSparklesOut(startTime, endTime){
	const startPositions = circlePositionsRadius(72, 0, 300, 320, 240)
	const duration = 950
	while(startTime < endTime){
		const line = Sprite.createSprite("sb/starflare.jpg")
		const pos = startPositions[Sprite.randomInt(0, startPositions.length - 1)]
		const size = Sprite.random(0.1, 1)
		const sizeHeight = Sprite.random(0.05, .3)
		const opacity = Sprite.random(0.1, .4)
		const color = colors[Sprite.randomInt(0, colors.length - 1)]
		line.addFadeTween(startTime, startTime + duration / 4, 0, opacity)
		line.addMoveTween(startTime, startTime + duration, 320, 240, pos.startX, pos.startY, "easein")
		line.addScaleTween(startTime, startTime + duration, size, 0)
		line.addColorTween(startTime, startTime, color.r, color.g, color.b, color.r, color.g, color.b)
		line.addBlendMode(startTime, startTime)
		startTime += 25
	}
}

function generateStars(startTime, endTime){
	const startPositions = circlePositionsRadius(160, 0, 400, 320, 240)
	const duration = 950
	while(startTime < endTime){
		const line = Sprite.createSprite("sb/star.png", "centreLeft")
		const pos = startPositions[Sprite.randomInt(0, startPositions.length - 1)]
		const size = Sprite.random(0.1, 1)
		const opacity = Sprite.random(0.1, 0.1)
		const color = colors[Sprite.randomInt(0, colors.length - 1)]
		line.addFadeTween(startTime, startTime + duration / 4, 0, opacity)
		line.addMoveTween(startTime, startTime + duration, pos.startX, pos.startY, 320, 240, "easein")
		line.addScaleVecTween(startTime, startTime + duration, size, size, size, 0, "easein")
		line.addRotateTween(startTime, startTime, pos.angle, pos.angle)
		line.addColorTween(startTime, startTime, color.r, color.g, color.b, color.r, color.g, color.b)
		line.addBlendMode(startTime, startTime)
		//line.setOrigin("centreLeft")
		startTime += 20
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