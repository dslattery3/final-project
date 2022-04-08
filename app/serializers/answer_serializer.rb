class AnswerSerializer < ActiveModel::Serializer
  attributes :id, :question_id, :answer_text, :correct
end
