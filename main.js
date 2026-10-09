const taskManager = new TaskManager();

const loadTasksBtn = document.getElementById("loadTasksBtn");
const statusMessage = document.getElementById("statusMessage");
const taskListContainer = document.getElementById("taskList");

// Render tasks to DOM using standard DOM creation methods
function renderTasks() {
  taskListContainer.innerHTML = "";

  taskManager.tasks.forEach((task) => {
    const taskDiv = document.createElement("div");
    taskDiv.className = "task";
    if (task.completed) {
      taskDiv.classList.add("completed");
    }

    const titleSpan = document.createElement("span");
    titleSpan.textContent = task.title;

    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = task.completed ? "Undo" : "Complete";
    toggleBtn.addEventListener("click", () => {
      taskManager.toggleTask(task.id);
      renderTasks();
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
      taskManager.removeTask(task.id);
      renderTasks();
    });

    taskDiv.appendChild(titleSpan);
    taskDiv.appendChild(toggleBtn);
    taskDiv.appendChild(deleteBtn);

    taskListContainer.appendChild(taskDiv);
  });
}

// Event listener for loading tasks asynchronously with JSON serialization and try/catch error handling
loadTasksBtn.addEventListener("click", async () => {
  statusMessage.textContent = "Loading tasks...";

  try {
    // 1. Fetch raw data asynchronously
    const rawData = await fetchTasks();

    // 2. Convert to JSON string (JSON Requirement)
    const jsonString = JSON.stringify(rawData);

    // 3. Parse JSON string back into a JS object
    const parsedData = JSON.parse(jsonString);

    // 4. Instantiate Task objects from parsed data
    const taskInstances = parsedData.map(
      (item) => new Task(item.id, item.title, item.completed)
    );

    // 5. Store in TaskManager and render
    taskManager.setTasks(taskInstances);
    renderTasks();
    statusMessage.textContent = "";
  } catch (error) {
    // Display error message if fetching fails
    statusMessage.textContent = "Error loading tasks. Please try again.";
  }
});