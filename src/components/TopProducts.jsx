import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const products = [
  {
    id: 1,
    name: "Summer Salad",
    image: "/src/assets/plate-1.png",
    price: "$ 1.25",
    rating: 3,
  },
  {
    id: 2,
    name: "Russian Salad",
    image: "/src/assets/plate-2.png",
    price: "$ 1.25",
    rating: 3,
  },
  {
    id: 3,
    name: "Greek Salad",
    image: "/src/assets/plate-3.png",
    price: "$ 1.25",
    rating: 3,
  },
  {
    id: 4,
    name: "Cottage Pie",
    image: "/src/assets/plate-3.png",
    price: "$ 1.25",
    rating: 3,
  },
];

const TopProducts = () => {
  return (
    <section className="bg-light text-center top-padding" id="products">
      <div className="container">
        <h4 className="fw-bold heading">Top Products</h4>
        <img src="/src/icons/hr.svg" alt="divider" className="mb-5 img-fluid" />

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          autoplay={{
            delay: 3000, 
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
          className="pb-4 mb-4"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="card shadow-sm border-0">
                <div className="d-flex justify-content-center align-items-center p-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="img-fluid"
                    style={{ maxHeight: "180px" }}
                  />
                </div>
                <hr className="m-0" />
                <div className="card-body text-center">
                  <h5 className="fw-bold">{product.name}</h5>

                  {/* Rating Stars */}
                  <div className="mb-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>
                        <img
                          src={
                            i < product.rating
                              ? "/src/icons/start-filled.svg"
                              : "/src/icons/star-grey.svg"
                          }
                          alt="star"
                          style={{ width: "18px", marginRight: "2px" }}
                        />
                      </span>
                    ))}
                  </div>

                  <div className="text-danger fw-bold mb-3">
                    {product.price}
                  </div>

                  <button className="swiper-cart-btn d-flex align-items-center mx-auto">
                    <img
                      src="/src/icons/cart-2.svg"
                      alt="cart"
                      className="img-fluid"
                    />
                    <span className="ms-1 ms-md-3">Add to cart</span>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="d-flex justify-content-between mt-3">
          <button className="swiper-btn rounded-circle swiper-button-prev"></button>
          <button className="swiper-btn rounded-circle swiper-button-next"></button>
        </div>

        {/* View More Button */}
        <div className="text-center mt-4">
          <button className="btn btn-dark fw-bold px-3 py-2 btn-hover-secondary">View More</button>
        </div>
      </div>
    </section>
  );
};

export default TopProducts;
