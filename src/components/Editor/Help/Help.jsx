//css
import { Container, Table } from "react-bootstrap";
import classes from "./Help.module.css";
import { v4 as uuidv4 } from "uuid";
//
import { helpTable } from "./helpTable";
const Help = () => {
  return (
    <Container className='p-5'>
      <h1>Help File:</h1>
      <Table>
        <thead>
          <tr>
            <th>Element</th>
            <th>Info</th>
            <th>Comment</th>
          </tr>
        </thead>
        <tbody>
          {helpTable.map((row) => {
            return (
              <tr key={uuidv4()}>
                <td style={{ width: "200px" }}>{row.key}</td>
                <td>{row.info}</td>
                <td>{row.comment}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default Help;
