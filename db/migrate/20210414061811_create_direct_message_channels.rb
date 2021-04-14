class CreateDirectMessageChannels < ActiveRecord::Migration[5.2]
  def change
    create_table :direct_message_channels do |t|
      t.integer :user1_id, null: false 
      t.integer :user2_id, null: false 
      t.timestamps
    end

    add_index :direct_message_channels, :user1_id
    add_index :direct_message_channels, :user2_id
    add_index :direct_message_channels, [:user1_id, :user2_id], unique: true
  end
end
