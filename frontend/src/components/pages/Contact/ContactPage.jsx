import useScrollToTop from "../../../customHooks/useScroll";

const ContactPage = () => {
  useScrollToTop();

  return (
    <main className="contact-page">
      <h1>Send us a message</h1>
      <form className="center form-layout">
        <div>
          <label htmlFor="name">Name</label>
          <br />
          <input type="text" placeholder="enter your name" id="name" required />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="email"
            id="email"
            placeholder="enter your email"
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <br />
          <textarea placeholder="enter your message"></textarea>
        </div>
        <div>
          <button type="submit" cols="30" rows="10">
            Send Message
          </button>
        </div>
      </form>
    </main>
  );
};

export default ContactPage;
