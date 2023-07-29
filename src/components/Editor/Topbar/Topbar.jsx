import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BsShareFill, BsFillGearFill } from "react-icons/bs";
import ProjectName from "./ProjectName/ProjectName";
//overmind
import { useAppState, useActions } from "../../../overmind";

//css
import "./Topbar.css";

const Topbar = () => {
  //overmind
  const state = useAppState();
  const actions = useActions();
  const selectedObj = state.editPage.selectedObj;
  const editEnable = state.editPage.editEnable;
  //delete selectedObj
  const handleDeleteObject = () => {
    actions.deleteCanvasObject(selectedObj);
    if (state.editPage.isAutoRenumber) {
      actions.renumberList(selectedObj.type);
    }
  };
  //duplicate selectedObj
  const handleObjectDuplicate = () => {
    const duplicatedObj = { ...selectedObj };
    duplicatedObj.patchNo = "";
    duplicatedObj.id = "";
    actions.addCanvasObject(duplicatedObj);
  };

  //fake profile image
  const profileImage = "src/images/profile.jpeg";

  return (
    <Navbar className='bg-body-tertiary'>
      <Container fluid>
        <Navbar.Brand className='logo'>
          Plotnik
          <ProjectName />
        </Navbar.Brand>
        <Nav className='me-auto' id='left-nav'>
          <NavDropdown title='File' id='menuitem-file'>
            <NavDropdown.Item>Create New Project</NavDropdown.Item>
            <NavDropdown.Item>Make Duplicate</NavDropdown.Item>
            <NavDropdown.Item style={{ color: "red" }}>Delete Project</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>
              Share <BsShareFill className='ms-2' />
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown disabled={editEnable && selectedObj ? false : true} title='Selected' id='menuitem-Selected'>
            <NavDropdown.Item onClick={() => handleObjectDuplicate()}>Duplicate</NavDropdown.Item>
            <NavDropdown.Item onClick={() => handleDeleteObject()} style={{ color: "red" }}>
              Delete
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav id='right-nav'>
          <Nav.Item>
            <Nav.Link onClick={() => actions.setMainViewMode("help")}>Help</Nav.Link>
          </Nav.Item>
          <NavDropdown
            drop='start'
            id='menuitem-projsettings'
            title={<BsFillGearFill style={{ fontSize: "1.5rem" }} />}>
            <NavDropdown.Item onClick={actions.showProjSettings}>Project Settings</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            drop='start'
            id='menuitem-profile'
            title={
              <div>
                <img className='thumbnail-image' src={profileImage} alt='avatar'></img>
              </div>
            }>
            <NavDropdown.Item>See Profile</NavDropdown.Item>
            <NavDropdown.Item>My Projects</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item style={{ color: "red" }}>Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Topbar;
