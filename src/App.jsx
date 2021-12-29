import React from "react";
import CardView from "./components/CardView";
import Nav from "./components/Nav";
import SideBar from "./components/SideBar";
import Slider from "./components/Slider";
import "./main.scss";

const App = () => {
  const cardData = [
    {
      id: 1,
      title: "Market Cap",
      prices: [
        { title: "SCT Price", price: "$750.00" },
        { title: "SCT Holdings", price: "$750.00" },
      ],
      img: "src/assets/Group 511.png",
    },
    {
      id: 2,
      title: "Total Locked",
      prices: [
        { title: "Circulating Supply", price: "$750.00" },
        { title: "Total Reflection", price: "$750.00" },
        { title: "Total Value Locked", price: "$2,573.663" },
      ],
      img: "src/assets/Group 586.png",
    },
  ];

  const sideBarItems = [
    {
      title: "Trade",
      img: "src/assets/icons8_swap_96px.png",
    },
    {
      title: "Pools",
      img: "src/assets/icons8_slice_96px.png",
    },
    {
      title: "Airdrop",
      img: "src/assets/icons8_note_48px.png",
    },
    {
      title: "Assets",
      img: "src/assets/icons8_NFT_128px.png",
    },
    {
      title: "Stakes",
      img: "src/assets/icons8_rocket_96px.png",
    },
    {
      title: "Vote",
      img: "src/assets/icons8_lock_screen_96px.png",
    },
    {
      title: "Stats",
      img: "src/assets/icons8_investment_96px.png",
    },
  ];

  return (
    <div className="container">
      <SideBar items={sideBarItems} />
      <div className="app-view">
        <Nav />
        <div className="slide-card-view">
          <Slider />
          <div className="card-container">
            {cardData.map((data) => (
              <CardView key={data.id} data={data} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
