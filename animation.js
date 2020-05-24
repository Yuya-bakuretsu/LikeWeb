function toggleButton {
  var friends = document.getElementById('friends');

  friends.addEventListener('click', function() {
    friends.classList.toggle('valid_button');
  });
}