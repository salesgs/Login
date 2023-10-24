export function validNames(){
 const inputName = document.getElementById("name");
 if(inputName.value===""){
  inputName.value="Complete o campo"
  inputName.classList.add("error");
  setTimeout(()=>{
    inputName.value="";
   },1000*1.90) 
  }else {
    inputName.classList.add("sucess");
    inputName.classList.add("font");
  } 
 
}