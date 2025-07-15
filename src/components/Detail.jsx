import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useParams } from "react-router";

function Detail({ show, close, orchid }) {
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal show={show} onHide={close}>
        <Modal.Header closeButton>
          <Modal.Title>{orchid.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img
            style={{ maxWidth: "100%", marginBottom: "15px" }}
            src={orchid.img}
            alt=""
          />
          <ul>
            <li>rating: {orchid.rating}</li>
            <li>color: {orchid.color}</li>
            <li>origin: {orchid.origin}</li>
            <li>category: {orchid.category}</li>
            <li>isSpecial: {orchid.isSpecial}</li>
            <li>isNatuaral: {orchid.isNatuaral}</li>
            <li>numberOfLike: {orchid.numberOfLike}</li>
          </ul>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={close} variant="secondary">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Detail;
