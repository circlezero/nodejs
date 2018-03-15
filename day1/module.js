// 모듈을 생성할때에는 exports 객체를 사용한다.

exports.abs = function(number) {
    if( 0 < number ) {
        return number;
    } else {
        return -number;
    }
};

exports.circleArea = function (radius) {
    return radius * radius * Math.PI;
}