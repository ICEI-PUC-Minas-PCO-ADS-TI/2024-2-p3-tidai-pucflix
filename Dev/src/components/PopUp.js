import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import styles from '../assets/css/PopUp.module.css';



function MydModalWithGrid(props) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <div className={styles.background}>
      <Modal.Header closeButton >
        <Modal.Title id="contained-modal-title-vcenter" >
          Editar Perfil
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="grid-example" >
        <Container>
          <Row>
            <Col xs={8} md={6}>
            <Image src="https://via.placeholder.com/200" thumbnail />
            
            </Col>
            <Col xs={4} md={6} >
            <Form.Control type="text" placeholder="Nome"/>
            </Col>
          </Row>
          <br/>
          <Row>
            <Col xs={6} md={4}>
            <p>Classificação</p>
              <Form.Select className={styles.classificacao}>
                <option value="1">Adulto</option>
                <option value="2">Kids</option>
              </Form.Select>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer >
        <Button className={styles.purple} onClick={props.onHide}>Salvar</Button>
        <Button className={styles.purple} onClick={props.onHide}>Cancelar</Button>
        <Button className={styles.purple} onClick={props.onHide}>Excluir perfil</Button>
      </Modal.Footer>
      </div>
    </Modal>
  );
}

function PopUp({ show, onHide }) {
  return (
    <MydModalWithGrid show={show} onHide={onHide} />
  );
}
export default PopUp;






