export function validNumber(argument){
  lowerCase(argument);
  // upperCase(argument);
  // number(argument);
  // caracter(argument);   
  // caracterQuanty(argument);
} 
 function lowerCase(param){
  try{
    let lowerCase = param.match(/([a-z])/);
    if(lowerCase === null){ //não havendo correspondência de minúscula havendo erro
      throw new Error('O campo deve possuir pelo menos uma letra minúscula !');
    }  
  }catch(error){
    console.log(error.message);
  }
}
function upperCase(param){
  try{ 
    let upperCase = param.match(/([A-Z])/);
    if(upperCase === null ){ //não havendo correspondência de maiúscula
      throw new Error('O campo deve possuir pelo menos uma letra maiúscula');
    }  
  }catch(error){
    console.log(error.message);
  }
}
function number(param){
  try{
    let number = param.match(/([1-9])/);
    if(number === null){//não havendo correspondênica de números
      throw new Error('O campo deve conter pelo menos um número');
    }
  }catch(error){
   console.log(error.message); 
  }
}
function caracter(param){
  try{
    let caractere = param.match(/[*%&+-.?#@''""'"=|/_ __]/);
    if(caractere === null){//não havendo caracteres especiais
      throw new Error('O campo deve conter ao menos um caractere especial');
    }
  } catch(error){
    console.log(error.message);
  }
}
function caracterQuanty(param){
  try{
    if(param.length  <= 7){ //não havendo no mínimo 8 caracteres de String
      throw new Error('O campo deve conter no minímo 8 caracteres');
    }
  }catch(error){
    console.log(error.message);
  }
}