import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import ConnectionPanel from '../components/ConnectionPanel/ConnectionPanel';
import { connectToServer } from '../actions/ftp';

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ connectToServer }, dispatch);
}

const ConnectionPanelForm = reduxForm({
  form: 'connection'
})(ConnectionPanel);

export default connect(mapStateToProps, mapDispatchToProps)(ConnectionPanelForm);
