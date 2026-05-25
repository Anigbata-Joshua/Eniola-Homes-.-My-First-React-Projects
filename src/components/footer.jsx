
function Footer() {
    return (
        <div>
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
export default Footer;