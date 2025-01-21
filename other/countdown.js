//Angel Plloca
const eventDate = new Date("9999-03-14T00:00:00").getTime();
// countdown updater
const countdown = setInterval(() => {
  const now = new Date().getTime();
  const timeLeft = eventDate - now;
    const years = Math.floor(timeLeft / (1000* 60* 60* 24* 365));
    const days = Math.floor((timeLeft % (1000* 60* 60* 24* 365)) / (1000* 60* 60* 24));
    const hours = Math.floor((timeLeft % (1000* 60* 60* 24)) / (1000* 60* 60));
    const minutes = Math.floor((timeLeft % (1000* 60* 60)) / (1000* 60));
    const seconds = Math.floor((timeLeft % (1000* 60)) / 1000);
    document.getElementById("countdown").innerHTML = 
      `758210${years}y ${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);
