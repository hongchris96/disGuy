class DirectMessageChannel < ApplicationRecord
  validates :user1_id, :user2_id, presence: true
  validates :user1_id, uniqueness: {scope: :user2_id}

  belongs_to :user1,
    foreign_key: :user1_id,
    class_name: :User

  belongs_to :user2,
    foreign_key: :user2_id,
    class_name: :User

  has_many :direct_messages,
    foreign_key: :channel_id,
    class_name: :DirectMessage

end
