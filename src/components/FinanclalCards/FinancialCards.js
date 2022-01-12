import React from "react";
import styles from "./financial_cards.module.scss";
import SVGCard from "../SVGcards/SVGCard";
export default function FinancialCards() {
  return (
    <div className={styles.container}>
      <p id="popup_panel_titles">Finances</p>

      <div className={styles.financials}>
        <SVGCard bgcolor="#F44771" innerRect="rgba(255, 113, 147, 1)">
          <div className={styles.financials_data}>
            <h3>Total Budget</h3>
            <p>₹1,800,000</p>
          </div>
        </SVGCard>
        <SVGCard bgcolor="#f66400" innerRect="#F9924C">
          <div className={styles.financials_data}>
            <h3>Total Expenditure</h3>
            <p>₹1,800,000</p>
          </div>
        </SVGCard>
        <SVGCard bgcolor="#F44771" innerRect="rgba(255, 113, 147, 1)">
          <div className={styles.financials_data}>
            <h3>Current Phase Budget</h3>
            <p>₹1,800,000</p>
          </div>
        </SVGCard>
        <SVGCard bgcolor="#f66400" innerRect="#F9924C">
          <div className={styles.financials_data}>
            <h3>Total Expenditure</h3>
            <p>₹1,800,000</p>
          </div>
        </SVGCard>
        <SVGCard bgcolor="#FECB49" innerRect="#FFFFFF4D">
          <div className={styles.financials_data}>
            <h3>Phase Amt Paid</h3>
            <p>₹1,800,000</p>
          </div>
        </SVGCard>
        <SVGCard bgcolor="#FECB49" innerRect="#FFFFFF4D">
          <div className={styles.financials_data}>
            <h3>Phase Amt Paid</h3>
            <p>₹1,800,000</p>
          </div>
        </SVGCard>
      </div>
    </div>
  );
}
