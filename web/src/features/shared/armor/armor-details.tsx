import { Table } from 'react-bootstrap';

import { useAppSelector } from '../../../app/hooks';
import { armorSelectors } from './armor-slice';
import { isEmpty, isNil } from 'lodash';

interface Params {
    armorId?: number | null;
}

const o2Row = (o2supply: number | undefined | null) => {
    if (isNil(o2supply) || o2supply <= 0) {
        return null;
    }
    if (o2supply === 1) {
        return (
            <tr>
                <th>O<sub>2</sub>&nbsp;Supply</th>
                <td>{o2supply} Hour</td>
            </tr>
        )
    } else {
        return (
            <tr>
                <th>O<sub>2</sub>&nbsp;Supply</th>
                <td>{o2supply} Hours</td>
            </tr>
        )
    }
}

const specials = (attributes?: Array<string>) => {
    if(isNil(attributes) || isEmpty(attributes)) {
        return null;
    } else {
        return (
            <tr>
                <th>Special</th>
                <td><ul>{attributes.map((attr, i) => <li key={i}>{attr}</li>)}</ul> </td>
            </tr>
        );
    }
}

const ArmorDetails: React.FC<Params> = ({ armorId }) => {
    if (isNil(armorId)) {
        return null;
    }
    const armor = useAppSelector(armorSelectors.selectorById(armorId))
    
    if (isNil(armor)) {
        return <h3>ERROR - Armor does not exist.</h3>
    }

    return (
        <div className='bg-white rounded-2 p-2'>
            <Table className='table-details'>
                <tbody>
                    <tr>
                        <th>AP</th>
                        <td>{armor.ap}</td>
                    </tr>
                    {o2Row(armor.o2supply)}
                    <tr>
                        <th>Speed</th>
                        <td>{armor.speedpenalty === true ? '[-]' : 'Normal'}</td>
                    </tr>
                    {specials(armor.attributes)}
                    <tr>
                        <th>Cost</th>
                        <td>{armor.cost}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default ArmorDetails;