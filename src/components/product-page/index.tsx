import Image from "next/image";
import React from "react";
import { IconMinus, IconPlus } from "../../assets/icons";
import {
  img_product_1,
  img_product_2,
  img_product_3,
  img_product_4,
} from "../../assets/images";

const CProduct = () => {
  return (
    <section className="product-page">
      <div className="product-images" aria-label="Container for the Products">
        <div
          className="[ product-thumbnail ] [ relative cursor-pointer ]"
          title="Product Thumbnail"
        >
          <Image
            src={img_product_1}
            alt="Product Shoes Thumbnail"
            layout="fill"
            role="button"
          />
        </div>

        <div role="list" className="product-images-list">
          <div
            className="[ product-image ] [ relative cursor-pointer ]"
            title="Product 1"
          >
            <Image
              src={img_product_1}
              alt="Product Shoes 1"
              layout="fill"
              role="button"
            />
          </div>
          <div
            className="[ product-image ] [ relative cursor-pointer ]"
            title="Product 2"
          >
            <Image
              src={img_product_2}
              alt="Product Shoes 2"
              layout="fill"
              role="button"
            />
          </div>
          <div
            className="[ product-image ] [ relative cursor-pointer ]"
            title="Product 3"
          >
            <Image
              src={img_product_3}
              alt="Product Shoes 3"
              layout="fill"
              role="button"
            />
          </div>
          <div
            className="[ product-image ] [ relative cursor-pointer ]"
            title="Product 4"
          >
            <Image
              src={img_product_4}
              alt="Product Shoes 4"
              layout="fill"
              role="button"
            />
          </div>
        </div>
      </div>
      <div className="product-details">
        {/* <p className="product-details-logo-name">Sneaker Company</p> */}
        <h1 className="product-details-title">
          Fall Limited Edition
          <br /> Sneakers
        </h1>
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
