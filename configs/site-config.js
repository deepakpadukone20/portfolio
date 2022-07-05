import {
  FaGithub,
  FaDev,
  FaLinkedin,
  FaQuora,
  FaTwitter
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Deepak Padukone Manjunath. All Rights Reserved.`,
  author: {
    name: "Deepak Padukone Manjunath",
    accounts: [
      {
        url: "https://github.com/deepakpadukone20",
        label: "Github Account",
        type: "gray",
        icon: <FaGithub />
      },
      {
        url: "https://twitter.com/iamdeepakpadukon",
        label: "Twitter Account",
        type: "twitter",
        icon: <FaTwitter />
      },
      {
        url: "https://linkedin.com/in/deepak-padukone-m",
        label: "LinkedIn Account",
        type: "linkedin",
        icon: <FaLinkedin />
      },
      // {
      //   url: "https://www.quora.com/profile/",
      //   label: "Quora Account",
      //   type: "red",
      //   icon: <FaQuora />
      // },
      {
        url: "mailto:deepakpadukone20@live.com",
        label: "Mail Deepak",
        type: "gray",
        icon: <FiMail />
      }
    ]
  }
};

export default siteConfig;
