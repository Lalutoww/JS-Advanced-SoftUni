function focused() {
  //Get inputs
  const inputs = document.querySelectorAll('input');
  let inputsToArray = Array.from(inputs);

  //Add Events Listeners to all inputs
  inputsToArray.map((x)=>{
    x.addEventListener('focus', focusHandler);
    x.addEventListener('blur', blurHandler);
  })

  //Define functions
  function focusHandler(event){
    const div = event.target.parentElement;
    div.classList.add('focused');
  }
  function blurHandler(event){
    const div = event.target.parentElement;
    div.classList.remove('focused');
  }
}
