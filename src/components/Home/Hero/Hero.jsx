import React, { useEffect } from "react";
import { HeroStyled } from "./Hero.styled";
import Button from "../../Button/Button";
import createGlobe from "https://cdn.skypack.dev/cobe";
const Hero = () => {
  let phi = 0;

  useEffect(() => {
    let canvas = document.getElementById("cobe");
    if (canvas) {
      const globe = createGlobe(canvas, {
        devicePixelRatio: 2,
        width: 600,
        height: 600,
        phi: 0,
        theta: 0,
        dark: 0,
        diffuse: 1.2,
        scale: 1,
        mapSamples: 16000,
        mapBrightness: 6,
        baseColor: [1, 1, 1],
        markerColor: [1, 0.5, 1],
        glowColor: [1, 1, 1],
        offset: [0, 0],
        markers: [
          { location: [37.7595, -122.4367], size: 0.03 },
          { location: [40.7128, -74.006], size: 0.1 },
        ],
        onRender: (state) => {
          // Called on every animation frame.
          // `state` will be an empty object, return updated params.
          state.phi = phi;
          phi += 0.01;
        },
      });
    }
  }, [document.getElementById("cobe")]);
  return (
    <HeroStyled>
      <div className="container hero-container">
        <div className="hero__info">
          <h1 className="hero__title">
            Biz veb-saytlar, ilovalarni ishlab chiqamiz
          </h1>
          <p className="hero__subt">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          <Button name={"Портфолио"} link={"portfolio"} />
        </div>
        <canvas
          id="cobe"
          width={800}
          height={800}
          style={{
            width: "300px",
            height: "300px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        ></canvas>
      </div>
    </HeroStyled>
  );
};

export default Hero;
