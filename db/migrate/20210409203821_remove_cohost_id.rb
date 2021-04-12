class RemoveCohostId < ActiveRecord::Migration[5.2]
  def change
    remove_index :servers, name: "index_servers_on_cohost_id"
    remove_column :servers, :cohost_id, :integer
  end
end
