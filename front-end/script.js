function analyzeImage() {
  const fileInput = document.getElementById("fileInput");
  const preview = document.getElementById("preview");
  const result = document.getElementById("result");

  if (!fileInput.files.length) {
    alert("Загрузите фото!");
    return;
  }

  const file = fileInput.files[0];

  // Показать превью
  const reader = new FileReader();
  reader.onload = function(e) {
    preview.innerHTML = `<img src="${e.target.result}" alt="preview">`;
  }
  reader.readAsDataURL(file);

  // Отправка на backend (пока заглушка)
  result.innerHTML = "⏳ Анализируем фото...";

  // Эмуляция ответа от модели
  setTimeout(() => {
    const states = ["✅ Чистая", "🚗 Грязная", "⚠️ Есть повреждения"];
    const randomResult = states[Math.floor(Math.random() * states.length)];
    result.innerHTML = `Результат: ${randomResult}`;
  }, 2000);
}
