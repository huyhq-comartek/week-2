/** TYPES IN TYPESCRIPT
/**
 * - TypeScript hỗ trợ kiểu dữ liệu giống như Javascript nhưng có thêm sự minh 
 * bạch cho kiểu dữ liệu đi kèm để hỗ trợ.
 */

/** Boolean
 * Loại dữ liệu cơ bản nhất là giá trị true/false, kiểu mà Javascript và 
 * TypeScript gọi là Boolean.
 */
let isDone: boolean = false;

/** Number
 * - Tất cả các kiểu số trong TypeScript đều là giá trị Floating point hoặc 
 * BigIntegers.
 * - Những số Floating point sẽ có kiểu number, còn những số BigIntegers có
 * kiểu bigint.
 * - Ngoài hệ hex và hệ dec, TypeScript cũng hỗ trợ hệ bin và oct
 */
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let oct: number = 0o744;
let big: bigint = 100n;

/** String 
 * - Một phần cơ bản tạo nên các chương trình trong Js cho trang web và 
 * trong máy chủ cũng như làm việc với dữ liệu văn bản.
 */
let color: string = 'yellow';
color = 'red';

// Template Strings cũng hoạt động trong TypeScript
let fullName: string = 'Alan';
let age: number = 21;
let sentence: string = `Hello, I'm ${fullName} and I'm ${age} years old.`

console.log(sentence); // Hello, I'm Alan and I'm 21 years old.

/** Array
 * - TypeScript cho phép bạn làm việc với giá trị kiểu mảng
 * - Kiểu giữ liệu mảng có thể được viết theo 2 cách.
 * - là [] hoặc <>
 */
let list1: number[] = [1, 2, 3];
let list2: Array < number > = [1, 2, 3];

/** Tuple
 * - Cho phép bạn thể hiện 1 mảng dưới dạng mà kiểu của các phần tử trong
 * mảng đã biết trước.
 */
// Tạo biến x kiểu tuple
let x: [string, number];

// Gắn biến khởi đầu đúng cách
x = ["hello", 10]; // OK

// Gắn biến sai cách
//x = [10, "hello"]; // Error

/**
 * Khi truy cập biến trong mảng bằng 1 index nhất định, kiểu dữ liệu ở vị trí
 * đó sẽ được trả vê.
 */
// OK
console.log(x[0].substring(1));

/** any */
// - Là một kiểu đặc biệt trong TypeScript.
// - Có thể được sử dụng ở mọi nơi khi mà bạn ko muốn 1 giá trị nhất định gặp
// lỗi.
let obj: any = {
    x: 0
}

// Không dòng code nào dưới đây sẽ mắc lỗi, sử dụng any sẽ tắt kiểm tra gõ.
// obj.foo();
// obj();
// obj.bar = 100;
// obj = "hello";
// const n: number = obj;      // Uncomment để thấy lỗi

// Khi ko làm rõ kiểu của một biến và Typescript ko thể suy ra nó từ context,
// trình biên dịch sẽ cho nó là kiểu any.

/** Nhập chú thích cho biến */
// Khai báo trong Typescript, bạn có thể thêm chú thích cho biến
let myName: string = "Hana";

// Tuy nhiên điều này ko cần thiết, bạn có thể ko cần thêm chú thích nếu bạn
// gán giá trị rõ ràng cho biến
let myName1 = "Hana";

/** Hàm: function
 * - Hàm là phương tiện chính để truyền data trong Js.
 * - TypeScript cho phép bạn chỉ ra kiểu của cả 2 giá trị đầu vào và đầu ra
 * của function
 */
// Thêm chú thích cho tham số, nếu tham số truyền vào ko chính xác sẽ báo lỗi
function greet(name: string) {
    console.log(`Hello ${name}. How are you?`);
}
greet('Hoàng') // Hello Hoàng. How are you?

// Bạn có thể thêm kiểu trả về cho hàm
function getFavoriteNumber(): number {
    const an = 25;
    return an;
}
console.log(getFavoriteNumber()); // 25

/** Object
 * - Để định nghĩa kiểu object, chúng ta chỉ cần liệt kê ra các thuộc tính và
 * kiểu của thuộc tính.
 */
function printCoord(pt: {
    x: number,
    y: number
}) {
    console.log("The coordinate's x value is: " + pt.x);
    console.log("The coordinate's y value is: " + pt.y);
}

