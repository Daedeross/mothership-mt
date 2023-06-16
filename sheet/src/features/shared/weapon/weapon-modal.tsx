import { Button, Modal } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { ceil, isNil } from 'lodash';

import WeaponDetails from './weapon-details';
import { weaponActions, weaponSelectors } from './weapon-slice';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { useTimer } from 'react-timer-hook';

const EXPIRY_SECONDS = 5;

const WeaponModal = () => {
    const [confirm, setConfirm] = useState(false);
    
    const expiryTimestamp = new Date();
    expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + EXPIRY_SECONDS);
    const { seconds, restart } = useTimer({
        expiryTimestamp,
        onExpire: () => {
            setConfirm(false);
        }
    });

    const displayedId = useAppSelector(weaponSelectors.selectDisplayedId);
    const currentId = useAppSelector(weaponSelectors.selectCurrentId);
    const weapon = useAppSelector(weaponSelectors.selectDisplayed);

    const dispatch = useAppDispatch();
    const hideModal = () => {
        dispatch(weaponActions.setDisplayed(null));
        setConfirm(false);
    }
    const handleConfirm = () => {
        setConfirm(false);
        if (!isNil(displayedId)) {
            dispatch(weaponActions.removeWeapon(displayedId))
        }
    }
    const handleSell = () => {
        const time = new Date();
        time.setSeconds(time.getSeconds() + EXPIRY_SECONDS);
        restart(time, true);
        setConfirm(true);
    }

    const equipButton = () => {
        if (currentId == displayedId) {
            return <Button variant="secondary" onClick={e => dispatch(weaponActions.setCurrent(null))}>Unequip</Button>
        } else {
            return <Button variant="outline-secondary" onClick={e => dispatch(weaponActions.setCurrent(displayedId))}>Equip</Button>
        }
    }

    const sellButton = () => {
        if (confirm) {
            return <Button variant="danger" onClick={handleConfirm}>Confirm? {ceil(seconds)}</Button>
        } else {
            return <Button variant="outline-danger" onClick={handleSell}>Sell</Button>
        }
    }

    return (
        <Modal show={!isNil(displayedId)} onHide={hideModal}>
            <Modal.Header closeButton>
                <Modal.Title>{weapon?.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <WeaponDetails weaponId={displayedId} />
            </Modal.Body>
            <Modal.Footer className="justify-content-evenly">
                {equipButton()}
                {sellButton()}
            </Modal.Footer>
        </Modal>
    )
}

export default WeaponModal;