import Database from "./database/database";

document.addEventListener("DOMContentLoaded", () => {
  const database = new Database("DBTasks", 1);
  database.init("title, description", () => showTasks());
  const form = document.querySelector("#save-task");
  const tasksContainer = document.querySelector("#task-container");
  form.addEventListener("submit", saveTask);
  var modal = document.getElementById("myModal");
  var span = document.getElementsByClassName("close")[0];
  span.onclick = closeModal;

  window.onclick = function(event) {
    if (event.target == modal) {
      closeModal();
    }
  }

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

  // function for taking in the values obtained in the form of modal and sending to database
  function changeTask(event) {
    event.preventDefault();
    const key = Number(event.target.getAttribute("data-id"));
    const title = document.querySelector("#editTitle").value;
    const description = document.querySelector("#editDescription").value;
    const task = {title, description, key};
    const form = document.querySelector("#task-edit")
    const transaction = database.saveChanges(task, () => form.reset());
    transaction.oncomplete = () => {
      closeModal();
      console.log("Task edited successfully!");
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

        // Message container
        const message = document.createElement("article");
        message.classList.add("message", "is-primary");
        message.setAttribute("data-id", key);
        tasksContainer.appendChild(message);

        // Message header
        const messageHeader = document.createElement("div");
        messageHeader.classList.add("message-header");
        messageHeader.innerHTML = `<p>${title}</p>`;
        message.appendChild(messageHeader);

        // Message body
        const messageBody = document.createElement("div");
        messageBody.classList.add("message-body");
        messageBody.innerHTML = `<p>${description}</p>`;
        message.appendChild(messageBody);

        // Creating the delete button element
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete");
        deleteButton.setAttribute("aria-label", "delete");
        deleteButton.onclick = removeTask;

        // Adding it to the div message header
        messageHeader.appendChild(deleteButton);

        // Add a container for controls
        const controlsContainer = document.createElement("div");
        controlsContainer.classList.add("mt-4", "is-flex", "is-align-items-baseline");
        messageBody.appendChild(controlsContainer);

        // Creating the edit task button element
        const editButton = document.createElement("button");
        editButton.classList.add("button");
        editButton.innerHTML = "Edit";
        editButton.setAttribute("aria-label","edit");
        editButton.onclick = editTask;

        // Adding it to the controls container
        controlsContainer.appendChild(editButton);

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
    const task = event.currentTarget.closest(".message");
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

  // filling up the modal with values of the respective to-do task
  function editTask(event){
    const task = event.currentTarget.closest(".message");
    const id = Number(task.getAttribute("data-id"));
    const val = database.getField(id);
    val.onsuccess = () => {
      const {key, title, description} = val.result;
      var editTitle = document.getElementById("editTitle");
      editTitle.setAttribute("value",title);

      var editDescription = document.getElementById("editDescription");
      editDescription.innerHTML = description;
    }
    modal.style.display = "block";
    var saveChange = document.querySelector("#btnsave");
    saveChange.setAttribute("data-id",id);
    saveChange.onclick = changeTask;
  }

  // setting back modal content on closing
  function closeModal() {
    var modal = document.getElementById("myModal");
    var editTitle = document.getElementById("editTitle");
    editTitle.removeAttribute("value");
    var editDescription = document.getElementById("editDescription");
    editDescription.innerHTML = "";
    var saveChange = document.querySelector("#btnsave");
    saveChange.removeAttribute("data-id");
    modal.style.display = "none";
  }
});
