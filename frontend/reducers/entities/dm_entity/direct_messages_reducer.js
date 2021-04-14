import {
  RECEIVE_DIRECT_MESSAGES,
  RECEIVE_DIRECT_MESSAGE,
  REMOVE_DIRECT_MESSAGE,
} from '../../../actions/dm/direct_message_actions';

const DirectMessagesReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_DIRECT_MESSAGES:
      return action.directMessages;
    case RECEIVE_DIRECT_MESSAGE:
      newState[action.directMessage.id] = action.directMessage;
      return newState;
    case REMOVE_DIRECT_MESSAGE:
      delete newState[action.directMessageId];
      return newState;
    default:
      return state;
  }
}

export default DirectMessagesReducer;