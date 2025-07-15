import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Detail from "./Detail";
import { ThemeContext } from "../contexts/ThemContext";
import { useNavigate, useParams /*, useLocation*/ } from "react-router";

function MyCard(props) {
  const [showDetail, setShowDetail] = useState(false);
  // const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();
  // const location = useLocation();
  const { id: urlParamId } = useParams();

  // Kiểm tra URL khi component mount để mở modal nếu có ID trùng khớp
  useEffect(() => {
    if (urlParamId && props.id.toString() === urlParamId) {
      setShowDetail(true);
    }
  }, [urlParamId, props.id]);

  const handleShowDetail = () => {
    setShowDetail(true);
    // Cập nhật URL mà không reload trang
    navigate(`/detail/${props.id}`, { replace: false });
  };

  const handleCloseDetail = () => {
    setShowDetail(false);
    // Quay lại URL trước đó khi đóng modal
    navigate("/", { replace: true });
  };

  return (
    <>
      <Card style={{ width: "100%", height: "400px" }}>
        <Card.Img
          variant="top"
          src={props.img}
          style={{ height: "250px", objectFit: "cover" }}
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title>{props.name}</Card.Title>
          <Button
            onClick={handleShowDetail}
            variant="primary"
            className="mt-auto"
          >
            Detail
          </Button>
        </Card.Body>
      </Card>
      <Detail show={showDetail} close={handleCloseDetail} orchid={props} />
    </>
  );
}

export default MyCard;
