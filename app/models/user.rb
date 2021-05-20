class User < ApplicationRecord
  validates :username, :email, presence: true, uniqueness: true
  validate :email_format
  validates :password_digest, presence: true
  validates :password, length: {minimum: 6, allow_nil: true}
  
  def email_format
      email_parts = self.email.split('@')
      if email_parts.length != 2
        errors[:email] << "Format is invalid"
      else
        errors[:email] << "Format is invalid" if email_parts[1].split('.').length != 2
      end
  end

  before_validation :ensure_session_token

  has_many :owned_servers,
    foreign_key: :host_id,
    class_name: :Server

  has_many :server_member_joins,
    foreign_key: :member_id,
    class_name: :ServerMember

  has_many :membered_servers,
    through: :server_member_joins,
    source: :servers

  has_many :text_channel_messages,
    foreign_key: :author_id,
    class_name: :TextChannelMessage

  has_many :direct_message_channels,
    foreign_key: :user1_id,
    class_name: :DirectMessageChannel

  has_many :direct_message_channels2,
    foreign_key: :user2_id,
    class_name: :DirectMessageChannel

  has_many :direct_messages,
    foreign_key: :author_id,
    class_name: :DirectMessage

  attr_reader :password

  def self.find_by_credentials(email, peeword)
    user = User.find_by(email: email)
    return user if user && user.is_password?(peeword)
    return nil
  end

  def password=(peeword)
    @password = peeword
    self.password_digest = BCrypt::Password.create(peeword)
  end

  def is_password?(peeword)
    BCrypt::Password.new(self.password_digest).is_password?(peeword)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

end
