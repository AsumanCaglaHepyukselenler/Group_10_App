import "./searchItem.css"

const SearchItem = () => {
  return (
    <div className="searchItem">
        <img
          src="https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1020,q_auto,w_2000/hotelier-images/5d/ca/7f9eb409a35dfea43f7d3b156ccb25d0088dd3c8b7dcd639a36e7bde36c2.jpeg" 
          alt=""
          className="siImg"
        />
        <div className="siDesc">
          <h1 className="siTitle">Deluxe Room</h1>
          <span className="siDistance">500m away from center</span>
          <span className="siTaxiOp">Free Airport Taxi</span>
          <span className="siSubtitle">
            Studio Apartment with Air Conditioning
          </span>
          <span className="siFeature">
            Entire studio * 1 bathroom * 21m2 1 full bed
          </span>
          <span className="siCancelOp">Free Cancellation</span>
          <span className="siCancelOpSubtitle">
            You can cancel later, so lock in this great price today!
          </span>
        </div>
        <div className="siDetails">
          <div className="siRating">
            <span>Excellent</span>
            <button>8.9</button>
          </div>
          <div className="siDetailsText">
            <span className="siPrice">$123</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <button className="siCheckButton">See Availability</button>
          </div>
        </div>
    </div>
  )
}

export default SearchItem