// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let hiddenStatus = document.querySelector('.hidden');
//console.log(hiddenStatus);
const likeHearts = document.querySelectorAll('.like-glyph');


function likefunc(e){
  const heart = e.target;
  //console.log(heart);
  mimicServerCall()
  .then(() =>{
    if(heart.textContent === EMPTY_HEART){
      heart.textContent = FULL_HEART;
      heart.classList.add('activated-heart');
    }
    else{
      heart.textContent = EMPTY_HEART;
      heart.classList.remove('activated-heart');
    }
  })
  .catch(() =>{
    hiddenStatus.classList.remove("hidden");
    //console.log(hiddenStatus)
    setTimeout(() => hiddenStatus.classList.add('hidden'), 3000);
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
