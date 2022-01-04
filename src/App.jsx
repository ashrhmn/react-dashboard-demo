import React from "react";
import CardView from "./components/CardView";
import Nav from "./components/Nav";
import SideBar from "./components/SideBar";
import Slider from "./components/Slider";
// import "./main.scss";
import "./App.scss";

import cardImg1 from "./assets/Group 511.png";
import cardImg2 from "./assets/Group 586.png";

import tradeIcon from "./assets/icons8_swap_96px.png";
import poolsIcon from "./assets/icons8_slice_96px.png";
import airdropIcon from "./assets/icons8_note_48px.png";
import assetsIcon from "./assets/icons8_NFT_128px.png";
import stakesIcon from "./assets/icons8_rocket_96px.png";
import voteIcon from "./assets/icons8_lock_screen_96px.png";
import statsIcon from "./assets/icons8_investment_96px.png";
import HistoryView from "./components/HistoryView";
import ImageSlider from "./components/ImageSlider";
import RightCards from "./components/RightCards";

const App = () => {
  const cardData = [
    {
      id: 1,
      title: "Market Cap",
      prices: [
        { title: "SCT Price", price: "$750.00" },
        { title: "SCT Holdings", price: "$750.00" },
      ],
      img: cardImg1,
    },
    {
      id: 2,
      title: "Total Locked",
      prices: [
        { title: "Circulating Supply", price: "$750.00" },
        { title: "Total Reflection", price: "$750.00" },
        { title: "Total Value Locked", price: "$2,573.663" },
      ],
      img: cardImg2,
    },
  ];

  const sideBarItems = [
    {
      title: "Trade",
      img: tradeIcon,
    },
    {
      title: "Pools",
      img: poolsIcon,
    },
    {
      title: "Airdrop",
      img: airdropIcon,
    },
    {
      title: "Assets",
      img: assetsIcon,
    },
    {
      title: "Stakes",
      img: stakesIcon,
    },
    {
      title: "Vote",
      img: voteIcon,
    },
    {
      title: "Stats",
      img: statsIcon,
    },
  ];

  return (
    <div>
      <Nav menuItem={sideBarItems} />
      <div className="top-section">
        <ImageSlider />
        <RightCards cardData={cardData} />
      </div>
    </div>
  );

  return (
    <div className="container">
      <SideBar items={sideBarItems} />
      <div className="app-view">
        <Nav menuItem={sideBarItems} />
        <div className="slide-card-view">
          <Slider />
          <div className="card-container">
            {cardData.map((data) => (
              <CardView key={data.id} data={data} />
            ))}
          </div>
        </div>
        <HistoryView />
      </div>
    </div>
  );
};

export default App;
