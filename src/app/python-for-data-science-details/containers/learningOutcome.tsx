import React from "react";

const LearningOutcome = () => {
  return (
    <section className="py-16 px-12 bg-[#F4DCFF] h-[720px]">
      <h1 className="font-semibold text-center text-3xl lg:text-5xl">
        Learning Outcomes
      </h1>
      <p className="text-xl text-center mt-4 mb-10 font-medium">
        Develop essential skills and knowledge for a career in Cybsersecurity
      </p>
      <div className="flex justify-evenly py-20 font-medium text-center text-xl">
        <p>
          Grasp network security principles <br /> and ethical hacking <br />{" "}
          fundamentals
        </p>
        <p>
          Understand secure coding <br /> practices and encryption <br />{" "}
          techniques
        </p>
        <p>
          Gain hands-on experience in <br /> penetration testing and <br />{" "}
          vulnerability assessment
        </p>
      </div>
      <div className="flex justify-evenly py-20 font-medium text-center text-xl">
        <p>
          Gain expertise in implementing <br /> robust cybersecurity measures to{" "}
          <br />
          protect against evolving cyber <br /> threats.
        </p>
        <p>
          Learn about incident response, <br /> compliance, and cybersecurity{" "}
          <br /> regulations
        </p>
      </div>
    </section>
  );
};

export default LearningOutcome;
