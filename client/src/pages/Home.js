import React, { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Pusher from "pusher-js";
import Header from "../components/Header";
import Meta from "../components/Meta";
import Offer from "../components/Offer";
import Popup from "../components/common/Modal";

const Home = () => {
  const pageTitle = "Pusher Demo";
  const pageDescription = "welcome to pusher demo";

  const [offers, setOffers] = useState([]);
  const [newOffer, setNewOffer] = useState({});

  const fetchOffers = async () => {
    const { data } = await axios.get("http://127.0.0.1:8000/api/offers/");
    setOffers(data);
  };

  const subscribe = () => {
    const pusher = new Pusher("YOUR_PUSHER_KEY", {
      cluster: "YOUR_PUSHER_CLUSTER",
    });
    const channel = pusher.subscribe("offer-channel");
    channel.bind("my-offer", function (data) {
      fetchOffers();
      setNewOffer(data);
    });
  };

  useEffect(() => {
    fetchOffers();
    subscribe();
  }, []);

  return (
    <div>
      {newOffer.title && <Popup defaultVisibility={true} {...newOffer} />}

      <Meta title={pageTitle} />
      <Header head={pageTitle} description={pageDescription} />
      {offers.map((offer) => (
        <Offer key={offer.id} offer={offer} />
      ))}
    </div>
  );
};

export default Home;
