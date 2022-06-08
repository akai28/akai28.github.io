import {
  FaBehance,
  FaDribbble,
  FaInstagram,
  FaRegFilePdf,
} from "react-icons/fa";

const akankshaResume = "/assets/files/Akanksha_Tiwari_Resume.pdf";

export const socialMediaIcons = [
  {
    icon: <FaRegFilePdf size={28} aria-hidden="true" />,
    href: akankshaResume,
    title: "Resume",
    subTitle: "Akanksha Tiwari",
    focusColor: "emerald", // text-emerald-600 hover:text-emerald-400 focus:ring-emerald-700
  },
  {
    icon: <FaDribbble size={28} aria-hidden="true" />,
    href: "https://dribbble.com/akai28",
    title: "Dribbble",
    subTitle: "akai28",
    focusColor: "pink", // text-pink-600 hover:text-pink-400 focus:ring-pink-700
  },
  {
    icon: <FaBehance size={28} aria-hidden="true" />,
    href: "https://www.behance.net/akankshatiwari6",
    title: "Behance",
    subTitle: "akankshatiwari6",
    focusColor: "blue", // text-blue-600 hover:text-blue-400 focus:ring-blue-700
  },
  {
    icon: <FaInstagram size={28} aria-hidden="true" />,
    href: "https://www.instagram.com/_akaiii28/",
    title: "Instagram",
    subTitle: "_akaiii28",
    focusColor: "violet", // text-violet-600 hover:text-violet-400 focus:ring-violet-700
  },
];
