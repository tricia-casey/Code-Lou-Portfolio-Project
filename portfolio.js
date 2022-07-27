
//Hamburger Menu "on/off"

function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
  }

//Form Script

  const name = document.getElementById('name')
  const email = document.getElementById('email')
  const btn = document.getElementById('btn');
  //const regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;  //Javascript reGex for Email Validation.
  //const regName = /\d+$/g;                                    // Javascript reGex for Name validation


function showAlert(){
var name = document.getElementById('name').value;
alert("Thank you for reaching out!  I can't wait to talk to you!");
}

btn.addEventListener("click", showAlert);

