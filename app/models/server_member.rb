class ServerMember < ApplicationRecord
  validates :server_id, :member_id, presence: true
  validates :server_id, uniqueness: {scope: :member_id}

  belongs_to :servers,
    foreign_key: :server_id,
    class_name: :Server

  belongs_to :members,
    foreign_key: :member_id,
    class_name: :User


end
