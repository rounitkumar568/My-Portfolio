import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";// Adjust import path as needed
import PixelCanvas from "@/Components/UI/PixelCanvas";
import Rocket from "@/Components/UI/Rocket";

export const Contact = () => {
    return (
        <section
            id="contact"
            className="min-h-screen bg-black text-white py-20 px-6 md:px-20"
        >
            <div className="max-w-7xl mx-auto">
                {/* Title Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="text-5xl md:text-5xl font-extrabold mb-4">CONTACT</h2>
                    <p className="text-xl md:text-2xl text-gray-400">
                        Let's build something amazing together
                    </p>
                </motion.div>

                {/* Content - Split Layout */}
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    {/* Left Side - Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2"
                    >
                        <form className="space-y-6">
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-gray-300 mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"

                                        className="w-full px-4 py-3 bg-gray-900 border-2 border-gray-800 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-gray-300 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"

                                        className="w-full px-4 py-3 bg-gray-900 border-2 border-gray-800 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors"
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-gray-300 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        rows={5}

                                        className="w-full px-4 py-3 bg-gray-900 border-2 border-gray-800 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors"
                                        placeholder="Your message..."
                                    ></textarea>
                                </div>
                            </div>
                            <Rocket />
                        </form>
                    </motion.div>

                    {/* Right Side - Pixel Canvas Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2 flex justify-center"
                    >
                        <div className="relative w-full max-w-md h-[400px]">
                            {/* Pixel Canvas Card (unchanged from your demo) */}
                            <div className="group relative w-full h-full overflow-hidden border-2 border-gray-800 rounded-[32px] transition-colors duration-200 hover:border-indigo-500">
                                <PixelCanvas
                                    gap={10}
                                    speed={25}
                                    colors={["#e0f2fe", "#7dd3fc", "#0ea5e9"]}
                                    variant="icon"
                                />
                                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-8 text-center">
                                    <FiMail className="w-20 h-20 text-gray-300 mb-6 transition-all duration-300 ease-out group-hover:scale-110 group-hover:text-indigo-500" />
                                    <h3 className="text-2xl font-bold mb-2">Get In Touch</h3>
                                    <p className="text-gray-400 mb-6">
                                        Prefer direct communication? Reach out through these
                                        channels:
                                    </p>
                                    <div className="flex gap-4">
                                        <a
                                            href="mailto:satyamupadhyay0495@gmail.com"
                                            className="p-3 bg-gray-900 hover:bg-gray-800 rounded-full border-2 border-gray-800 hover:border-indigo-500 transition-all"
                                        >
                                            <FiMail className="text-xl" />
                                        </a>
                                        <a
                                            href="https://github.com/Satyam00915"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 bg-gray-900 hover:bg-gray-800 rounded-full border-2 border-gray-800 hover:border-indigo-500 transition-all"
                                        >
                                            <FiGithub className="text-xl" />
                                        </a>
                                        <a
                                            href="https://linkedin.com/in/satyam0915"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 bg-gray-900 hover:bg-gray-800 rounded-full border-2 border-gray-800 hover:border-indigo-500 transition-all"
                                        >
                                            <FiLinkedin className="text-xl" />
                                        </a>
                                        <a
                                            href="https://x.com/SatyamUpad2970"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 bg-gray-900 hover:bg-gray-800 rounded-full border-2 border-gray-800 hover:border-indigo-500 transition-all"
                                        >
                                            <FiTwitter className="text-xl" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
