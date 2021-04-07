class AddIndexInServers < ActiveRecord::Migration[5.2]
  def change
    add_index :servers, :host_id, unique: true
    add_index :servers, :server_name, unique: true
  end
end
