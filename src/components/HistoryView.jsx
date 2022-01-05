import React from "react";

import "./HistoryView.scss"

import tokenIcon from "../assets/PNG_image_4__1_-removebg-preview (1).png";

const HistoryView = () => {
  const demoData = {
    tokens: tokenIcon,
    estApy: "50%",
    duration: "30 days",
    stackingRewards: "0 SCT",
  };

  const data = [demoData, demoData, demoData];

  return <div className="history-view">
      <table className="history-table">
          <thead>
              <tr>
                  <th>Tokens</th>
                  <th>Est. APY</th>
                  <th>Duration</th>
                  <th>Stacking Rewards</th>
                  <th>Action</th>
              </tr>
          </thead>
          <tbody>
              {data.map((row,index)=> <tr key={index}>
                  <td><img className="table-image" src={row.tokens} alt="" /></td>
                  <td>{row.estApy}</td>
                  <td>{row.duration}</td>
                  <td>{row.stackingRewards}</td>
                  <td><button className="blue-button">Harvest</button></td>
                  <td><button className="purple-button">Stack Now</button></td>
                  <td><button className="orange-button">Unstake</button></td>
              </tr>)}
          </tbody>
      </table>
  </div>;
};

export default HistoryView;
