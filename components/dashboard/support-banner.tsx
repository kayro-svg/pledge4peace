import SupportImage from "../../public/pledge_impact.png";

export default function SupportBanner() {
  return (
    <div
      className="relative flex w-full h-[500px] flex-col rounded-2xl bg-cover px-[30px] py-[30px] md:px-[64px] md:py-[56px] justify-end"
      style={{
        backgroundImage: `url(${SupportImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute bg-gradient-to-r from-black/90 to-black/10 top-0 right-0 w-full h-full rounded-2xl"></div>
      <div className="w-full z-10 ">
        <h4 className="mb-[14px] max-w-full text-xl font-bold text-white md:w-[64%] md:text-3xl md:leading-[42px] lg:w-[46%] xl:w-[85%] 2xl:w-[75%] 3xl:w-[52%]">
          Impact of your support
        </h4>
        <p className="mb-[40px] max-w-full text-base font-medium text-white md:w-[64%] lg:w-[40%] xl:w-[72%] 2xl:w-[60%] 3xl:w-[45%]">
          Your support has helped us achieve great things.
        </p>

        <div className="mt-[36px] flex items-center justify-between gap-4 sm:justify-start 2xl:gap-10">
          <button className="text-black linear rounded-full bg-white px-4 py-2 text-center text-base font-medium transition duration-200 hover:!bg-white/80 active:!bg-white/70">
            View impact
          </button>
        </div>
      </div>
    </div>
  );
}
