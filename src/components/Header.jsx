import React from "react";
import { moneyFormat } from "../helpers";

const Header = ({ money, total }) => {
  return (
    <div>
      {total > 0 && money - total !== 0 && (
        <div className="header">Harcayacak <span> $ {moneyFormat(money - total)}</span> paranız kaldı</div>
      )}
      {total === 0 && (
        <div className="header">Harcamak için <span> $ {moneyFormat(money)}</span> paranız var</div>
      )}
      {money - total === 0 && (
        <div className="header">Paran bitti, parasız insan boş insandır!</div>
      )}
      <style jsx>{`
      .header{
        position:sticky;
        top:0;
        background:linear-gradient(to bottom,#20b820,#14be2a);
        height:3rem;
        display:flex;
        align-items:center;
        justify-content:center;
        color:#fff;
        font-size:1.5rem;
        letter-spacing:1px
      }
      .header span{
          margin:0 10px;
          font-weight:bold;
        }`}</style>
    </div>
  );
};

export default Header;
