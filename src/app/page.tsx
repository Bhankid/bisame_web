import Hero from "./components/Hero";
import Today from "./components/Today";
import Category from "./components/Category";
import Month from "./components/Month";
import OurProducts from "./components/OurProducts";
import Card from "./components/Card";
import Featured from "./components/Featured";

export default function Home() {
  return (
    <div className="min-h-screen px-20">
      <Hero />
      <Today />
      <Category />
      <Month />
      <Card />
      <OurProducts />
      <Featured />
    </div>
  );
}
