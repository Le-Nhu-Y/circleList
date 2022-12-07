class CircleList{
    color:string="blue";
    radius:number=10;
    constructor(color:string,radius:number,) {
        this.color = color;
        this.radius = radius;
    }
}
let circleList:CircleList[]=[];
circleList.push(new CircleList("yellow", 5));
circleList.push(new CircleList("green", 10));
circleList.push(new CircleList("blue", 15));

function showCircle(circleList: CircleList) {
    console.log("Hình tròn màu " + circleList.color + ",  bán kính là " + circleList.radius);
}
circleList.forEach(showCircle);