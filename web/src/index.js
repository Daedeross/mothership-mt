import React from 'react';
import { createRoot } from 'react-dom/client';
import CharacterSheet from './components/character-sheet';
import testCharacter from '../test/test-character.json';

// Importing the Bootstrap CSS
import './scss/styles.scss';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<CharacterSheet character={testCharacter}  />);
