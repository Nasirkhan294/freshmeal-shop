const services = [
  {
    id: 1,
    title: "Free Home delivery",
    description:
      "Fresh and quality products delivered to your doorstep for free.",
    icon: "/icons/transport.svg",
    color: "dark",
    btnClass: "btn-dark fw-bold btn-hover-secondary",
  },
  {
    id: 2,
    title: "30 Days ReturnServices",
    description: "Enjoy hassle-free returns within 30 days of your purchase.",
    icon: "/icons/bag.svg",
    color: "warning",
    btnClass: "btn-warning text-white fw-bold",
  },
  {
    id: 3,
    title: "Money Back Guaranteed",
    description: "Shop with confidence with our 100% money-back guarantee.",
    icon: "/icons/usd.svg",
    color: "dark",
    btnClass: "btn-dark fw-bold btn-hover-secondary",
  },
];

const Services = () => {
  return (
    <section className="py-5 bg-light" id="services">
      <div className="container text-center">
        <h4 className="heading mt-3">Our services</h4>
        <img src="/icons/hr.svg" alt="divider" className="mb-5 img-fluid" />

        <div className="row g-5 g-lg-4 my-4">
          {services.map((service) => (
            <div className="col-md-6 col-lg-4" key={service.id}>
              <div className="card border-0 shadow-sm h-100 px-3 
              
              ">
                {/* Icon */}
                <div className="d-flex justify-content-center card-icons">
                  <div
                    className={`d-flex justify-content-center align-items-center rounded-3 bg-${service.color}`}
                    style={{
                      width: "70px",
                      height: "70px",
                      transform: "rotate(45deg)",
                    }}
                  >
                    <img
                      src={service.icon}
                      alt={service.title}
                      style={{
                        transform: "rotate(-45deg)",
                      }}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="card-body text-center">
                  <h5 className="mb-3 mt-5 heading">{service.title}</h5>
                  <p className="text-muted">{service.description}</p>
                  <button className={`btn ${service.btnClass} py-2 px-3 mb-3`}>
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
