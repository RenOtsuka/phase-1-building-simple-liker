// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
//document.getElementById('modal').hidden = true;
const likeHearts = document.querySelectorAll('.like-glyph');

function likefunc(e){
  const heart = e.target;
  mimicServerCall()
  .then(() =>{
    if(heart.textContent === EMPTY_HEART){
      heart.textContent = FULL_HEART;
    }
    else{
      heart.textContent = EMPTY_HEART;
    }
  })
  .catch(() =>{
    document.getElementById('modal').hidden = false;
    setTimeout(document.getElementById('modal').hidden = true, 3000);
  });
}

for(const like of likeHearts){
  like.addEventListener("click", likefunc);
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
