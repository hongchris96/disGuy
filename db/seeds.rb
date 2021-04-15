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
DirectMessage.destroy_all

user1 = User.create(username: "Kujo Jotaro", email: "starplatinum@gmail.com", password: 'oraora')
user2 = User.create(username: "Hanma Baki", email: "strongestbeing@gmail.com", password: 'yujiro')
user3 = User.create(username: "Jennifer Lawrence", email: "itadorisavior@gmail.com", password: 'actress')
user4 = User.create(username: "Samuel L Jackson", email: "nickfury@gmail.com", password: 'shield')
user5 = User.create(username: "Dio Brando", email: "zawarudo@gmail.com", password: 'mudamuda')
user6 = User.create(username: "Giorno Giovanna", email: "goldexp@gmail.com", password: 'mudamuda')
user7 = User.create(username: "Higashikata Josuke", email: "crazydiamond@gmail.com", password: 'dorara')
user8 = User.create(username: "Hanma Yujiro", email: "beast@gmail.com", password: 'muscle')
user9 = User.create(username: "Eren Jaegar", email: "attack@gmail.com", password: 'reiner')
user10 = User.create(username: "Zeke Jaegar", email: "monke@gmail.com", password: 'baseball')


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
dm_channel3 = DirectMessageChannel.create(user1_id: user1.id, user2_id: user5.id)
dm_channel4 = DirectMessageChannel.create(user1_id: user6.id, user2_id: user5.id)
dm_channel5 = DirectMessageChannel.create(user1_id: user3.id, user2_id: user8.id)
dm_channel6 = DirectMessageChannel.create(user1_id: user3.id, user2_id: user5.id)
dm_channel7 = DirectMessageChannel.create(user1_id: user4.id, user2_id: user9.id)
dm_channel8 = DirectMessageChannel.create(user1_id: user4.id, user2_id: user10.id)
dm_channel9 = DirectMessageChannel.create(user1_id: user7.id, user2_id: user5.id)
dm_channel10 = DirectMessageChannel.create(user1_id: user7.id, user2_id: user8.id)

dm1 = DirectMessage.create(author_id: user1.id, channel_id: dm_channel1.id, chat_content: "Who are you?")
dm2 = DirectMessage.create(author_id: user2.id, channel_id: dm_channel1.id, chat_content: "I'm Baki.")
dm3 = DirectMessage.create(author_id: user1.id, channel_id: dm_channel2.id, chat_content: "Who are you?")
dm4 = DirectMessage.create(author_id: user3.id, channel_id: dm_channel2.id, chat_content: "I'm Jennifer")
dm5 = DirectMessage.create(author_id: user5.id, channel_id: dm_channel3.id, chat_content: "Oh? You're approaching me? Instead of running away, you're coming right to me?")
dm6 = DirectMessage.create(author_id: user1.id, channel_id: dm_channel3.id, chat_content: "I can't beat the shit out of you without getting closer.")
dm7 = DirectMessage.create(author_id: user5.id, channel_id: dm_channel3.id, chat_content: "Oh ho! Then come as close as you like.")
dm8 = DirectMessage.create(author_id: user1.id, channel_id: dm_channel3.id, chat_content: "Ora!")
dm9 = DirectMessage.create(author_id: user5.id, channel_id: dm_channel3.id, chat_content: "Muda, muda! The World is the ultimate Stand.")
dm10 = DirectMessage.create(author_id: user5.id, channel_id: dm_channel3.id, chat_content: "His speed and power far exceed that of your Star Platinum.")
dm11 = DirectMessage.create(author_id: user1.id, channel_id: dm_channel3.id, chat_content: "So it's the same type of Stand as Star Platinum.")
