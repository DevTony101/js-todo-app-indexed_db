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

  maskCompelete(id, success) {
    if (typeof id === "number") {
      const transaction = this.indexedDB.transaction([this.name], "readwrite");
      const objectStore = transaction.objectStore(this.name);
      let task = objectStore.get(id);

      task.onsuccess = _ => {
        var obj = task.result;
        if(!obj) {
          console.log('no matching object for id, canceling update', id);
          return;
        }
  
        console.log('loaded object to modify', obj);
        obj.completed = true;
        console.log('storing new object in place of old', obj);
        objectStore.put(obj);
      };
   
      if (typeof success === "function") transaction.oncomplete = success;
    } else {
      throw new Error("Parameter 'id' expected to be a number.");
    }
  }

}
