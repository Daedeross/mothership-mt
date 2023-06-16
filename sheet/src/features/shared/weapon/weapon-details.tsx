import { Table } from 'react-bootstrap';

import { useAppSelector } from '../../../app/hooks';
import { weaponSelectors } from './weapon-slice';
import { isEmpty, isNil, trim } from 'lodash';

interface Params {
    weaponId?: number | null;
}

const shots = (remainingammo: number, shots: number) => {
    if (isNil(shots) || shots <= 0) {
        return null;
    }
    return (
        <tr>
            <th>Shots</th>
            <td>{remainingammo}/{shots}</td>
        </tr>
    )
}

const specials = (attributes?: string | Array<string>) => {
    if(isNil(attributes) || isEmpty(attributes)) {
        return null;
    } else {
        const items = Array.isArray(attributes)
            ? attributes
            : [attributes];

        return (
            <tr>
                <th>Special</th>
                <td><ul>{items.map((attr, i) => <li key={i}>{attr}</li>)}</ul> </td>
            </tr>
        );
    }
}

const WeaponDetails: React.FC<Params> = ({ weaponId }) => {
    if (isNil(weaponId)) {
        return null;
    }
    const weapon = useAppSelector(weaponSelectors.selectorById(weaponId))
    
    if (isNil(weapon)) {
        return <h3>ERROR - Weapon does not exist.</h3>
    }

    return (
        <div className='bg-white rounded-2 p-2'>
            <Table className='table-details'>
                <tbody>
                    <tr>
                        <th>Range</th>
                        <td>{weapon.range}</td>
                    </tr>
                    <tr>
                        <th>Damage</th>
                        <td>{trim(`${weapon.damage} ${weapon.wounddamage}`)}</td>
                    </tr>
                    {shots(weapon.remainingammo, weapon.shots)}
                    <tr>
                        <th>Wound</th>
                        <td>{weapon.wound}</td>
                    </tr>
                    {specials(weapon.special)}
                    <tr>
                        <th>Cost</th>
                        <td>{weapon.cost}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default WeaponDetails;