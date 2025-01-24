import Image from 'next/image';
import Link from 'next/link';
import Logo from '../public/transactshield_logo_3.png';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-200 py-8">
            <div className="container mx-auto px-6 md:px-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
                    {/* Left Section */}
                    <div className="text-center md:text-left">
                        <Image
                            src={Logo}
                            alt="TransactShield Logo"
                            height={40}
                            width={40}
                        />
                        <h1 className="font-bold text-blue-900 text-lg mt-3">
                            TRANSACTSHIELD
                        </h1>
                        <p className="text-sm text-gray-600 mt-2">
                            Visionary Ghanaian-owned information technology company, dedicated to revolutionizing the global service industry.
                        </p>
                    </div>

                    {/* Center Section */}
                    <div>
                        <h2 className="text-pink-700 font-semibold mb-4">Contact Info</h2>
                        <ul className="space-y-2 text-gray-600 text-sm">
                            <li>• transact.shield@gmail.com</li>
                            <li>• +233 507 531170</li>
                            <li>• +233 545554665</li>
                            <li>• 9 Pawpaw Street North Legon, Accra, GH</li>
                        </ul>
                    </div>

                    {/* Right Section */}
                    <div>
                        <h2 className="text-pink-700 font-semibold mb-4">Navigation</h2>
                        <ul className="space-y-2 text-blue-900 text-sm font-medium">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/about">About</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                            <li><Link href="/products">Our Products</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-12 border-t border-dark pt-6 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-gray-500">
                        © TransactShield Africa | All rights reserved.
                    </p>
                    <ul className="flex space-x-4 mt-4 md:mt-0">
                        <li>
                            <Link href="https://linkedin.com" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-900 hover:text-blue-600 transition" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 20h-3v-10h3v10zm-1.5-11.23c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.23h-3v-5.359c0-1.335-.025-3.056-1.863-3.056-1.863 0-2.15 1.452-2.15 2.953v5.462h-3v-10h2.881v1.367h.04c.401-.761 1.38-1.562 2.841-1.562 3.039 0 3.601 2.002 3.601 4.606v5.589z"/>
                                </svg>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://facebook.com" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-900 hover:text-blue-600 transition" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22.676 0h-21.352c-.732 0-1.324.593-1.324 1.324v21.352c0 .732.593 1.324 1.324 1.324h11.494v-9.291h-3.111v-3.622h3.111v-2.672c0-3.1 1.892-4.788 4.654-4.788 1.324 0 2.462.099 2.792.143v3.239l-1.917.001c-1.504 0-1.794.714-1.794 1.763v2.314h3.587l-.467 3.622h-3.12v9.291h6.118c.731 0 1.324-.592 1.324-1.324v-21.352c0-.731-.593-1.324-1.324-1.324z"/>
                                </svg>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://twitter.com" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-900 hover:text-blue-600 transition" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 4.557c-.883.392-1.833.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.565-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.717 0-4.918 2.201-4.918 4.917 0 .385.044.761.127 1.122-4.083-.205-7.702-2.159-10.126-5.134-.423.726-.666 1.57-.666 2.473 0 1.707.87 3.214 2.188 4.096-.807-.026-1.566-.247-2.229-.617v.062c0 2.386 1.697 4.374 3.946 4.827-.413.112-.849.171-1.296.171-.317 0-.626-.03-.928-.087.626 1.956 2.444 3.379 4.6 3.419-1.683 1.319-3.809 2.105-6.115 2.105-.398 0-.79-.023-1.176-.068 2.179 1.397 4.768 2.211 7.548 2.211 9.057 0 14.007-7.504 14.007-14.007 0-.213-.005-.426-.014-.637.962-.695 1.796-1.562 2.457-2.549z"/>
                                </svg>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
