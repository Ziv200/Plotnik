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
import { useActions, useAppState } from "../overmind";
import { useEffect } from "react";

const Edit = () => {
  //get state from overmind
  const state = useAppState();
  const actions = useActions();

  useEffect(() => {
    document.addEventListener("keypress", (e) => {
      if (e.code === "Backquote") {
        actions.editEnableToggle();
      }
    });
    return () => {
      document.removeEventListener("keypress", () => {});
    };
  }, []);

  return (
    <>
      <ProjSettings />
      <Container fluid>
        <Row>
          <Topbar />
        </Row>
        <Row>
          <Col xxl={2} className={classes.sidebar}>
            <Sidebar />
          </Col>
          <Col>
            <Row className={classes.infoline}>
              <InfoLine />
            </Row>
            {state.editPage.mainViewMode === "plot" && (
              <Row>
                <Col className='mt-5'>
                  <StageComp />
                </Col>
                <Col>
                  <ObjAccordion />
                </Col>
              </Row>
            )}
            {state.editPage.mainViewMode === "list" && (
              <Row>
                <Col className='mt-5' xxl={9}></Col>
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
