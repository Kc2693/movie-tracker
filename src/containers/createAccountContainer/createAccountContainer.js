import CreateAccount from '../../components/CreateAccount/CreateAccount';
import { connect } from 'react-redux';
import * as actions from '../../actions';

export const mapStateToProps = state => ({
  user: state.user
});

export const mapDispatchToProps = dispatch => ({
  handleUser: (user) => dispatch(actions.updateUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount);