console.log(printCoord({
    x: 3,
    y: 7
})); //    The coordinate's x value is: 3
//    The coordinate's x value is: 7

// Tham số truyền vào Object có thể không bắt buộc
// Để làm điều này, thêm ? sau thuộc tính
function printName(obj: {
    firstName: string,
    lastName ? : string
}) {
    console.log(`My name is ${obj.firstName} ${obj.lastName}`);
    // Sử dụng 1 phương thức cho 1 biến có thể là undefined, thêm ? vào trước 
    // tên thuộc tính
    console.log(obj.lastName?.toLowerCase());

}

printName({
    firstName: "Bob"
}); // My name is Bob undefined
printName({
    firstName: "Anna",
    lastName: "Alisson"
}); // My name is Anna Alisson

/** Union
 * - Kiểu dữ liệu union là kiểu được tạo nên từ 1, 2 kiểu dữ liệu hay nhiều hơn
 * - Kiểu dữ liệu của biến có thể là 1 trong những kiểu dữ liệu đó.
 * - Mỗi kiểu dữ liệu bên trong sẽ là 1 thành viên của union.
 */
function unionType(id: string | number) {
    console.log(id);
}

// Ok
unionType('3a10f') // 3a10f
// Ok
unionType(34) // 34

// Làm việc với kiểu dữ liệu Union
/**
 * - Bạn không thể sử dụng các phương thức của Number cho một kiểu dữ liệu Uion
 * có thành viên là Number và String.
 * - Để xử lí điều này, chúng ta phải kiểm tra kiểu dữ liệu của biến trc.
 */
function workWithUnion(id: string | number) {
    if (typeof id === 'string') {
        console.log(id.toUpperCase());
    }
}

workWithUnion("Training at Comartek!");

// Một ví dụ dạng sử dụng isArray()
function welcomePeople(x: string[] | string) {
    if (Array.isArray(x)) {
        console.log(`Hello ${x.join(" and ")}`);
    } else {
        console.log(`Welcome lone traveler ${x}`);

    }
}

welcomePeople(["Hana", "Lisa", "Robert", "Lisan"]); // Hello Hana and Lisa and Robert and Lisan
welcomePeople("Gabert"); // Welcome lone traveler Gabert

// Bạn ko cần dùng if nếu 2 kiểu dữ liệu đều có chung method
function getFirstThree(x: number[] | string) {
    return x.slice(10, 15); // có chung method slice
}

console.log(getFirstThree([1, 2, 3, 4, 5, 6, 7])); // []
console.log(getFirstThree("You are a great guy!")); // great

/** Aliases
 * - Chúng ta chú thích kiểu dữ liệu bằng cách viết chúng trực tiếp sau tên
 * biến.
 * - Với những kiểu dữ liệu dài mà phải viết đi viết lại nhiều lần như object
 * chúng ta có thể gọi lại kiểu dữ liệu đó.
 * - Sử dụng kiểu dữ liệu Aliases bằng cách thêm chữ type để định nghĩa tên
 * đó là 1 kiểu dữ liệu.
 */
type Point = {
    x: number,
    y: number
}

// Vd nữa
type ID = number[] | string;
const perId: ID = 'a198h'
console.log(typeof perId); // 'string'

/** Interfaces
 * - Là một cách khác để đặt tên 1 kiểu object
 */
interface Point1 {
    x: number;
    y: number;
}

function printCoord1(pt: Point1) {
    console.log('Value of x is: ', pt.x);
    console.log('Value of y is: ', pt.y);
}

printCoord1({
    x: 3,
    y: 7
}) // Value of x is:  3
// Value of y is:  7

/** Sự khác biệt giữa Aliases và Interface */
// 1. Kế thừa
// Aliases
type Animal = {
    name: string
}

type Bear = Animal & {
    honey: boolean
}

// Interface
interface Animal1 {
    name: string
}

interface Bear1 extends Animal {
    honey: boolean
}
// 2. Ghi đè
// Aliases - Không thể tạo lại 1 kiểu cùng tên
// Interface - Ghi đè lại

