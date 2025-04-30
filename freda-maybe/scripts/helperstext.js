// Configurable parameters from the interface
var params = {
    bpm: 169.4,
    startTime: 0,
    endTime: 100000,
    textureName: "sb/bg_transparent.png",
    backgroundBorder: "sb/bg_transparent_border.png",
    kiaiTimeStart: 46801,
    endKiaiTime: 69476,
    endSongTime: 175819,
    isAdditiveBlend: true};

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

    explossiveText("GET READY", 40601, 41132, true, 1.5)
    explossiveText("GO", 46270, 46801, true, 2)

    explossiveText("Maybe we'll shine forever'", 69830, 73499, true, 1)
	explossiveText("Maybe we'll shine forever'", 72664, 73499, true, 1)
	explossiveText("Maybe we'll shine forever'", 75499, 78333, true, 1)
	explossiveText("Maybe we'll shine forever'", 78333, 80813, true, 1)


    explossiveText("MAYBE WE'LL SHINE FOREVER", 132185, 134665, true, 1)
    explossiveText("GET READY", 136260, 136614, true, 1.4)
    explossiveText("GO", 137145, 137500, true, 1.8)
}



const durationQuarterNote = 60000 / params.bpm

function getTextContainer(textConfig) {
    let totalWidth = 0;
    const letters = Sprite.createText(textConfig);

    for (let i = 0; i < letters.length; i++) {
        totalWidth += letters[i].width * textConfig.scale;
        if (i < letters.length - 1) {
            totalWidth += textConfig.spacing;
        }
    }

    return {
        letters,
        totalWidth
    };
}

function explossiveText(text, startTime, endTime, isCentered = true, size = .5, hasPulse = false) {

    const textParams = {
        text: text,
        fontName: "Denike",
        fontSize: 25 * size,
        spacing: -20,
        scale: size,
        shadow: true,
        shadowColor: [255, 255, 255, 1],
        shadowOffset: [5, 0],
        shadowBlur: 5,
    };

    const { letters, totalWidth } = getTextContainer(textParams);
    const yPosition = 240;
    let currentX = 320 - (totalWidth / 2);

    // Aplicar a cada letra
    for (let i = 0; i < letters.length; i++) {
        const letter = letters[i];
        const finalY = Sprite.random(0, 480)
        
        // Calcular posición central de este carácter
        const letterCenterX = currentX + (letter.width * textParams.scale / 2);
    
        letter.addFadeTween(startTime - durationQuarterNote / 2, startTime, 0, 1, "easein");
        letter.addFadeTween(endTime, endTime + durationQuarterNote * 8, 1, 0, "easeout");
        letter.addScaleTween(startTime, endTime, textParams.scale, textParams.scale);
        letter.addMoveXTween(startTime, endTime, letterCenterX, letterCenterX);
        if (params.isAdditiveBlend) {
            letter.addBlendMode(startTime, startTime);
        }

        if (!hasPulse) {
            if (i % 2 == 0) {
                letter.addMoveYTween(startTime - durationQuarterNote / 2, startTime, yPosition - 50, yPosition, "easeout");
            } else {
                letter.addMoveYTween(startTime - durationQuarterNote / 2, startTime, yPosition + 50, yPosition, "easeout");
            }
        }

        if (!hasPulse) {
            letter.addMoveYTween(endTime, endTime + durationQuarterNote * 8, yPosition, finalY, "circin");
        }
        
        // Avanzar al siguiente carácter
        currentX += (letter.width * textParams.scale) + textParams.spacing;
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