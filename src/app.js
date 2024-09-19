document.addEventListener('DOMContentLoaded', loadTasks);

const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoCategory = document.getElementById('todo-category');
const todoPriority = document.getElementById('todo-priority');
const todoDate = document.getElementById('todo-date');
const todoList = document.getElementById('todo-list');
const filterCategory = document.getElementById('filter-category');
const filterPriority = document.getElementById('filter-priority');
const toggleTheme = document.getElementById('toggle-theme');
let isDarkMode = false;

// yeni görev ekleme
todoForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const taskText = todoInput.value.trim();
    const category = todoCategory.value;
    const priority = todoPriority.value;
    const date = todoDate.value;

    if (taskText !== '') {
        const task = {
            text: taskText,
            category: category,
            priority: priority,
            date: date,
            completed: false
        };

        addTask(task);
        saveTaskToLocalStorage(task);
        todoInput.value = '';
        todoDate.value = '';
    }
});

//  ekleme fonksiyonu
function addTask(task) {
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${task.text} - ${task.category} - ${task.priority} - ${task.date}</span>
        <button>Sil</button>
    `;

    const deleteBtn = li.querySelector('button');
    deleteBtn.addEventListener('click', function() {
        li.remove();
        deleteTaskFromLocalStorage(task);
    });

    li.addEventListener('click', function() {
        task.completed = !task.completed;
        li.classList.toggle('completed');
    });

    todoList.appendChild(li);
}

// görevleri kaydetme
function saveTaskToLocalStorage(task) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// görevleri yükleme
function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(addTask);
}

// görevi silme
function deleteTaskFromLocalStorage(task) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter(t => t.text !== task.text);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// filtreleme işlemini yapacak fonksiyon
function filterTasks() {
    const selectedCategory = filterCategory.value;
    const selectedPriority = filterPriority.value;

    const tasks = document.querySelectorAll('li');
    tasks.forEach(task => {
        const taskDetails = task.querySelector('span').textContent;
        const [text, category, priority] = taskDetails.split(' - ');

        // ktegoriyi ve önceliği kontrol et
        const matchesCategory = selectedCategory === 'all' || category === selectedCategory;
        const matchesPriority = selectedPriority === 'all' || priority === selectedPriority;

        //  iki filtre de uygunsa görev görünsün
        task.style.display = matchesCategory && matchesPriority ? 'flex' : 'none';
    });
}

// filtre değişiminde filtreleme fonksiyonunu çalıştır
filterCategory.addEventListener('change', filterTasks);
filterPriority.addEventListener('change', filterTasks);

// koyu mod fonksiyonu
toggleTheme.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode');
    toggleTheme.textContent = isDarkMode ? 'Aydınlık Mod' : 'Karanlık Mod';
});
