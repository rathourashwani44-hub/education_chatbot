
  
//   // Typing Text Animation
//   const textArray = ["Chat with AI", "Take quizzes", "Upload your files", "Watch Reels"];
//   let i = 0, j = 0, currentText = "", isDeleting = false;
//   const typingElement = document.querySelector(".typing-text");

//   function type() {
//     if (i < textArray.length) {
//       if (!isDeleting && j <= textArray[i].length) {
//         currentText = textArray[i].substring(0, j++);
//       } else if (isDeleting && j >= 0) {
//         currentText = textArray[i].substring(0, j--);
//       }

//       typingElement.innerHTML = currentText;

//       if (j === textArray[i].length) isDeleting = true;
//       if (j === 0) {
//         isDeleting = false;
//         i++;
//         if (i === textArray.length) i = 0;
//       }

//       setTimeout(type, isDeleting ? 50 : 100);
//     }
//   }
//   type();

//   // Slide-in on Scroll
//   const elements = document.querySelectorAll('.slide-in');
//   window.addEventListener('scroll', () => {
//     elements.forEach(el => {
//       const rect = el.getBoundingClientRect().top;
//       if (rect < window.innerHeight - 100) {
//         el.classList.add('show');
//       }
//     });
//   });

//   // Animate Progress Bar
//   window.addEventListener('load', () => {
//     setTimeout(() => {
//       document.querySelector('.progress-bar').style.width = '100%';
//     }, 1000);
//   });



const study = document.querySelector(".Me"); // Study is 4th link
// OR use an id for more reliability: <a id="study-link">Study</a>

// Add click event to open the Study page
study.addEventListener('click', (e) => {
    e.preventDefault(); // prevent default link action if needed
    window.location.href = 'materail.html'; // path to your Study page
});


const Chat = document.querySelector(".Chatbot"); // Study is 4th link
// OR use an id for more reliability: <a id="study-link">Study</a>

// Add click event to open the Study page
Chat.addEventListener('click', (e) => {
    e.preventDefault(); // prevent default link action if needed
    window.location.href = 'chatbot.html'; // path to your Study page
});