import { Accordion } from "react-bootstrap";
import AccordionItem from "./AcoordionItem/AccordionItem";
//import objects
import objectList from "../../../assets/objectList";
//css
import classes from "./ObjAccordion.module.css";
//if obj is null

const ObjAccordion = () => {
  return (
    <div className={classes.objaccordionwrap}>
      <div className={classes.header}>Add Objects:</div>
      <Accordion>
        <Accordion.Item eventKey='Drums'>
          <Accordion.Header>Drums</Accordion.Header>
          <Accordion.Body className={classes.accordionbody}>
            <AccordionItem obj={objectList.drum_set} />
            <AccordionItem obj={objectList.drum_snr} />
            <AccordionItem obj={objectList.drum_crash} />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='Guitars'>
          <Accordion.Header>Guitars</Accordion.Header>
          <Accordion.Body className={classes.accordionbody}>
            <AccordionItem obj={objectList.gtr_acc} />
            <AccordionItem obj={objectList.gtr_elc} />
            <AccordionItem obj={objectList.gtr_cls} />
            <AccordionItem obj={objectList.gtr_bass} />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='Keyboards'>
          <Accordion.Header>Keyboards</Accordion.Header>
          <Accordion.Body className={classes.accordionbody}></Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='Vocal'>
          <Accordion.Header>Vocal</Accordion.Header>
          <Accordion.Body className={classes.accordionbody}>
            <AccordionItem obj={objectList.vocal_mic} />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='Misc'>
          <Accordion.Header>Misc</Accordion.Header>
          <Accordion.Body className={classes.accordionbody}></Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default ObjAccordion;
