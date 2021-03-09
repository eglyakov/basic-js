const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
    constructor(direct = true) {
        this.direct = direct;
    }   

    encrypt(message, key) {
        message = message.toUpperCase();
        key = key.toUpperCase();

        while (key.length < message.length) {
            key += key;
        }
        
        let 
        result = '',
        encryptCode = 0,
        j = 0;

        for (let i = 0; i < message.length; i++) {
            let messCode = message.charCodeAt(i);

            if (messCode >= 65 && messCode <= 90) {
                let setKeyCode = key.charCodeAt(j) - 65;

                if (messCode + setKeyCode > 90) {
                    encryptCode = messCode + setKeyCode - 26;
                } else {
                    encryptCode = messCode + setKeyCode;
                }
                result += String.fromCharCode(encryptCode);
                j++;

            } else {
                result += message[i];
            }
        }

        return this.direct ? result : result.split('').reverse().join('');
    }   

    decrypt(message, key) {
        message = message.toUpperCase();
        key = key.toUpperCase();

        while (key.length < message.length) {
            key += key;
        }
        
        let 
        result = '',
        decryptCode = 0,
        j = 0;

        for (let i = 0; i < message.length; i++) {
            let messCode = message.charCodeAt(i);

            if (messCode >= 65 && messCode <= 90) {
                let setKeyCode = key.charCodeAt(j) - 65;

                if (messCode - setKeyCode < 65) {
                    decryptCode = messCode - setKeyCode + 26;
                } else {
                    decryptCode = messCode - setKeyCode;
                }
                result += String.fromCharCode(decryptCode);
                j++;

            } else {
                result += message[i];
            }
        }

        return this.direct ? result : result.split('').reverse().join('');
    }
}

module.exports = VigenereCipheringMachine;
