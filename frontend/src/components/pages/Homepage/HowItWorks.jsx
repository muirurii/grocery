const HowItWorks = () => {
  const steps = [
    {
      icon: "fa-shopping-bag",
      text: "You shop online",
    },
    {
      icon: "fa-box",
      text: "We process your order",
    },
    {
      icon: "fa-shipping-fast",
      text: "We deliver your order",
    },
    {
      icon: "fa-smile-beam",
      text: "You enjoy the product(s)",
    },
  ];

  return (
    <section>
      <h1>How It Works</h1>
      <section className="how-it-works">
        {steps.map((step, index) => {
          return (
            <article
              className="center how-card"
              data-num={index + 1}
              key={index}
            >
              <div>
                <i className={`fas ${step.icon}`}></i>
              </div>
              <h2>{step.text}</h2>
            </article>
          );
        })}
      </section>
    </section>
  );
};

export default HowItWorks;
