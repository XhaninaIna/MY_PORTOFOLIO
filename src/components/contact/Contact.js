import "./Contact.css";
export default function Contact() {
  return (
    <section className="contact" id="contactSection">
      <p>Contact Me</p>
      <form class="contactForm" id="contactForm">
        <div class="formGroup">
          <label for="name">Name*:</label>
          <input type="text" id="name" placeholder="Name" />
        </div>
        <div class="formGroup">
          <label for="email">Email*:</label>
          <input type="email" id="email" placeholder="Email" />
        </div>
        <div class="formGroup">
          <label for="subject">Subject*:</label>
          <input type="text" id="subject" placeholder="Subject" />
        </div>
        <div class="formGroup">
          <label for="message">Message*:</label>
          <textarea
            id="message"
            rows="6"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <button type="submit">Send a Message</button>
      </form>
    </section>
  );
}
