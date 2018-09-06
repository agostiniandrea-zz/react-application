import { connect } from 'react-redux';
import HomePage from 'PagesComponents/HomePage';

const mapStateToProps = (state) => {
    return {
        loading: state.loading
    };
};

export default connect(
    mapStateToProps,
    null
)(HomePage);