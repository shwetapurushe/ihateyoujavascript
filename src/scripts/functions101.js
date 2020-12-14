//named function
function func1() {
  console.log(this);
  console.log('Named function');
};

func1();
//2.
const func2 = function() {
  console.log("Named function type 2");
};



//unnamed function
//usually used in an event listener to be invoked in response to an event

// function (){
//   console.log("Unnamed function");
// }

let btn = document.querySelector("button");
btn.onclick = function(){
  console.log("Unnamed function invoked whenever button is clicked");
};

export{
  func1
};
