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

function converion(e) {
    e.preventDefault()
    let BinString = document.getElementById('input').value;
    let convertTo = document.querySelector('#numType').value
    let elt = document.querySelector('#error')
    const resultSection = document.querySelector('#result')

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

    const result = conToDec(BinString)
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