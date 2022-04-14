Quiz.destroy_all
Item.destroy_all

puts 'Seeding quizzes'
personalityquiz = Quiz.create(name: 'personality quiz')
sithquiz = Quiz.create(name: 'sith', max_score: 5)
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
puts 'Seeding Sith'
darth_maul = Item.create(name: 'darth maul', category: 'sith' image_url: 'https://res.cloudinary.com/dxuhofgoz/image/upload/v1649868967/SW:Sticker%20Collector/Sith/darth_maul_msupof.png')
darth_vader = Item.create(name: 'darth vader', category: 'sith' image_url: 'https://res.cloudinary.com/dxuhofgoz/image/upload/v1649868967/SW:Sticker%20Collector/Sith/darth_vader_dmhvst.png')
darth_sidious = Item.create(name: 'darth sidious', category: 'sith' image_url: 'https://res.cloudinary.com/dxuhofgoz/image/upload/v1649868967/SW:Sticker%20Collector/Sith/darth_sidious_vbnlea.png')
count_dooku = Item.create(name: 'count dooku', category: 'sith' image_url: 'https://res.cloudinary.com/dxuhofgoz/image/upload/v1649868967/SW:Sticker%20Collector/Sith/count_dooku_v2fnun.png')
snoke = Item.create(name: 'snoke', category: 'sith' image_url: 'https://res.cloudinary.com/dxuhofgoz/image/upload/v1649886170/SW:Sticker%20Collector/Sith/snoke_pguj7p.png')
chancellor_palpatine_unlimited = Item.create(name: 'cancellor palpatine (unlimited power)', category: 'sith' image_url: 'https://res.cloudinary.com/dxuhofgoz/image/upload/v1649881394/SW:Sticker%20Collector/Sith/chancellor_palpatine_force_lightning_i318la.png')
vader_unmasked = Item.create(name: 'darth vader (unmasked)', category: 'sith', image_url: 'https://res.cloudinary.com/dxuhofgoz/image/upload/v1649881435/SW:Sticker%20Collector/Sith/darth_vader_unmasked_pcybx8.png')
emperor_palpatine = Item.create(name: 'emperor palpatine', category: 'sith', image_url: 'https://res.cloudinary.com/dxuhofgoz/image/upload/v1649883787/SW:Sticker%20Collector/Sith/emperor_palpatine_cane_ov2a7k.png')
chancellor_palpatine_lightsaber = Item.create(name: 'chancellor palpatine (lightsaber)', category: 'sith', image_url: 'https://res.cloudinary.com/dxuhofgoz/image/upload/v1649883787/SW:Sticker%20Collector/Sith/chancellor_palpatine_lightsaber_l7hnad.png')
puts 'Seeding Jedi'
shaak_ti = Item.create(name: 'shaak ti', category: 'jedi', image_url: 'https://res.cloudinary.com/dxuhofgoz/image/upload/v1649886677/SW:Sticker%20Collector/Jedi/shaak_ti_xuanfp.png' )
plo_koon = Item.create(name: 'plo koon', category: 'jedi', image_url: 'https://res.cloudinary.com/dxuhofgoz/image/upload/v1649881369/SW:Sticker%20Collector/Jedi/plo_koon_pyzc48.png' )
qui_gon_jin = Item.create(name: 'qui gon jin', category: 'jedi', image_url: 'https://res.cloudinary.com/dxuhofgoz/image/upload/v1649881369/SW:Sticker%20Collector/Jedi/qui_gon_jin_bckc8h.png' )
kit_fisto = Item.create(name: 'kit fisto', category: 'jedi', image_url: 'https://res.cloudinary.com/dxuhofgoz/image/upload/v1649881369/SW:Sticker%20Collector/Jedi/kit_fisto_geomzh.png')
mace_windu = Item.create(name: 'mace windu', category: 'jedi', image_url: 'https://res.cloudinary.com/dxuhofgoz/image/upload/v1649870076/SW:Sticker%20Collector/Jedi/mace_windu_wk4bvd.png')
yoda = Item.create(name: 'yoda', category: 'jedi', image_url: 'https://res.cloudinary.com/dxuhofgoz/image/upload/v1649868947/SW:Sticker%20Collector/Jedi/yoda_ig9uq5.png' )
anakin_skywalker = Item.create(name: 'anakin skywalker', category: 'jedi', image_url: 'https://res.cloudinary.com/dxuhofgoz/image/upload/v1649868947/SW:Sticker%20Collector/Jedi/anakin_skywalker_pbvtqw.png')
stass_allie = Item.create(name: 'stass allie', category: 'jedi', image_url: 'https://res.cloudinary.com/dxuhofgoz/image/upload/v1649881369/SW:Sticker%20Collector/Jedi/stass_allie_fyfit9.png')
coleman_trebor = Item.create(name: 'coleman trebor', category: 'jedi', image_url: 'https://res.cloudinary.com/dxuhofgoz/image/upload/v1649881369/SW:Sticker%20Collector/Jedi/coleman_trebor_hrzj9l.png')
puts 'Items done'

puts 'Seeding QuizItems'
Quizitem.create(item_id: darth_maul.id, quiz_id: sithquiz.id)
Quizitem.create(item_id: darth_vader.id, quiz_id: sithquiz.id)
Quizitem.create(item_id: darth_sidious.id, quiz_id: sithquiz.id)
Quizitem.create(item_id: count_dooku.id, quiz_id: sithquiz.id)
puts 'QuizItems done'

