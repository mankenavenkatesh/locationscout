import React from "react";
import locationsApi from "../../api/LocationsApi";
class ShootingLocationContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {
        id: "",
        locationName: ""
      }
    };
  }

  componentDidMount() {
    // debugger;
    var locationId = this.props.locationId;
    locationsApi
      .getLocationById(locationId)
      .then(response => {
        if (response.status == "200") {
          console.log(response.data);
          this.setState({ location: response.data });
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <div class="container">
        <div class="row sticky-wrapper">
          <div class="col-lg-8 col-md-8 padding-right-30">
            <div id="titlebar" class="listing-titlebar">
              <div class="listing-titlebar-title">
                <h2>
                  {this.state.location.locationName}{" "}
                  <span class="listing-tag">Eat & Drink</span>
                </h2>
                <span>
                  <a href="#listing-location" class="listing-address">
                    <i class="fa fa-map-marker" />
                    2726 Shinn Street, New York
                  </a>
                </span>
                <div class="star-rating" data-rating="5">
                  <div class="rating-counter">
                    <a href="#listing-reviews">(31 reviews)</a>
                  </div>
                </div>
              </div>
            </div>
            <div id="listing-nav" class="listing-nav-container">
              <ul class="listing-nav">
                <li>
                  <a href="#listing-overview" class="active">
                    Overview
                  </a>
                </li>
                <li>
                  <a href="#listing-pricing-list">Pricing</a>
                </li>
                <li>
                  <a href="#listing-location">Location</a>
                </li>
                <li>
                  <a href="#listing-reviews">Reviews</a>
                </li>
                <li>
                  <a href="#add-review">Add Review</a>
                </li>
              </ul>
            </div>
            <div id="listing-overview" class="listing-section">
              <p>
                Ut euismod ultricies sollicitudin. Curabitur sed dapibus nulla.
                Nulla eget iaculis lectus. Mauris ac maximus neque. Nam in
                mauris quis libero sodales eleifend. Morbi varius, nulla sit
                amet rutrum elementum, est elit finibus tellus, ut tristique
                elit risus at metus.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar.
                Donec a consectetur nulla. Nulla posuere sapien vitae lectus
                suscipit, et pulvinar nisi tincidunt. Aliquam erat volutpat.
                Curabitur convallis fringilla diam sed aliquam. Sed tempor
                iaculis massa faucibus feugiat. In fermentum facilisis massa, a
                consequat purus viverra.
              </p>
              <h3 class="listing-desc-headline">Amenities</h3>
              <ul class="listing-features checkboxes margin-top-0">
                <li>Elevator in building</li>
                <li>Friendly workspace</li>
                <li>Instant Book</li>
                <li>Wireless Internet</li>
                <li>Free parking on premises</li>
                <li>Free parking on street</li>
              </ul>
            </div>
            <div id="listing-pricing-list" class="listing-section">
              <h3 class="listing-desc-headline margin-top-70 margin-bottom-30">
                Pricing
              </h3>

              <div class="show-more">
                <div class="pricing-list-container">
                  <h4>Burgers</h4>
                  <ul>
                    <li>
                      <h5>Classic Burger</h5>
                      <p>Beef, salad, mayonnaise, spicey relish, cheese</p>
                      <span>$6</span>
                    </li>
                    <li>
                      <h5>Cheddar Burger</h5>
                      <p>
                        Cheddar cheese, lettuce, tomato, onion, dill pickles
                      </p>
                      <span>$6</span>
                    </li>
                    <li>
                      <h5>Veggie Burger</h5>
                      <p>
                        Panko crumbed and fried, grilled peppers and mushroom
                      </p>
                      <span>$6</span>
                    </li>
                    <li>
                      <h5>Chicken Burger</h5>
                      <p>
                        Cheese, chicken fillet, avocado, bacon, tomatoes, basil
                      </p>
                      <span>$6</span>
                    </li>
                  </ul>

                  <h4>Drinks</h4>
                  <ul>
                    <li>
                      <h5>Frozen Shake</h5>
                      <span>$4</span>
                    </li>
                    <li>
                      <h5>Orange Juice</h5>
                      <span>$4</span>
                    </li>
                    <li>
                      <h5>Beer</h5>
                      <span>$4</span>
                    </li>
                    <li>
                      <h5>Water</h5>
                      <span>Free</span>
                    </li>
                  </ul>
                </div>
              </div>
              <a
                href="#"
                class="show-more-button"
                data-more-title="Show More"
                data-less-title="Show Less"
              >
                <i class="fa fa-angle-down" />
              </a>
            </div>
            <div id="listing-location" class="listing-section">
              <h3 class="listing-desc-headline margin-top-60 margin-bottom-30">
                Location
              </h3>

              <div id="singleListingMap-container">
                <div
                  id="singleListingMap"
                  data-latitude="40.70437865245596"
                  data-longitude="-73.98674011230469"
                  data-map-icon="im im-icon-Hamburger"
                />
                <a href="#" id="streetView">
                  Street View
                </a>
              </div>
            </div>

            <div id="listing-reviews" class="listing-section">
              <h3 class="listing-desc-headline margin-top-75 margin-bottom-20">
                Reviews <span>(12)</span>
              </h3>

              <div class="clearfix" />
              <section class="comments listing-reviews">
                <ul>
                  <li>
                    <div class="avatar">
                      <img
                        src="http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&amp;s=70"
                        alt=""
                      />
                    </div>
                    <div class="comment-content">
                      <div class="arrow-comment" />
                      <div class="comment-by">
                        Kathy Brown<span class="date">June 2017</span>
                        <div class="star-rating" data-rating="5" />
                      </div>
                      <p>
                        Morbi velit eros, sagittis in facilisis non, rhoncus et
                        erat. Nam posuere tristique sem, eu ultricies tortor
                        imperdiet vitae. Curabitur lacinia neque non metus
                      </p>

                      <div class="review-images mfp-gallery-container">
                        <a
                          href="images/review-image-01.jpg"
                          class="mfp-gallery"
                        >
                          <img src="images/review-image-01.jpg" alt="" />
                        </a>
                      </div>
                      <a href="#" class="rate-review">
                        <i class="sl sl-icon-like" /> Helpful Review{" "}
                        <span>12</span>
                      </a>
                    </div>
                  </li>

                  <li>
                    <div class="avatar">
                      <img
                        src="http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&amp;s=70"
                        alt=""
                      />{" "}
                    </div>
                    <div class="comment-content">
                      <div class="arrow-comment" />
                      <div class="comment-by">
                        John Doe<span class="date">May 2017</span>
                        <div class="star-rating" data-rating="4" />
                      </div>
                      <p>
                        Commodo est luctus eget. Proin in nunc laoreet justo
                        volutpat blandit enim. Sem felis, ullamcorper vel
                        aliquam non, varius eget justo. Duis quis nunc tellus
                        sollicitudin mauris.
                      </p>
                      <a href="#" class="rate-review">
                        <i class="sl sl-icon-like" /> Helpful Review{" "}
                        <span>2</span>
                      </a>
                    </div>
                  </li>

                  <li>
                    <div class="avatar">
                      <img
                        src="http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&amp;s=70"
                        alt=""
                      />
                    </div>
                    <div class="comment-content">
                      <div class="arrow-comment" />
                      <div class="comment-by">
                        Kathy Brown<span class="date">June 2017</span>
                        <div class="star-rating" data-rating="5" />
                      </div>
                      <p>
                        Morbi velit eros, sagittis in facilisis non, rhoncus et
                        erat. Nam posuere tristique sem, eu ultricies tortor
                        imperdiet vitae. Curabitur lacinia neque non metus
                      </p>

                      <div class="review-images mfp-gallery-container">
                        <a
                          href="images/review-image-02.jpg"
                          class="mfp-gallery"
                        >
                          <img src="images/review-image-02.jpg" alt="" />
                        </a>
                        <a
                          href="images/review-image-03.jpg"
                          class="mfp-gallery"
                        >
                          <img src="images/review-image-03.jpg" alt="" />
                        </a>
                      </div>
                      <a href="#" class="rate-review">
                        <i class="sl sl-icon-like" /> Helpful Review{" "}
                        <span>4</span>
                      </a>
                    </div>
                  </li>

                  <li>
                    <div class="avatar">
                      <img
                        src="http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&amp;s=70"
                        alt=""
                      />{" "}
                    </div>
                    <div class="comment-content">
                      <div class="arrow-comment" />
                      <div class="comment-by">
                        John Doe<span class="date">May 2017</span>
                        <div class="star-rating" data-rating="5" />
                      </div>
                      <p>
                        Commodo est luctus eget. Proin in nunc laoreet justo
                        volutpat blandit enim. Sem felis, ullamcorper vel
                        aliquam non, varius eget justo. Duis quis nunc tellus
                        sollicitudin mauris.
                      </p>
                      <a href="#" class="rate-review">
                        <i class="sl sl-icon-like" /> Helpful Review
                      </a>
                    </div>
                  </li>
                </ul>
              </section>
              <div class="clearfix" />
              <div class="row">
                <div class="col-md-12">
                  <div class="pagination-container margin-top-30">
                    <nav class="pagination">
                      <ul>
                        <li>
                          <a href="#" class="current-page">
                            1
                          </a>
                        </li>
                        <li>
                          <a href="#">2</a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="sl sl-icon-arrow-right" />
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              <div class="clearfix" />
            </div>
            <div id="add-review" class="add-review-box">
              <h3 class="listing-desc-headline margin-bottom-20">Add Review</h3>
              <span class="leave-rating-title">
                Your rating for this listing
              </span>
              <div class="row">
                <div class="col-md-6">
                  <div class="clearfix" />
                  <div class="leave-rating margin-bottom-30">
                    <input type="radio" name="rating" id="rating-1" value="1" />
                    <label for="rating-1" class="fa fa-star" />
                    <input type="radio" name="rating" id="rating-2" value="2" />
                    <label for="rating-2" class="fa fa-star" />
                    <input type="radio" name="rating" id="rating-3" value="3" />
                    <label for="rating-3" class="fa fa-star" />
                    <input type="radio" name="rating" id="rating-4" value="4" />
                    <label for="rating-4" class="fa fa-star" />
                    <input type="radio" name="rating" id="rating-5" value="5" />
                    <label for="rating-5" class="fa fa-star" />
                  </div>
                  <div class="clearfix" />
                </div>

                <div class="col-md-6">
                  <div class="add-review-photos margin-bottom-30">
                    <div class="photoUpload">
                      <span>
                        <i class="sl sl-icon-arrow-up-circle" /> Upload Photos
                      </span>
                      <input type="file" class="upload" />
                    </div>
                  </div>
                </div>
              </div>
              <form id="add-comment" class="add-comment">
                <fieldset>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Name:</label>
                      <input type="text" value="" />
                    </div>
                    <div class="col-md-6">
                      <label>Email:</label>
                      <input type="text" value="" />
                    </div>
                  </div>
                  <div>
                    <label>Review:</label>
                    <textarea cols="40" rows="3" />
                  </div>
                </fieldset>
                <button class="button">Submit Review</button>
                <div class="clearfix" />
              </form>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 margin-top-75 sticky">
            <div
              class="verified-badge with-tip"
              data-tip-content="Listing has been verified and belongs the business owner or manager."
            >
              <i class="sl sl-icon-check" /> Verified Listing
            </div>
            <div class="boxed-widget booking-widget margin-top-35">
              <h3>
                <i class="fa fa-calendar-check-o " /> Book a Table
              </h3>
              <div class="row with-forms  margin-top-0">
                <div class="col-lg-6 col-md-12">
                  <input
                    type="text"
                    id="booking-date"
                    data-lang="en"
                    data-large-mode="true"
                    data-large-default="true"
                    data-min-year="2017"
                    data-max-year="2020"
                    data-lock="from"
                  />
                </div>
                <div class="col-lg-6 col-md-12">
                  <input type="text" id="booking-time" value="9:00 am" />
                </div>
                <div class="col-lg-12">
                  <div class="panel-dropdown">
                    <a href="#">
                      Guests{" "}
                      <span class="qtyTotal" name="qtyTotal">
                        1
                      </span>
                    </a>
                    <div class="panel-dropdown-content">
                      <div class="qtyButtons">
                        <div class="qtyTitle">Adults</div>
                        <input type="text" name="qtyInput" value="1" />
                      </div>

                      <div class="qtyButtons">
                        <div class="qtyTitle">Childrens</div>
                        <input type="text" name="qtyInput" value="0" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a
                href="pages-booking.html"
                class="button book-now fullwidth margin-top-5"
              >
                Book Now
              </a>
            </div>
            <div class="boxed-widget opening-hours margin-top-35">
              <div class="listing-badge now-open">Now Open</div>
              <h3>
                <i class="sl sl-icon-clock" /> Opening Hours
              </h3>
              <ul>
                <li>
                  Monday <span>9 AM - 5 PM</span>
                </li>
                <li>
                  Tuesday <span>9 AM - 5 PM</span>
                </li>
                <li>
                  Wednesday <span>9 AM - 5 PM</span>
                </li>
                <li>
                  Thursday <span>9 AM - 5 PM</span>
                </li>
                <li>
                  Friday <span>9 AM - 5 PM</span>
                </li>
                <li>
                  Saturday <span>9 AM - 3 PM</span>
                </li>
                <li>
                  Sunday <span>Closed</span>
                </li>
              </ul>
            </div>
            <div class="boxed-widget margin-top-35">
              <div class="hosted-by-title">
                <h4>
                  <span>Hosted by</span>{" "}
                  <a href="pages-user-profile.html">Tom Perrin</a>
                </h4>
                <a href="pages-user-profile.html" class="hosted-by-avatar">
                  <img src="images/dashboard-avatar.jpg" alt="" />
                </a>
              </div>
              <ul class="listing-details-sidebar">
                <li>
                  <i class="sl sl-icon-phone" /> (123) 123-456
                </li>
                <li>
                  <i class="sl sl-icon-globe" />{" "}
                  <a href="#">http://example.com</a>
                </li>
                <li>
                  <i class="fa fa-envelope-o" />{" "}
                  <a href="#">
                    <span
                      class="__cf_email__"
                      data-cfemail="4e3a21230e2b362f233e222b602d2123"
                    >
                      [email&#160;protected]
                    </span>
                  </a>
                </li>
              </ul>

              <ul class="listing-details-sidebar social-profiles">
                <li>
                  <a href="#" class="facebook-profile">
                    <i class="fa fa-facebook-square" /> Facebook
                  </a>
                </li>
                <li>
                  <a href="#" class="twitter-profile">
                    <i class="fa fa-twitter" /> Twitter
                  </a>
                </li>
                <li>
                  <a href="#" class="gplus-profile">
                    <i class="fa fa-google-plus" /> Google Plus
                  </a>
                </li>
              </ul>
              <div id="small-dialog" class="zoom-anim-dialog mfp-hide">
                <div class="small-dialog-header">
                  <h3>Send Message</h3>
                </div>
                <div class="message-reply margin-top-0">
                  <textarea
                    cols="40"
                    rows="3"
                    placeholder="Your message to Tom"
                  />
                  <button class="button">Send Message</button>
                </div>
              </div>

              <a
                href="#small-dialog"
                class="send-message-to-owner button popup-with-zoom-anim"
              >
                <i class="sl sl-icon-envelope-open" /> Send Message
              </a>
            </div>
            <div class="listing-share margin-top-40 margin-bottom-40 no-border">
              <button class="like-button">
                <span class="like-icon" /> Bookmark this listing
              </button>
              <span>159 people bookmarked this place</span>
              <ul class="share-buttons margin-top-40 margin-bottom-0">
                <li>
                  <a class="fb-share" href="#">
                    <i class="fa fa-facebook" /> Share
                  </a>
                </li>
                <li>
                  <a class="twitter-share" href="#">
                    <i class="fa fa-twitter" /> Tweet
                  </a>
                </li>
                <li>
                  <a class="gplus-share" href="#">
                    <i class="fa fa-google-plus" /> Share
                  </a>
                </li>
                <li>
                  <a class="pinterest-share" href="#">
                    <i class="fa fa-pinterest-p" /> Pin
                  </a>
                </li>
              </ul>
              <div class="clearfix" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShootingLocationContent;
