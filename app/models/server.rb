class Server < ApplicationRecord

  validates :server_name, presence: true, uniqueness: true
  # validates :host_id, presence: true

  belongs_to :server_host,
    foreign_key: :host_id,
    class_name: :User

end
