import React from "react";
import { SocialIcon } from "react-social-icons";

const footerLinks = [
  {
    title: "Resources",
    links: [
      "Sass Development",
      "Our Products",
      "Our Projects",
      "User  Strategy",
    ],
  },
  {
    title: "Company",
    links: [
      "About Landio",
      "Contact & Support",
      "Success History",
      "Setting & Privacy",
    ],
  },
  {
    title: "Quick Links",
    links: ["Premium Support", "Our Services", "Know Our Team", "Download App"],
  },
];

const socials = [
  "https://twitter.com",
  "https://facebook.com",
  "https://youtube.com",
  "https://linkedin.com",
];

const Footer = () => {
  return (
    <>
      <div className="mt-10">
        <div className="">
          <div className="flex flex-col lg:flex-row justify-around p-8">
            <div className="flex flex-col space-y-4">
              <h1 className="font-extrabold">
                Ar<span className="text-blue-800">chi</span>vi
              </h1>
              <p className="max-w-sm font-light">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
              <div className="flex space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"
                  />
                </svg>
                <p className="font-normal">0512335787</p>
              </div>
            </div>
            {footerLinks.map((link, index) => (
              <div className="flex flex-col mt-2 space-y-3" key={index}>
                <h2 className="font-bold">{link.title}</h2>
                <ul className="font-thin">
                  {link.links.map((subLink, subIndex) => (
                    <li
                      className="hover:text-blue-700 cursor-pointer"
                      key={subIndex}
                    >
                      {subLink}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="mt-4 md:mt-0">
              <h2 className="font-bold">Follow Us On</h2>
              <div className="flex space-x-1 mt-3">
                {socials.map((icon, index) => (
                  <SocialIcon
                    key={index}
                    url={icon}
                    style={{ height: 30, width: 30 }}
                  /> // Set the size here
                ))}
              </div>
              <div className="mt-4">
                <span className="font-thin">2024 Archivi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
