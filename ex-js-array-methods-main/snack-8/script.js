const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'

// Uso find per trovare la classe di uno studente specifico
const student1Class = students.find((student) => {
  if (student.name = 'Marco Lanci'){
    return students.class
  }
  return none
})
console.log(student1Class);