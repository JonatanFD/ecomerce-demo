import Marquee from "react-fast-marquee";

const CAROUSEL = [
    {
        src: "/mouse-1.jpg",
        aspectRatio: "0.7727"
    },{
        src: "/mouse-2.jpg",
        aspectRatio: "0.7509"
    },{
        src: "/mouse-3.jpg",
        aspectRatio: "1"
    },{
        src: "/mouse-4.jpg",
        aspectRatio: "1"
    },{
        src: "/mouse-5.jpg",
        aspectRatio: "0.66"
    },
];

export default function ProductsCarousel() {
  return (
      <Marquee
        autoFill
        gradientWidth={50}
        gradientColor="black"
        gradient
        pauseOnClick
      >
        {CAROUSEL.map((item) => (
          <img src={item.src} className={`aspect-[${item.aspectRatio}] h-[250px] mx-2 rounded-xl overflow-hidden`} key={item.src} />
        ))}
      </Marquee>
  );
}
