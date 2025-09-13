const fileInput = document.getElementById("fileInput");
const preview = document.getElementById("preview");
const analyzeBtn = document.getElementById("analyzeBtn");
const deleteBtn = document.getElementById("deleteBtn");
const result = document.getElementById("result");

// Показываем превью фото
fileInput.addEventListener("change", () => {
  const file = fileInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = e => {
      preview.src = e.target.result;
      preview.style.display = "block";
    };
    reader.readAsDataURL(file);
  }
});

// Кнопка "Проверить" (пока рандом)
analyzeBtn.addEventListener("click", () => {
  if (!fileInput.files[0]) {
    result.textContent = "⚠️ Сначала загрузите фото!";
    return;
  }
  // Заглушка до подключения модели
  const states = ["🚗 Машина чистая и целая", "🚘 Машина грязная", "💥 Машина повреждена"];
  result.textContent = states[Math.floor(Math.random() * states.length)];
});

// Кнопка "Удалить фото"
deleteBtn.addEventListener("click", () => {
  fileInput.value = "";        // очищаем input
  preview.src = "";            // убираем превью
  preview.style.display = "none";
  result.textContent = "";     // очищаем результат
});
