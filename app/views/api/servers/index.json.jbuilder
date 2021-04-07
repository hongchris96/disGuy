@servers.each do |server|
  @server.set! server.id do
    json.partial! 'server', server: server
  end
end

