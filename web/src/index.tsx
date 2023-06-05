import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import CharacterSheet from './features/character-sheet';
import { store } from './app/store';
import { updateState } from './app/hooks';
import { CharacterDto } from './dto/character.model';

import testCharacter from '../test/test-character.json';

// Importing the Bootstrap CSS
import './scss/styles.scss';

const container = document.getElementById('root');
if (!container) throw new Error('Failed to find the root element');
const root = createRoot(container);

root.render(
    <Provider store={store}>
        <CharacterSheet />
    </Provider>
);

setTimeout(() => {
    updateState(testCharacter as CharacterDto);
}, 1000);
