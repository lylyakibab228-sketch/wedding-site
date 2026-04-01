// загрузка данных
fetch("data.json")
  .then(res => res.json())
  .then(data => {
    document.getElementById("names").innerText = data.names;
    document.getElementById("date").innerText = data.date;
    document.getElementById("message").innerText = data.message;
    document.getElementById("location").innerText = data.location;

    const scheduleDiv = document.getElementById("schedule");
    data.schedule.forEach(item => {
      const p = document.createElement("p");
      p.innerText = item;
      scheduleDiv.appendChild(p);
    });
  });

// форма (без сервера)
document.getElementById("form").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("thanks").innerText = "Спасибо! Мы получили ваш ответ ❤️";
  this.reset();
});