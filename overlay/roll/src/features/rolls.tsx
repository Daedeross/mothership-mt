import { ReactElement, useState } from 'react';
import DieButton from './die-button/die-button';

function Rolls(): ReactElement {
    const [selected, setSelected] = useState(false);
    return (
        <div className='dice-rolling-panel'>
            <div className='dice-toolbar'>
                <div className={`dice-toolbar__dropdown ${selected ? 'dice-toolbar__dropdown-selected' : ''}`}>
                    <div className='dice-toolbar__dropdown-die' onClick={e => setSelected(!selected)}>
                        <span className='dice-icon-die dice-icon-die--d20'>
                        </span>
                    </div>
                    <div className='dice-toolbar__dropdown-top' style={{display: selected ? 'block' : 'none'}}>
                        <DieButton die='d20' />
                        <DieButton die='d100' />
                        <DieButton die='d10' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Rolls;