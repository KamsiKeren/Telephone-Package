class Telephone {
    constructor() {
      this.phoneNumbers = new Map();
      this.observers = [];
    }
  
    addPhoneNumber(label, phoneNumber) {
      this.phoneNumbers.set(label, phoneNumber);
      this.notifyObservers(label, phoneNumber);
    }
  
    removePhoneNumber(label) {
      this.phoneNumbers.delete(label);
    }
  
    dialPhoneNumber(label) {
      const phoneNumber = this.phoneNumbers.get(label);
      if (phoneNumber) {
        this.notifyObservers(label, phoneNumber);
      } else {
        console.log(`Phone number with label "${label}" not found.`);
      }
    }
  
    addObserver(observer) {
      this.observers.push(observer);
    }
  
    removeObserver(observer) {
      this.observers = this.observers.filter(o => o !== observer);
    }
  
    notifyObservers(label, phoneNumber) {
      this.observers.forEach(observer => observer.update(label, phoneNumber));
    }
  }
  
  class Observer {
    constructor(name) {
      this.name = name;
    }
  
    update(label, phoneNumber) {
      console.log(`${this.name}: Dialing ${label} (${phoneNumber}).`);
    }
  }
  
  const telephone = new Telephone();
  const observer1 = new Observer('Phone Number Printer');
  const observer2 = new Observer('Dialer');
  
  telephone.addObserver(observer1);
  telephone.addObserver(observer2);
  