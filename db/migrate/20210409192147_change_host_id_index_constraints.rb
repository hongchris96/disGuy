class ChangeHostIdIndexConstraints < ActiveRecord::Migration[5.2]
  def change
    remove_index :servers, name: "index_servers_on_host_id"
    add_index :servers, :host_id
  end
end
