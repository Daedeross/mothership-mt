import { Col, Row } from 'react-bootstrap';

import { weaponSelectors } from './weapon-slice';
import { useAppSelector } from '../../../app/hooks';
import WeaponItem from './weapon-item';
import WeaponModal from './weapon-modal';


function Weapons() {
    const weaponsIds = useAppSelector(weaponSelectors.selectIds);
    const weapons = weaponsIds.map(id => <WeaponItem key={id} weaponId={Number(id)} />);
    return (
        <div >
            <h3>WEAPONS</h3>
            <div className='d-flex flex-row justify-content-around flex-wrap' >
                {weapons}
            </div>
            <WeaponModal />
        </div>
    )
}

export default Weapons;