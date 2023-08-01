export const passwordLength = (pass) => {
    return (pass.length >= 10)
}

export const upperAndLowerCase = (pass) => {
    let hasLowercase = false;
    let hasUppercase = false;
    let hasUpperAndLowerCase = true

    for (let char of pass) {
        if (char >= "a" && char <= "z") {
            hasLowercase = true;
        } else if (char >= "A" && char <= "Z") {
            hasUppercase = true;
        }
    }

    if (!hasLowercase || !hasUppercase) {
        hasUpperAndLowerCase = false;
    }

    return hasUpperAndLowerCase
}

export const consecutiveTwoCharEquals = (pass) => {
    let verifyResult = true

    for (let i = 0; i < pass.length - 1; i++) {
        if (pass[i].toLowerCase() === pass[i + 1].toLowerCase() && /[a-zA-Z]/.test(pass[i])) {
            verifyResult = false
        }
    }

    return verifyResult
}

export const quantityOfNumbers = (pass) => {
    let verifyResult = true

    let numCount = 0;

    for (let char of pass) {
        if (!isNaN(char) && char !== "0") {
            numCount++;
        }
    }

    if (numCount < 4) {
        verifyResult = false;
    }

    return verifyResult
}

export const consecutiveNumbers = (pass) => {
    let verifyResult = true

    for (let i = 0; i < pass.length - 1; i++) {
        if (
            !isNaN(pass[i]) &&
            !isNaN(pass[i + 1]) &&
            pass[i] !== "0" &&
            pass[i] === pass[i + 1]
        ) {
            verifyResult = false;
        }
    }

    return verifyResult
}

export const consecutiveSpecialChar = (pass) => {
    const specialChars = "!@#$%^&*-_+=?"
    let specialCount = 0
    let verifyResult = true

    for (let i = 0; i < pass.length; i++) {
        if (specialChars.includes(pass[i])) {
            specialCount++;
            if (i > 0 && i < pass.length - 1) {
                if (specialChars.includes(pass[i - 1]) || specialChars.includes(pass[i + 1])) {
                    verifyResult = false;
                }
            }
        }
    }

    if (specialCount < 2) {
        verifyResult = false;
    }

    return verifyResult
}

export const withNoBlanckSpaces = (pass) => {
    let verifyResult = true

    if (pass.includes(" ")) {
        verifyResult = false
    }

    return verifyResult
}

export const withNoZero = (pass) => {
    let verifyResult = true

    if (pass.includes("0")) {
        verifyResult = false
    }

    return verifyResult
}