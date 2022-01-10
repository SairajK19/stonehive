import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/scss/image-gallery.scss";
import { Icon } from "@iconify/react";

import styles from "./image_viewer.module.scss";

import Site_Image from "../../.../../assets/images/siteImg_2.png";
export default function Imageviewer() {
  const Images = [
    {
      originalClass: "image_viewer_img",
      original:
        "https://media.istockphoto.com/photos/beautiful-luxury-home-exterior-at-twilight-picture-id1026205392?k=20&m=1026205392&s=612x612&w=0&h=lYFMV5cOuQQpddmwsE5QLBCyhgWQ1OI46i_dalro9OE=",
      thumbnail:
        "https://media.istockphoto.com/photos/beautiful-luxury-home-exterior-at-twilight-picture-id1026205392?k=20&m=1026205392&s=612x612&w=0&h=lYFMV5cOuQQpddmwsE5QLBCyhgWQ1OI46i_dalro9OE=",
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.top_buttons}>
        <div className={styles.zoom_btns}>
          <button>
            <Icon icon="ant-design:plus-circle-filled" />
          </button>
          <button>
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
        {/* <img src={Site_Image} alt="" /> */}
      </div>
      {/* <ImageGallery
        items={Images}
        showBullets={true}
        showThumbnails={false}
        showNav={false}
      
      /> */}
      <div className={styles.bottom_nav_buttons}>
        <button>
          <Icon icon="ep:arrow-left" />
        </button>
        <button>
          <Icon icon="ep:arrow-right" />
        </button>
      </div>
    </div>
  );
}
