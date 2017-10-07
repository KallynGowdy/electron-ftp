import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ConnectionPanel from '../components/ConnectionPanel/ConnectionPanel';
import { connectToServer } from '../actions/ftp';

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ connectToServer }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectionPanel);
