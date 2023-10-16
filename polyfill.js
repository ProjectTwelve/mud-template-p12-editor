// navigator
if (typeof navigator === 'undefined') {
    global.navigator = { userAgentData: undefined };
}

// crypto.getRandomValues
if (typeof crypto === "undefined" || typeof crypto.getRandomValues !== 'function') {
    const { randomBytes } = require('crypto');
    const c = require("crypto")
    global.crypto = c;

    global.crypto.getRandomValues = function getRandomValues(typedArray) {
        const buffer = randomBytes(typedArray.length);
        typedArray.set(buffer);
    }
}

