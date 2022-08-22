const Contact = () => {
  return (
    <div>
      <div class="fields">
        <form
          action="/"
          method="post"
          class="contact_form"
          id="contact_form"
          autocomplete="off"
        >
          <div
            class="returnmessage"
            data-success="Your message has been received, We will contact you soon."
          ></div>
          <div class="empty_notice">
            <span>Please Fill Required Fields</span>
          </div>
          <div class="input_list">
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
          <div class="message_area">
            <textarea
              id="message"
              placeholder="Write your message here"
            ></textarea>
          </div>
          <div class="dizme_tm_button">
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
