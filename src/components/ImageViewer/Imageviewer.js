import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/scss/image-gallery.scss";

import styles from "./imageviewer.module.scss";
export default function Imageviewer() {
  const Images = [
    {
      original:
        "https://media.istockphoto.com/photos/beautiful-luxury-home-exterior-at-twilight-picture-id1026205392?k=20&m=1026205392&s=612x612&w=0&h=lYFMV5cOuQQpddmwsE5QLBCyhgWQ1OI46i_dalro9OE=",
      thumbnail:
        "https://media.istockphoto.com/photos/beautiful-luxury-home-exterior-at-twilight-picture-id1026205392?k=20&m=1026205392&s=612x612&w=0&h=lYFMV5cOuQQpddmwsE5QLBCyhgWQ1OI46i_dalro9OE=",
    },
  ];
  return (
    <div className={styles.container}>
      <ImageGallery
        items={Images}
        showBullets={true}
        showThumbnails={false}
        showNav={false}
      />
    </div>
  );
}
