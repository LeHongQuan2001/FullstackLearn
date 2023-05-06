//rest parameter : tham so con lai
function add(num1,num2, ...othernum){
    console.log(num1,num2);
    console.log(...othernum);
    console.log("===================");
}
add(1,1,2,3,4,5,6);
add(1,2,3,4,5,6);