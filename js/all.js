function demo1(){
    document.getElementById("heading-1").innerHTML = "Hi sai";
    document.getElementById("heading-2").innerHTML = "Hi venkatesh";
};
//---------------------------------------//
var data = {
    "employee": {
        "name": "sonoo",
        "salary": 56000,
        "married": true
    }
}
console.log("This is sonoo salary of", data.employee.salary);
if (data.employee.married == true){
    console.log("sonoo married");
}else{
    console.log("waiting for marriage");
}
//------------------------------------// 
var numberList = [28, 14, 38, 16, 9, 99, 34, 100];
numberList.sort(function(a,b){return a - b});   
console.log(numberList);

var numberList = [28, 14, 38, 16, 9, 99, 34, 100];
numberList.sort(function(a,b){return b- a});
console.log(numberList);
for(var i = 0;i < numberList.length; i++){
    if((numberList[i] % 2) === 0){
        console.log("only even number print",numberList[i]);
    }else{
        console.log("only odd number",numberList[i]);
    }
}
var numberListRemove = [28, 14, 38, 16, 9, 99, 34, 100];
numberListRemove.splice(2,3);
console.log(numberListRemove);
var numberListRemove1 = [28, 14, 38, 16, 9, 99, 34, 100];
numberListRemove1.splice(6,0,"2","3","4","5");
console.log(numberListRemove1);
//------------------------------------------------//
function demo2() {
    document.getElementById("para").setAttribute("class","democlass");
};
demo2();
//------------------------//
var getDiv = document.createElement("div");
getDiv.id = "myDiv"; 
document.body.appendChild(getDiv);
var getImg = document.createElement("img");
getImg.src = "https://ik.imgkit.net/ikmedia/bucket.png?tr=w-500,dpr-2";
getDiv.appendChild(getImg);
//--------------------------------//
function demo(){
    alert("this is my test-1");
};
demo();