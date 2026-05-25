// import Navigation from "../components/Navigation";
import heroImg from "../assets/images/img.avif"
import supImg from "../assets/images/sup1.webp"
import supImg2 from "../assets/images/sup2.webp"
import supImg3 from "../assets/images/sup3.webp"
import logo from "../assets/images/logo.jpg"
import smallImg from "../assets/images/img.webp"
// import Card from "../components/Card";
import img1 from "../assets/images/sup1.webp"
function Home() {
   return (
      <div>
         {/* <Navigation /> */}
         <header className="hero_section">
            <div className="hero"> </div>

            <div className="hero_text">
               <h2>
                  More than just a house, we find the place where your story begins.
                  Fall in love with a home that truly reflects your soul.
               </h2>

            </div>
            <div className="link_btn">
               <div className="get_started">
                  <button>Find Your Dream Home </button>
               </div>
               <div className="learn_more">
                  <button>Start Your Journey </button>
               </div>
            </div>
         </header>

         {/* Who We Are Section */}
         <section className="section_container alternate">
            <div className="section_header"><h2>About Us</h2></div>
            <div className="section_content">
               <div className="image_div">
                  <img src={smallImg} alt="Modern office" />
               </div>
               <div className="text_div">
                  <h3>Who we are</h3>
                  <p>
                     Founded on the belief that everyone deserves a sanctuary, Eniola Homes
                     blends local expertise with a heartfelt commitment to our clients.
                     We don't just close deals; we open doors to new chapters of life.
                  </p>
                  <div className="link_btn">
                     <div className="get_started">
                        <button>Learn more</button>
                     </div>

                  </div>
               </div>
            </div>
         </section>

         {/* Our Mission Section */}
         <section className="section_container">
            <div className="section_content">
               <div className="text_div">
                  <h3>Our Mission</h3>
                  <p>
                     To provide a seamless, transparent, and deeply personal real estate
                     experience. Whether you are buying your first home or selling a
                     legacy, we navigate every step with integrity and passion.
                  </p>
               </div>
               <div className="image_div">
                  <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750" alt="Luxury Home" />
               </div>
            </div>
         </section>

         {/* Partners Section */}
         <section className="partners_section py-16">
            <div className="section_header">
               <h4 className="text-4xl text-gray-800 mb-8 ">Our trusted partners</h4></div>
            <div className="partners_grid">
               <div><img src={supImg} alt="Partner 1" /></div>
               <div><img src={supImg2} alt="Partner 2" /></div>
               <div><img src={supImg3} alt="Partner 3" /></div>
               <div><img src={logo} alt="Partner 4" /></div>
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
   )
}
export default Home;