import { useEffect, useState } from "react";

const DealsCountdown = () => {
  // Set target date (e.g., 3 days from now)
  const targetDate = new Date().getTime() + 3 * 24 * 60 * 60 * 1000;

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
      } else {
        const days = String(
          Math.floor(distance / (1000 * 60 * 60 * 24))
        ).padStart(2, "0");
        const hours = String(
          Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        ).padStart(2, "0");
        const minutes = String(
          Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        ).padStart(2, "0");
        const seconds = String(
          Math.floor((distance % (1000 * 60)) / 1000)
        ).padStart(2, "0");

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="text-center text-white py-5"
      style={{
        background:
          "linear-gradient(rgba(35, 43, 56, 0.9), rgba(35, 43, 56, 0.9)), url('/src/assets/food-table.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      <div className="container">
        <h4 className="heading mb-2">Big Deals of the Week</h4>
        <img src="/src/icons/hr.svg" alt="divider" className="mb-5 img-fluid" />

        <div className="row justify-content-center g-4">
          <div className="col-6 col-md-3">
            <div className="bg-warning text-dark p-4 rounded">
              <h3 className="heading display-6 text-white">{timeLeft.days}</h3>
              <p className="mb-0 text-white">Days</p>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="bg-warning text-dark p-4 rounded">
              <h3 className="heading display-6 text-white">{timeLeft.hours}</h3>
              <p className="mb-0 text-white">Hours</p>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="bg-warning text-dark p-4 rounded">
              <h3 className="heading display-6 text-white">{timeLeft.minutes}</h3>
              <p className="mb-0 text-white">Minutes</p>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="bg-warning text-dark p-4 rounded">
              <h3 className="heading display-6 text-white">{timeLeft.seconds}</h3>
              <p className="mb-0 text-white">Seconds</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealsCountdown;
