function toKb(bytes)
{
    let kb = bytes * 1000;
    return kb;
}
function toMb(bytes)
{
    let mb = bytes * 1000000;
    return mb;
}
function toGb(bytes)
{
    let gb = bytes * 1000000000;
    return gb;
}
module.exports.toKb=toKb;
module.exports.toMb=toMb;
module.exports.toGb=toGb;
