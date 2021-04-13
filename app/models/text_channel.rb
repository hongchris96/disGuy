class TextChannel < ApplicationRecord
  validates :text_channel_name, :server_id, presence: true
  validates :text_channel_name, uniqueness: {scope: :server_id}

  belongs_to :server,
    foreign_key: :server_id,
    class_name: :Server

  has_many :text_channel_messages,
    foreign_key: :channel_id,
    class_name: :TextChannelMessage
end
