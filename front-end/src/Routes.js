import React, { lazy, Suspense } from 'react';

import {Route, Switch} from 'react-router-dom';

import Loading from './components/Loading';

import RequireAuth from './RequireAuth.js';

const IndexPage = lazy(() => import('./routes/index'));
const CallbackPage = lazy(() => import('./routes/auth/callback'));

const Routes = () => {
	return (
		<Suspense fallback={<Loading/>}>
			<Switch>
			<Route
					exact
					path="/callback"
					render={(props) => {
						return <CallbackPage {...props} />;
					}}
				/>
				<Route
					exact
					path="/"
					component={RequireAuth(IndexPage)}
				/>
			</Switch>
		</Suspense>
	);
};

export default Routes;
