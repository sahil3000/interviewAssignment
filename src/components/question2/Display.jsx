import { Table } from "react-bootstrap";

const Display=({record})=>{
    return(   
        <tr>
            <td>{record.email}</td>
            <td>{record.first_name}</td>
            <td>{record.last_name}</td>
            <td><img src={record.avatar} alt='image' /></td>
        </tr>
    );
}
export default Display;