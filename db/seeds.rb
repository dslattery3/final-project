Quiz.destroy_all
Item.destroy_all

puts 'Seeding quizzes'
personalityquiz = Quiz.create(name: 'personality quiz')
sithquiz = Quiz.create(name: 'sith')
puts 'Quizes done'

puts 'Seeding questions'
Question.create(question_text: 'species', quiz_id: personalityquiz.id)
Question.create(question_text: 'gender', quiz_id: personalityquiz.id)
Question.create(question_text: 'height', quiz_id: personalityquiz.id)
Question.create(question_text: 'hot/cold', quiz_id: personalityquiz.id)
Question.create(question_text: "who is credited with the rule of two?", quiz_id: sithquiz.id)
Question.create(question_text: "who was the master of darth tyranus?", quiz_id: sithquiz.id)
Question.create(question_text: "who was emperor palpatine's sith name?", quiz_id: sithquiz.id)
Question.create(question_text: "which planet was the home to the sith academy?", quiz_id: sithquiz.id)
Question.create(question_text: "who did darth maul take as his apprentice?", quiz_id: sithquiz.id)
puts 'Questions done'

puts 'Seeding answers'
Answer.create(answer_text: 'human', correct: true, question_id: personalityquiz.questions[0].id)
Answer.create(answer_text: 'non-human', correct: false, question_id: personalityquiz.questions[0].id)
Answer.create(answer_text: 'male', correct: true, question_id: personalityquiz.questions[1].id)
Answer.create(answer_text: 'female', correct: false, question_id: personalityquiz.questions[1].id)
Answer.create(answer_text: 'above average', correct: true, question_id: personalityquiz.questions[2].id)
Answer.create(answer_text: 'below average', correct: false, question_id: personalityquiz.questions[2].id)
Answer.create(answer_text: 'hot', correct: true, question_id: personalityquiz.questions[3].id)
Answer.create(answer_text: 'cold', correct: false, question_id: personalityquiz.questions[3].id)
Answer.create(answer_text: "darth bane", correct: true, question_id: sithquiz.questions[0].id)
Answer.create(answer_text: "sifo-dyas", correct: false, question_id: sithquiz.questions[0].id)
Answer.create(answer_text: "darth plagueis", correct: false, question_id: sithquiz.questions[0].id)
Answer.create(answer_text: "darth tyranus", correct: false, question_id: sithquiz.questions[0].id)
Answer.create(answer_text: "darth bane", correct: false, question_id: sithquiz.questions[1].id)
Answer.create(answer_text: "darth vader", correct: false, question_id: sithquiz.questions[1].id)
Answer.create(answer_text: "darth maul", correct: false, question_id: sithquiz.questions[1].id)
Answer.create(answer_text: "darth sidious", correct: true, question_id: sithquiz.questions[1].id)
Answer.create(answer_text: "darth plagueis", correct: false, question_id: sithquiz.questions[2].id)
Answer.create(answer_text: "darth sidious", correct: true, question_id: sithquiz.questions[2].id)
Answer.create(answer_text: "darth vader", correct: false, question_id: sithquiz.questions[2].id)
Answer.create(answer_text: "darth tyranus", correct: false, question_id: sithquiz.questions[2].id)
Answer.create(answer_text: "utapau", correct: false, question_id: sithquiz.questions[3].id)
Answer.create(answer_text: "dathomir", correct: false, question_id: sithquiz.questions[3].id)
Answer.create(answer_text: "korriban", correct: true, question_id: sithquiz.questions[3].id)
Answer.create(answer_text: "tython", correct: false, question_id: sithquiz.questions[3].id)
Answer.create(answer_text: "asajj ventress", correct: false, question_id: sithquiz.questions[4].id)
Answer.create(answer_text: "savage opress", correct: true, question_id: sithquiz.questions[4].id)
Answer.create(answer_text: "starkiller", correct: false, question_id: sithquiz.questions[4].id)
Answer.create(answer_text: "general grievous", correct: false, question_id: sithquiz.questions[4].id)
puts 'Answers done'

puts 'Seeding Items'
darth_maul = Item.create(name: 'darth maul', image_url: './stickers/darth_maul.png')
darth_vader = Item.create(name: 'darth vader', image_url: './stickers/darth_vader.png')
darth_sidious = Item.create(name: 'darth sidious', image_url: './stickers/darth_sidious.png')
count_dooku = Item.create(name: 'count dooku', image_url: './stickers/count_dooku.png')
puts 'Items done'

puts 'Seeding QuizItems'
Quizitem.create(item_id: darth_maul.id, quiz_id: sithquiz.id)
Quizitem.create(item_id: darth_vader.id, quiz_id: sithquiz.id)
Quizitem.create(item_id: darth_sidious.id, quiz_id: sithquiz.id)
Quizitem.create(item_id: count_dooku.id, quiz_id: sithquiz.id)
puts 'QuizItems done'

