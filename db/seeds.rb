# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Server.destroy_all
TextChannel.destroy_all
TextChannelMessage.destroy_all
DirectMessageChannel.destroy_all

user1 = User.create(username: "Kujo Jotaro", email: "starplatinum@gmail.com", password: 'oraora')
user2 = User.create(username: "Hanma Baki", email: "strongestbeing@gmail.com", password: 'yujiro')
user3 = User.create(username: "Jennifer Lawrence", email: "itadorisavior@gmail.com", password: 'actress')

server1 = Server.create(server_name: "Stardust Crusaders", host_id: user1.id)
server2 = Server.create(server_name: "Morioh Cho", host_id: user2.id)

text_channel1 = TextChannel.create(server_id: server1.id, text_channel_name: "Hong Kong")
text_channel2 = TextChannel.create(server_id: server1.id, text_channel_name: "Pakistan")
text_channel3 = TextChannel.create(server_id: server1.id, text_channel_name: "Egypt")
text_channel4 = TextChannel.create(server_id: server2.id, text_channel_name: "Trattoria Trussardi")
text_channel5 = TextChannel.create(server_id: server2.id, text_channel_name: "Angelo Stone")


# server 1 channel 1
text_channel_messages1 = TextChannelMessage.create(author_id: user1.id, channel_id: text_channel1.id, chat_content: "Yare Yare Daze")
text_channel_messages2 = TextChannelMessage.create(author_id: user2.id, channel_id: text_channel1.id, chat_content: "Nice")
text_channel_messages3 = TextChannelMessage.create(author_id: user1.id, channel_id: text_channel1.id, chat_content: "Kono Yaro")
text_channel_messages4 = TextChannelMessage.create(author_id: user2.id, channel_id: text_channel1.id, chat_content: "NANI?")

# server 1 channel 2
text_channel_messages5 = TextChannelMessage.create(author_id: user1.id, channel_id: text_channel2.id, chat_content: "You!")
text_channel_messages6 = TextChannelMessage.create(author_id: user3.id, channel_id: text_channel2.id, chat_content: "Muda Muda")
text_channel_messages7 = TextChannelMessage.create(author_id: user1.id, channel_id: text_channel2.id, chat_content: "ORA ORA ORA ORA ORA ORA ORA ORA ORA ORA ORA")

# server 2 channel 1
text_channel_messages8 = TextChannelMessage.create(author_id: user2.id, channel_id: text_channel5.id, chat_content: "Yo Angelo!")
text_channel_messages9 = TextChannelMessage.create(author_id: user3.id, channel_id: text_channel5.id, chat_content: "Yo Angelo!")


dm_channel1 = DirectMessageChannel.create(user1_id: user1.id, user2_id: user2.id)
dm_channel2 = DirectMessageChannel.create(user1_id: user1.id, user2_id: user3.id)
dm_channel3 = DirectMessageChannel.create(user1_id: user2.id, user2_id: user3.id)
