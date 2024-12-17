import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import greenCatIcon from "../assets/images/green_cat_icon.png"; // Sol taraftaki ikon
import loginIcon from "../assets/images/login_icon.png"; // LogIn için ekleyeceğin resim
import shoppingCartIcon from "../assets/images/shopping_cart_icon.png"; // Sepet için ikon
import "../styles/Header.css"; // Header CSS dosyasını kullanalım

const Header = ({ isLoggedIn, customerFirstName, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <header className="header">
      {/* Sol: Logo */}
      <div className="header-left" onClick={() => navigate("/main")}>
        <img src={greenCatIcon} alt="Green Cat Logo" className="header-icon" />
      </div>

      {/* Orta: Ürün Arama Kutusu */}
      <div className="header-center">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-box"
          />
          <button type="submit" className="search-button">Search</button>
        </form>
      </div>

      {/* Sağ: Kullanıcı Durumu ve Sepet */}
      <div className="header-right">
        {isLoggedIn ? (
          <span className="user-status">Welcome, {customerFirstName}</span>
        ) : (
          <div className="login-container" onClick={() => navigate("/login")}>
            <img src={loginIcon} alt="Login Icon" className="header-icon" />
            <span>Log In</span>
          </div>
        )}

        <div className="cart-container" onClick={() => navigate("/cart")}>
          <img
            src={shoppingCartIcon}
            alt="Shopping Cart"
            className="header-icon"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
