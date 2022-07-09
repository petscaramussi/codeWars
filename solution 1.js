function narcissistic(value) {
    let numberSplitString = value.toString().split('');
    let numbers = numberSplitString.map(Number)
    let exp = numbers.map(function (num){
        return Math.pow(num, numbers.length);
    });
    
    let sum = exp.reduce((partialSum, a) => partialSum + a, 0);
    
    return sum == value ? true : false;
}