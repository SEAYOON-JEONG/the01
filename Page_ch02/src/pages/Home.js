import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza.jpeg";
import "../styles/Home.css";
import { motion } from "framer-motion";
function Home() {
  return (
    <motion.div
    initial={{ opacity: 0, x: -50 }} // 초기 상태
    animate={{ opacity: 1, x: 0 }}  // 애니메이션 적용
    exit={{ opacity: 0, x: 50 }}    // 페이지 나갈 때
    transition={{ duration: 0.5 }}  // 지속 시간
  >
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Pedro's Pizzeria </h1>
        <p> PIZZA TO FIT ANY TASTE</p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
    </motion.div>
  );
}

export default Home;
