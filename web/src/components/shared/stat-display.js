import { Stack } from "react-bootstrap";

function StatDisplay({name, value}) {
    return (
        <Stack gap={1} style={{maxWidth:100}}>
            <div className="stat"><span className="stat" >{value}</span></div>
            <div className="text-center align-items-center h5"><span>{name}</span></div>
        </Stack>
    );
}

export default StatDisplay;