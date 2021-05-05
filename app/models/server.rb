class Server < ApplicationRecord

  validates :server_name, presence: true, uniqueness: true
  validates :invite_code, presence: true, uniqueness: true 

  before_validation :ensure_server_token

  belongs_to :server_host,
    foreign_key: :host_id,
    class_name: :User

  has_many :server_member_joins,
    foreign_key: :server_id,
    class_name: :ServerMember

  has_many :members,
    through: :server_member_joins,
    source: :members

  has_many :text_channels,
    foreign_key: :server_id,
    class_name: :TextChannel

  def ensure_server_token
    self.invite_code ||= SecureRandom.urlsafe_base64(16)
  end
end
