import { isNil } from "lodash";
import { Dropdown, SplitButton } from "react-bootstrap";

import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { RollMode, selectRollMode, setRollMode, toggleRollMode } from "./roll-mode-slice";
import { Button } from "react-bootstrap/lib/InputGroup";

const nameOf = (mode: RollMode) => RollMode[mode];

export const getRollVariant = (mode: RollMode) => {
    switch (mode) {
        case RollMode.Normal: return 'info';
        case RollMode.Advantage: return 'success';
        case RollMode.Disadvantage: return 'danger';
        default: return 'secondary';
    }
}

export function RollToggle() {
    const rollMode = useAppSelector(selectRollMode);
    const dispatch = useAppDispatch();

    const onRollSelect = (key: string | null) => {
        if (!isNil(key)) {
            const x = RollMode[key as keyof typeof RollMode];
            dispatch(setRollMode(x));
        }
    }

    return (
        <SplitButton variant={getRollVariant(rollMode)} title={rollMode === RollMode.None ? 'Roll' : RollMode[rollMode]}
                     className="roll-group"
                     onClick={e => dispatch(toggleRollMode())} onSelect={(key, e) => onRollSelect(key)}>
            <Dropdown.Item className="text-bg-info" eventKey={nameOf(RollMode.Normal)}>Normal</Dropdown.Item>
            <Dropdown.Item className="text-bg-success" eventKey={nameOf(RollMode.Advantage)}>Advantage [+]</Dropdown.Item>
            <Dropdown.Item className="text-bg-danger" eventKey={nameOf(RollMode.Disadvantage)}>Disadvantage [-]</Dropdown.Item>
        </SplitButton>
    )
}

export default RollToggle;