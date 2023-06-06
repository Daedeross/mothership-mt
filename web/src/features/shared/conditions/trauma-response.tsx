import { Button, Card, Col, OverlayTrigger, Popover } from 'react-bootstrap';
import { useAppSelector } from '../../../app/hooks';
import { selectTraumaResponse } from './conditions-slices';
import { selectClass } from '../../pc/pc-header/header-slice';

function TraumaResponse() {
    const header = useAppSelector(selectClass);
    const text = useAppSelector(selectTraumaResponse);

    const popover = (
        <Popover id="popover-basic">
            <Popover.Header className="text-bg-dark text-center" as="h3">{header}</Popover.Header>
            <Popover.Body>{text}</Popover.Body>
        </Popover>
    );

    return (
        <OverlayTrigger trigger="click" placement="left" overlay={popover}>
            <Button variant="secondary" className="position-relative top-50 start-50 translate-middle">TRAUMA RESPONSE</Button>
        </OverlayTrigger>
    );
}

export default TraumaResponse;