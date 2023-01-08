const obj = {
  name: "ellie",
  age: 20,
};
const obj2 = {
  animal: "🐕",
};

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

console.log(getValue(obj, "name")); // ellie
console.log(getValue(obj, "age")); // 20
console.log(getValue(obj2, "animal")); // "🐕"
