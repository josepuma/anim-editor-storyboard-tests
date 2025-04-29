// Configurable parameters from the interface
var params = {
    sparkleBlurPath: "sb/sparkle-blur.png",
    roundBlurPath: "sb/round-blur.png",
    circleBlurPath: "sb/circle_blur.png",
    bpm: 169.4
};

const colorsSparkle = [ { r: 255,g: 255,b: 255}, { r: 237,g: 181,b: 69} ]
const colors = [ { r: 66,g: 212,b: 245}, { r: 247,g: 121,b: 226} ]
const colorGlow = { r: 250, g: 212, b: 69 }
const durationQuarterNote = 60000 / params.bpm

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
    for(let st = 46801; st < 68058; st+= durationQuarterNote){
		const xDistance = Sprite.random(-450, 120)
		const yDistance = Sprite.random(0, 480)
		generateFlare(st, st + durationQuarterNote * 2, xDistance, yDistance)
	}
}



function generateFlare(startTime, endTime, xDistance, yDistance) {
    const color = colorsSparkle[Sprite.randomInt(0, colorsSparkle.length - 1)]
	const startSize = 0
	const endSize = Sprite.random(0.3, .6)
	const x = 280
	const y = 480
	const distance = 10 * endSize
	const roundOpacity = .4
	const endX = Sprite.random(120, 720)
	//Generate the trail first to get when it finishes
	const trailing = generateTrail(startTime, endTime, x, y, x - xDistance, y - yDistance)

    const sp = Sprite.createSprite(params.sparkleBlurPath)
	sp.addColorTween(startTime, startTime, color.r, color.g, color.b, color.r, color.g, color.b)
	sp.addScaleTween(startTime, endTime, startSize, endSize)
	sp.addRotateTween(startTime, endTime, 0, 1)
	sp.addMoveXTween(startTime, endTime, x, (x + xDistance), "easeout")
	sp.addMoveYTween(startTime, endTime,  y, y - yDistance, "easein")
	sp.addBlendMode(startTime, startTime)

    const sp2 = Sprite.createSprite(params.sparkleBlurPath)
	sp2.addColorTween(startTime, startTime, color.r, color.g, color.b, color.r, color.g, color.b)
	sp2.addScaleTween(startTime, endTime, startSize, endSize)
	sp2.addRotateTween(startTime, endTime, 1, 0)
	sp2.addMoveXTween(startTime, endTime, x, x + xDistance, "easeout")
	sp2.addMoveYTween(startTime, endTime,  y, y - yDistance, "easein")
	sp2.addBlendMode(startTime, startTime)

	
	const rp = Sprite.createSprite(params.roundBlurPath)
	rp.addColorTween(startTime, endTime, colors[1].r, colors[1].g, colors[1].b, colors[0].r, colors[0].g, colors[0].b)
	rp.addScaleTween(startTime, endTime, startSize, endSize)
	rp.addScaleTween(trailing.lastStartTime, trailing.lastStartTime + durationQuarterNote, endSize, endSize * 2, "easein")
	rp.addFadeTween(trailing.lastStartTime, trailing.lastStartTime + durationQuarterNote, roundOpacity, 0, "easeout")
	rp.addMoveTween(startTime, endTime, x, y, x - xDistance, y - yDistance)
	rp.addBlendMode(startTime, startTime)

	
	const rp2 = Sprite.createSprite(params.roundBlurPath)
	rp2.addColorTween(startTime, endTime, colors[1].r, colors[1].g, colors[1].b, colors[0].r, colors[0].g, colors[0].b)
	rp2.addScaleTween(startTime, endTime, startSize, endSize)
	rp2.addFadeTween(startTime, trailing.lastStartTime, roundOpacity, roundOpacity)
	rp2.addScaleTween(trailing.lastStartTime + durationQuarterNote , trailing.lastStartTime + durationQuarterNote * 2, endSize, endSize * 2, "easein")
	rp2.addFadeTween(trailing.lastStartTime + durationQuarterNote, trailing.lastStartTime + durationQuarterNote * 2, roundOpacity, 0, "easeout")
	rp2.addMoveTween(startTime, endTime, x + distance, y - distance, (x + distance) - xDistance, (y - distance) - yDistance)
	rp2.addBlendMode(startTime, startTime)

	
	const rp3 = Sprite.createSprite(params.roundBlurPath)
	rp3.addColorTween(startTime, endTime, colors[1].r, colors[1].g, colors[1].b, colors[0].r, colors[0].g, colors[0].b)
	rp3.addScaleTween(startTime, endTime, startSize, endSize)
	rp3.addFadeTween(startTime, trailing.lastStartTime, roundOpacity, roundOpacity)
	rp3.addScaleTween(trailing.lastStartTime + durationQuarterNote * 2, trailing.lastStartTime + durationQuarterNote * 4, endSize, endSize * 2, "easein")
	rp3.addFadeTween(trailing.lastStartTime + durationQuarterNote * 2, trailing.lastStartTime + durationQuarterNote * 4, roundOpacity, 0, "easeout")
	rp3.addMoveTween(startTime, endTime, (x + distance * 2), (y - distance * 2), (x + distance * 2) - xDistance, (y - distance * 2) - yDistance)
	rp3.addBlendMode(startTime, startTime)

	
	const cp = Sprite.createSprite(params.circleBlurPath)
	cp.addColorTween(startTime, startTime, colorGlow.r, colorGlow.g, colorGlow.b, colorGlow.r, colorGlow.g, colorGlow.b)
	cp.addFadeTween(startTime, endTime, .2, .2)
	cp.addScaleTween(startTime, endTime, startSize, endSize)
	cp.addMoveXTween(startTime, endTime, x, x - xDistance, y - yDistance, "easeout")
	cp.addMoveYTween(startTime, endTime,  y, y - yDistance, "easin")
	cp.addBlendMode(startTime, startTime)

}

function generateTrail(startTime, endTime, x, y, endX, endY){
    const color = colorsSparkle[Sprite.randomInt(0, colorsSparkle.length - 1)]
	const angle = 30
	const rotation = angle * (Math.PI / 180)
	let lastStartTime = 0
    for(let i = 0; i < 200; i++){
		const size = Sprite.random(0.01, .2)
		const sp = Sprite.createSprite(params.sparkleBlurPath)
		const duration = endTime - startTime
		const beat  = duration / 4
		const lengthX = endX - x / 2
		sp.addColorTween(startTime, endTime, color.r, color.g, color.b, color.r, color.g, color.b)
		sp.addScaleTween(startTime, endTime, .1, size, .1, size)
		sp.addRotateTween(startTime, endTime, 0, rotation)
		sp.addMoveXTween(startTime, endTime, -120, endX, "easeout")
		sp.addMoveYTween(startTime, endTime, endY, endY, "easein")
		sp.addBlendMode(startTime, startTime)
		startTime += 10
		endTime += 10
		lastStartTime = endTime
	}

    return {
        lastStartTime: lastStartTime
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