import { valid } from "./validGmail.js";
import {resetInput} from "./validGmail.js";
import { validNumber } from "./validPassword.js";
const button = document.getElementById('buttton');
    button.addEventListener('click',(event)=>{
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById("password").value;
    resetInput();
    valid(email);      
    // validNumber(password);
});