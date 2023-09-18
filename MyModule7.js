function toFoot(inches)
{
    let foot = inches * 12;
    return foot;
}
function toMeter(inches)
{
    let meter = inches * 39.37
    return meter;
}
function toMile(inches)
{
    let mile = inches * 63360
    return mile;
}
module.exports.toFoot=toFoot;
module.exports.toMeter=toMeter;
module.exports.toMile=toMile;