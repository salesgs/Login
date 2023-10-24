export function validNumber(argument){
  const input = document.getElementById("password");
  if(input.value===""){
    input.type="text";
    input.value="Complete o campo";
    const button = document.getElementById("buttton");
    button.disabled=true; 
    input.classList.add("error");
    setTimeout(()=>{
      input.value="";
      button.disabled=false; 
      input.type="password";
      
    },1000*1.90)
  }else{
    lowerCase(argument);
  }
} 
 function lowerCase(param){
  try{
    let lowerCase = param.match(/([a-z])/);
    if(lowerCase === null){ //não havendo correspondência de minúscula havendo erro
      throw new Error('Ausência de minúsculas');
    }else{
      upperCase(param); 
    }
  }catch(error){
     console.log(error.message);
    const input = document.getElementById("password");
    input.classList.add("error");
    input.type ="text";
    input.value =error.message;
    setTimeout(()=>{
      input.value="";
      input.type="password";
      
    },1000*1.90)
  }
}
function upperCase(param){
  try{ 
    let upperCase = param.match(/([A-Z])/);
    if(upperCase === null ){ //não havendo correspondência de maiúscula
      throw new Error('Ausência de maiúsculas');
    }else{
      number(param);
    }
  }catch(error){
    const input = document.getElementById("password");
    input.classList.add("error");
    input.type ="text";
    input.value =error.message;
    setTimeout(()=>{
      input.value="";
      input.type="password";
      
    },1000*1.90);
  }
}
function number(param){
  try{
    let number = param.match(/([1-9])/);
    if(number === null){//não havendo correspondênica de números
      throw new Error('Ausência de números');
    }else{
      caracter(param);
    }
  }catch(error){
   const input = document.getElementById("password");
   input.classList.add("error");
   input.type ="text";
   input.value =error.message;
   setTimeout(()=>{
    input.value="";
    input.type="password";
    
  },1000*1.90)
  }
}
function caracter(param){
  try{
    let caractere = param.match(/[*%&+-.?#@''""'"=|/_ __]/);
    if(caractere === null){//não havendo caracteres especiais
      throw new Error('falta de caracter [$+*@...]');
    }else{
      caracterQuanty(param);     
    }
  } catch(error){
    const input = document.getElementById("password");
    input.classList.add("error");
    input.type ="text";
    input.value =error.message; 
    setTimeout(()=>{
      input.value="";
      input.type="password";
      
    },1000*1.90)
  }
}
function caracterQuanty(param){
  try{
    if(param.length  <= 7){ //não havendo no mínimo 8 caracteres de String
      throw new Error('minímo 8 caracteres');
    }else{
      const input = document.getElementById("password");
      input.classList.add("sucess"); 
      input.classList.add("font");
    }
  }catch(error){
    const input = document.getElementById("password");
    input.classList.add("error");
    input.type ="text";
    input.value =error.message; 
    setTimeout(()=>{
      input.value="";
      input.type="password";
      
    },1000*1.90)
  }
}