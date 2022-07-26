// sample array of students
const students = [
  {
    name: "Jill",
    lastname: "Doe",
    age: 24,
    course: "Marketing",
  },
  {
    name: "John",
    lastname: "Doe",
    age: 22,
    course: "Web Development",
  },
  {
    name: "Jack",
    lastname: "Doe",
    age: 20,
    course: "Accounting",
  },
  {
    name: "Ryan Jhon",
    lastname: "Ray",
    age: 23,
    course: "Web Development",
  },
  {
    name: "Jane",
    lastname: "Doe",
    age: 20,
    course: "Financial Management",
  },
];

/*const developers = [
  {
    id: 1,
    name: "John",
    skills: ["HTML", "React", "JavaScript", "Java"],
  },
  {
    id: 2,
    name: "Jane",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "NodeJS"],
  },
  {
    id: 3,
    name: "Jack",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "NodeJS"],
  },
];*/

// Write your code here!
//FOR
/*for(let i = 0; i < students.length; i++)
  {
    console.log(students[i])
  }*/

//FOREACH
/*students.forEach(function (student, index, students) {
  console.log(student)
  console.log(index)
  console.log(students)
})*/

//ForEach
/*const fullnames = []
students.forEach((student) => {
  fullnames.push(student.name + ' ' + student.lastname)
})
console.log(fullnames)*/
/* MAP
const result = students.map(function(student){
  return student.name + '' + student.lastname;
})
console.log(result)*/

//MAP FUNCION FLECHA
/*const names = students.map(student => student.name+ ' '+ student.lastname)
console.log(names)*/

//MAP
/*const names = students.map(student => {
  return {
    fulname: student.name + ' '+ student.lastname,
    age: student.age,
    course: student.course
  }
})
console.log(names)*/

//MAP AGREGANDO UN DATO EXTRA
/*const names = students.map(student => {
  return {
    name: student.name,
    lastname: student.lastname,
    age: student.age,
    course: student.course,
    title: `${student.name} - ${student.course}`
  }
})
console.log(names)*/
//MAP express operator
/*const names = students.map(student => {
  return {
    ...student,
    title: `${student.name} - ${student.course}`
  }
})
console.log(names)*/
//MAP CAMBIANDO VALOR DE VARIABLES
/*const newcourses = students.map(student => ({
    ...student,
    course: 'Programming',
}))
const doubleage = newcourses.map(student => ({...student,
age: student.age * 2}))
console.log(doubleage)*/

//BUBLE FOR
/*const developers = []
for(let i = 0; i < students.length; i++)
{
  if(students[i].course === 'Web Development'){
    developers.push(students[i])
  }
}
console.log(developers)*/

//METODO FILTER
/*const result = students.filter(function(student){
  if(student.course === 'Web Development'){
    return true
  }
})
console.log(result)*/

//Método filter con funcion flecha
/*const result = students.filter(student =>
  student.age > 22)
console.log(result)*/

//BUCLE FOR ANTES DE REDUCE
/*let total = 0;
for(let i = 0; i < students.length; i++){
  total += students[i].age
}
console.log(total)*/

//Método reduce
/*const result = students.reduce(function (total, student){
  return total + student.age;
}, 0)
console.log(result)*/

//Metodo reduce funcion flecha
/*const result = students.reduce((total, student) => total + student.age, 0)
console.log(result)*/

//Método reduce con developer
/*const result = developers.reduce(function(allSkills, student){
  return Array.from (new Set([...allSkills, ...student.skills]))
}, [])
console.log(result)*/

//SORT
/*const result = students.sort(function (first, second){
  if(first.age > second.age){
    return 1
  } else{
    return -1 
  }
})
console.log(result)*/

//Método sort con funcion flecha
/*const numbers = [10, 30, 100, 10000]
const result = students.sort((a,b) => a.age > b.age ?  1 : -1)

console.log(numbers.sort((a,b) => a- b))*/

//FIND
/*const result = students.find(function (student) {
  if(student.name === 'Jane'){
    return 1
  }
})
console.log(result)*/


//FIND CON FUNCION FLECHA
/*const result = students.find((student) => student.name === 'Janes')
console.log(result)*/

//Some
/*const result = students.some(function(student){
  if (student.age > 22){
    return true
  }
})
console.log(result)*/

//Some con funcion flecha
/*const result = students.some((student) => student.lastname === 'Doe')
console.log(result)*/

//Every
/*const result = students.every(student => student.age === 20)
console.log (result)*/

//COMBINED
const result = students.map(({ name, lastname, age }) => ({
  student: `${name} ${lastname}`,
  age
}))
  .filter(student => student.age > 20)
  .sort((a, b) => a.age - b.age)
  .reduce((total, student) => total + student.age, 0)
console.log(result)