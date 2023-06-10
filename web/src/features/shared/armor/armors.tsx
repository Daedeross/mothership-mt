import { armorSelectors } from './armor-slice';
import { useAppSelector } from '../../../app/hooks';
import ArmorItem from './armor-item';
import ArmorModal from './armor-modal';

function Armors() {
    const armorsIds = useAppSelector(armorSelectors.selectIds);
    const armors = armorsIds.map(id => <ArmorItem key={id} armorId={Number(id)} />);
    return (
        <div >
            <h3>ARMOR</h3>
            <div className='d-flex flex-row justify-content-around flex-wrap' >
                {armors}
            </div>
            <ArmorModal />
        </div>
    )
}

export default Armors;