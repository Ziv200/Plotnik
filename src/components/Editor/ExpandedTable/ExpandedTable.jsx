// imports
import { useState } from "react";
import Table from "react-bootstrap/Table";
import Nav from "react-bootstrap/Nav";
//css
import classes from "./ExpandedTable.module.css";

//overmind
import { useActions, useAppState } from "../../../overmind";

const ExpandedTable = () => {
  const [tabSel, setTabSel] = useState("inputs");
  //overmind
  const actions = useActions();
  const state = useAppState();
  const inputs = state.editPage.lineList.inputs;
  const outputs = state.editPage.lineList.outputs;
  const groups = state.editPage.lineList.groups;
  //
  const findGroupColor = (input, groups) => {
    if (input.group !== null) {
      const color = groups.filter((group) => group.id === input.group)[0].color;
      //console.log(color[0].color)
      return { backgroundColor: `${color}` };
    }
    return {};
  };

  return (
    <div>
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
        <Nav.Item>
          <Nav.Link eventKey='test1' onClick={() => setTabSel("test1")}>
            test1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='test2' onClick={() => setTabSel("test2")}>
            test2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <div className={classes.tablewrap}>
        {tabSel === "inputs" && (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>
                  <strong>#</strong>
                </th>
                <th>Name</th>
                <th>Mic</th>
                <th>Stand</th>
                <th>Position</th>
                <th>Rack</th>
                <th>Comment</th>
                <th>Group</th>
              </tr>
            </thead>
            <tbody>
              {inputs.map((input) => (
                <tr onClick={() => actions.setSelectedObjId(input)} key={input.id}>
                  <td style={findGroupColor(input, groups)}>
                    <strong>{input.inputno}</strong>
                  </td>
                  <td>{input.name}</td>
                  <td>{input.mic}</td>
                  <td>{input.stand}</td>
                  <td>{input.pos}</td>
                  <td>{input.stagebox}</td>
                  <td>{input.comment}</td>
                  <td style={findGroupColor(input, groups)}>{input.group}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
        {tabSel === "outputs" && (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>
                  <strong>#</strong>
                </th>
                <th>Name</th>
                <th>Device</th>
                <th>Position</th>
                <th>Rack</th>
                <th>Comment</th>
              </tr>
            </thead>
            <tbody>
              {outputs.map((output) => (
                <tr key={output.id}>
                  <td>
                    <strong>{output.id}</strong>
                  </td>
                  <td>{output.name}</td>
                  <td>{output.device}</td>
                  <td>{output.pos}</td>
                  <td>{output.stagebox}</td>
                  <td>{output.comment}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
        {tabSel === "groups" && (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>
                  <strong>#</strong>
                </th>
                <th>Name</th>
                <th>Members</th>
              </tr>
            </thead>
            <tbody>
              {groups.map((group) => (
                <tr key={group.id}>
                  <td style={{ backgroundColor: `${group.color}` }}>
                    <strong>{group.id}</strong>
                  </td>
                  <td style={{ backgroundColor: `${group.color}` }}>{group.name}</td>
                  <td style={{ backgroundColor: `${group.color}` }}>{groups.members}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </div>
    </div>
  );
};

export default ExpandedTable;
