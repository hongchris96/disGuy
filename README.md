# disGuy

disGuy is a communication platform with the purpose of creating communities through servers. Within each server, there are channels, allowing server members to chat at the same time without cluttering a single chat. Users are also able to send direct messages to other users in the landing page.

[Currently Offline](https://disguy.herokuapp.com/#/)

------
## Technologies

* Rails
* PostgreSQL
* React
* Redux
* CSS
* Action Cable

------
## Features
##
### Text Channel within Servers
###
Each server has its own list of text channels. React-Router is used to keep track of which server and text channel is currently in the url path. The text channel list is filtered out in the frontend component based on the id of the server that encompass the list. Right clicking on the plus sign in the heading of the text channel list opens a modal that allows the user to create a new text channel. Right clicking on a text channel list item links to that text channel show page that holds all the messages. Right clicking on the cog icon next to a text channel list item renders a component in front of the app page that allows the user to update or delete the text channel if the user is the owner of the server.

In the server show container:
```javascript
const mapSTP = (state, ownProps) => ({
  server: state.entities.servers[ownProps.match.params.serverId]
});
```

In the server show component:
```javascript
<div>
  <TextChannelListContainer serverId={this.props.server.id} />
</div>
```

In the text channel list component:
```javascript
<h3>Text Channels <span onClick={() => this.props.openModal("CreateTextChannel")} className="add-text-channel">+</span></h3>
<ul className="text-channel-list">
  {this.props.textChannels.filter(tchannel => tchannel.server_id === this.props.serverId).map(tchannel => {
    return <TextChannelListItem 
      key={tchannel.id} 
      textChannel={tchannel} 
      serverId={this.props.serverId}
      openEditSetting={this.openEditSetting}
    />
  })}
</ul>
```
![text channel index and show](https://github.com/hongchris96/disGuy/blob/main/readme_images/text_channel_list_show.png)

In my create text channel modal, I want the modal to close on submission only if there are no errors. Before I close the modal, I check if the errors array length is zero and if the global slice of state's text channels count is different, meaning a text channel has be successfully added. 
```javascript
componentDidUpdate(prevProps) {
  if (this.props.errors.length === 0 && this.props.allTextChannelIds.length !== prevProps.allTextChannelIds.length) {
    this.setState({redirectToCreatedTextChannel: true});
    this.props.closeModal();
  }
}
```

![text channel create](https://github.com/hongchris96/disGuy/blob/main/readme_images/create_text_channel.png)

In the text channel list item component:
```javascript
<li className="channel-list-item">
  <Link to={`/servers/${this.props.serverId}/${this.props.textChannel.id}`}>
    <span># </span>
    {shortenDisplay}
    <img src={window.cogURL} onClick={this.props.openEditSetting}/>
  </Link>
</li>
```

Sometimes when I open a different channel's settings component within the same server, the local state's information of the text channel remains to be the previous one's. Additionally, I want the settings to close on submission only if there are no errors. To solve the first problem, I conditionally check if the channel id in my path matches the current state's id and reset the state if they're different. To solve the second problem, I checked the error array length and if the channel name is different before closing my edit settings, meaning that I have successfully updated the channel name.
```javascript
componentDidUpdate(prevProps) {
  if (this.props.channel !== undefined && this.state.id !== this.props.channel.id) {
    this.props.requestTextChannel(this.props.channel.id);
    this.setState({
      id: this.props.channel.id,
      server_id: this.props.channel.server_id,
      text_channel_name: this.props.channel.text_channel_name
    });
  } else if (this.props.channel !== undefined && prevProps.channel !== undefined) {
    if (this.props.errors.length === 0 && this.props.channel.text_channel_name !== prevProps.channel.text_channel_name) {
      this.props.closeEditSetting();
    }
  }
}
```

![text channel update and destroy](https://github.com/hongchris96/disGuy/blob/main/readme_images/text_channel_edit_delete.png)

------
### Live Chat
###
In both direct message channels and text channels, users can receive messages and see them show up on the page without having to refresh. This was done using Rails Action Cable and WebSockets. Instead of sending HTTP ajax request to the backend, websockets are used to create channel streams that connect from the frontend to the backend. Any changes made to the backend is automatically broadcasted to the frontend, such as when user sends, edit and delete a message.

In the text channel show component:
```javascript
componentDidMount() {
  this.props.requestTextChannel(this.props.match.params.textChannelId);
  App.cable.subscriptions.create(
    { channel: "ChatChannel", id: this.props.match.params.textChannelId, type: 'text_channel'},
    {
      received: data => {
        switch (data.type) {
          case "message":
            this.props.receiveTextChannelMessage(data.message);
            break;
          case "no_message":
            this.props.removeTextChannelMessage(data.message.id);
            break;
          case "inaction":
            break;
        }
      },
      speak: function(data) {
        return this.perform("speak", data);
      },
      update: function(data) {
        return this.perform("update", data);
      },
      poof: function(data) {
        return this.perform("poof", data);
      }
    }
  );
}
```

In the create text channel message component:
```javascript
handleSubmit(e) {
  e.preventDefault();
  App.cable.subscriptions.subscriptions[App.cable.subscriptions.subscriptions.length-1].speak({ message: this.state });
  this.setState({chat_content: ''});
}
```

------
### Future Features

* Server Membership and User accessibility restrictions 
* Server and User image upload
* Default general text channel upon new server creation
* User profile page and settings
* User friends list

