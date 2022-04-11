# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:

Quiz.destroy_all


puts 'Seeding quizzes'
Quiz.create(name: 'personality quiz')
Quiz.create(name: 'sith')
puts 'Quizes done'

puts 'Seeding questions'
Question.create(question_text: 'species', quiz_id: 1)
Question.create(question_text: 'gender', quiz_id: 1)
Question.create(question_text: 'height', quiz_id: 1)
Question.create(question_text: 'hot/cold', quiz_id: 1)
Question.create(question_text: "who is credited with the rule of two?", quiz_id: 2)
Question.create(question_text: "who was the master of darth tyranus?", quiz_id: 2)
Question.create(question_text: "who was emperor palpatine's sith name?", quiz_id: 2)
Question.create(question_text: "which planet was the home to the sith academy?", quiz_id: 2)
Question.create(question_text: "who did darth maul take as his apprentice?", quiz_id: 2)
puts 'Questions done'

puts 'Seeding answers'
Answer.create(answer_text: 'human', correct: true, question_id: 1)
Answer.create(answer_text: 'non-human', correct: false, question_id: 1)
Answer.create(answer_text: 'male', correct: true, question_id: 2)
Answer.create(answer_text: 'female', correct: false, question_id: 2)
Answer.create(answer_text: 'above average', correct: true, question_id: 3)
Answer.create(answer_text: 'below average', correct: false, question_id: 3)
Answer.create(answer_text: 'hot', correct: true, question_id: 4)
Answer.create(answer_text: 'cold', correct: false, question_id: 4)
Answer.create(answer_text: "darth bane", correct: true, question_id: 5)
Answer.create(answer_text: "sifo-dyas", correct: false, question_id: 5)
Answer.create(answer_text: "darth plagueis", correct: false, question_id: 5)
Answer.create(answer_text: "darth tyranus", correct: false, question_id: 5)
Answer.create(answer_text: "darth bane", correct: false, question_id: 6)
Answer.create(answer_text: "darth vader", correct: false, question_id: 6)
Answer.create(answer_text: "darth maul", correct: false, question_id: 6)
Answer.create(answer_text: "darth sidious", correct: true, question_id: 6)
Answer.create(answer_text: "darth plagueis", correct: false, question_id: 7)
Answer.create(answer_text: "darth sidious", correct: true, question_id: 7)
Answer.create(answer_text: "darth vader", correct: false, question_id: 7)
Answer.create(answer_text: "darth tyranus", correct: false, question_id: 7)
Answer.create(answer_text: "utapau", correct: false, question_id: 8)
Answer.create(answer_text: "dathomir", correct: false, question_id: 8)
Answer.create(answer_text: "korriban", correct: true, question_id: 8)
Answer.create(answer_text: "tython", correct: false, question_id: 8)
Answer.create(answer_text: "asajj ventress", correct: false, question_id: 9)
Answer.create(answer_text: "savage opress", correct: true, question_id: 9)
Answer.create(answer_text: "starkiller", correct: false, question_id: 9)
Answer.create(answer_text: "general grievous", correct: false, question_id: 9)
puts 'Answers done'