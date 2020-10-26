export default class Database {
  constructor(name, version) {
    this.name = name;
    this.version = version;
    this.indexedDB = {};
    this.database = window.indexedDB.open(name, version);
  }

  init(fields, successCallback) {
    this.database.onsuccess = () => {
      console.log(`Database ${this.name}: created successfully`);
      this.indexedDB = this.database.result;
      if (typeof successCallback === "function") successCallback();
    }

    this.database.onupgradeneeded = event => {
      const instance = event.target.result;
      const objectStore = instance.createObjectStore(this.name, {
        keyPath: "key",
        autoIncrement: true,
      });

      if (typeof fields === "string") fields = fields.split(",").map(s => s.trim());
      for (let field of fields) objectStore.createIndex(field, field);
    }
  }

  persist(task, success) {
    if (typeof task === "object") {
      const transaction = this.indexedDB.transaction([this.name], "readwrite");
      const objectStore = transaction.objectStore(this.name);
      const request = objectStore.add(task);
      if (typeof success === "function") request.onsuccess = success;
      return transaction;
    } else {
      throw new Error("An object was expected.");
    }
  }

  getOpenCursor() {
    const transaction = this.indexedDB.transaction([this.name], "readonly");
    const objectStore = transaction.objectStore(this.name);
    return objectStore.openCursor();
  }

  // retrieving particular record from DB by id
  getField(id) {
    if(typeof id === "number"){
      const transaction = this.indexedDB.transaction([this.name],"readonly");
      const objectStore = transaction.objectStore(this.name);
      const request = objectStore.get(id);
      return request;
    } else {
      throw new Error("Parameter 'id' expected to be a number.");
    }
  }

  // saving the changes made in the particular record
  saveChanges(task, success) {
    if(typeof task === "object") {
      const transaction = this.indexedDB.transaction([this.name], "readwrite");
      const objectStore = transaction.objectStore(this.name);
      const request = objectStore.put(task);
      if (typeof success === "function") request.onsuccess = success;
      return transaction;
    } else {
      throw new Error("An object was expected");
    }
  }

  delete(id, success) {
    if (typeof id === "number") {
      const transaction = this.indexedDB.transaction([this.name], "readwrite");
      const objectStore = transaction.objectStore(this.name);
      const request = objectStore.delete(id);
      if (typeof success === "function") transaction.oncomplete = success;
    } else {
      throw new Error("Parameter 'id' expected to be a number.");
    }
  }

  toggleDone(id, isDone, success) {
    if (typeof id === "number") {
      const transaction = this.indexedDB.transaction([this.name], "readwrite");
      const objectStore = transaction.objectStore(this.name);
      objectStore.get(id).onsuccess = function (event) {
        const task = event.target.result;
        task.done = isDone;
        const request = objectStore.put(task);
        if (typeof success === "function") request.onsuccess = success;
      };
      return transaction;
    } else {
      throw new Error("Parameter 'id' expected to be a number.");
    }
  }
}
