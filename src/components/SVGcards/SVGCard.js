import React from "react";
import styles from "./svgcard.module.scss";
export default function SVGCard({ children, bgcolor, innerRect }) {
  return (
    <div className={styles.container} style={{ backgroundColor: bgcolor }}>
      <svg
        className={styles.rectangles}
        width="269"
        height="158"
        viewBox="0 0 269 158"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_786_197)">
          <path
            d="M372.613 185.373L247.222 38.0732C229.322 17.046 200.301 17.046 182.401 38.0732L152.116 73.6496C134.216 94.6768 134.216 128.769 152.116 149.796L277.507 297.096C295.407 318.123 324.429 318.123 342.328 297.096L372.613 261.519C390.513 240.492 390.513 206.4 372.613 185.373Z"
            fill={innerRect}
          />
          <path
            d="M381.745 -33.1807H212.745C185.131 -33.1807 162.745 -10.7949 162.745 16.8193V74.8193C162.745 102.434 185.131 124.819 212.745 124.819H381.745C409.359 124.819 431.745 102.434 431.745 74.8193V16.8193C431.745 -10.7949 409.359 -33.1807 381.745 -33.1807Z"
            fill="white"
            fill-opacity="0.3"
          />
          <path
            d="M160.445 -174.278L106.087 30.769C99.0813 57.1943 114.215 86.2302 139.889 95.6226L174.393 108.245C200.067 117.638 226.559 103.83 233.564 77.4043L287.922 -127.643C294.928 -154.068 279.794 -183.104 254.12 -192.497L219.616 -205.119C193.942 -214.511 167.45 -200.704 160.445 -174.278Z"
            stroke="white"
            stroke-opacity="0.3"
          />
        </g>
        <defs>
          <clipPath id="clip0_786_197">
            <rect width="269" height="158" fill="white" />
          </clipPath>
        </defs>
      </svg>
      {children}
    </div>
  );
}
