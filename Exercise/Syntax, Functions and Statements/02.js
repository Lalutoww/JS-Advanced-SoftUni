function gcd(a,b){
    while (true) {
        if (b == 0) return a;
        a %= b;
        if (a == 0) return b;
        b %= a;
    }
}
console.log(gcd(15,5));
console.log(gcd(2154,458));