//  Convert the Binary String to its decimal equivalent

import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let power =0, decNum = 0;
let iterations;

const conToDec = (bin) => {
    while(power < iterations){
        const digit = +bin[bin.length - 1];
        decNum += digit * Math.pow(2, power);
        bin = bin.substring(0,bin.length-1)
        power++;
    }
}

rl.question("Enter the Binary String: ",(data) =>{
    iterations = data.length
    conToDec(data)
    console.log(decNum);
    rl.close()
})

