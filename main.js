//checkYuGiOh

function checkYuGiOh(n) {
    var results = [];

    if (typeof Number('1') !== 'number')
        return `invalid parameter: "${n}"`
    for (i = 1; i <= n; i++) {
        if (n === 1) {
            return [1]
        } else {
            if (n % 2 === 0 && n % 3 === 0 && n % 5 == 0) {
                results.push("yu-gi-oh")
            } else if (n % 2 === 0 && n % 3 === 0) {
                results.push("yu-gi")
            } else if (n % 2 === 0 && n % 5 === 0) {
                results.push("yu-oh")
            } else if (n % 3 === 0 && n % 5 === 0) {
                results.push("gi-oh")
            } else if (n % 2 === 0) {
                results.push("yu")
            } else if (n % 3 === 0) {
                results.push("gi")
            } else if (n % 5 === 0) {
                results.push("oh")
            } else {
                results.push(n);
            }

            return checkYuGiOh(n - 1).concat(results);
        }
    }
};