const Subscribe = () => {
  return (
    <form className="mailchimp-widget text-center mb30-md mb60">
      <h2 className="title text-white">Subscribe Our Newsletter</h2>
      <h6 className="title text-white mb35 fw400">
        We don’t send spam so don’t worry.
      </h6>
      <div className="mailchimp-style2">
        <input
          type="email"
          className="form-control"
          placeholder="Your Email"
          required
        />
        <button className="ud-btn btn-thm" type="submit">
          Subscribe
        </button>
      </div>
    </form>
  );
};

export default Subscribe;
