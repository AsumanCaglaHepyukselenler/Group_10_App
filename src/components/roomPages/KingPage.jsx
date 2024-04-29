import "./roomPage.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const KingPage = () => {
    return (
        <div>
            <div className="aboutContainer">
                <div className="aboutWrapper">
                    <h1 className="aboutTitle">ReservEase Hotel</h1>
                    <div className="aboutAddress">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>Yalıkavak Dirmil Mah.</span>
                    </div>
                    <span className="aboutDistance">Excellent Location - 500m from center</span>
                    <span className="aboutPriceHighlight">
                        Book a stay over $114 at this property and get a free airport taxi!
                    </span>
                    <div className="aboutImages">
                        <div className="aboutImgWrapper">
                            <img src="hotel_photo2/king/king_suit.png" alt="" className="aboutImg" />
                            <img src="hotel_photo2/king/king_suit2.png" alt="" className="aboutImg" />
                        </div>
                        
                    </div>
                    <div className="aboutDetails">
                        <div className="aboutDetailsText">
                            <h1 className="aboutTitle">King Room</h1>
                            <p className="aboutDesc">
                            Maximum of 4 Guests, For our guests who would like to have even more comfortable experience.
                            </p>
                        </div>
                        <div className="aboutDetailsPrice">
                            <h1>Perfect for a 9-night stay!</h1>
                            <span>
                            Yalıkavak Dirmil Mah. Frank Azmağı Cad., No.: 2, Bodrum, Muğla, 48400
                            </span>
                            <h2>
                                <b>$945</b> (9 nights)
                            </h2>
                            <button>Reserve or Book Now!</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KingPage;
