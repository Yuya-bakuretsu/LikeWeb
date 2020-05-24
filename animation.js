var choice = document.getElementById('choice-js');
choice.onclick = () => {
let friends = document.getElementById('friends-js');
let fun = document.getElementById('fun-js');
let family = document.getElementById('family-js');
let longing = document.getElementById('longing-js')
let cardType = document.getElementById("form_input").type.value;
switch (cardType) {
  case "card_friend":
      friends.classList.add('valid_button');
      fun.classList.remove('valid_button');
      longing.classList.remove('valid_button');
      family.classList.remove('valid_button');
    break;
  case "card_family":
    family.classList.add('valid_button')
    friends.classList.remove('valid_button');
    fun.classList.remove('valid_button');
    longing.classList.remove('valid_button');
    break;
  case "card_fun":
    fun.classList.add('valid_button')
    friends.classList.remove('valid_button');
    longing.classList.remove('valid_button');
    family.classList.remove('valid_button');
    break;
  case "card_longing":
    longing.classList.add('valid_button');
    friends.classList.remove('valid_button');
    fun.classList.remove('valid_button');
    family.classList.remove('valid_button');
    break;
};
};
