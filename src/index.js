module.exports = function toReadable (number) {
    let numberS = {
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7': 'seven',
        '8': 'eight',
        '9': 'nine',
        '0': 'zero',
        '10': 'ten',
        '11': 'eleven',
        '12': 'twelve',
        '13': 'thirteen',
        '14': 'fourteen',
        '15': 'fifteen',
        '16': 'sixteen',
        '17': 'seventeen',
        '18': 'eighteen',
        '19': 'nineteen',
        '20': 'twenty',
        '30': 'thirty',
        '40': 'forty',
        '50': 'fifty',
        '60': 'sixty',
        '70': 'seventy',
        '80': 'eighty',
        '90': 'ninety',
    }
    
    let result = "";
    number = number.toString();
    if (number.length == 3) {
        if (number[1] == 0 && number[2] != 0) {
            result += `${numberS[`${number[0]}`]} hundred ${numberS[`${number[2]}`]}`.trim();
        }
        if (number[1] == 0 && number[2] == 0) {
            result += `${numberS[`${number[0]}`]} hundred`.trim();
        }
        if (number[1] == 1) {
            result += `${numberS[`${number[0]}`]} hundred ${numberS[`${number[1] + number[2]}`]}`.trim();
        }
        if (number[1] > 1 && number[2] != 0) {
            result += `${numberS[`${number[0]}`]} hundred ${numberS[`${number[1]*10}`]} ${numberS[`${number[2]}`]}`.trim();
        }
        if (number[1] > 1 && number[2] == 0) {
            result += `${numberS[`${number[0]}`]} hundred ${numberS[`${number[1]*10}`]}`.trim();
        }
    }
    if (number.length == 2) {
        if (number[0] > 1 && number[1] == 0) {
            result += `${numberS[`${number[0] * 10}`]}`.trim();
        }
        if (number[0] > 1 && number[1] != 0) {
            result += `${numberS[`${number[0] * 10}`]} ${numberS[`${number[1]}`]}`.trim();
        }
        if (number[0] == 1) {
            result += `${numberS[`${number[0] + number[1]}`]}`.trim();
        }
    }
    if (number.length == 1) {
        result += `${numberS[number[0]]}`.trim();
    }
    return result;
}
