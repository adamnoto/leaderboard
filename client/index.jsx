import React from 'react';
import Leaderboard from './components/leaderboard.jsx';
import { render } from 'react-dom';

let renderPlace = document.getElementById('app');
render(<Leaderboard/>, renderPlace);
