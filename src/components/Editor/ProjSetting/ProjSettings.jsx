import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
//css
import classes from "./ProjSettings.module.css";
//overmind
import { useAppState, useActions } from "../../../overmind";

function ProjSetting() {
  //overmind
  const state = useAppState();
  const actions = useActions();
  const projSetting = state.editPage.projSettings;
  console.log();

  //handle input change on prject settings form
  const handleChange = (e) => {
    const value = e.target.value;
    const key = e.target.name;
    actions.updateProjSettings({ key: key, value: value });
    return;
  };

  return (
    <>
      <Modal onHide={actions.hideProjSettings} show={state.editPage.showProjSettings} backdrop='true' keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Project Settings</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate>
            <Form.Group className='mb-3' controlId='formProjectName'>
              <Form.Label className={classes.formlabel}>Project Name:</Form.Label>
              <Form.Control
                value={projSetting.projName}
                name='projName'
                onChange={handleChange}
                maxLength={25}
                type='text'
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formArtistName'>
              <Form.Label className={classes.formlabel}>Artist Name:</Form.Label>
              <Form.Control
                value={projSetting.artistName}
                name='artistName'
                onChange={handleChange}
                maxLength={25}
                type='text'
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formPlotDesigner'>
              <Form.Label className={classes.formlabel}>Plot Designer Name:</Form.Label>
              <Form.Control
                value={projSetting.designerName}
                name='designerName'
                onChange={handleChange}
                maxLength={25}
                type='text'
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formComments'>
              <Form.Label className={classes.formlabel}>Comment:</Form.Label>
              <Form.Control
                value={projSetting.comment}
                name='comment'
                onChange={handleChange}
                rows={5}
                maxLength={250}
                as='textarea'
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={actions.hideProjSettings} variant='secondary'>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProjSetting;
