function myFunction(myObj, checkProp) {
  // Only change code below this line
  return myObj[checkProp] || "Not Found";
  // Only change code above this line
}
myFunction(
  { title: "Titanic", song: "My Heart Will Go On", genere: "drama" },
  "title"
);
console.log(
  myFunction(
    { title: "Titanic", song: "My Heart Will Go On", genre: "drama" },
    "actor"
  )
);
module.exports = myFunction;
