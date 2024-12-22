const seperateWithComma = (num, format='international', currencySymbol='$') => {
    let isNegative = num < 0;
    num = Math.abs(num);

    if (format == 'indian') {
        let numStr = num.toString()
        let lastThree = numStr.substr(-3)
        let firstThree = numStr.substr(0, numStr.length-3)
        let str = firstThree.replace(/(\d)(?=(\d{2})+(?!\d))/g, '$1,') + ',' + lastThree
        return (isNegative ? '-' : '') + currencySymbol + str;
    }

    return (isNegative ? '-' : '') + currencySymbol + num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

export default seperateWithComma;
console.log(seperateWithComma(9876543210, 'indian'));
console.log(seperateWithComma(-9876543210, 'international', '€'));