'use client';
import Image from "next/image";
import contact from "@/public/elements.png";
import send from "@/public/fa_send.svg";
import Link from 'next/link';

interface ContactCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
}

const ContactCard: React.FC<ContactCardProps> = ({ title, description, icon }) => {
    return (
        <div className="w-full max-w-[350px] h-[300px] bg-dark rounded-[30px] p-6 flex flex-col items-center justify-center relative group shadow-lg overflow-hidden hover:bg-blue-700 transition-colors duration-500">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-4">
                {icon}
            </div>
            <h2 className="text-white text-xl font-semibold mb-2">{title}</h2>
            <p className="text-white text-lg text-center">{description}</p>
        </div>
    );
};

const ContactWrapper = () => {
    return (
        <div>
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
                <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0">
                    <Image
                        src="/transactshield_logo_2.png"
                        alt="TransactShield Logo"
                        width={300}
                        height={300}
                        className="transform transition-transform duration-500 group-hover:scale-110 opacity-20"
                    />
                </div>

                {/* Text Content */}
                <div className="relative z-10 text-center">
                    <h1 className="font-pathway text-3xl md:text-5xl font-bold text-white mb-4">
                        CONTACT US
                    </h1>
                    <p className="font-pathway text-lg md:text-2xl text-white">
                        GET IN TOUCH WITH TRANSACTSHIELD.
                    </p>
                </div>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 py-10">
                <ContactCard
                    title="Call Us"
                    description="+233507 531170"
                    icon={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-8 h-8 text-blue-700"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 5.25C2.25 4.007 3.257 3 4.5 3h15c1.243 0 2.25 1.007 2.25 2.25v15c0 1.243-1.007 2.25-2.25 2.25h-15c-1.243 0-2.25-1.007-2.25-2.25v-15zM6.75 8.25v1.5m10.5-1.5v1.5M9 11.25h6m-3 6a3 3 0 100-6 3 3 0 000 6z"
                            />
                        </svg>
                    }
                />
                <ContactCard
                    title="Email Us"
                    description="support@transactshield.com"
                    icon={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-8 h-8 text-blue-700"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.375 6.75l7.875 5.25 7.875-5.25M3.375 6.75l7.875 8.25M3.375 6.75v10.5h17.25V6.75m-17.25 10.5l7.875-8.25"
                            />
                        </svg>
                    }
                />
                <ContactCard
                    title="Visit Us"
                    description="123 Shield Street, Accra"
                    icon={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-8 h-8 text-blue-700"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 21.75c4.556 0 8.25-3.694 8.25-8.25S16.556 5.25 12 5.25 3.75 8.944 3.75 13.5 7.444 21.75 12 21.75zm0 0v-7.5"
                            />
                        </svg>
                    }
                />
            </div>
            <div>
                <h2 className="text-background flex text-center items-start justify-center">Or you can fill in the contact form below</h2>
            </div>

            {/* Contact Form Section */}
            <section className="py-12 px-4  mt-10">
                <div className="max-w-screen-lg mx-auto grid md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-6">
                        <Image
                            src={contact}
                            alt="Contact Us"
                            className="w-full max-w-xs mx-auto object-contain"
                        />
                    </div>
                    <div>
                        <h1 className="font-pathway text-2xl font-bold text-center mb-6 text-blue-700">
                            Contact Form
                        </h1>
                        <h2 className="font-pathway text-pink mb-6 text-center">
                            Reach out to us via the form below and our team will get back to you as soon as possible.
                        </h2>
                        <form className="space-y-4">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full mt-1 p-3 border rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full mt-1 p-3 border rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    className="w-full mt-1 p-3 border rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Type your message here"
                                    required
                                ></textarea>
                            </div>
                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
                                >
                                    Submit <Image src={send} alt="Send Icon" width={20} height={20} />
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
                <div>
                    <h2 className="flex justify-center items-center text-center mt-6  text-background">You can also reach out to us on social media via the following platforms:</h2>
                    <ul className="flex space-x-4 mt-6 md:mt-0 items-center  justify-center">
                        <li>
                            <Link href="https://linkedin.com" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-900 hover:text-blue-600 transition" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 20h-3v-10h3v10zm-1.5-11.23c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.23h-3v-5.359c0-1.335-.025-3.056-1.863-3.056-1.863 0-2.15 1.452-2.15 2.953v5.462h-3v-10h2.881v1.367h.04c.401-.761 1.38-1.562 2.841-1.562 3.039 0 3.601 2.002 3.601 4.606v5.589z" />
                                </svg>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://facebook.com" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-900 hover:text-blue-600 transition" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22.676 0h-21.352c-.732 0-1.324.593-1.324 1.324v21.352c0 .732.593 1.324 1.324 1.324h11.494v-9.291h-3.111v-3.622h3.111v-2.672c0-3.1 1.892-4.788 4.654-4.788 1.324 0 2.462.099 2.792.143v3.239l-1.917.001c-1.504 0-1.794.714-1.794 1.763v2.314h3.587l-.467 3.622h-3.12v9.291h6.118c.731 0 1.324-.592 1.324-1.324v-21.352c0-.731-.593-1.324-1.324-1.324z" />
                                </svg>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://twitter.com" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-900 hover:text-blue-600 transition" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 4.557c-.883.392-1.833.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.565-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.717 0-4.918 2.201-4.918 4.917 0 .385.044.761.127 1.122-4.083-.205-7.702-2.159-10.126-5.134-.423.726-.666 1.57-.666 2.473 0 1.707.87 3.214 2.188 4.096-.807-.026-1.566-.247-2.229-.617v.062c0 2.386 1.697 4.374 3.946 4.827-.413.112-.849.171-1.296.171-.317 0-.626-.03-.928-.087.626 1.956 2.444 3.379 4.6 3.419-1.683 1.319-3.809 2.105-6.115 2.105-.398 0-.79-.023-1.176-.068 2.179 1.397 4.768 2.211 7.548 2.211 9.057 0 14.007-7.504 14.007-14.007 0-.213-.005-.426-.014-.637.962-.695 1.796-1.562 2.457-2.549z" />
                                </svg>
                            </Link>
                        </li>
                    </ul>

                </div>
            </section>
        </div>
    )
}

export default ContactWrapper
