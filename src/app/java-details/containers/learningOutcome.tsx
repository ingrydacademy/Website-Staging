import React from "react";

const LearningOutcome = () => {
  return (
    <section className="py-16 px-12 bg-[#F4DCFF]">
      <h1 className="font-semibold text-center text-xl lg:text-5xl">
        Learning Outcomes
      </h1>
      <p className="lg:text-xl text-sm text-center mt-4 lg:mb-10 mb-10 font-medium">
        Develop essential skills and knowledge for a rewarding career in Java
        and Spring Boot.
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-3 lg:gap-32 gap-10 lg:py-20 py-10 text-center lg:px-10">
        <p className="text-sm font-medium md:text-xl">
          Attain Java programming proficiency for diverse applications.
        </p>
        <p className="text-sm font-medium md:text-xl">
          Understand Object-Oriented Programming (OOP) concepts.
        </p>
        <p className="text-sm font-medium md:text-xl">
          Apply OOP principles in software development.
        </p>
        <p className="text-sm font-medium md:text-xl">
          Develop software engineering skills and contribute to a "tech
          culture."
        </p>
      </div>
    </section>
  );
};

export default LearningOutcome;
