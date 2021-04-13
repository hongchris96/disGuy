class TextChannelMessage < ApplicationRecord
  validates :author_id, :channel_id, :chat_content, presence: true

  belongs_to :author, 
    foreign_key: :author_id,
    class_name: :User

  belongs_to :text_channel,
    foreign_key: :channel_id,
    class_name: :TextChannel
end
