class CreateTextChannelMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :text_channel_messages do |t|
      t.integer :author_id, null: false
      t.integer :channel_id, null: false
      t.string :chat_content, null: false
      t.timestamps
    end

    add_index :text_channel_messages, :author_id
    add_index :text_channel_messages, :channel_id
    add_index :text_channel_messages, :chat_content
  end
end
