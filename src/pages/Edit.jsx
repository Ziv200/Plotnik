import { Container, Row, Col } from "react-bootstrap";
import Topbar from "../components/Editor/Topbar/Topbar";
import Sidebar from "../components/Editor/Sidebar/Sidebar";
import InfoLine from "../components/Editor/InfoLine/InfoLine";
import ProjSettings from "../components/Editor/ProjSetting/ProjSettings";
import StageComp from "../components/Editor/StageComp/StageComp";
import ExpandedTable from "../components/Editor/ExpandedTable/ExpandedTable";
import Help from "../components/Editor/Help/Help";
import ObjAccordion from "../components/Editor/ObjAccordion/ObjAccordion";
//-----------------------
//css
import classes from "./Edit.module.css";
//overmind
import { useAppState, useActions, useEffects, useReaction } from "../overmind";

const Edit = () => {
  //get state from overmind
  const state = useAppState();

  return (
    <>
      <ProjSettings />
      <Container fluid>
        <Row>
          <Topbar />
        </Row>
        <Row>
          <Col sm={3} xl={2} className={classes.sidebar}>
            <Sidebar />
          </Col>
          <Col sm={9} xl={10}>
            <Row className={classes.infoline}>
              <InfoLine />
            </Row>
            {state.editPage.mainViewMode === "plot" && (
              <Row>
                <Col>
                  <StageComp />
                </Col>
                <Col>
                  <ObjAccordion />
                </Col>
              </Row>
            )}
            {state.editPage.mainViewMode === "list" && (
              <Row>
                <Col sm={9} xl={10}>
                  <ExpandedTable />
                </Col>
                <Col></Col>
              </Row>
            )}
            {state.editPage.mainViewMode === "help" && (
              <Row>
                <Col sm={12}>
                  <Help />
                </Col>
                <Col></Col>
              </Row>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Edit;
