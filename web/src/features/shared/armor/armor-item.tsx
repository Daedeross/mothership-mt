import React, { ReactElement } from 'react';
import { Badge, Button, ToggleButton } from 'react-bootstrap';
import { isNil } from 'lodash';

import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { armorActions, armorSelectors } from './armor-slice';

interface Params {
    armorId: number
}

const ArmorItem: React.FC<Params> = ({ armorId }): ReactElement | null => {
    const armor = useAppSelector(armorSelectors.selectorById(armorId))
    if (isNil(armor)) {
        return null;
    }

    const dispatch = useAppDispatch();
    const currentId = useAppSelector(armorSelectors.selectCurrentId);
    const isCurrent = currentId === armorId;
    const checkArgs = isCurrent ? null : armorId;

    const handleChange = (e: any) => {
        dispatch(armorActions.setCurrent(checkArgs));
    }

    const className = `skill-item${isCurrent ? ' selected-item' : ''}`;

    return (
        <div className={className}>
            <Badge bg='light' as='button' className='enable-button text-bg-light' value={armorId} onClick={handleChange}>{isCurrent ? 'E' : ''}&emsp;</Badge>
            <span className='skill-name' onClick={e => dispatch(armorActions.setDisplayed(armorId))}>{armor.name}</span>
            <Badge bg='dark'>AP {armor.ap}</Badge>
        </div>
    )
}

export default ArmorItem;