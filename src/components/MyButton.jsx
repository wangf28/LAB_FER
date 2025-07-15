import { useContext } from "react";
import { Button } from "react-bootstrap";
import { ThemeContext } from "../contexts/ThemContext";

function MyButton() {
  const { handleTheme } = useContext(ThemeContext);

  return (
    <>
      <Button onClick={handleTheme}>Change card theme</Button>
    </>
  );
}

export default MyButton;
