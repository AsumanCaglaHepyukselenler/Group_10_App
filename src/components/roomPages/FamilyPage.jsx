import "./roomPage.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const FamilyPage = () => {
    return (
        <div>
            <div className="aboutContainer">
                <div className="aboutWrapper">
                    <h1 className="aboutTitle">ReservEase Hotel</h1>
                    <div className="aboutAddress">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>Yalıkavak Dirmil Mah. </span>
                    </div>
                    <span className="aboutDistance">Excellent Location - 500m from center</span>
                    <span className="aboutPriceHighlight">
                        Book a stay over $114 at this property and get a free airport taxi!
                    </span>
                    <div className="aboutImages">
                        <div className="aboutImgWrapper">
                            <img src="hotel_photo2/family/family_suit.png" alt="" className="aboutImg" />
                            <img src="hotel_photo2/family/family_suit2.png" alt="" className="aboutImg" />
                        </div>
                    </div>
                    <div className="aboutDetails">
                        <div className="aboutDetailsText">
                            <h1 className="aboutTitle">Family Room</h1>
                            <p className="aboutDesc">
                            Maximum of 6 Guests, Well-prepared with caring and passion for our guests that are staying at our hotel as a family which all their possible needs will be covered with high quality and safe conditions.
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

export default FamilyPage;
