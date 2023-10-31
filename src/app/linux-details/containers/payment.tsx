import React from "react";

const Payment = () => {
  return (
    <section className="py-14 px-8 flex flex-col lg:px-36 gap-8">
      <div className="flex flex-col mb-10">
        <h1 className="font-semibold text-center text-lg lg:text-5xl">
          Payment Options
        </h1>
        <p className="md:text-xl text-center mt-4 font-medium text-sm text-[#1A183E]">
          We offer flexible and transparent payment options to ensure that you
          have the freedom to choose the financial arrangement that best suits
          your unique circumstances and learning journey
        </p>
      </div>
      <section className="grid gap-10 items-center md:grid-cols-2 place-content-center">
        <div className="w-[347px] h-[336px] lg:w-[500px] lg:h-[470px] rounded-md shadow-lg text-left p-5 lg:py-7">
          <p className="text-center font-semibold text-lg lg:text-4xl mt-4 mb-6 text-[#1A183E]">
            One-Time Payment
          </p>
          <p className="lg:text-xl text-sm text-[#1A183E] text-left font-medium lg:leading-8 leading-5">
            With a one-time payment, you'll get <br /> immediate and complete
            access to the <br /> entire course content, including all <br />{" "}
            modules, lessons, and resources.
          </p>
          <div className="flex lg:gap-40 mt-10 gap-20 lg:mt-20 font-semibold lg:text-lg">
            <p className="text-base lg:text-lg">Payment Date:</p>
            <p>Amount:</p>
          </div>
          <div className="flex mt-4 gap-10 lg:gap-1">
            <p className="font-semibold text-sm">Immediately</p>
            <span className="hidden lg:block">
              ........................................................
            </span>
            <p className="font-semibold">
              <span className="line-through font-normal">&#8358;750,000</span>{" "}
              &#8358; 550,000
            </p>
          </div>
        </div>

        <div className="w-[347px] h-[336px] lg:w-[500px] lg:h-[470px] rounded-md shadow-lg text-left p-5 lg:py-7">
          <p className="text-center font-semibold text-lg lg:text-4xl lg:mt-4 lg:mb-6 mb-3 mt-2 text-[#1A183E]">
            Instalments
          </p>
          <p className="lg:text-xl text-sm text-[#1A183E] text-left font-medium lg:leading-8 leading-5">
            Paying in instalments makes the course <br /> more affordable by
            spreading the cost <br /> over 3 months, ensuring it fits your
            budget.
          </p>

          <div className="flex lg:gap-40 mt-10 gap-20 lg:mt-10 font-semibold lg:text-lg">
            <p>Payment Date:</p>
            <p>Amount:</p>
          </div>
          <div className="flex mt-4 gap-10 lg:gap-1">
            <p className="font-semibold text-sm mr-3"> On Starting </p>
            <span className="hidden lg:block">
              .....................................................
            </span>
            <p className="font-semibold">
              <span className="line-through font-normal">&#8358;300,000</span>
              &#8358; 220,000
            </p>
          </div>
          <div className="flex mt-4 gap-10 lg:gap-1">
            <p className="font-semibold text-sm">30 Days Later</p>
            <span className="hidden lg:block">
              .....................................................
            </span>
            <p className="font-semibold">
              <span className="line-through font-normal">&#8358;225,000</span>
              &#8358; 165,000
            </p>
          </div>
          <div className="flex mt-4 gap-10 lg:gap-1">
            <p className="font-semibold text-sm">
              Before <br /> Training Ends
            </p>
            <span className="hidden lg:block">
              ....................................................
            </span>
            <p className="font-semibold">
              <span className="line-through font-normal">&#8358;225,000</span>
              &#8358; 165,000
            </p>
          </div>
        </div>
      </section>
      <div className="grid place-content-center py-10">
        <button className="bg-[#1A183E] py-3 hover:opacity-90 px-6 text-white font-medium text-base shadow-md rounded-sm">
          Enrol Now
        </button>
      </div>
    </section>
  );
};

export default Payment;
