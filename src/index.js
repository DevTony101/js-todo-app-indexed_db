import Database from "./database/database";

document.addEventListener("DOMContentLoaded", () => {
  const database = new Database("DBTasks", 1);
  database.init("title, description, done", () => showTasks());
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
    const deadline = document.querySelector("#itDeadline").value;
    const task = {title, description, deadline, done: false};
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
    const deadline = document.querySelector("#editDeadline").value;
    const done = document.querySelector("#editDone").checked;
    const task = {title, description, deadline, done, key};
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
        const {key, title, description, deadline, done} = cursor.value;

        // Message container
        const message = document.createElement("article");
        message.classList.add("message", done ? "is-dark" : "is-primary");
        message.classList.toggle("is-done", done);
        message.setAttribute("data-id", key);
        tasksContainer.appendChild(message);

        // Message header
        const messageHeader = document.createElement("div");
        messageHeader.classList.add("message-header");
        messageHeader.innerHTML = `<p>${title}</p>`;
        message.appendChild(messageHeader);

        // Creating the delete button element
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete");
        deleteButton.setAttribute("aria-label", "delete");
        deleteButton.onclick = removeTask;

        /*
        If the user added a deadline we create a container for it and
        the delete button and add them to the message header
        */
        if (deadline) {
          const deadlineSpan = document.createElement("span");
          deadlineSpan.innerText = `Deadline: ${deadline}`;
          deadlineSpan.classList.add("mr-4");
          const messageHeaderRightDiv = document.createElement("div");
          messageHeaderRightDiv.appendChild(deadlineSpan);
          messageHeaderRightDiv.appendChild(deleteButton);
          messageHeader.appendChild(messageHeaderRightDiv);
        } else {
          // or just add the delete button to the message header
          messageHeader.appendChild(deleteButton);
        }

        // Message body
        const messageBody = document.createElement("div");
        messageBody.classList.add("message-body", "level");
        messageBody.innerHTML = `<p>${description}</p>`;
        message.appendChild(messageBody);

        // Add a container for controls
        const controlsContainer = document.createElement("div");
        controlsContainer.classList.add("mt-4", "is-flex", "is-align-items-baseline", "level-right");
        messageBody.appendChild(controlsContainer);

        // Creating the edit task button element
        const editButton = document.createElement("button");
        editButton.classList.add("button");
        editButton.innerHTML = "Edit";
        editButton.setAttribute("aria-label","edit");
        editButton.onclick = editTask;

        // Adding it to the controls container
        controlsContainer.appendChild(editButton);

        // Creating the "done" checkbox
        const doneLabel = document.createElement("label");
        doneLabel.classList.add("checkbox", "ml-4");
        const doneCheckbox = document.createElement("input");
        doneCheckbox.setAttribute("type", "checkbox");
        doneCheckbox.checked = done;
        doneCheckbox.onchange = toggleTaskDone;
        doneLabel.appendChild(doneCheckbox);
        doneLabel.appendChild(document.createTextNode(" Done"));

        // Adding it to the controls container
        controlsContainer.appendChild(doneLabel);

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

  function toggleTaskDone(event) {
    const task = event.currentTarget.closest(".message");
    const isDone = event.currentTarget.checked;
    const id = Number(task.dataset.id);
    database.toggleDone(id, isDone, () => {
      task.classList.toggle("is-done", isDone);
      task.classList.toggle("is-primary", !isDone);
      task.classList.toggle("is-dark", isDone);
    });
  }

  // filling up the modal with values of the respective to-do task
  function editTask(event){
    const task = event.currentTarget.closest(".message");
    const id = Number(task.getAttribute("data-id"));
    const val = database.getField(id);
    val.onsuccess = () => {
      const {key, title, description, deadline, done} = val.result;
      var editTitle = document.getElementById("editTitle");
      editTitle.setAttribute("value", title);

      var editDescription = document.getElementById("editDescription");
      editDescription.innerHTML = description;

      var editDeadline = document.getElementById("editDeadline");
      editDeadline.setAttribute("value", deadline)

      document.getElementById("editDone").checked = done;
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
