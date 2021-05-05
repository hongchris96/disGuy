@server_members.each do |server_member|
  json.set! server_member.id do
    json.partial! 'server_member', server_member: server_member
  end
end

