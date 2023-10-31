import React from "react";

const LearningOutcome = () => {
  return (
    <section className="py-16 px-12 bg-[#F4DCFF]">
      <h1 className="font-semibold text-center text-xl lg:text-5xl">
        Learning Outcomes
      </h1>
      <p className="lg:text-xl text-sm text-center mt-4 lg:mb-10 mb-10 font-medium">
        Develop essential skills and knowledge for a career in Cybsersecurity
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-3 lg:gap-32 gap-10 lg:py-20 py-10 text-center lg:px-10">
        <p className="text-sm font-medium md:text-xl">
          Learn effective <br /> solution selling <br /> strategies and
          techniques
        </p>
        <p className="text-sm font-medium md:text-xl">
          Understand customer needs, <br /> crafting value propositions, br and
          negotiation skills.
        </p>
        <p className="text-sm font-medium md:text-xl">
          Enhance communication and <br /> presentation skills for sales <br />
          success.
        </p>
        <p className="text-sm font-medium md:text-xl">
          Gain insights into building <br /> client relationships and
          contributing to organizational
          <br /> growth.
        </p>
      </div>
    </section>
  );
};

export default LearningOutcome;
