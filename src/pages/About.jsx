import Navigation from "../components/Navigation";
import team1 from "../assets/images/team.jpg"
import team2 from "../assets/images/team2.jpg"
import team3 from "../assets/images/team3.jpg"
import Card from "../components/Card";



function About() {
return (
    <div>
        <Navigation />
        <header className="about_section">
            <div className="hero"></div>
            <div className="about_text">
                <p>
                    Expertise You Can <span>Trust</span>.<br />
                    <span>Passion</span> You Can Feel
                </p>
            </div>
        </header>

        {/* Ratings Section: Modified vanilla layout */}
        <section className="rating_section">
            <div className="rating">
                <div>
                    <h3>$2B+</h3>
                    <p>Total Sales Volume</p>
                </div>
                <div>
                    <h3>500+</h3>
                    <p>Properties Sold</p>
                </div>
                <div>
                    <h3>15+</h3>
                    <p>Years Experience</p>
                </div>
                <div>
                    <h3>98%</h3>
                    <p>Client Satisfaction</p>
                </div>
            </div>
        </section>

        <section className="values-section">
            <div className="container">
                <div className="header">
                    <h2>Our Values</h2>
                    <p>The principles that guide everything we do.</p>
                </div>

                <div className="grid">
                    <div className="card">
                        <h3>Integrity</h3>
                        <p>We operate with complete transparency and honesty in every transaction, building trust through our actions.</p>
                    </div>
                    <div className="card">
                        <h3>Excellence</h3>
                        <p>We strive for excellence in every aspect of our service, from property presentation to negotiation.</p>
                    </div>
                    <div className="card">
                        <h3>Client Focus</h3>
                        <p>Your goals are our priority. We listen, understand, and work tirelessly to exceed your expectations.</p>
                    </div>
                    <div className="card">
                        <h3>Market Knowledge</h3>
                        <p>Deep expertise in local markets allows us to provide informed guidance and identify opportunities.</p>
                    </div>
                    <div className="card">
                        <h3>Relationships</h3>
                        <p>We build lasting relationships based on mutual respect, often serving families for generations.</p>
                    </div>
                    <div className="card">
                        <h3>Innovation</h3>
                        <p>We embrace new technologies and marketing strategies to give our clients a competitive edge.</p>
                    </div>
                </div>
            </div>
        </section>


        <section className="our-team py-12 md:py-16 text-white bg-[#111827] px-4 sm:px-6">
            <div className="team_header text-center mb-8 md:mb-12">
                <h4 className="text-3xl md:text-4xl font-bold mb-3">Leadership Team</h4>
                <p className="text-gray-400 text-sm md:text-base">Our experienced team is dedicated to helping you find your perfect property.</p>
            </div>
            <Card />

            <div className="text-center mt-10">
                <a href="#" className="text-green-400 hover:underline">
                    View All Agents →
                </a>
            </div>
        </section>

        <section className="py-12 md:py-16 text-white bg-[#15803D] px-4 sm:px-6">
            <div className="text-center mx-auto max-w-4xl">
                <div>
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-3 font-serif leading-tight">
                        Ready to Find Your <br className="hidden sm:inline" />Dream Home?
                    </h2>
                    <p className="text-sm sm:text-base md:text-[18px] text-gray-200 mt-4 max-w-xl mx-auto">
                        Our team of experts is ready to help you navigate the market and find the perfect property.
                    </p>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 max-w-xs sm:max-w-none mx-auto">
                    <button className="bg-white py-3 text-green-900 px-6 rounded-xl font-medium cursor-pointer transition hover:bg-gray-100">
                        Browse Properties
                    </button>
                    <button className="bg-transparent py-3 border border-white text-white px-6 rounded-xl cursor-pointer transition hover:bg-white/10">
                        Contact us
                    </button>
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mt-10 text-sm sm:text-base border-t border-white/20 pt-6">
                    <h3 className="font-semibold flex items-center justify-center gap-2">
                        <span>📞</span> (555) 234-5678
                    </h3>
                    <h3 className="font-semibold flex items-center justify-center gap-2">
                        <span>✉️</span> info@prestigehomes.com
                    </h3>
                </div>
            </div>
        </section>

        <footer className="footer_container">
            <div className="footer_content">
                <div className="footer_brand">
                    <div className="logo">
                        <h1><span>E</span>NIOLA <span>H</span>OMES</h1>
                    </div>
                    <p>
                        Helping you find the place where your story begins.
                        Expert guidance for your journey home.
                    </p>
                </div>

                <div className="footer_links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#">Our Listings</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Market Trends</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>

                <div className="footer_contact">
                    <h3>Stay Updated</h3>
                    <p>Get the latest premium listings in your inbox.</p>
                    <div className="form">
                        <input type="email" placeholder="Your Email" />
                        <button>Join</button>
                    </div>
                </div>
            </div>

            <div className="footer_bottom">
                <p>&copy; 2026 Eniola Homes. All Rights Reserved.</p>
            </div>
        </footer>
    </div>
);
}
export default About;