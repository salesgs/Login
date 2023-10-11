const button = document.getElementById('buttton');
    button.addEventListener('click',(event)=>{
    event.preventDefault();
    const email = document.getElementById('email').value;
    resetInput();
    valid(email);      
});
function valid(argument){
  caracterEmail(argument);
}
function caracterEmail(param){
   try{
    let caracter = param.match(/(@)/g);
    if(caracter === null){//não havendo @ na correspondência
      throw new Error('Email deve possuir "@" ');
    }else{
      text(param);
    }
  }catch(error){
     const input = document.getElementById('email');
     input.classList.add('error');
     input.value = error.message;
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
      throw new Error('Possuir caracters antes do @');
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
  let textSequence = param.match(/(?<=@)[a-z]+/ig);
  let string = textSequence;
  let test='';
  if(string!==null){
    let stringCaracter = new String(string);
    let arrayCaracter = stringCaracter.split('');  
    test = arrayCaracter;
  }
    try{
    if(textSequence[0]!=='gmail'){
      throw new Error('o campo deve possuir a palavra gmail');
    }else{
      checkPoint(param);
    }
  }catch(error){
    console.log(error);
     const input = document.getElementById('email');
     input.classList.add('error');
     input.value = error.message;
  }
}
function checkPoint(param){
  let checkPoint = param.match(/gmail.+/gi);
  try{
    if(checkPoint[0]!='gmail.com'){//não havendo
      throw new Error('Terminação com gmail.com');
    }else{
      const input = document.getElementById('email');
      input.classList.add('sucess');
    }
  }catch(error){
    console.log(error.message);
     const input = document.getElementById('email');
     input.classList.add('error');
     input.value = error.message;
  }
}
function resetInput(){
  const input = document.getElementById('email');
  input.classList.remove('error');
  input.classList.remove('sucess');
}