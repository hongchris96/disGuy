class Server < ApplicationRecord

  validates :server_name, presence: true, uniqueness: true
  validates :host_id, presence: true

  belongs_to :server_host,
    foreign_key: :host_id,
    class_name: :User

  belongs_to :cohost_id,
    foreign_key: :cohost_id,
    class_name: :User,
    optional: true

end
