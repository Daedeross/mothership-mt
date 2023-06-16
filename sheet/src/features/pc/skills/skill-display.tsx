import { Badge, Button } from 'react-bootstrap';

import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { RollMode, selectRollMode, selectRollSkill, setRollSkill, toggleRollMode } from "../../shared/roll/roll-mode-slice";
import { getRollVariant } from '../../shared/roll/roll-toggle';
import { get } from 'lodash';

interface Props {
    name: string;
    bonus: number;
}

const SkillDisplay: React.FC<Props> = ({ name, bonus }) => {
    const rollMode = useAppSelector(selectRollMode);
    const rollSkill = useAppSelector(selectRollSkill);
    const dispatch = useAppDispatch();

    if (rollMode == RollMode.None) {
        return (
            <div key={`skill_${name}`} className='skill-item'>
                <span className='skill-name'>{name}</span>
                <Badge bg='dark'>+{bonus}</Badge>
            </div>
        );
    } else {
        const isSelected = get(rollSkill, "name") === name;
        const variant = `${isSelected? "" : "outline-" }${getRollVariant(rollMode)}`;
        const handleClick = () => {
            const arg = isSelected ? null : {name, bonus};
            dispatch(setRollSkill(arg));
        }
        return (
            <Button as='a'  variant={variant}
                    key={`skill_${name}`}
                    onClick={e => handleClick()}>
                <span className='skill-name'>{name}</span>
                <Badge bg='dark'>+{bonus}</Badge>
            </Button>
        )
    }
}

export default SkillDisplay;