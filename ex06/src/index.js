function myNes() {
  var myStorage = {
    car: {
      inside: {
        "glove box": "maps",
        "passanger seat": "crumbs",
      },
      outside: {
        trunk: "jack",
      },
    },
  };

  var glovBoxContents = myStorage.car["inside"]["glove box"];
  return glovBoxContents;
}

console.log(myNes());
module.exports = myNes;
