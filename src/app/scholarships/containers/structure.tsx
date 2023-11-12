import Image from "next/image";

import heroImage1 from "@/assets/strctImg.png";
import icon1 from "@/assets/ion_time-outline.svg";
import icon2 from "@/assets/hierarchy-structure 1.png";
import icon3 from "@/assets/tools 1.png";
import icon4 from "@/assets/octicon_graph-16.svg";
import icon5 from "@/assets/hand-shake 1.png";

const Structure = () => {
  return (
    <section className="px-6 py-16 flex flex-col items-center lg:px-36 gap-16 text-white relative">
      <Image
        src={heroImage1}
        alt="hero image"
        className="object-cover absolute inset-0 -z-10"
        fill
      />
      <div className="flex flex-col gap-3">
        <h1 className="text-xl lg:text-3xl text-center font-semibold">
          Program Structure
        </h1>
        <p className="text-base lg:text-xl text-center">
          Empowering futures; transforming the African tech ecosystem
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <h1 className="text-3xl text-center font-semibold">Learning Path</h1>
        <ul className="grid lg:grid-cols-3 gap-8">
          <li className="flex items-center gap-3 justify-between bg-[#1A183E] px-4 py-8 rounded-lg">
            <div className="">
              <h1 className="text-xl mb-4 font-semibold">Duration</h1>
              <p>- 6 months</p>
            </div>
            <div className="shrink-0">
              <Image src={icon1} alt="icon image" className="h-14 w-auto" />
            </div>
          </li>
          <li className="flex items-center gap-3 justify-between bg-[#1A183E] px-4 py-8 rounded-lg">
            <div className="">
              <h1 className="text-xl mb-4 font-semibold">Program Nature</h1>
              <p>- Hybrid <span className="text-xs">(Virtual and Physical)</span></p>
              <p>- Fully virtual</p>
            </div>
            <div className="shrink-0">
              <Image src={icon2} alt="icon image" className="h-14 w-auto" />
            </div>
          </li>
          <li className="flex items-center gap-3 justify-between bg-[#1A183E] px-4 py-8 rounded-lg">
            <div className="">
              <h1 className="text-xl mb-4 font-semibold">
                Hands-on Experience
              </h1>
              <p>
                - Including 3-month hands-on experience at the INGRYD innovation
                hub
              </p>
            </div>
            <div className="shrink-0">
              <Image src={icon3} alt="icon image" className="h-14 w-auto" />
            </div>
          </li>
        </ul>
      </div>

      <div className="flex flex-col gap-6 lg:w-2/3">
        <h1 className="text-3xl text-center font-semibold">
          Job Placement and Beyond
        </h1>
        <ul className="grid lg:grid-cols-2 gap-8">
          <li className="flex items-center justify-between bg-[#1A183E] px-4 py-8 rounded-lg">
            <div className="">
              <h1 className="text-xl mb-4 font-semibold">Career Focus</h1>
              <p>- Job placement</p>
              <p>- Job opportunities</p>
            </div>
            <div className="shrink-0">
              <Image src={icon4} alt="icon image" className="h-14 w-auto" />
            </div>
          </li>
          <li className="flex items-center justify-between bg-[#1A183E] px-4 py-8 rounded-lg">
            <div className="">
              <h1 className="text-xl mb-4 font-semibold">Ongoing Support</h1>
              <p>- Continuous career support</p>
            </div>
            <div className="shrink-0">
              <Image src={icon5} alt="icon image" className="h-14 w-auto" />
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Structure;
