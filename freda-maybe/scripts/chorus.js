// Configurable parameters from the interface
var params = {
    text: "Maybe the sun will shine",
    fontName: "Nyght Serif Dark Italic",
    fontSize: 35,
    scale: 0.6,
    spacing: -10,
    centerX: 320,
    baselineY: 240,
    startTime: 0,
    endTime: 100000,
    shadow: true,
    shadowColor: [255, 255, 255, 1],
    shadowOffset: [5, 0],
    shadowBlur: 10,
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
    
}

function generateLyrics(){
    const letters = Sprite.createText(params);
    let totalWidth = 0;
    for (let i = 0; i < letters.length; i++) {
        totalWidth += letters[i].width * params.scale;
        if (i < letters.length - 1) {
            totalWidth += params.spacing;
        }
    }

    let currentX = params.centerX - (totalWidth / 2);

    // Aplicar a cada letra
    for (let i = 0; i < letters.length; i++) {
        const letter = letters[i];
        
        // Calcular posición central de este carácter
        const letterCenterX = currentX + (letter.width * params.scale / 2);
    
        // Aplicar escala
        letter.addScaleTween(params.startTime, params.endTime, params.scale, params.scale);
        letter.addMoveXTween(params.startTime, params.endTime, letterCenterX, letterCenterX);
        //letter.addBlendMode(params.startTime, params.endTime);

        //letter.addMoveYTween(params.startTime, params.endTime, letterPositionY, letterPositionY);
        
        // Avanzar al siguiente carácter
        currentX += (letter.width * params.scale) + params.spacing;
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