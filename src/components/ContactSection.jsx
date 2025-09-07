const ContactSection = () => {
  return (
    <section className="bg-light" id="contact">
      <div className="container-fluid">
        <div className="row align-items-center">
          {/* Left Contact Info */}
          <div className="col-md-6 mb-4">
            <div className="text-center pt-5">
              <h4 className="heading">Contact Us</h4>
              <img
                src="/src/icons/hr.svg"
                alt="divider"
                className="mb-5 img-fluid"
              />
            </div>
            <div className="padding-left">
              <div className="mb-3 d-flex align-items-start">
                <div className="me-3 d-flex justify-content-center align-items-center">
                  <img src="/src/icons/phone-2.svg" alt="Phone" />
                </div>
                <div>
                  <h6 className="heading">Call us:</h6>
                  <p className="mb-0">(+84) 123 456 789</p>
                </div>
              </div>

              <div className="mb-3 d-flex align-items-start">
                <div className="me-3 d-flex justify-content-center align-items-center">
                  <img src="/src/icons/email.svg" alt="Envelope" />
                </div>
                <div>
                  <h6 className="heading">E-mail :</h6>
                  <p className="mb-0">support@freshmeal.com</p>
                </div>
              </div>

              <div className="d-flex align-items-start">
                <div className="me-3 d-flex justify-content-center align-items-center">
                  <img src="/src/icons/clock-2.svg" alt="" />
                </div>
                <div>
                  <h6 className="heading">Working Hours:</h6>
                  <p className="mb-0">Mon - Sat (8.00am - 12.00am)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Google Map */}
          <div className="col-md-6">
            <div className="ratio ratio-1x1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3224.266609624444!2d-115.17281658472795!3d36.114647379949434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c437e9d1dfc3%3A0x6810f8e8b5d7d37a!2sLas%20Vegas%2C%20NV%2C%20USA!5e0!3m2!1sen!2s!4v1678737283654!5m2!1sen!2s"
                allowFullScreen=""
                loading="lazy"
                title="Las Vegas Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
