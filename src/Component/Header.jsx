import React from "react";
// import Req from "req.css";

const Header = () => {
    return (
      <>
       
       <header class="header">
        <nav class="navbar">
            <a href="a">Home</a>
            <a href="a">About</a>
            <a href="a">Services</a>
            <a href="a">Contacts</a>
        </nav>
        <form action="a" class="search-bar">
            <input type="text" placeholder="Search.."/>
            <button type="submit"><i class='bx bx-search'></i></button>
        </form>

    </header>
      </>
    );
  };
  
  export default Header;