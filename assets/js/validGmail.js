export function valid(argument){
  const input = document.getElementById("email");
  if(input.value===""){
    input.value="Complete o campo"
    input.classList.add('error');
  }else{
    caracterEmail(argument);
  }
}
function caracterEmail(param){
   try{
    let caracter = param.match(/(@)/g);
    if(caracter === null){//não havendo @ na correspondência
      throw new Error('Email inválido ');
    }else{
      text(param);
    }
  }catch(error){
     const input = document.getElementById('email');
     input.classList.add('error');
     input.value = error.message; //mensagem de erro no input
  }
}
 function text(param){
  let test;
  try{
    let textBefore = param.match(/[a-z_0-9]+(?=@)/ig);
    if(textBefore!==null){
        let string = String(textBefore);
        let caracterString = [...string];
        test = caracterString;
    }else{
      test = '';
    }    
    if(test.length < 2 || test===null){//não havendo
      throw new Error('Email inválido');
    }else{
      textSequence(param);
    }
  }catch(error){
     const input = document.getElementById('email');
     input.classList.add('error');
     input.value = error.message;
  }
}
function textSequence(param){
  let textSequence = param.match(/(?<=@)gmail|outlook/ig);
  if(textSequence===null){
    textSequence="null";
  }
  try {
    if(textSequence!==null && textSequence[0]==="gmail" || textSequence[0]==="outlook"){
      checkPoint(param);
    }else if(textSequence==="null"){
      throw new Error("Email inválido");    
    }       
  } catch (error) {
    console.log(textSequence);
    const input = document.getElementById("email");
    input.classList.add("error");
    input.value = error.message;
  }
} 
function checkPoint(param){
  console.log("estou aqui" + param);
  let checkPoint = param.match(/(?<=@)[gmail|outlook].+/gi);
  console.log(checkPoint);
  if(checkPoint===null || checkPoint === undefined){
    checkPoint="null";
  }
  try{
    if(checkPoint[0]=="outlook.com" || checkPoint[0]=="gmail.com"){//não havendo
      const input = document.getElementById('email');
      input.classList.add('sucess');
    }else if(checkPoint!="outlook.com" || checkPoint!="gmail.com"){//não havendo
        throw new Error('Email inválido');
    }
  
  }catch(error){
    console.log(error.message);
     const input = document.getElementById('email');
     input.classList.add('error');
     input.value = error.message;
  }
   
}
export function resetInput(){
  const input = document.getElementById('email');
  input.classList.remove('error');
  input.classList.remove('sucess');
}