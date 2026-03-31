import React from "react";
import Image from "next/image";

const Hero = ({ image, children, description }) => {
  return (
    <section className="hero">
      <aside className="hero-image">
        {image && (
          <Image
            src={image}
            priority
            alt={children}
            width={800}
            height={450}
            style={{ width: "100%", height: "auto" }}
          />
        )}
      </aside>

      <aside className="hero-text">
        <h1>{children}</h1>
        <p>{description}</p>
      </aside>
    </section>
  );
};

export default Hero;
