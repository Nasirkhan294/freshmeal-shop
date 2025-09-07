const Footer = () => {
  return (
    <footer className="text-center">
      <div className="container">
        <div className="row">
          {/* About Us */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold border-bottom border-warning pb-2">
              About us
            </h6>
            <p className="mt-3">
              Our journey began with a simple mission – to make farm-fresh
              produce, healthy groceries, and everyday essentials easily
              accessible to everyone.
            </p>
            <button className="btn btn-outline-light btn-md fw-bold">
              Read More
            </button>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold border-bottom border-warning pb-2">
              Quick Links
            </h6>
            <ul className="list-unstyled mt-3">
              <li className="py-2">
                <a href="#home" className="text-light text-decoration-none">
                  Home
                </a>
              </li>
              <li className="py-2">
                <a href="#about" className="text-light text-decoration-none">
                  About us
                </a>
              </li>
              <li className="py-2">
                <a href="#products" className="text-light text-decoration-none">
                  Products
                </a>
              </li>
              <li className="py-2">
                <a href="#blog" className="text-light text-decoration-none">
                  Blog
                </a>
              </li>
              <li className="py-2">
                <a href="#services" className="text-light text-decoration-none">
                  Services
                </a>
              </li>
              <li className="py-2">
                <a href="#contact" className="text-light text-decoration-none">
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold border-bottom border-warning pb-2">
              Follow Us
            </h6>
            <ul className="list-unstyled mt-3">
              <li className="py-2">
                <img src="/src/icons/facebook.svg" alt="facebook" />
                <a href="#" className="text-light text-decoration-none ms-3">
                  Facebook
                </a>
              </li>
              <li className="py-2">
                <img src="/src/icons/twitter.svg" alt="twitter" />
                <a href="#" className="text-light text-decoration-none ms-3">
                  Twitter
                </a>
              </li>
              <li className="py-2">
                <img src="/src/icons/google.svg" alt="Google" />
                <a href="#" className="text-light text-decoration-none ms-3">
                  Google +
                </a>
              </li>
              <li className="py-2">
                <img src="/src/icons/instagram.svg" alt="instagram" />
                <a href="#" className="text-light text-decoration-none ms-3">
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Instagram Gallery */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold border-bottom border-warning pb-2">
              Instagram
            </h6>
            <div className="row g-2 mt-3">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="col-4">
                  <img
                    src="/src/assets/food-table.jpg"
                    alt="instagram"
                    className="img-fluid rounded"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center py-3 mt-4 copyright">
        <p className="mb-0 small">Copyright © 2020. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
