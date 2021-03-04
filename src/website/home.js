import React from 'react';


const Home = () =>{
  return(
    <div>
        

       <div className="background">
        <div className="redbar">
            <div className="redone">
            </div>
            <div className="searchoptions">
            <input type="text"class="search" placeholder="serach" />
            <a href="#" class="fasearch"> <i className="fa fa-search"></i></a>
            <a href="#" class="login">Login</a>
           <a href="#" class="cart"><i class="fa fa-shopping-cart"> cart</i></a> 
            </div>
        </div>
        <div className="green">
            <button className="mac">
                Mac
            </button>
            <button className="iphone">
                iPhone
            </button>
            <button className="MobilePhones">
                Mobile Phones
            </button>
            <button className="iPad">
                iPad
            </button>
            <button className="laptop">
                Laptope
            </button>
            <button className="smartwatche">
                Smartwatchs
            </button>
            <button className="camera">
                Camera
            </button>
        </div>
        <div className="iphonehome">
     <div className="iphone2">  
           
</div> 
<div className="mainone">
            <div className="mainiphnebk">
                <div className="mainoff"> 
                    20% OFF
                </div>
                <img src="/assets\images/image 177@1X.png" alt=""/>
            </div>
            <div className="mainiphnof">
                <div>
                    <img src="/assets\images/image 180@1X.png" alt=""/>
                </div >
                <div>
                    <img src="/assets\images/image 177@1X.png" alt=""/>
                </div>
                <div>
                    <img src="/assets\images/image 152@1X.png" alt=""/>
                </div>
                <div>
                    <img src="/assets\images/image 180@1X.png" alt=""/>
                </div>
                <div>
                    <img src="/assets\images/image 179@1X.png" alt=""/>
                </div>
            </div>
        </div>

           
        <div className="maintwo" >
            <div>

            </div>
            <p>Apple iPhone 11, 64 GB (Includes EarPods, Power Adapter)</p>
            <small>Minimally used . Negligible Scratches . Fully Functional</small>
            <div>
            <span>AED 8349</span> <small>AED 9000</small>
            </div>
            <button className="buy">Buy Now</button>
            <button className="add">Add to Cart</button>
            <br/><br/>
            <div className="specalities">
              <div className="gurantee">
                <img src="/assets\images/guarantee@1X.png"></img>
                <h5> Guaranteed Quality</h5>
    <small>100% Original and fuctional 
     products</small>
     </div>
     <div class="replace">
                <img src="/assets\images/shipped@1X.png" ></img>
                <h5> Replace easily</h5>
    <small> Get hassle free 10 days 
     replacement  products</small>
    
               </div>
               <div class="support">
                <img src="/assets\images/support (2)@1X.png"/>
                <h5> Excellent Support</h5>
   <small> Get support from our 
     agents </small>
              </div>
            </div>
            <h5>In The Box</h5>
            <div className="items">
                <div className="charger">
                    <img  src="/assets\images/charger.png" alt="" width="27px" height="37"/>
                    <small>Charging Cable</small>
                </div>
                <div className="powrpleg">
                    <img src="/assets\images/plug.png" alt="" width="31px" height="36px"/>
                    <small>Power Plug</small>
                </div>
                <div className="airpod">
                    <img src="/assets\images/airpod.png" alt="" width="41px" height="32px"/> 
                    <small>Earphones</small>
                </div>
            </div>
            <h5>Specifications</h5>
            <ul className="ulinline1">
                <li>In The Box</li>
                <li>Model Name</li>
                <li>Model Name</li>
                <li>Color</li>
                <li>Browse Type</li>
                <li>SIM Type</li>
                <li>Hybrid Sim Slot</li>
                <li>Touchscreen</li>
                <li>BACKGROUND</li>
            </ul>
            <ul className="ulinline2">
                <li>Handset, EarPods with Lightning Connector, Lightning to USB Cable,</li>
                <li>MWLX2HN/A</li>
                <li>iPhone 11</li>
                <li>Purple</li>
                <li>Smartphones</li>
                <li>Dual Sim</li>
                <li>No</li>
                <li>Yes</li>
                <li>no</li>
            </ul>


        </div>
    </div>
        <div className="quotsmain">
            <div className="quotsmain2">
                <img className="quotsimage1" src="/assets\images/mobile2.jpg" alt=""/>
                <div className="quots">
                {/* <i class="fal fa-quote-left"></i> */}
                    <p><blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.pariatur.</blockquote></p>
                    <h3>Kevin James</h3>
                    <h6 className="quotsh6">Youtube Influencer</h6>
                    
                    {/* <i class="fal fa-quote-right"></i> */}
                </div>
            </div>
            <div className="quotsdivimage2">
                <img className="quotsimage2" src="/assets\images/mymobile.jpg" alt=""/>
            </div>
        </div>
        <div className="iphoneoffer">
            <div class="you">
                <h3>You might also like</h3>
                <a href=""><h3>View All</h3></a>
            </div>
            <div class="offdiv">
                <div className="offdiv1">
                    <h6 className="offdiv1h6">20% OFF</h6>
                    <img className="img1" src="/assets\images/image 152@1X.png" alt=""/>
                    <h5>Apple iPhone 1</h5>
                    <p className="gray">Certified, Good condition</p>
                    <span>AED 8349</span> <small>AED 9000</small>
                </div>
                <div >
                    <h6 className="offdiv1h6" >15% OFF</h6>
                    <img className="img1" src="/assets\images/image 165@1X.png" alt=""/>
                    <h5>Dell Xps Laptop</h5>
                    <p className="gray">Certified, Unboxed</p>
                    <span>AED 20000</span> <small>AED 3000</small>
                </div>
                <div >
                    <h6 className="offdiv1h6">10% OFF</h6>
                    <img className="img3" src="/assets\images/image 177@1X.png" alt=""/>
                    <h5>Apple iPhone 11 Red</h5>
                    <p className="gray">Certified, Good condition</p>
                    <span>AED 1100</span> <small>AED 1500</small>
                </div>
                <div >
                    <h6 className="offdiv1h6">20% OFF</h6>
                    <img className="img1" src="/assets\images/image 171@1X.png" alt=""/>
                    <h5>Apple Watch Series 6</h5>
                    <p className="gray">Certified, Good condition</p>
                    <span>AED 8349</span> <small>AED 90000</small>
                </div>
                <div className="offdiv5" >
                    <h6 className="offdiv1h6">20% OFF</h6>
                    <img className="img1" src="/assets\images/image 152@1X.png" alt=""/>
                    <h5>Apple Watch 6 Nike edition</h5>
                    <p className="gray">Certified, Good condition</p>
                    <span>AED 8349</span> <small>AED 90000</small>
                </div>
            </div>
        </div>
        <div className="footer">
            <div class="foh5">
                <h4>Our Guide</h4>
                <h4>Our Services</h4>
                <h4>Categories</h4>
                <h4>Our Services</h4>
                <h4>Follow Us</h4>
            </div>
            <div className="anchordiv">
                <ul>
                    <li> <a href="">About Us</a></li>
                    <li><a href="">FAQ</a></li>
                    <li><a href="">Corporate Site</a></li>
                    <li><a href="">Our Showrooms</a></li>
                    <li><a href="">Terms & Conditions</a></li>
                    <li><a href="">Privacy Policy</a></li>
                    
                </ul>
                <ul>
                    <li><a href="">Returns & Exchange</a></li>
                    <li><a href="">Pay Monthly Installments</a></li>
                    <li><a href="">Easy Credit Offers</a></li>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Site Map</a></li>
                    <li><a href="">B2B Services</a></li>
                </ul>
                <ul>
                    <li><a href="">Mobiles</a></li>
                    <li><a href="">Tablets</a> </li>
                    <li><a href="">Laptops</a></li>
                    <li><a href="">Camera</a></li>
                    <li><a href="">Headphones</a></li>
                    <li><a href="">Television</a></li>
                </ul>
                <ul>
                    <li><a href="">Returns & Exchange</a></li>
                    <li><a href="">Pay Monthly Installments</a></li>
                    <li><a href="">Easy Credit Offers</a></li>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Site Map</a></li>
                    <li><a href="">B2B Services</a></li>
                </ul>
                <span>
                   
                    <a href="#" className="socialimages"><i class="fab fa-instagram"></i></a>


                </span>
                <span>
                   
                    <a href="#" className="socialimages"><i class="fab fa-twitter" ></i></a>
                </span>
                <span>
                    
                    <a href="#" className="socialimages"><i class="fab fa-facebook-f"></i></a>
                </span>
            </div>
        </div>
    </div>
    </div>
  );
}
export default Home; 
