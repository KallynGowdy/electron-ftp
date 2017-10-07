import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import FileTree from '../components/FileTree/FileTree';
import * as FtpActions from '../actions/ftp';

function mapStateToProps(state) {
  return {
    files: state.domain.ftp.files
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(FtpActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FileTree);
