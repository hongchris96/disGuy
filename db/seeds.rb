# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Server.destroy_all

user1 = User.create(username: "Kujo Jotaro", email: "starplatinum@gmail.com", password: 'oraora')
user2 = User.create(username: "Hanma Baki", email: "strongestbeing@gmail.com", password: 'yujiro')
user3 = User.create(username: "Jennifer Lawrence", email: "itadorisavior@gmail.com", password: 'actress')

server1 = Server.create(server_name: "Stardust Crusaders", host_id: user1.id)
server2 = Server.create(server_name: "Morioh Cho", host_id: user2.id)
