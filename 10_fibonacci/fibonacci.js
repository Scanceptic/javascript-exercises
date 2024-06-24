const fibonacci = function(num) {
    num = parseInt(num);

    const fibSeq = [1, 1];

    if (num < 0) {
        return "OOPS";
    } else if (num === 0) {
        return 0;
    } else {
        for (let i = 3; i <= num; i++) {
            let nextNum = fibSeq[i-3] + fibSeq[i-2];
            fibSeq.push(nextNum);
        }
    }
    return fibSeq[num-1];
};

// Do not edit below this line
module.exports = fibonacci;
