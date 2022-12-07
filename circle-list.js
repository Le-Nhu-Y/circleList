var CircleList = /** @class */ (function () {
    function CircleList(color, radius) {
        this.color = "blue";
        this.radius = 10;
        this.color = color;
        this.radius = radius;
    }
    return CircleList;
}());
var circleList = [];
circleList.push(new CircleList("yellow", 5));
circleList.push(new CircleList("green", 10));
circleList.push(new CircleList("blue", 15));
function showCircle(circleList) {
    console.log("Hình tròn màu " + circleList.color + ",  bán kính là " + circleList.radius);
}
circleList.forEach(showCircle);
