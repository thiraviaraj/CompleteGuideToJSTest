function sum(a, b) {
    if (typeof(a)==='string' || typeof(b)==='string') {
        a = +a;
        b = +b;
    }
    return a+b;
}
function sub(a, b) {
    if (typeof(a)==='string' || typeof(b)==='string') {
        a = +a;
        b = +b;
    }
    return a-b;
}
function mul(a, b) {
    return a*b;
}

export { sum, sub, mul };
// module.exports = { sum, sub, mul };