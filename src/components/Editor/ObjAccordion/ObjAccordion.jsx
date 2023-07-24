import { Accordion } from "react-bootstrap";
import AccordionItem from "./AcoordionItem/AccordionItem";
//css
import classes from "./ObjAccordion.module.css";
const ObjAccordion = () => {
  return (
    <div className={classes.objaccordionwrap}>
      <div className={classes.header}>Add Objects:</div>
      <Accordion>
        <Accordion.Item eventKey='Drums'>
          <Accordion.Header>Drums</Accordion.Header>
          <Accordion.Body className={classes.accordionbody}>
            <AccordionItem />
            <AccordionItem />
            <AccordionItem />
            <AccordionItem />
            <AccordionItem />
            <AccordionItem />
            <AccordionItem />
            <AccordionItem />
            <AccordionItem />
            <AccordionItem />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='Guitars'>
          <Accordion.Header>Guitars</Accordion.Header>
          <Accordion.Body></Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='Keyboards'>
          <Accordion.Header>Keyboards</Accordion.Header>
          <Accordion.Body></Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='Vocal'>
          <Accordion.Header>Vocal</Accordion.Header>
          <Accordion.Body></Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='Misc'>
          <Accordion.Header>Misc</Accordion.Header>
          <Accordion.Body></Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default ObjAccordion;
