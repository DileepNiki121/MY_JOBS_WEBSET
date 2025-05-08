 
const dateElement = document.getElementById("dateDisplay");
const now = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
dateElement.innerText = now.toLocaleDateString('en-IN', options);
 