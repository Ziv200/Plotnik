import { Container, Row, Col } from "react-bootstrap";
import Topbar from "../components/Editor/Topbar/Topbar";
import Sidebar from "../components/Editor/Sidebar/Sidebar";
import InfoLine from "../components/Editor/InfoLine/InfoLine";
import ProjSettings from "../components/Editor/ProjSetting/ProjSettings";
import StageComp from "../components/Editor/StageComp/StageComp";
import ExpandedTable from "../components/Editor/ExpandedTable/ExpandedTable";
//-----------------------
//css
import classes from "./Edit.module.css";
//overmind
import { useAppState, useActions, useEffects, useReaction } from "../overmind";

const Edit = () => {
  //get state from overmind
  const state = useAppState();
  // projSettings Modal show/hide logic - earse please!!!
  // const [showProjSettings, setShowProjSettings] = useState(false);
  // const handleCloseProjSettings = () => setShowProjSettings(false);
  // const handleShowProjSettings = () => setShowProjSettings(true);
  //------------------------------------

  //state to manage plot/expanded list view
  // const [mainView, setMainView] = useState("plot");

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
            <Row className={classes.canvas}>
              {state.editPage.mainViewMode === "plot" ? <StageComp /> : <ExpandedTable />}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Edit;
