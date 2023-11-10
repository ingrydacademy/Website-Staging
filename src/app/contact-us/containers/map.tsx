import Image from "next/image";
import map from "@/assets/contact-us-map.png";

const Map = () => {
  return (
    <section className="flex shrink-0 grow h-[447px] lg:h-[510px] w-[390px] lg:w-full max-w-full relative overflow-x-hidden">
      <Image
        src={map}
        alt="map Image"
        className="object-cover absolute inset-0 z-10"
        fill
      />
    </section>
  );
};

export default Map;
