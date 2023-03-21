
// Create a button to generate the 2 different random passwords
// display the two passwords in the spaces below
// create a form to adjust the password length
// create options to toggle symbols and numbers

// CharCodes: 
//  "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z" -- 65 to 90

// "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y" "z" -- 97 to 122

//  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9" -- 48 to 57
 
//  "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
// "/" -- 33 to 46 && 58 to 64 && 91 to 96 && 123 to 126

const characterRange = document.querySelector('#characterRange');
const characterNumber = document.querySelector('#characterNumber');
const form = document.querySelector('#passwordGeneratorForm');

const passwordDisplayLeft = document.querySelector('#passwordDisplayOne');
const passwordDisplayRight = document.querySelector('#passwordDisplayTwo');

const useUppercaseEl = document.querySelector('#useUppercase');
const useSymbolsEl = document.querySelector('#useSymbols');
const useNumbersEl = document.querySelector('#useNumbers');
const generateBtn = document.querySelector('#generatBtn');


const matchCharacterInput = (evt) => {
    const value = evt.target.value
    characterRange.value = value
    characterNumber.value = value
}

// CharCode array push
const ArrayFromLowToHigh = (low, high) => {
    const array = []
    for (let i = low; i <= high; i++) {
        array.push(i)
    }
    return array
}

// CharCode variables and array concat
const uppercase_CharCode = ArrayFromLowToHigh(65, 90);
const lowercase_CharCode = ArrayFromLowToHigh(97, 122);
const numbers_CharCode = ArrayFromLowToHigh(48, 97);
const symbols_CharCode = ArrayFromLowToHigh(65, 90).concat( 
    ArrayFromLowToHigh(58, 64)
).concat( 
    ArrayFromLowToHigh(91, 96)
).concat(
    ArrayFromLowToHigh(123, 126)
);

// First random password gen
const generatePasswordOne = (characterAmount, useUppercase, useSymbols, useNumbers) => {
    let charCodes = lowercase_CharCode
    if (useUppercase) charCodes = charCodes.concat(uppercase_CharCode)
    if (useNumbers) charCodes = charCodes.concat(numbers_CharCode)
    if (useSymbols) charCodes = charCodes.concat(symbols_CharCode)
    
    const passwordCharacters = []
    for (let i = 0; i < characterAmount; i++) {
        const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
        passwordCharacters.push(String.fromCharCode(characterCode))
    }
    return passwordCharacters.join('')
}
// Second random password gen
const generatePasswordTwo = (characterAmount, useUppercase, useSymbols, useNumbers) => {
    let charCodes = lowercase_CharCode
    if (useUppercase) charCodes = charCodes.concat(uppercase_CharCode)
    if (useNumbers) charCodes = charCodes.concat(numbers_CharCode)
    if (useSymbols) charCodes = charCodes.concat(symbols_CharCode)
    
    const passwordCharacters = []
    for (let i = 0; i < characterAmount; i++) {
        const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
        passwordCharacters.push(String.fromCharCode(characterCode))
    }
    return passwordCharacters.join('')
}


// Event listener for generate btn
form.addEventListener('submit', evt => {
    evt.preventDefault()
    const characterAmount = characterNumber.value
    const useUppercase = useUppercaseEl.checked
    const useSymbols = useSymbolsEl.checked
    const useNumbers = useNumbersEl.checked
    const passwordOne = generatePasswordOne(characterAmount, useUppercase, useSymbols, useNumbers)
    const passwordTwo = generatePasswordTwo(characterAmount, useUppercase, useSymbols, useNumbers)
    passwordDisplayLeft.textContent = passwordOne
    passwordDisplayRight.textContent = passwordTwo
})


characterRange.addEventListener('input', matchCharacterInput)
characterNumber.addEventListener('input', matchCharacterInput)
