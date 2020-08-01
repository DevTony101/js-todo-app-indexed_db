import Database from "./database/database";

document.addEventListener("DOMContentLoaded", () => {
  const database = new Database("DBTasks", 1);
  database.init("title, description", () => showTasks());
  const form = document.querySelector("form");
  const tasksContainer = document.querySelector("#task-container");
  form.addEventListener("submit", saveTask);

  function saveTask(event) {
    event.preventDefault();
    const title = document.querySelector("#itTitle").value;
    const description = document.querySelector("#itDescription").value;
    const task = {title, description};
    const transaction = database.persist(task, () => form.reset());
    transaction.oncomplete = () => {
      console.log("Task added successfully!");
      showTasks();
    }
  }

  function showTasks() {
    // Leave the div empty
    while (tasksContainer.firstChild) tasksContainer.removeChild(tasksContainer.firstChild);
    const request = database.getOpenCursor();
    request.onsuccess = event => {
      const cursor = event.target.result;
      if (cursor) {
        const {key, title, description} = cursor.value;
        // Step 1
        const message = document.createElement("article");
        message.classList.add("message", "is-primary");
        message.setAttribute("data-id", key);
        // Step 2
        message.innerHTML = `
          <div class="message-header">
            <p>${title}</p>
          </div>
          <div class="message-body">
            <p>${description}</p>
          </div>
        `;
        // Step 3
        tasksContainer.appendChild(message);
        // Step 4
        cursor.continue();
      } else {
        if (!tasksContainer.firstChild) {
          const text = document.createElement("p");
          text.textContent = "There are no tasks to be shown.";
          tasksContainer.appendChild(text);
        }
      }
    }
  }

  function removeTask(event) {
    const header = event.target.parentElement;
    const task = header.parentElement;
    const id = Number(task.getAttribute("data-id"));
    database.delete(id, () => {
      // Success callback
    });
  }
});