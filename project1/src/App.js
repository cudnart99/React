import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./App.css";
import ColorPicker from "./components/ColorPicker";
import SizeSetting from "./components/SizeSetting";
import Reset from "./components/Reset";
import Result from "./components/Result";
import React, { useState } from "react";

export default function App() {
  const [colorS, setcolorS] = useState({
    // lần sau tách chỗ này ra làm 2 cái cho dễ
    color: "red",
    fontSize: 12,
  });

  function onSetColor(params) {
    setcolorS({
      color: params,
      fontSize: colorS.fontSize,
    });
  }

  function onSetFontSize(value) {
    if (colorS.fontSize + value >= 10 && colorS.fontSize + value <= 30) {
      setcolorS({
        color: colorS.color,
        fontSize: colorS.fontSize + value,
      });
    }
  }

  function onReset() {
    setcolorS({
      color: "red",
      fontSize: 12,
    });
  }

  return (
    <Container className="mt-50">
      <Row>
        <Col className="m-10">
          <ColorPicker color={colorS.color} onReceiveColor={onSetColor} />
        </Col>
        <Col className="m-10">
          <SizeSetting
            fontSize={colorS.fontSize}
            onReceiveFontSize={onSetFontSize}
          />
          <Reset receiveReset={onReset} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Result color={colorS.color} fontSize={colorS.fontSize} />
        </Col>
      </Row>
    </Container>
  );
}
