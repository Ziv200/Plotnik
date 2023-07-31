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
            <AccordionItem obj={objectList.drum_ft} />
            <AccordionItem obj={objectList.drum_hh} />
            <AccordionItem obj={objectList.drum_bd2rt} />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='Guitars'>
          <Accordion.Header>Guitars</Accordion.Header>
          <Accordion.Body className={classes.accordionbody}>
            <AccordionItem obj={objectList.gtr_acc} />
            <AccordionItem obj={objectList.gtr_elc} />
            <AccordionItem obj={objectList.gtr_cls} />
            <AccordionItem obj={objectList.gtr_bass} />
            <AccordionItem obj={objectList.banjo} />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='Keyboards'>
          <Accordion.Header>Keyboards</Accordion.Header>
          <Accordion.Body className={classes.accordionbody}>
            <AccordionItem obj={objectList.keys} />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='Strings'>
          <Accordion.Header>Strings</Accordion.Header>
          <Accordion.Body className={classes.accordionbody}>
            <AccordionItem obj={objectList.cb} />
            <AccordionItem obj={objectList.cello} />
            <AccordionItem obj={objectList.vla} />
            <AccordionItem obj={objectList.vln} />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='Brass'>
          <Accordion.Header>Brass</Accordion.Header>
          <Accordion.Body className={classes.accordionbody}>
            <AccordionItem obj={objectList.flute} />
            <AccordionItem obj={objectList.clarinet} />
            <AccordionItem obj={objectList.sax} />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='Misc'>
          <Accordion.Header>Misc</Accordion.Header>
          <Accordion.Body className={classes.accordionbody}>
            <AccordionItem obj={objectList.harp} />
            <AccordionItem obj={objectList.accordion} />
            <AccordionItem obj={objectList.mic_long} />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='Outputs'>
          <Accordion.Header>Outputs</Accordion.Header>
          <Accordion.Body className={classes.accordionbody}>
            <AccordionItem obj={objectList.wedge_L} />
            <AccordionItem obj={objectList.wedge_R} />
            <AccordionItem obj={objectList.wedge_SUB} />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='Others'>
          <Accordion.Header>Others</Accordion.Header>
          <Accordion.Body className={classes.accordionbody}></Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default ObjAccordion;
