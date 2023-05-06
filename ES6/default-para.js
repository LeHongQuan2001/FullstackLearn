// default parameters: tham so mac dinh;
function add(num1, num2=100){  //num2 la tham so mac dinh;
    return num1 + num2;
}
console.log(add(100));  //200
console.log(add(100,200));  //300
function printInfor(company,address){
    address = address || "So 25 VNP";  //address la tham so mac dinh
    console.log("welcome: " + company + " add: " + address);
}

printInfor("Devmaster");
printInfor("Devmaster Academy","Toa nha vien cong nghe","So 25 VNP");