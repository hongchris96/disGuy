class User < ApplicationRecord
  validates :username, :email, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :password, length: {minimum: 6, allow_nil: true}

  before_validation :ensure_session_token

  attr_reader :password

  def self.find_by_credentials(username, peeword)
  end

  def password=(peeword)
  end

  def is_password?(peeword)
  end

  def reset_session_token!
  end

  def ensure_session_token
  end


end
