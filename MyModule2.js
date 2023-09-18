var converter = {
    toDollar:function(rupees){
        let dollar = rupees * 0.012;
        return dollar;
    },
    toPound:function(rupees){
        let pound = rupees * 0.0096;
        return pound;
    },
    toYen:function(rupees){
        let yen = rupees * 1.69;
        return yen;
    }
};
module.exports = converter;