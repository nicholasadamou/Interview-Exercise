/* eslint-disable import/no-anonymous-default-export */
import React, { Component, Suspense } from 'react';
import { withRouter } from 'react-router-dom';

import { TOKEN } from './api/constants'

import Loading from './components/Loading';

export default function(ComposedComponent, path) {
    class RequireAuth extends Component {
        componentWillMount() {
            const { history } = this.props;

            if (!TOKEN.notEmpty()) {
                return history.push('/auth')
            }

            return (
                <Suspense fallback={<Loading />}>
                    <ComposedComponent {...this.props} />
                </Suspense>
            )
        }

        render() {
            return (
                <Suspense fallback={<Loading />}>
                    <ComposedComponent {...this.props} />
                </Suspense>
            )
        }
    }

    return withRouter(RequireAuth)
}
