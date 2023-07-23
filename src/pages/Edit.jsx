import { Container, Row, Col } from "react-bootstrap";
import Topbar from "../components/Editor/Topbar/Topbar";
import Sidebar from "../components/Editor/Sidebar/Sidebar";
import InfoLine from "../components/Editor/InfoLine/InfoLine";
import ProjSettings from "../components/Editor/ProjSetting/ProjSettings";
import StageComp from "../components/Editor/StageComp/StageComp";
import ExpandedTable from "../components/Editor/ExpandedTable/ExpandedTable";
//-----------------------
import { useState } from "react";
//css
import classes from "./Edit.module.css";

const Edit = () => {
  //projSettings Modal show/hide logic
  const [showProjSettings, setShowProjSettings] = useState(false);
  const handleCloseProjSettings = () => setShowProjSettings(false);
  const handleShowProjSettings = () => setShowProjSettings(true);
  //------------------------------------

  //state to manage plot/expanded list view
  const [mainView, setMainView] = useState("plot");

  return (
    <>
      <ProjSettings show={showProjSettings} onHide={handleCloseProjSettings} />
      <Container fluid>
        <Row>
          <Topbar showProjSettings={handleShowProjSettings} />
        </Row>
        <Row>
          <Col sm={3} xl={2} className={classes.sidebar}>
            <Sidebar />
          </Col>
          <Col sm={9} xl={10}>
            <Row className={classes.infoline}>
              <InfoLine />
            </Row>
            <Row className={classes.canvas}>{mainView === "plot" ? <StageComp /> : <ExpandedTable />}</Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Edit;
