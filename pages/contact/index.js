const Contact = () => {
  return (
    <div className="row row-cols-md-2 justify-content-center">
      <form action="/app/">
        <h1 className="text-center mb-4">Contact</h1>
        <div className="mb-3">
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              placeholder="Leave a email here"
              id="floatingTextarea1"
            />
            <label for="floatingTextarea1" className="text-black">
              Enter Your Email
            </label>
          </div>
        </div>
        <div className="mb-3">
          <div className="form-floating">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              style={{ height: "100px" }}
            ></textarea>
            <label for="floatingTextarea2" className="text-black">
              Comments
            </label>
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
