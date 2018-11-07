const question = new Map();

question.set('question', 'what is responsible for global warming');

console.log(question.get('question'))
console.log(question)

question.set(1, 'fluffly')
question.set(2, "dinosour's waterbottle");
question.set(3, 'the sudden expansion and then eventual cloapse of our universe')
question.set(true, 'the corruption amoungst the emotional machine geese')

console.log(question)

if (question.has(3)) {
    console.log("here?")
    question.delete(true)
}

console.log(question)

question.clear()
console.log(question)
