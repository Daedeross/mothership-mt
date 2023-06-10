import React, { ReactElement } from 'react';
import { Badge, Button, ToggleButton } from 'react-bootstrap';
import { isNil } from 'lodash';

import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { weaponActions, weaponSelectors } from './weapon-slice';

interface Params {
    weaponId: number
}

const WeaponItem: React.FC<Params> = ({ weaponId }): ReactElement | null => {
    const weapon = useAppSelector(weaponSelectors.selectorById(weaponId))
    if (isNil(weapon)) {
        return null;
    }

    const dispatch = useAppDispatch();
    const currentId = useAppSelector(weaponSelectors.selectCurrentId);
    const isCurrent = currentId === weaponId;
    const checkArgs = isCurrent ? null : weaponId;

    const handleChange = (e: any) => {
        dispatch(weaponActions.setCurrent(checkArgs));
    }

    const className = `skill-item${isCurrent ? ' selected-item' : ''}`;

    return (
        <div className={className}>
            <Badge bg='light' as='button' className='enable-button text-bg-light' value={weaponId} onClick={handleChange}>{isCurrent ? 'E' : ''}&emsp;</Badge>
            <span className='skill-name' onClick={e => dispatch(weaponActions.setDisplayed(weaponId))}>{weapon.name}</span>
            {weapon.shots ? (<Badge bg='dark'>AP {weapon.remainingammo}</Badge>) : ''}
        </div>
    )
}

export default WeaponItem;