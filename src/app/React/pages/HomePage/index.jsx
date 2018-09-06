import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PageWrapper from 'Containers/PageWrapper';

import './HomePage.scss';

export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.loading) {
            return null;
        }
        return (
            <PageWrapper>
            </PageWrapper>
        );
    }
}

HomePage.propTypes = {
    loading: PropTypes.bool
};