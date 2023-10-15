function Constructor(target: any) {
  return new Proxy(target, {
    construct(clz, args) {
      console.log(`Constructing ${target.name}`);
      return Reflect.construct(clz, args);
    }
  });
}

const Getters = () => <T extends {new(...args:any[]):{}}>(constructor:T) => {
  return class extends constructor {
    constructor(...args: any[]) {
      super(...args);
      const props = Reflect.ownKeys(this);
      props.forEach((prop: string) => {
        const capitalizedKey = capitalize(prop);
        const methodName = `get${capitalizedKey}`;
        Object.defineProperty(this, methodName, { value: () => this[prop] });
      });
    }
  }
}

const Data = () => <T extends {new(...args:any[]):{}}>(constructor:T) => {
  return class extends constructor {
    constructor(...args: any[]) {
      super(...args);
      const props = Reflect.ownKeys(this);
      props.forEach((prop: string) => {
        const capitalizedKey = capitalize(prop);
        const methodSet = `set${capitalizedKey}`;
        Object.defineProperty(this, methodSet, { value: (newValue: any) => { this[prop] = newValue } });
        const methodGet = `set${capitalizedKey}`;
        Object.defineProperty(this, methodGet, { value: () => this[prop] });
      });
    }
  }
}

const Setters = () => <T extends {new(...args:any[]):{}}>(constructor:T) => {
  return class extends constructor {
    constructor(...args: any[]) {
      super(...args);
      const props = Reflect.ownKeys(this);
      props.forEach((prop: string) => {
        const capitalizedKey = capitalize(prop);
        const methodName = `set${capitalizedKey}`;
        Object.defineProperty(this, methodName, { value: (newValue: any) => { this[prop] = newValue } });
      });
    }
  }
}

export { Constructor, Getters, Setters }