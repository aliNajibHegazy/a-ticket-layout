const ticketElm = document.getElementById('ticket');
const { x, y, width, height } = ticketElm.getBoundingClientRect();
const centerPoint = { x: x + width / 2, y: y + height / 2 };
window.addEventListener('mousemove', (e) => {
   if (e.target.className !== "content") {
      ticketElm.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
      ticketElm.style.transition = ".5s"
      return "";
   }
   const degreeX = (e.clientY - centerPoint.y) * 0.02;
   const degreeY = (e.clientX - centerPoint.x) * -0.02;
   
   ticketElm.style.transform = `perspective(1000px) rotateX(${degreeX}deg) rotateY(${degreeY}deg)`;
   ticketElm.style.transition = "0s"
})