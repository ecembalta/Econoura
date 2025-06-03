import React from "react";
import Layout from "../components/Layout";
import Slider from "../components/HomePage/Slider";
import CategoryPick from "../components/HomePage/CategoryPick";
import BestSellerProducts from "../components/HomePage/BestSellerProducts";
import C2ASection from "../components/HomePage/C2ASection";
import FeaturedPosts from "../components/HomePage/FeaturedPosts";
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
