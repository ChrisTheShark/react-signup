import React, { Component } from 'react';
import { render } from 'react-dom';
import SignupForm from './components/SignupForm';

import 'bootstrap/dist/css/bootstrap.css';
import './app.css';

render(<SignupForm />, document.getElementById('container'));
