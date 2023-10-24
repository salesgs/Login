export function resetInput(){
  const input = document.getElementById('email');
  input.classList.remove('error');
  input.classList.remove('sucess');
}