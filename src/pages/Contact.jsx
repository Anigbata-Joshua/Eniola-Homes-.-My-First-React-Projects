import Navigation from "../components/Navigation";
import Footer from "../components/footer";

function Contact() {
    return (
        <div>
            <Navigation />
            <section className="bg-[#0F172A] text-white py-12 md:py-20 px-4 sm:px-6">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16">

                    <div className="w-full lg:w-2/5">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
                        <p className="text-gray-400 text-base md:text-lg mb-8 md:mb-10">
                            Have questions about a property or want to schedule a viewing? We're here to help.
                        </p>

                        <div className="space-y-6 md:space-y-8">
                            <div className="flex items-start sm:items-center gap-4">
                                <div className="w-12 h-12 bg-green-900/30 flex items-center justify-center rounded-lg text-green-500 shrink-0">
                                    <span className="text-xl">📍</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">Visit Our Office</h4>
                                    <p className="text-gray-400 text-sm">100 Park Avenue, Wuse 2 <br /> Abuja , Nigeria</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-green-900/30 flex items-center justify-center rounded-lg text-green-500 shrink-0">
                                    <span className="text-xl">📞</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">Call Us</h4>
                                    <p className="text-gray-400 text-sm">(555) 234-5678</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-green-900/30 flex items-center justify-center rounded-lg text-green-500 shrink-0">
                                    <span className="text-xl">✉️</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">Email Us</h4>
                                    <p className="text-gray-400 text-sm">info@prestigehomes.com</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="w-full lg:flex-1 bg-[#1E293B] shadow-2xl rounded-2xl p-4 sm:p-8">
                        <form className="w-full mx-auto">

                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-semibold text-gray-300 mt-3">First Name</label>
                                    <input type="text" placeholder="John" className="w-full bg-[#374151] border-none rounded-xl p-4 text-white focus:ring-2 focus:ring-gray-500 outline-none" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-semibold text-gray-300 mt-3">Last Name</label>
                                    <input type="text" placeholder="Andrew" className="w-full bg-[#374151] border-none rounded-xl p-4 text-white focus:ring-2 focus:ring-gray-500 outline-none" />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-semibold text-gray-300 mt-3">Email</label>
                                    <input type="email" placeholder="john@example.com" className="w-full bg-[#374151] border-none rounded-xl p-4 text-white focus:ring-2 focus:ring-gray-500 outline-none" />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-semibold text-gray-300 mt-3">Phone</label>
                                    <input type="text" placeholder="(555) 123-4567" className="w-full bg-[#374151] border-none rounded-xl p-4 text-white focus:ring-2 focus:ring-gray-500 outline-none" />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-semibold text-gray-300 mt-3">I'm interested in</label>
                                    <select className="w-full bg-[#374151] border-none rounded-xl p-4 text-white focus:ring-2 focus:ring-gray-500 outline-none appearance-none">
                                        <option>Select an option</option>
                                        <option>Buy a home</option>
                                        <option>Sell a home</option>
                                    </select>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-semibold text-gray-300 mt-3">Message</label>
                                    <textarea rows="4" placeholder="Tell us about what you're looking for..." className="w-full bg-[#374151] border-none rounded-xl p-4 text-white focus:ring-2 focus:ring-gray-500 outline-none resize-none"></textarea>
                                </div>
                            </div>

                            <div>
                                <button className="w-full bg-[#22C55E] hover:bg-green-600 text-white font-bold py-4 rounded-xl transition-all shadow-lg mt-6 cursor-pointer">
                                    Send Message
                                </button>
                            </div>

                        </form>
                    </div>

                </div>
            </section>
            <Footer />

        </div>
    )
}
export default Contact;