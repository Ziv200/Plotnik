// imports
import { useState } from "react";
import Table from "react-bootstrap/Table";
import Nav from "react-bootstrap/Nav";
//css
import classes from "./LineTable.module.css";
//overmind
import { useActions, useAppState } from "../../../overmind";
//-----------------------------------------------
const LineTable = () => {
  //overmind
  const actions = useActions();
  const state = useAppState();
  const inputs = state.editPage.lineList.inputs;
  const outputs = state.editPage.lineList.outputs;
  const groups = state.editPage.lineList.groups;
  //
  const [tabSel, setTabSel] = useState("inputs");
  //
  const findGroupColor = (input, groups) => {
    if (input.group !== null) {
      const color = groups.filter((group) => group.id === input.group)[0].color;
      return { backgroundColor: `${color}` };
    }
    return {};
  };

  return (
    <>
      <Nav variant='tabs' defaultActiveKey='Inputs'>
        <Nav.Item>
          <Nav.Link eventKey='Inputs' onClick={() => setTabSel("inputs")}>
            Inputs
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='Outputs' onClick={() => setTabSel("outputs")}>
            Outputs
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='Groups' onClick={() => setTabSel("groups")}>
            Groups
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <div className={classes.table}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>
                <strong>#</strong>
              </th>
              <th>Name</th>
              {tabSel === "inputs" && <th>Mic</th>}
            </tr>
          </thead>
          <tbody>
            {tabSel === "inputs" &&
              inputs.map((input) => (
                <tr onClick={() => actions.setSelectedObjId(input)} key={input.id}>
                  <td>
                    <strong>{input.inputno}</strong>
                  </td>
                  <td>{input.name}</td>
                  <td>{input.mic}</td>
                </tr>
              ))}
            {tabSel === "outputs" &&
              outputs.map((output) => (
                <tr key={output.id}>
                  <td>
                    <strong>{output.id}</strong>
                  </td>
                  <td>{output.name}</td>
                </tr>
              ))}
            {tabSel === "groups" &&
              groups.map((group) => (
                <tr key={group.id}>
                  <td style={{ backgroundColor: `${group.color}` }}>
                    <strong>{group.id}</strong>
                  </td>
                  <td style={{ backgroundColor: `${group.color}` }}>{group.name}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default LineTable;
