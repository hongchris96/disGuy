import {connect} from "react-redux";
import AllModal from './all_modal';

const mapSTP = state => {
  return ({
    modal: state.ui.currentModal // string componentName
  })
};

export default connect(mapSTP, null)(AllModal);

