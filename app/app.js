import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router';

import Pages from './pages/containers/page.jsx';

render(
	<Pages />,
	document.getElementById('render-target')
);