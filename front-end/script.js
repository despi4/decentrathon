const fileInput = document.getElementById("fileInput");
const uploadArea = document.getElementById("uploadArea");
const preview = document.getElementById("preview");
const analyzeBtn = document.getElementById("analyzeBtn");
const deleteBtn = document.getElementById("deleteBtn");
const result = document.getElementById("result");
const themeToggle = document.getElementById("themeToggle");

// 🌙 Переключение темы
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// 📂 Клик по зоне загрузки
uploadArea.addEventListener("click", () => fileInput.click());

// Drag & drop
uploadArea.addEventListener("dragover", e => {
  e.preventDefault();
  uploadArea.style.borderColor = "#4caf50";
});
uploadArea.addEventListener("dragleave", () => {
  uploadArea.style.borderColor = "";
});
uploadArea.addEventListener("drop", e => {
  e.preventDefault();
  fileInput.files = e.dataTransfer.files;
  showPreview(fileInput.files[0]);
});

// Показываем превью
fileInput.addEventListener("change", () => {
  const file = fileInput.files[0];
  if (file) showPreview(file);
});

function showPreview(file) {
  const reader = new FileReader();
  reader.onload = e => {
    preview.src = e.target.result;
    preview.style.display = "block";
  };
  reader.readAsDataURL(file);
}

// Кнопка "Проверить" (пока заглушка)
analyzeBtn.addEventListener("click", () => {
  if (!fileInput.files[0]) {
    result.textContent = "⚠️ Сначала загрузите фото!";
    return;
  }
  const states = ["✅ Машина чистая и целая", "🟡 Машина грязная", "❌ Машина повреждена"];
  result.textContent = states[Math.floor(Math.random() * states.length)];
});

// Кнопка "Удалить фото"
deleteBtn.addEventListener("click", () => {
  fileInput.value = "";
  preview.src = "";
  preview.style.display = "none";
  result.textContent = "";
});
