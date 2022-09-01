import React from "react";
import style from "./RightSide.module.css";
import Update from "../Update/Update";
import CustomerReview from "../CustomerReview/CustomerReview";

export default function RightSide() {
  return (
    <div className={style.RightSide}>
      <div>
        <h3>Updates</h3>
        <Update />
      </div>
      <div>
        <h3>Customer Review</h3>
        <CustomerReview />
      </div>
    </div>
  );
}
