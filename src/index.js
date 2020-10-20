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
    const task = {title, description, completed: false};
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
        const {key, title, description, completed } = cursor.value;
        const message = document.createElement("article");
        message.classList.add("message");
        if( completed ){
          message.classList.add("is-dark", "completed")
        }else{
          message.classList.add("is-primary")
        }
        message.setAttribute("data-id", key);
        message.innerHTML = `
          <div class="message-header">
            <p class="title-message">${title}</p>
          </div>
          <div class="message-body">
            <p>${description}</p>
          </div>
        `;

        // Creating the delete button element
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete");
        deleteButton.setAttribute("aria-label", "delete");
        deleteButton.onclick = removeTask;

        // Adding it to the div message header
        message.firstChild.nextSibling.appendChild(deleteButton);

        // Creating 
        if( !completed ){
          const completeButtom = document.createElement("button");
          completeButtom.classList.add("button", "complete", "is-success", "is-light");
          completeButtom.textContent = 'Complete'
          completeButtom.onclick = markAsCompletTask;
          message.querySelector('.message-header').insertAdjacentElement('afterbegin', completeButtom);
        }

        // Adding it to the div message header
        tasksContainer.appendChild(message);
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
      // Step 1
      tasksContainer.removeChild(task);

      // Step 2
      if (!tasksContainer.firstChild) {
        const text = document.createElement("p");
        text.textContent = "There are no tasks to be shown.";
        tasksContainer.appendChild(text);
      }

      // Optional Step 3: Console log for debugging purposes
      console.log(`Task with id ${id} deleted successfully.`);
    });
  }

  function markAsCompletTask(evemt) {
    const header = event.target.parentElement;
    const task = header.parentElement;
    const id = Number(task.getAttribute("data-id"));

    database.maskCompelete(id, () => {
      console.log( 'task', task )
      task.classList.toggle('is-primary')
      task.classList.toggle('is-dark')

      task.querySelector('.message-header button.complete').remove()
      //console.log( task.querySelector('.message-header button.complete').remove() )
      // Optional Step 3: Console log for debugging purposes
      console.log(`Task with id ${id} mark to complete task successfully.`);
    });

  }
});