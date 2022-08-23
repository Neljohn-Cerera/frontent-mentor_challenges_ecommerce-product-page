import Image from "next/image";
import React from "react";
import { IconCart, IconMinus, IconPlus } from "../../assets/icons";
import {
  img_product_1,
  img_product_2,
  img_product_3,
  img_product_4,
  img_product_1_thumbnail,
} from "../../assets/images";

const CProduct = () => {
  return (
    <section className="flex">
      <div className="product-images" aria-label="Container for the Products">
        <Image
          src={img_product_1_thumbnail}
          alt="Product Shoes Thumbnail"
          width={500}
          height={500}
        />
        <div className="product-images-list">
          <Image
            className="product-image"
            src={img_product_1}
            alt="Product Shoes Thumbnail"
            width={100}
            height={100}
          />
          <Image
            className="product-image"
            src={img_product_2}
            alt="Product Shoes Thumbnail"
            width={100}
            height={100}
          />
          <Image
            className="product-image"
            src={img_product_3}
            alt="Product Shoes Thumbnail"
            width={100}
            height={100}
          />
          <Image
            className="product-image"
            src={img_product_4}
            alt="Product Shoes Thumbnail"
            width={100}
            height={100}
          />
        </div>
      </div>
      <div className="product-details">
        <p className="product-details-logo-name">Sneaker Company</p>
        <h1 className="product-details-title">Fall Limited Edition Sneakers</h1>
        <p className="product-detail">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div className="product-details__price">
          <p>
            $125.00 <span>50%</span>
          </p>
          <p>$250.00</p>
        </div>
        <div className="product-buttons">
          <div>
            <button role="button">
              <IconMinus />
            </button>
            <span>0</span>
            <button role="button">
              <IconPlus />
            </button>
          </div>
          <button role="button" className="add-cart">
            Add to cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default CProduct;
