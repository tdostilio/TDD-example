const Calculator = (input) => {
    let counter = 0
    if (input.length >= 1) {
        let inputArray = input.split(',');
        let numberArray = inputArray.map((element) => {
            return parseInt(element)
        });
        numberArray.forEach((element) => {
            return counter += element
        })    
    }
    if (input === '') {
        return 0
    };
    return counter;
}