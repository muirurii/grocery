import Term from "./Term";
const TermsAndConditions = () => {
  return (
    <section>
      <h1>Terms Of Service</h1>
      <section className="terms">
        <ul>
          <Term text={"Term of service"} number={1} />
          <Term text={"Term of service"} number={2} />
          <Term text={"Term of service"} number={3} />
          <Term text={"Term of service"} number={4} />
          <Term text={"Term of service"} number={4} />
          <Term text={"Term of service"} number={6} />
          <Term text={"Term of service"} number={7} />
          <Term text={"Term of service"} number={8} />
        </ul>
      </section>
    </section>
  );
};

export default TermsAndConditions;
