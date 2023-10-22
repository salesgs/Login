export function validNumber(argument){
   lowerCase(argument);
} 
 function lowerCase(param){
  try{
    let lowerCase = param.match(/([a-z])/);
    if(lowerCase === null){ //não havendo correspondência de minúscula havendo erro
      throw new Error('Senha inválida, ausência de minúsculas');
    }else{
      upperCase(param); 
    }
  }catch(error){
     console.log(error.message);
    const input = document.getElementById("password");
    input.classList.add("error");
    input.type ="text";
    input.value =error.message;
  }
}
function upperCase(param){
  try{ 
    let upperCase = param.match(/([A-Z])/);
    if(upperCase === null ){ //não havendo correspondência de maiúscula
      throw new Error('Senha inválida, ausência de maiúsculas');
    }else{
      number(param);
    }
  }catch(error){
    const input = document.getElementById("password");
    input.classList.add("error");
    input.type ="text";
    input.value =error.message;
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
  }
}
function caracter(param){
  try{
    let caractere = param.match(/[*%&+-.?#@''""'"=|/_ __]/);
    if(caractere === null){//não havendo caracteres especiais
      throw new Error('Ausência de caracter [$+*@...]');
    }else{
      caracterQuanty(param);     
    }
  } catch(error){
    const input = document.getElementById("password");
    input.classList.add("error");
    input.type ="text";
    input.value =error.message; 
  }
}
function caracterQuanty(param){
  try{
    if(param.length  <= 7){ //não havendo no mínimo 8 caracteres de String
      throw new Error('minímo 8 caracteres');
    }else{
      const input = document.getElementById("password");
      input.classList.add("sucess"); 
    }
  }catch(error){
    const input = document.getElementById("password");
    input.classList.add("error");
    input.type ="text";
    input.value =error.message; 
  }
}