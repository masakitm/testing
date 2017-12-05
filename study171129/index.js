function func01 () {
  alert("no");
}
func01(1,2,3);

function func02 (a,b,c) {
  alert("no")
}
func02();


function func03 (a, b, c) {
  console.log(a);
  console.log("asdfasd");
}
func03();


function func04 () {
  console.log(arguments[0])
  console.log(arguments.length)
  console.log(arguments.push(4)) //これはエラー
}
func04(1,2,3);
