const NewsletterSection = () => {
  return (
    <section className="py-5" style={{ backgroundColor: "#eabf36" }}>
      <div className="container">
        <div className="row align-items-center">
          {/* Left Image */}
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <img
              src="/assets/rasberry.png"
              alt="raspberry"
              className="img-fluid"
              style={{ height: "350px" }}
            />
          </div>

          {/* Right Content */}
          <div className="col-md-6">
            <h4 className="heading">Subscribe to your newsletter</h4>
            <p className="my-4">
              Stay updated with the latest deals, fresh arrivals, and exclusive
              discounts delivered straight to your inbox. Join the FreshMeal
              family today!
            </p>

            {/* Email Form */}
            <form className="d-flex bg-white p-1 rounded-1">
              <input
                type="email"
                className="form-control me-2 border-0"
                placeholder="email@freshmeal.com"
                required
                style={{ borderRadius: "6px" }}
              />
              <button
                type="submit"
                className="btn px-4 py-2 rounded-1"
                style={{ backgroundColor: "#EEBF02", color: "#fff" }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
