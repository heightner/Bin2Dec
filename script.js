const conToDec = (bin) => {
    let power = 0, decNum = 0;
    let iterations = bin.length;
    while (power < iterations) {
        const digit = +bin[bin.length - 1];
        decNum += digit * Math.pow(2, power);
        bin = bin.substring(0, bin.length - 1)
        power++;
    }
    return decNum
}

const conToOct = (bin) => {
    let input = conToDec(bin)
    let result = '';
    while (input > 0) {
        result = (input % 8) + result;
        input = Math.floor(input / 8);
    }
    return result
}

const conToHex = (bin) => {
    let input = conToDec(bin)
    const hexMap = "0123456789ABCDEF";
    let result = ''
    while (input > 0) {
        result = hexMap[input % 16] + result;
        input = Math.floor(input / 16)
    }
    return result
}

function converion(e) {
    e.preventDefault()
    let BinString = document.getElementById('input').value;
    let convertTo = document.querySelector('#numType').value
    let elt = document.querySelector('#error')
    const resultSection = document.querySelector('#result')
    let result;

    if (!BinString) {
        elt.innerText = 'Please enter a binary string to begin with'
        elt.classList.remove('invisible')
        return;
    }
    if (!/^[01]+$/.test(BinString)) {
        elt.innerText = 'Need a Binary String'
        elt.classList.remove('invisible')
        return;
    }
    elt.innerText = '';
    elt.classList.add('invisible');

    switch (convertTo) {
        case 'dec':
            result = conToDec(BinString)
            break;
        case 'oct':
            result = conToOct(BinString)
            break;
        case 'hex':
            result = conToHex(BinString)
            break
        default:
            elt.innerText = 'NOt a Proper Conversion selected'
            elt.classList.remove('invisible')
            break;
    }
    if (result) resultSection.innerText = result
}

document.querySelector('#input').addEventListener('input', function () {
    document.querySelector('#error').innerText = ''
    document.querySelector('#error').classList.add('invisible')
})

const copyToClip = () => {
    const text = document.querySelector('#result').innerText.trim()
    if (!text) {
        alert('No text to Copy')
        return
    }
    if (navigator.clipboard && window.isSecureContext) {
        return navigator.clipboard.writeText(text);
    }
}