/** Kiểu Assertions
 * - Nếu bạn sử dụng document.getElementById, TS sẽ chỉ b bạn sẽ trả về một 
 * loại HTMLElement nào đó.
 * - VD Element đó của bạn là canvas, bạn có thể thêm khẳng định đằng sau để TS
 * có thể hiểu rõ
 * - Dùng từ khóa as + ...
 */ 
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;

// 1 Cách khác là sử dụng cú pháp <>(không áp dụng trong trường hợp file .tsx)
const myCanvas2 = <HTMLCanvasElement>document.getElementById("main_canvas");

/** Null và Undefined
 * - TS cũng có null và undefined phụ thuộc vào strictNullChecks có được bật 
 * hay không.
 * - strictNullChecks off : sử dụng null và undefined bình thường.
 * - strictNullChecks on: cần kiểm tra giá trị biến trc khi sử dụng method
 * - Nên luôn sử dụng strictNullChecks on
 */
function liveDangerously(x?: number | null) {
    console.log(x!.toFixed(2));
}

liveDangerously(3.3242)

/** Enums
 * - Là một tính năng được thêm vào Js bởi TS
 * = Cho phép việc miêu tả 1 giá trị cái mà có thể là 1 của 1 bộ hằng số có thể
 * đặt tên.
 */

// bigint
/**
 * Từ ES2020 trở lên, có 1 loại dữ liệu nguyên thủy được JS sử dụng cho những 
 * số vô cùng lớn, BigInt
 */
// Tạo 1 bigint thông qua BigInt function
const oneHundred: bigint = BigInt(100);
// Tạo 1 bigint thông qua cú pháp
const anotherHundred: bigint = 100n;

// symbol
/**
 * - Bắt đầu từ ECMAScript 2015, symbol là kiểu dữ liệu nguyên thủy, giống như
 * là number hay string.
 * - Giá trị symbol được tạo bằng cách gọi constructor Symbol
 */
let sym1 = Symbol();
let sym2 = Symbol('key'); // một string tùy chọn

// Dữ liệu kiểu Symbol là bất biến và độc nhất
let sym3 = Symbol('key');

console.log(sym2 === sym3);

//===================================================================//
/** Narrowing */
/**
 * - Trong trường hợp truyền vào hàm một biến và chú thích cho nó một kiểu dữ 
 * liệu union là number | string.
 * - Khi này nếu cho biến sử dụng phương thức của riêng number hoặc riêng 
 * string thì TS sẽ báo lỗi.
 * - Để tránh điều này thì ta thêm một cặp if - else(nếu cần) để tách riêng
 * 2 trường hợp number hoặc string rồi mới xử lí.
 */
function padLeft(padding: string | number, input: string) {
    if(typeof padding === 'number') {
        return " ".repeat(padding) + input;
    }
    return padding + input;
}
console.log(padLeft(5, "Tôi là ai?"));   //     Tôi là ai? 
console.log(padLeft("*", "Tôi là ai?")); //*Tôi là ai?

/** typeof - type guards*/
/**
 * TypeScript typeof: 
 */
// "string"
console.log(typeof "Hello");  

// "number"                               
console.log(typeof 32);   

// "bigint"
console.log(typeof 100n);   

// "boolean"
console.log(typeof false);       

// "symbol"
console.log(typeof Symbol('hello'));   

// "undefined"
console.log(typeof undefined);           

// "object"
console.log(typeof { name: 'Zed', age: 5 });     

//"function"
console.log(typeof function(){ console.log("hello");});      

// Truthiness narrowing
/** Sử dụng &&, ||, if statement and (!), ..... */
function multiplyAll(
    values: number[] | undefined,
    factor: number
): number[] | undefined {
    if (!values) {
        return values;
    } else {
    return values.map((x) => x * factor);
    }
}

/** Equality narrowing */
/** Sử dụng ===, !==, ==, != */
function example(x: string | number, y: string | boolean) {
    if (x === y) {
        // We can now call any 'string' method on 'x' or 'y'.
        x.toUpperCase();
        y.toLowerCase();
    } else {
        console.log(x);
        console.log(y);
    }
}

/** "in" operator narrowing */
type Fish = { swim: () => void };
type Bird = { fly: () => void };
 
function move(animal: Fish | Bird) {
    if ("swim" in animal) {
        return animal.swim();
    }
    return animal.fly();
}

interface User {
    name: string;
    age: number;
    (words: string): void;
}





