import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Footer() {
  return (
    <footer className="bg-dark text-light mt-5 pt-4 pb-3">
      <div className="container">
        <div className="row">
          {/* About Orchids */}
          <div className="col-lg-4 mb-3">
            <h5 className="text-white mb-3">About Orchids</h5>
            <p className="text-light">
              Orchids represent the largest family of flowering plants with over
              28,000 currently accepted species. They are prized for their
              colorful and fragrant blooms, making them popular choices for
              gardens and collections worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-lg-3 mb-3">
            <h5 className="text-white mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Orchid Care
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Species
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Growing Tips */}
          <div className="col-lg-3 mb-3">
            <h5 className="text-white mb-3">Growing Tips</h5>
            <ul className="list-unstyled">
              <li>
                <span className="text-light">
                  • Light: Bright, indirect light
                </span>
              </li>
              <li>
                <span className="text-light">
                  • Water: Allow to dry between waterings
                </span>
              </li>
              <li>
                <span className="text-light">
                  • Temperature: 65-85°F (18-29°C)
                </span>
              </li>
              <li>
                <span className="text-light">• Humidity: 50-70%</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-lg-2 mb-3">
            <h5 className="text-white mb-3">Connect</h5>
            <div className="d-flex gap-3 mb-3">
              <a href="#" className="text-light fs-5">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-light fs-5">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="text-light fs-5">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="text-light fs-5">
                <i className="bi bi-pinterest"></i>
              </a>
            </div>
            <p className="text-light small">
              Subscribe to our newsletter for growing tips and new orchid
              varieties!
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="row mt-3 pt-3 border-top border-secondary">
          <div className="col-md-6 text-center text-md-start">
            <p className="text-light small">
              © 2024 OrchidGarden. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <p className="text-light small">
              <a href="#" className="text-light text-decoration-none">
                Privacy Policy
              </a>{" "}
              |
              <a href="#" className="text-light text-decoration-none">
                {" "}
                Terms of Service
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
