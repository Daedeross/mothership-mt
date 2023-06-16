import { Button, Modal } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { ceil, isNil } from 'lodash';

import ArmorDetails from './armor-details';
import { armorActions, armorSelectors } from './armor-slice';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { useTimer } from 'react-timer-hook';

const EXPIRY_SECONDS = 5;

const ArmorModal = () => {
    const [confirm, setConfirm] = useState(false);
    // const [flipState, setFlipState] = useState(true);

    // useEffect(() => {
    //     const time = new Date();
    //     time.setSeconds(time.getSeconds() + EXPIRY_SECONDS);
    //     restart(time);
    // }, [flipState])
    
    const expiryTimestamp = new Date();
    expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + EXPIRY_SECONDS);
    const { seconds, restart } = useTimer({
        expiryTimestamp,
        onExpire: () => {
            setConfirm(false);
            //setFlipState(!flipState);
        }
    });

    const displayedId = useAppSelector(armorSelectors.selectDisplayedId);
    const currentId = useAppSelector(armorSelectors.selectCurrentId);
    const armor = useAppSelector(armorSelectors.selectDisplayed);

    const dispatch = useAppDispatch();
    const hideModal = () => {
        dispatch(armorActions.setDisplayed(null));
        setConfirm(false);
    }
    const handleConfirm = () => {
        setConfirm(false);
        if (!isNil(displayedId)) {
            dispatch(armorActions.removeArmor(displayedId))
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
            return <Button variant="secondary" onClick={e => dispatch(armorActions.setCurrent(null))}>Unequip</Button>
        } else {
            return <Button variant="outline-secondary" onClick={e => dispatch(armorActions.setCurrent(displayedId))}>Equip</Button>
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
                <Modal.Title>{armor?.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ArmorDetails armorId={displayedId} />
            </Modal.Body>
            <Modal.Footer className="justify-content-evenly">
                {equipButton()}
                {sellButton()}
            </Modal.Footer>
        </Modal>
    )
}

export default ArmorModal;