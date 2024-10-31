function add(a, b,fn) {
    fn(a,b);
    return a + b;
}

function addCheckEvenOdd(a, b) {
    if (a % 2 === 0 && b % 2 === 0) {
        console.log("Even");
    }
    else if (a % 2 !== 0 && b % 2 !== 0) {
        console.log("Odd");
    }
    else {
        console.log("Mixed");
    }
}

function main() {
    const sum = add(10, 20,addCheckEvenOdd);
    console.log(sum);
};

main();