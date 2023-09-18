function toDollar(rupees)
{
    let dollar = rupees * 0.012;
    return dollar;
}
function toPound(rupees)
{
    let pound = rupees * 0.0096;
    return pound;
}
function toYen(rupees)
{
    let yen = rupees * 1.69;
    return yen;
}
//export each and every function
module.exports.toDollar = toDollar;
module.exports.toPound = toPound;
module.exports.toYen = toYen;