import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';



function MydModalWithGrid(props) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" >
          Gerenciar Perfis
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="grid-example">
        <Container>
          <Row>
            <Col xs={8} md={6}>
            <Image src="https://via.placeholder.com/200" thumbnail />
            
            </Col>
            <Col xs={4} md={6} >
            <Form.Control type="text" placeholder="Nome" />
            </Col>
          </Row>
          <br/>
          <Row>
            <Col xs={6} md={4}>
            <p>Classificação</p>
              <Form.Select aria-label="Default select example">
                <option value="1">Adulto</option>
                <option value="2">Kids</option>
              </Form.Select>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer >
        <Button variant="success" onClick={props.onHide}>Salvar</Button>
        <Button variant="danger" onClick={props.onHide}>Excluir perfil</Button>
        <Button variant="danger" onClick={props.onHide}>Cancelar</Button>
      </Modal.Footer>
    </Modal>
  );
}

function PopUp() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button variant="success" onClick={() => setModalShow(true)}>
        Abrir Modal
      </Button>

      <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default PopUp;






