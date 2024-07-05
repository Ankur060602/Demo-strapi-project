import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Links = ({ links }) => {
  const [activeLink, setActiveLink] = useState(null);
  const [randomImageUrl, setRandomImageUrl] = useState("");

  useEffect(() => {
    if (links.length > 0) {
      setActiveLink(links[0].id); // Set the first link as active by default
    }

    fetchRandomImage();
  }, [links]);

  const fetchRandomImage = async () => {
    try {
      const response = await axios.get("https://api.pexels.com/v1/search", {
        headers: {
          Authorization:
            "7rT67yVgiERHi4def5He8vDD3nc2ffna6fGppONhidS6fppJQ62DL5Jq",
        },
        params: {
          query: "office staff",
          per_page: 1,
          page: Math.floor(Math.random() * 10) + 1,
          orientation: "square",
          min_width: 500,
          min_height: 500,
        },
      });

      const imageUrl = response.data.photos[0].src.medium;
      setRandomImageUrl(imageUrl);
    } catch (error) {
      console.error("Error fetching image from Pexels:", error);
    }
  };

  const handleLinkClick = (id) => {
    setActiveLink(id);
    fetchRandomImage();
  };

  return (
    <div className="flex justify-around items-center">
      <div className=" w-2/3">
        {links.data
          .filter((link) => link.id === activeLink)
          .map((link) => (
            <div key={link.id} className="flex h-full items-center">
              <div className=" static flex text-white pr-4 justify-end w-full h-full mr-20">
                <div className="rounded">
                  <Image
                    src={randomImageUrl}
                    alt="Random Image"
                    width={350}
                    height={350}
                    className="rounded-full"
                  />
                </div>
                <div className="w-[80px] h-[80px] rounded-full bg-gray-800 absolute opacity-30 right-74 top-[450px]"></div>
                <div className="absolute left-28 flex rounded-full flex-col justify-center h-[350px] w-[350px] bg-pink-800 opacity-75">
                  <h2 className="pl-7 mb-2 font-bold">
                    {link.attributes.title}
                  </h2>
                  <p className="pl-7">{link.attributes.discription}</p>
                </div>
                <div className="w-[60px] h-[60px] rounded-full bg-gray-800 absolute opacity-30 left-96"></div>
              </div>
            </div>
          ))}
      </div>
      <ul className=" w-1/3 list-none space-y-2 text-sm mb-3">
        {links &&
          links.data.map((link) => {
            return (
              <>
                <li
                  key={link.id}
                  className={`${
                    link.id === activeLink
                      ? "bg-pink-700 text-white"
                      : "bg-gray-200 text-black"
                  } cursor-pointer w-64 flex justify-between p-2 rounded-s-full`}
                >
                  <div>h</div>
                  <a onClick={() => handleLinkClick(link.id)}>
                    {link.attributes.title}
                  </a>
                </li>
              </>
            );
          })}
      </ul>
    </div>
  );
};

export default Links;
