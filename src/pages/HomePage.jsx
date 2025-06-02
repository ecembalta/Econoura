import React from "react";
import Layout from "../components/Layout";
import "./Home.css";
import Slider from "../components/Slider";
import CategoryPick from "../components/CategoryPick";
import BestSellerProducts from "../components/BestSellerProducts";
import C2ASection from "../components/C2ASection";
import FeaturedPosts from "../components/FeaturedPosts";
function Home() {
  return (
    <Layout>
      <Slider isHero={true} />
      <CategoryPick />
      <BestSellerProducts />
      <Slider isHero={false} />
      <C2ASection />
      <FeaturedPosts />
    </Layout>
  );
}

export default Home;
