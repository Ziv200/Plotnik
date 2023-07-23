import { Container, Row, Col } from "react-bootstrap";
import Topbar from "../components/Editor/Topbar/Topbar";
import Sidebar from "../components/Editor/Sidebar/Sidebar";
import InfoLine from "../components/Editor/InfoLine";
import ProjSettings from "../components/Editor/ProjSetting/ProjSettings";
import StageComp from "../components/Editor/StageComp/StageComp";
//-----------------------
import { useState } from "react";
//css
import "./Edit.css";

const Edit = () => {
  //projSettings Modal Logic
  const [showProjSettings, setShowProjSettings] = useState(false);

  const handleCloseProjSettings = () => setShowProjSettings(false);
  const handleShowProjSettings = () => setShowProjSettings(true);

  return (
    <>
      <ProjSettings show={showProjSettings} onHide={handleCloseProjSettings} />
      <Topbar showProjSettings={handleShowProjSettings} />
      <Container fluid>
        <Row>
          <Col sm={3} xl={2} id='sidebar'>
            <Sidebar />
          </Col>
          <Col sm={9} xl={10} id='main-edit'>
            <Row id='infoline'>
              <InfoLine />
            </Row>
            <Row id='canvas'>
              <StageComp />
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Edit;
