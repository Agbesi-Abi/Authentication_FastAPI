"use client";
import Image from "next/image";
import eclipse from "@/public/Ellipse.png";
import founder from "@/public/Ellipse 24.png";
import founder2 from "@/public/Ellipse 24 (1).png";
import advisor from "@/public/Advisory_team_members.png";
import advisor2 from "@/public/Advisory_team_members (1).png";
import advisor3 from "@/public/Advisory_team_members (2).png";
import advisor4 from "@/public/Advisory_team_members (3).png";

const AboutWrapper = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="h-screen flex items-center justify-center relative bg-dark group transition-colors duration-500 hover:bg-blue-700">
        {/* Mask Overlay */}
        <div className="absolute inset-0 bg-dark group-hover:bg-foreground transition-colors duration-500">
          <img
            src="/Mask_group.png"
            alt="mask"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Logo */}
        <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-30 transition-opacity duration-500 z-0">
          <Image
            src="/transactshield_logo_2.png"
            alt="TransactShield Logo"
            width={300}
            height={300}
            className="transform transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Text Content */}
        <div className="relative z-10 text-center px-4">
          <h1 className="font-pathway text-5xl md:text-5xl lg:text-7xl font-extrabold mt-8 text-transparent bg-clip-text bg-gradient-to-r from-white via-white  to-pink">
            ABOUT US
          </h1>
          <h2
            className="font-pathway text-5xl md:text-5xl lg:text-7xl font-extrabold mt-8 bg-clip-text text-white "
            style={{
              fontSize: "20px",
              fontWeight: 400,
              lineHeight: "110px",
            }}
          >
            FIND OUT OUR MOTIVE.
          </h2>
        </div>
      </div>

      {/* About Section */}
      <section className="container mx-auto px-6 md:px-16 py-12">
        <h1 className="font-pathway text-background font-bold text-center text-4xl mb-4">
          About TransactShield
        </h1>
        <p className="font-pathway text-gray-600 text-center leading-relaxed">
          TransactShield Africa Limited is a forward-thinking technology company dedicated to revolutionizing financial and service delivery across Africa. Founded on the principles of innovation, accessibility, and inclusivity, we are committed to delivering transformative solutions that address the unique challenges of the African market.
        </p>
        <p className="font-pathway text-gray-600 text-center leading-relaxed mt-4">
          Our flagship product, Clickinsure, is Ghana’s first 100% digital insurance brokerage, simplifying insurance through online policy purchases, real-time claims management, and AI-powered advisory services. We aim to serve underserved populations, leveraging local sub-agents to ensure inclusivity for Africa’s uninsured.
        </p>
        <p className="font-pathway text-gray-600 text-center leading-relaxed mt-4">
          With a bold vision to become a unicorn by 2035, TransactShield focuses on strategic partnerships, innovative product development, and market expansion, creating a sustainable impact across the continent.
        </p>
      </section>

      {/* Founders Section */}
      <section className="container mx-auto px-6 md:px-16 py-12">
        <h2 className="text-2xl font-bold text-center mb-6">Meet The Founders</h2>
        <div className="flex flex-wrap justify-center items-center gap-10">
          <div className="text-center">
            <Image
              src={founder}
              alt="Samuel Kyei Koomson"
              width={200}
              height={200}
              className="rounded-full"
            />
            <h3 className="font-semibold mt-2">Samuel Kyei Koomson</h3>
            <p className="text-gray-600">CEO & Co-Founder</p>
          </div>
          <div className="text-center">
            <Image
              src={founder2}
              alt="Yaw Offeh-Dansoh"
              width={200}
              height={200}
              className="rounded-full"
            />
            <h3 className="font-semibold mt-2">Yaw Offeh-Dansoh</h3>
            <p className="text-gray-600">CTO & Co-Founder</p>
          </div>
        </div>
      </section>

      {/* Advisory Board Section */}
      <section className="container mx-auto px-6 md:px-16 py-6 bg-gradient-to-r from-blue-800 via-purple-800 to-pink text-white mt-12">
        <h2 className="text-2xl font-bold text-center mb-6">Our Advisory Board</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="">
            <Image src={advisor} alt="Kingsford Arthur" width={200} height={200} />
            <h3 className="font-semibold mt-4">Kingsford Arthur</h3>
            <p className="text-gray-400">Financial Advisor</p>
          </div>
          <div className="">
            <Image src={advisor2} alt="Albert Frimpong" width={200} height={200} />
            <h3 className="font-semibold mt-4">Albert Frimpong</h3>
            <p className="text-gray-400">Technical Software Advisor</p>
          </div>
          <div className="">
            <Image src={advisor3} alt="Kofi Adinkrah Jnr." width={200} height={200} />
            <h3 className="font-semibold mt-4">Kofi Adinkrah Jnr.</h3>
            <p className="text-gray-400">Legal Advisor</p>
          </div>
          <div className="">
            <Image src={advisor4} alt="Prof. Isaac Osei-Akoto" width={200} height={200} />
            <h3 className="font-semibold mt-4">Prof. Isaac Osei-Akoto</h3>
            <p className="text-gray-400">Economic Advisor</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutWrapper;
