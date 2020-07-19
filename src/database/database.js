export default class Database {
  constructor(name, version, fields) {
    this.name = name;
    this.version = version;
    this.indexedDB = {};
    this.database = window.indexedDB.open(name, version);
    this.database.onsuccess = () => {
      console.log(`Database ${name}: created successfully`);
      this.indexedDB = this.database.result;
    }

    this.database.onupgradeneeded = event => {
      const instance = event.target.result;
      const objectStore = instance.createObjectStore(name, {
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
    } else {
      throw new Error("An object was expected.");
    }
  }
}
