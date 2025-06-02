const findTheOldest = function(people) {
  getAge(people)
  return people.sort((a, b) => b.age - a.age)[0]
  
}

function getAge(people){
  death = new Date().getFullYear()
  people.forEach((man) =>{ 

  if(man.yearOfDeath){
    man["age"] = man.yearOfDeath - man.yearOfBirth
  }else{
    man["age"] = death - man.yearOfBirth
  }
  })
}

// Do not edit below this line
module.exports = findTheOldest;
