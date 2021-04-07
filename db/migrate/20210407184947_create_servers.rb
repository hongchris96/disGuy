class CreateServers < ActiveRecord::Migration[5.2]
  def change
    create_table :servers do |t|
      t.string :server_name, null: false, unique: true
      t.integer :host_id, null: false
      t.integer :cohost_id
      t.timestamps
    end

    add_index :servers, [:server_name, :host_id], unique: true
    add_index :servers, :cohost_id
  end
end
