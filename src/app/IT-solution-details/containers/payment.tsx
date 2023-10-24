import React from "react";

const Payment = () => {
  return (
    <section className="py-14 px-8">
      <h1 className="font-semibold text-center text-3xl lg:text-5xl">
        Payment Options
      </h1>
      <p className="text-xl text-center mt-4 mb-10 font-medium">
        We offer flexible and transparent payment options to ensure that you
        have the freedom to choose the financial arrangement that best suits
        your unique circumstances and learning journey
      </p>
      <section className="flex gap-10 items-center justify-center">
        <div className="w-[500px] h-[412px] rounded-md shadow-lg text-left p-5">
          <p className="text-center font font-semibold text-4xl mt-4 mb-6">
            One-Time Payment
          </p>
          <p className="text-xl text-left font-medium leading-8">
            With a one-time payment, you'll get <br /> immediate and complete
            access to the <br /> entire course content, including all <br />{" "}
            modules, lessons, and resources.
          </p>
          <div className="flex gap-40 mt-20 font-semibold text-lg">
            <p>Payment Date:</p>
            <p>Amount:</p>
          </div>
          <div className="flex mt-4">
            <p className="font-semibold">Immediately</p>
            <span>...............................................</span>
            <p className="font-semibold">
              <span className="line-through font-normal">&#8358;550,000</span>{" "}
              &#8358; 350,000
            </p>
          </div>
        </div>
        <div className="w-[500px] h-[412px] rounded-md shadow-lg text-left p-5">
          <p className="text-center font font-semibold text-4xl mt-4 mb-6">
            Instalments
          </p>
          <p className="text-xl text-left font-medium leading-8">
            Paying in instalments makes the course <br /> more affordable by
            spreading the cost <br /> over 3 months, ensuring it fits your
            budget.
          </p>
          <div className="flex gap-40 mt-10 mb-5 font-semibold text-lg">
            <p>Payment Date:</p>
            <p>Amount:</p>
          </div>
          <div className="flex mt-2">
            <p className="font-semibold">On Starting</p>
            <span>
              .........................................................
            </span>
            <p className="font-semibold">
              <span className="line-through font-normal">&#8358;220,000</span>{" "}
              &#8358; 140,000
            </p>
          </div>
          <div className="flex mt-2">
            <p className="font-semibold">30 Days Later</p>
            <span>.....................................................</span>
            <p className="font-semibold">
              <span className="line-through font-normal">&#8358;165,000</span>{" "}
              &#8358; 105,000
            </p>
          </div>
          <div className="flex mt-2">
            <p className="font-semibold">Before Training Ends</p>
            <span>...................................</span>
            <p className="font-semibold">
              <span className="line-through font-normal">&#8358;165,000</span>{" "}
              &#8358; 105,000
            </p>
          </div>
        </div>
      </section>
      <div className="grid place-content-center py-10">
        <button className="bg-[#1A183E] py-3 hover:opacity-90 px-6 text-white shadow-md rounded-sm">
          Enrol Now
        </button>
      </div>
    </section>
  );
};

export default Payment;
