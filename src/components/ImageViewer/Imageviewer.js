import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/scss/image-gallery.scss";
import { Icon } from "@iconify/react";
import styles from "./image_viewer.module.scss";
import Site_Image from "../../assets/images/siteImg_2.png";
import FrontView from "../../assets/images/FrontView.png";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export default function Imageviewer() {
  const [images, setImages] = useState([FrontView, Site_Image]);
  const [imageCounter, setImageCounter] = useState(0);
  const handleImageForward = () => {
    if (imageCounter !== images.length) {
      let counter = imageCounter + 1;
      setImageCounter(counter);
    }
  };

  const handleImageBackward = () => {
    if (imageCounter !== 0) {
      let counter = imageCounter - 1;
      setImageCounter(counter);
    }
  };
  return (
    <div className={styles.container}>
      <TransformWrapper initialScale={1}>
        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
          <div className={styles.image}>
            <div className={styles.top_buttons}>
              <div className={styles.zoom_btns}>
                <button onClick={() => zoomIn()}>
                  <Icon icon="ant-design:plus-circle-filled" />
                </button>
                <button onClick={() => zoomOut()}>
                  <Icon icon="ant-design:minus-circle-filled" />
                </button>
              </div>
              <div className={styles.fullscrn_btn}>
                <button>
                  <Icon icon="bi:arrows-fullscreen" height="20" />
                </button>
              </div>
            </div>
            <div className={styles.images_slides}>
              <TransformComponent
                wrapperClass={styles.img_wrapper}
                contentClass={styles.img_content}
              >
                <img
                  src={images[imageCounter]}
                  alt="test"
                  style={{ minWidth: "1000px" }}
                />
              </TransformComponent>
            </div>
            <div className={styles.bottom_nav_buttons}>
              <button onClick={handleImageBackward}>
                <Icon icon="ep:arrow-left" />
              </button>
              <button onClick={handleImageForward}>
                <Icon icon="ep:arrow-right" />
              </button>
            </div>
          </div>
        )}
      </TransformWrapper>
    </div>
  );
}
