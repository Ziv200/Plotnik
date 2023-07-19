import { Container, Row,Col } from 'react-bootstrap';
import Topbar from '../components/Topbar';
import Sidebar from '../components/Sidebar';
import InfoLine from '../components/InfoLine';
import Stage from '../components/StageComp';
//css
import './Edit.css';
import StageComp from '../components/StageComp';


const Edit = () => {
  return (
    <>
    <Topbar/>
    <Container fluid>
      <Row>
        <Col sm={3} xl={2} id="sidebar">
          <Sidebar/>
        </Col>
        <Col sm={9} xl={10} id="main-edit">
          <Row id="infoline"><InfoLine/></Row>
          <Row id="canvas"><StageComp/></Row>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default Edit