// app/page.tsx
import Image from "next/image"; // For optimized image loading
import ProductList from "../components/ProductList"; // Your product listing component

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="lg: width:1440 height:716.83 sm:width 600 hero-content relative h=60">
          <Image
            src="/assets/hero.png"
            width={1440}
            height={716.83}
            alt="Discover Our New Collection"
            className="hero-image h-full w-full"
          ></Image>

          <div className="absolute inset-8 flex justify-end lg:m-12 p-10">
            <div className="TextContainer">

              <p  className="HeroTextHeader ">
              New Arrival
              </p>
              
              <h2> Discover Our New Collection</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Similique possimus nulla repellat excepturi delectus aliquam,
                nostrum suscipit animi fuga culpa asperiores consequatur
                reiciendis eum ab error enim cum totam amet.
              </p>
            </div>
          </div>
        </div>
      </section>

      
      
    </div>
  );
}
