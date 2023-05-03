const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
// const get = document.getElementsByClassName("joshwa")


function addTask(){
    if (inputBox.value === ""){
        alert("your input box is empty");
    }else{
        let li = document.createElement("li")
        li.innerHTML = inputBox.value;
        li.className = "joshwa";
        listContainer.appendChild(li)
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        
    }
    inputBox.value = "";
}

     listContainer.addEventListener("click", function(e){
        if(e.target.tagName === "LI"){
            e.target.classList.toggle("checked");
        }else if(e.target.tagName === "SPAN"){
          e.target.parentElement.remove();
        }
    } ,false)     

    const loginForm = document.getElementById("myForm")

    loginForm.addEventListener("submit" , (e)=>{
      e.preventDefault();
    })


   
    // debugger
    // abc = 20;
    // console.log(abc, "before")
    // let abc;
    // console.log(abc, "after")