import { defaultTo } from 'lodash';

import { doSimpleRoll } from '../../app/linker';

interface Props {
    die: string;
    label?: string | null;
}

const DieButton: React.FC<Props> = ({ die, label }) => {
    return (
        <div className='dice-die-button' data-dice={die}
            onClick={e => doSimpleRoll(die)}>
            <span className={`dice-icon-die dice-icon-die--${die}`}>
            </span>
            <div className='dice-die-button__tooltip'>
                <div className='dice-die-button__tooltip__pip' />
                {defaultTo(label, die)}
            </div>
        </div>
    );
}

export default DieButton;