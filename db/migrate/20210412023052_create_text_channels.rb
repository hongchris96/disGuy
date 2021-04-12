class CreateTextChannels < ActiveRecord::Migration[5.2]
  def change
    create_table :text_channels do |t|
      t.string :text_channel_name, null: false
      t.integer :server_id, null: false
      t.timestamps
    end

    add_index :text_channels, :text_channel_name
    add_index :text_channels, :server_id
    add_index :text_channels, [:text_channel_name, :server_id], unique: true

  end
end
