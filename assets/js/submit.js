import { valid } from "./validGmail.js";
import {resetInput} from "./resetInputs.js";
import { validNumber } from "./validPassword.js";
import { validNames } from "./validName.js";
const button = document.getElementById('buttton');
    button.addEventListener('click',(event)=>{
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById("password").value;
    resetInput();
    validNames();
    valid(email);      
    validNumber(password);
});