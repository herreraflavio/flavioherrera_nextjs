"use client";
import { useState } from "react";

const ImageTransformPlayground = () => {
  const [scale, setScale] = useState(1.7);
  const [rotate, setRotate] = useState(45);
  const [skewX, setSkewX] = useState(20);
  const [skewY, setSkewY] = useState(10);
  const [translateX, setTranslateX] = useState(70);
  const [translateY, setTranslateY] = useState(-30);
  const [grayscale, setGrayscale] = useState(100);
  const [sepia, setSepia] = useState(50);
  const [brightness, setBrightness] = useState(150);
  const [contrast, setContrast] = useState(200);
  const [blur, setBlur] = useState(0);
  const [hue, setHue] = useState(180);

  const imageStyle = {
    width: "300px",
    height: "300px",
    transformOrigin: "center",
    transform: `scale(${scale}) rotate(${rotate}deg) skew(${skewX}deg, ${skewY}deg) translate(${translateX}px, ${translateY}px)`,
    filter: `grayscale(${grayscale}%) sepia(${sepia}%) brightness(${brightness}%) contrast(${contrast}%) blur(${blur}px) hue-rotate(${hue}deg)`,
  };

  return (
    <div>
      <h1>Image Transform Playground</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div
          style={{ width: "500px", border: "solid 4px black", height: "500px" }}
        >
          <div style={{ padding: "5px" }}>
            <label>Scale (Zoom):</label>
            <input
              type="number"
              value={scale}
              min="0.5"
              max="3"
              step="0.1"
              onChange={(e) => setScale(parseFloat(e.target.value))}
              placeholder="Scale"
            />
            <br />
            <br />
            <label>Rotate (Degrees):</label>
            <input
              type="number"
              value={rotate}
              min="0"
              max="360"
              step="1"
              onChange={(e) => setRotate(parseFloat(e.target.value))}
              placeholder="Rotate"
            />
            <br />
            <br />
            <label>Skew X (Degrees):</label>
            <input
              type="number"
              value={skewX}
              min="-50"
              max="50"
              step="1"
              onChange={(e) => setSkewX(parseFloat(e.target.value))}
              placeholder="Skew X"
            />
            <br />
            <br />
            <label>Skew Y (Degrees):</label>
            <input
              type="number"
              value={skewY}
              min="-50"
              max="50"
              step="1"
              onChange={(e) => setSkewY(parseFloat(e.target.value))}
              placeholder="Skew Y"
            />
            <br />
            <br />
            <label>Translate X (Pixels):</label>
            <input
              type="number"
              value={translateX}
              min="-100"
              max="100"
              step="1"
              onChange={(e) => setTranslateX(parseFloat(e.target.value))}
              placeholder="Translate X"
            />
            <br />
            <br />
            <label>Translate Y (Pixels):</label>
            <input
              type="number"
              value={translateY}
              min="-100"
              max="100"
              step="1"
              onChange={(e) => setTranslateY(parseFloat(e.target.value))}
              placeholder="Translate Y"
            />
            <br />
            <br />
            <label>Grayscale (%) :</label>
            <input
              type="number"
              value={grayscale}
              min="0"
              max="100"
              step="1"
              onChange={(e) => setGrayscale(parseFloat(e.target.value))}
              placeholder="Grayscale"
            />
            <br />
            <br />
            <label>Sepia (%) :</label>
            <input
              type="number"
              value={sepia}
              min="0"
              max="100"
              step="1"
              onChange={(e) => setSepia(parseFloat(e.target.value))}
              placeholder="Sepia"
            />
            <br />
            <br />
            <label>Brightness (%) :</label>
            <input
              type="number"
              value={brightness}
              min="50"
              max="200"
              step="1"
              onChange={(e) => setBrightness(parseFloat(e.target.value))}
              placeholder="Brightness"
            />
            <br />
            <br />
            <label>Contrast (%) :</label>
            <input
              type="number"
              value={contrast}
              min="100"
              max="300"
              step="1"
              onChange={(e) => setContrast(parseFloat(e.target.value))}
              placeholder="Contrast"
            />
            <br />
            <br />
            <label>Blur (Pixels) :</label>
            <input
              type="number"
              value={blur}
              min="0"
              max="10"
              step="0.1"
              onChange={(e) => setBlur(parseFloat(e.target.value))}
              placeholder="Blur"
            />
            <br />
            <br />
            <label>Hue Rotate (Degrees) :</label>
            <input
              type="number"
              value={hue}
              min="0"
              max="360"
              step="1"
              onChange={(e) => setHue(parseFloat(e.target.value))}
              placeholder="Hue Rotate"
            />
            <br />
            <br />
          </div>
        </div>
        <div
          style={{
            overflow: "auto",
            width: "500px",
            height: "500px",
            border: "solid 4px",
          }}
        >
          <img
            className="playground-image"
            style={imageStyle}
            src="/images/cool.png"
            alt="Demo Image"
          />
        </div>
      </div>

      <style jsx>{`
        .playground-image {
          /* Additional common styling can be placed here if needed */
        }
      `}</style>
    </div>
  );
};

export default ImageTransformPlayground;
