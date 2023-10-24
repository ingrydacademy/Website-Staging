import React from "react";

const LearningOutcome = () => {
  return (
    <section className="py-16 px-12 bg-[#F4DCFF] h-[720px]">
      <h1 className="font-semibold text-center text-3xl lg:text-5xl">
        Learning Outcomes
      </h1>
      <p className="text-xl text-center mt-4 mb-10 font-medium">
        Develop essential skills and knowledge for a career in IT sales.
      </p>
      <div className="flex justify-evenly py-20 font-medium text-center text-xl">
        <p>
          Learn effective solution selling <br /> strategies and techniques
        </p>
        <p>
          Understand customer needs, <br /> crafting value propositions, and{" "}
          <br /> negotiation skills.
        </p>
        <p>
          Enhance communication and <br /> presentation skills for sales <br />{" "}
          success.
        </p>
      </div>
      <div className="flex justify-evenly py-20 font-medium text-center text-xl">
        <p>
          Gain insights into building client <br /> relationships and
          contributing to <br />
          organizational growth.
        </p>
      </div>
    </section>
  );
};

export default LearningOutcome;
