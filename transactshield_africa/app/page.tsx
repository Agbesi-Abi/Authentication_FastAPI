"use client"
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';



const HomePage = () => (
  <div>
    <Hero />
    <ServicesSection />

    <ITSolutionsSection />


    <LatestProductSection />

  </div>
);


const Hero = () => (
  <div className="h-screen flex items-center justify-center relative bg-dark group transition-colors duration-500 hover:bg-blue-700">
    {/* Mask Overlay */}
    <div className="absolute inset-0 bg-dark group-hover:bg-foreground transition-colors duration-500">
      <img
        src="/Mask_group.png"
        alt="mask"
        className="w-full h-full object-cover"
      />
    </div>
    <div className="relative z-10 text-center px-4 -mt-40">
      <h1 className="font-pathway mt-6 text-3xl md:text-4xl lg:text-5xl font-bold text-white transition-colors duration-300">
        Welcome to
      </h1>
      <h2 className="font-pathway text-5xl md:text-5xl lg:text-7xl font-extrabold mt-8 text-transparent bg-clip-text bg-gradient-to-r from-white via-white  to-pink  ">
        TRANSACTSHIELD
      </h2>
      <p className="font-pathway tracking-widest text-base md:text-lg lg:text-xl text-white transition-colors duration-300 mt-4">
        SAFE TRANSACTIONS, STRONG CONNECTIONS.
      </p>
    </div>
  </div>
);


const services = [
  {
    icon: '/icon-1.svg',
    title: 'Cargo Transport',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    className: "flex-1",
    image: '/cards.png',
  },
  {
    icon: '/icon-2.svg',
    title: 'Insurance',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    className: "w-92 bg-blue-800",
    image: '/cards.png',
  },
  {
    icon: '/icon-3.svg',
    title: 'Construction',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    className: "w-92 bg-blue-800",
    image: '/cards.png',
  },
  {
    icon: '/icon-4.svg',
    title: 'Artisanal solutions',
    description: 'Carpentry, Plumbing, Electrical works, and many more...',
    className: "flex-1",
    image: '/cards.png',
  },
];

const ServicesSection = () => (
  <section className="py-10 px-4 sm:px-6 bg-gray-100">
    <div className="relative">
      <div className="relative z-10 text-center">
        <h1 className="font-pathway text-2xl md:text-4xl font-medium leading-snug text-blue-900">
          A company dedicated to revolutionizing the global service industry
        </h1>
        <p className=" font-pathway text-pink mt-4 text-sm md:text-base">
          We are committed to delivering outstanding services, professional training, and cutting-edge information technologies to support our customers' growth while offering shareholders robust and consistent financial performance.
        </p>
        <button className="font-pathway mt-4 px-6 py-2 text-foreground border border-foreground rounded-full hover:bg-gradient-to-r from-blue-800 via-purple-700 to-pink hover:text-white transition">
          Learn more &rarr;
        </button>
      </div>
      <img
        src={"/Vector 2.png"}
        alt="Vector"
        className="   md:block w-full h-auto -mt-36"
        style={{ borderRadius: '46px 0px 0px 0px', opacity: 0.8 }}
      />
    </div>

    <div className='-mt-48 space-y-7 space-x-10'>
      <div className="flex flex-row items-center gap-7">
        {services?.slice(0, 2).map((service, index) => (
          <div
            key={index}
            className={`${service.className} relative h-56 overflow-hidden  bg-dark shadow-lg rounded-xl text-start flex flex-row  hover:shadow-xl transition text-white`}
          >
            <div className="w-full">
              <img src={service.icon} alt={service.title} width={48} height={48} className="mb-4" />
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-description">{service.description}</p>
              <a
                href="#"
                className="service-card-link"
              >
                Start with us &rarr;
              </a>

            </div>
            <div className="absolute right-0 top-5 w-60 h-52">
              <img src={service.image} alt={service.title} className="w-full h-full" />
            </div>
          </div>
        ))}
      </div>



      <div className='-mt-48 space-y-7 space-x-10'>
      <div className="flex flex-row items-center gap-7">
        {services?.slice(2, 4).map((service, index) => (
          <div
            key={index}
            className={`${service.className} relative h-56 overflow-hidden  bg-dark shadow-lg rounded-xl text-start flex flex-row  hover:shadow-xl transition text-white`}
          >
            <div className="w-full">
              <img src={service.icon} alt={service.title} width={48} height={48} className="mb-4" />
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-description">{service.description}</p>
              <a
                href="#"
                className="service-card-link"
              >
                Start with us &rarr;
              </a>

            </div>
            <div className="absolute right-0 top-5 w-60 h-52">
              <img src={service.image} alt={service.title} className="w-full h-full" />
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  </section>
);


const ITSolutionsSection = () => (
  <section className="py-10 px-4 sm:px-6 bg-gray-100 ">
    <div className="relative">
      <div className="relative z-10 text-end">
        <h1 className="text-2xl md:text-4xl font-medium leading-snug text-blue-900">
          We’ve got you covered with IT solutions.
        </h1>
        <p className="text-pink mt-4 text-sm md:text-base">
          We’re here to provide you with IT solutions to assist in developing your business and personal endeavors.
        </p>
        <button className="mt-4 mr-16 px-6 py-2 text-foreground border border-foreground rounded-full hover:bg-gradient-to-r from-blue-800 via-purple-700 to-pink hover:text-white transition">
          Learn more &rarr;
        </button>
      </div>
      <img
        src={"/Vector 3 (1).png"}
        alt="Vector"
        className="hidden md:block w-full h-full "
      />
    </div>
    <SlantedSliderSection />
    <EmptySliderSection />
  </section>
);

const settings = {
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};


const SlantedSliderSection = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <section className="relative  slanted-slider">

      <div className="container ">
        <Slider {...settings}>
          {[...Array(10)].map((_, index) => (
            <div
              key={index}
              className=" flex flex-col items-center  text-center  "
            >
              <img src={"/transactshield_logo_3.png"} alt="Company Logo" width={60} height={60} />
              <span className="font-bold text-xl  text-white">Company {index + 1}</span>

            </div>
          ))}
        </Slider>
      </div>

    </section>
  );
};


const EmptySliderSection = () => (
  <section className="empty-slider">
    <div className="empty-slider-content"></div>
  </section>
);








const LatestProductSection = () => (
  <Link href="https://www.clickinsures.com/" className="block">
    <section className="">

      <div className="relative mt-36 mx-16 rounded-lg group">

        <div className="group-hover:bg-gradient-to-r group-hover:from-dark group-hover:via-purple-500 group-hover:to-pink">
          <img
            src={"/insure.svg"}
            alt="Insurance"
            className="rounded-lg transition-transform transform "
          />
        </div>


        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 text-gray-600 g font-semibold text-lg transition-opacity ">
          Click to visit
        </div>
      </div>
    </section>
  </Link>



);











export default HomePage;
