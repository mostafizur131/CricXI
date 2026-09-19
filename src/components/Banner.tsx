import bannerImage from "../assets/bg-shadow.png";
import bannerIcon from "../assets/banner-main.png";

const Banner = () => {
  return (
    <section className="bg-white px-4 py-6 sm:px-6 lg:px-8">
      <div
        className="relative mx-auto flex min-h-[360px] max-w-7xl items-center justify-center overflow-hidden rounded-2xl bg-[#111111] bg-cover bg-center bg-no-repeat sm:min-h-[400px] lg:min-h-[430px]"
        style={{
          backgroundImage: `url(${bannerImage})`,
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/35" />

        {/* Left blue glow */}
        <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-[#8DBFFF]/50 blur-[100px]" />

        {/* Right peach glow */}
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#FFD0B5]/50 blur-[100px]" />

        {/* Content */}
        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-5 py-12 text-center sm:px-8 lg:py-16">
          {/* Cricket Icon / Logo */}
          <div className="mb-5">
            <img
              src={bannerIcon}
              alt="Cricket"
              className="h-20 w-auto object-contain sm:h-24"
            />
          </div>

          {/* Heading */}
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>

          {/* Description */}
          <p className="mt-4 text-sm font-medium text-[#D1D1D1] sm:text-base">
            Beyond Boundaries Beyond Limits
          </p>

          {/* CTA */}
          <button
            type="button"
            className="mt-6 rounded-lg border-2 border-[#B8D900] bg-[#DFFF00] px-6 py-3 text-xs font-extrabold text-[#111111] shadow-[0_0_15px_rgba(223,255,0,0.45)] transition-all duration-200 hover:scale-105 hover:bg-[#E8FF4D]"
          >
            Claim Free Credit
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
