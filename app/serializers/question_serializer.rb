class QuestionSerializer < ActiveModel::Serializer
  attributes :id, :question_text, :answers

  def answers
    object.answers.map do |a|
    {
      answer_id: a.id,
      answer_text: a.answer_text,
      correct: a.correct
    }
    end
  end


end
