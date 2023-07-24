import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
//css
import classes from "./ProjSettings.module.css";
//overmind
import { useAppState, useActions } from "../../../overmind";

function ProjSetting() {
  const state = useAppState();
  const actions = useActions();
  return (
    <>
      <Modal onHide={actions.hideProjSettings} show={state.editPage.projSettingsShow} backdrop='true' keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Project Settings</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate>
            <Form.Group className='mb-3' controlId='formProjectName'>
              <Form.Label>Project Name:</Form.Label>
              <Form.Control maxLength={25} type='text' value={state.editPage.projSettings.projName} />
            </Form.Group>

            <Form.Group className='mb-3' controlId='formArtistName'>
              <Form.Label>Artist Name:</Form.Label>
              <Form.Control maxLength={25} type='text' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formPlotDesigner'>
              <Form.Label>Plot Designer Name:</Form.Label>
              <Form.Control maxLength={25} type='text' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formComments'>
              <Form.Label>Comments:</Form.Label>
              <Form.Control rows={5} maxLength={250} as='textarea' />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={actions.hideProjSettings} variant='secondary'>
            Close
          </Button>
          <Button type='submit' variant='primary'>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProjSetting;
