
//List code Start //


var button= document.querySelector("button");
var input= document.querySelector("input");
var ul= document.querySelector("ul");
var list= document.querySelectorAll(".items");
var btn= document.querySelectorAll(".delete");


function checkInput()
{
	return input.value.length;
}

//adding button and list on input 

function addListElement(){

	var newbtn= document.createElement("button");
	newbtn.classList.add("delete");
	newbtn.appendChild(document.createTextNode("delete"));


	var li= document.createElement("li");
	li.classList.add("items");
	li.appendChild(document.createTextNode(input.value));
	ul.	appendChild(li);
	li.appendChild(newbtn);
	input.value="";
}


function elementOnClick(){
	if(checkInput()>0)
	{

		addListElement()

	}
}

function onKeyPress(event){
	if(checkInput()>0 && event.which===13)
	{
		
		addListElement()
	}
}

button.addEventListener("click",elementOnClick);
input.addEventListener("keypress", onKeyPress);

//using event delegates to add multiple handler to ul element to both delete on clicking delete 
//and adding a class "done" on all li elements

ul.addEventListener("click",function(event){
	if (event.target.matches('.items')) {
		event.target.classList.toggle('done');
	}
})



ul.addEventListener('click', ({ target }) => {
  if (target.className === 'delete') {
    target.parentElement.remove();
  }
});


//List code End //


