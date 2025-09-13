const fileInput = document.getElementById("fileInput");
const uploadArea = document.getElementById("uploadArea");
const preview = document.getElementById("preview");
const deleteBtn = document.getElementById("deleteBtn");
const themeToggle = document.getElementById("themeToggle");

// Клик по зоне загрузки = открыть диалог
uploadArea.addEventListener("click", () => fileInput.click());

// Превью картинки
fileInput.addEventListener("change", () => {
  const file = fileInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      preview.src = e.target.result;
      preview.style.display = "block";
    };
    reader.readAsDataURL(file);
  }
});

// Удаление фото
deleteBtn.addEventListener("click", () => {
  fileInput.value = "";
  preview.src = "";
  preview.style.display = "none";
});

// Переключение темы
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  themeToggle.textContent = document.body.classList.contains("light") ? "☀️" : "🌙";
});
