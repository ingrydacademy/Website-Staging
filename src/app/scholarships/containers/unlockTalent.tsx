import React from "react";
import CourseHighllight from "./courseHighllight";

const UnlockTalent = () => {
  return (
    <section className="py-24 flex flex-col items-center px-6 text-center gap-4">
      <h1 className="text-4xl lg:text-5xl font-bold">Available Courses</h1>
      <p className="text-lg text-center lg:px-36">
        In a world where technology reigns supreme, the demand for skilled
        professionals is unrelenting. Our training programs are more than just
        courses; they are gateways to a world of opportunity. We specialize in
        training young talents in the following programmes:
      </p>

      <CourseHighllight />
    </section>
  );
};

export default UnlockTalent;
