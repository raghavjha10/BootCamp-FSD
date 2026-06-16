function Contact() {
  return (
    <section id="contact">

      <h2>Contact Me</h2>

      <form>
        <input
          type="text"
          placeholder="Your Name"
        />

        <input
          type="email"
          placeholder="Your Email"
        />

        <textarea
          placeholder="Your Message"
        ></textarea>

        <button>
          Send Message
        </button>
      </form>

      <div className="contact-links">
        <a href="mailto:raghavjha0710@gmail.com">
          Gmail
        </a>

        <a href="https://linkedin.com">
          LinkedIn
        </a>
      </div>

    </section>
  );
}

export default Contact;