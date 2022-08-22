const Contact = () => {
  return (
    <div>
      <div className="fields">
        <form
          action="/"
          method="post"
          className="contact_form"
          id="contact_form"
          autocomplete="off"
        >
          <div
            className="returnmessage"
            data-success="Your message has been received, We will contact you soon."
          ></div>
          <div className="empty_notice">
            <span>Please Fill Required Fields</span>
          </div>
          <div className="input_list">
            <ul>
              <li>
                <input id="name" type="text" placeholder="Your Name" />
              </li>
              <li>
                <input id="email" type="text" placeholder="Your Email" />
              </li>
              <li>
                <input id="phone" type="number" placeholder="Your Phone" />
              </li>
              <li>
                <input id="subject" type="text" placeholder="Subject" />
              </li>
            </ul>
          </div>
          <div className="message_area">
            <textarea
              id="message"
              placeholder="Write your message here"
            ></textarea>
          </div>
          <div className="dizme_tm_button">
            <a id="send_message" href="#">
              <span>Submit Now</span>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
