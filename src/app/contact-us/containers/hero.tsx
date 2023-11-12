import NavBar from "@/components/NavBar";

const Hero = () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  return (
    <section className="flex flex-col shrink-0 grow  lg:h-[570px] lg:min-h-screen relative bg-[#1A183E] overflow-x-hidden">
      <NavBar />
      <div className="flex flex-col shrink-0 grow relative px-6 justify-center items-center py-28">
        <div className="w-full h-full shrink-0 grow text-white lg:px-24 justify-center flex flex-col gap-12 text-center">
          <h1 className="text-2xl lg:text-6xl font-semibold">Contact Us</h1>
          <p className="text-base lg:text-2xl ">
            Have questions or ready to get started with{" "}
            <span className="font-semibold">Ingryd</span>? We're here to help.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
