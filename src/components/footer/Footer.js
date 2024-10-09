import "./Footer.css";
export default function Footer() {
  return (
    <footer className="footer" id="footerSection">
      <div class="social_icons">
        <ul>
          <li>
            <a href="#">
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa-brands fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa-brands fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
      <p>
        &copy; <span id="currentYear"></span> Xhanina Cela. All rights reserved.
      </p>
    </footer>
  );
}
