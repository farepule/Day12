var contacts = [
    {
        "firstName": "John",
        "lastName": "Doe",
        "number": "12365495208",
        "likes": ["C", "C++", "C#"]
    },
    {
        "firstName": "Jana",
        "lastName": "Doe",
        "number": "4568295761",
        "likes": ["Python", "Swift", "R"]
    },
    {
        "firstName": "Richard",
        "lastName": "roe",
        "number": "6938257149",
        "likes": ["React", "Angular", "Vue"]
    },
    {
        "firstName": "Jane",
        "lastName": "Roe",
        "number": "unknow",
        "likes": ["JavaScript", "Node", "HTML & CSS"]
    }
];
function lookUpProfile(name, prop){
    for (var i=0;i<contacts.length;i++){
        if (contacts[i].firstName==name){
          if (prop in contacts[i]){
            return contacts[i][prop];
          } else {
            return "No such property"
          }
        }
      }
      return "No such contact"

}
console.log(lookUpProfile("John", "likes"));
console.log(lookUpProfile("Jane", "lasName"));
console.log(lookUpProfile("Richard", "likes"));
console.log(lookUpProfile("Rob", "number"));
console.log(lookUpProfile("Rob", "JavaScript"));
console.log(lookUpProfile("John", "address"));
module.exports = lookUpProfile;