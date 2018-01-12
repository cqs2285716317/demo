/**
 * Created by Administrator on 2017.09.26.
 */

// alert('hello');
//
// function area(shape: string, width: number, height: number) {
//     var area = width * height;
//     return "I'm a " + shape + " with an area of " + area + " cm squared.";
// }
//
// document.body.innerHTML = area("rectangle", 30, 15);

interface Shape {
    name: string;
    width: number;
    height: number;
    color?: string;
}

function area(shape : Shape) {
    var area = shape.width * shape.height;
    console.log();
    return "I'm " + shape.name + " with area " + area + " cm squared";
}

console.log( area( {name: "rectangle", width: 30, height: 15} ) );
console.log( area( {name: "square", width: 30, height: 30, color: "blue"} ) );