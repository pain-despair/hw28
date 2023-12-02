function zada(base, exponent) {
    if (exponent === 0) {
        return 1;
    } else {
        return base * zada(base, exponent - 1);
    }
}

const result = zada(2, 3); 
console.log(result);

function pow(num, degree) {
    if (degree === 0) {
        return 1;
    } else {
        return num * pow(num, degree - 1);
    }
}

const finish = pow(2, 3); 
console.log(finish);