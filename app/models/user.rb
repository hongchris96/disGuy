class User < ApplicationRecord
  validates :username, :email, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :password, length: {minimum: 6, allow_nil: true}

  before_validation :ensure_session_token

  has_many :owned_servers,
    foreign_key: :host_id,
    class_name: :Server
  
  has_many :cohosted_servers,
    foreign_key: :cohost_id,
    class_name: :Server


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
