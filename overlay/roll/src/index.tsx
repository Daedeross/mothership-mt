import { createRoot } from 'react-dom/client';
// import testCharacter2 from '../test/test-character2.json';

import Rolls from './features/rolls';

// Importing the Bootstrap CSS
import './resources/styles.scss';

const container = document.getElementById('root');
if (!container) throw new Error('Failed to find the root element');
const root = createRoot(container);

root.render(
    <Rolls />
);

//export const pushUpdate = updateState ;

