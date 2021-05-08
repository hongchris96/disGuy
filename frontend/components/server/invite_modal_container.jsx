import { connect } from 'react-redux';
import { clearErrors } from '../../actions/session/session_actions';
import { closeModal } from '../../actions/modal/modal_actions';
import { withRouter } from 'react-router-dom';
import SeeInviteLink from './invite_modal';

const mapSTP = (state, ownProps) => {
  return ({
    currentModal: state.ui.currentModal,
    currentServer: state.entities.servers[ownProps.location.pathname.split("/")[2]]
    // errors: state.errors
  })
};

const mapDTP = dispatch => ({
  closeModal: () => dispatch(closeModal()),
  clearErrors: () => dispatch(clearErrors())
});

export default withRouter(connect(mapSTP, mapDTP)(SeeInviteLink));