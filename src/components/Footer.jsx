import styles from "../style";
import { logo, twitter, instagram, } from "../assets";


const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://explorer.gitcoin.co/#/round/42161/0x0c12752d28a68fd3dc791826b3405b8803aa8a52",
      },
      {
        name: "How it Works",
        link: "https://explorer.gitcoin.co/#/round/42161/0x0c12752d28a68fd3dc791826b3405b8803aa8a52",
      },
      {
        name: "Create",
        link: "https://explorer.gitcoin.co/#/round/42161/0x0c12752d28a68fd3dc791826b3405b8803aa8a52",
      },
      {
        name: "Explore",
        link: "https://explorer.gitcoin.co/#/round/42161/0x0c12752d28a68fd3dc791826b3405b8803aa8a52",
      },
      {
        name: "Terms & Services",
        link: "https://explorer.gitcoin.co/#/round/42161/0x0c12752d28a68fd3dc791826b3405b8803aa8a52",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://explorer.gitcoin.co/#/round/42161/0x0c12752d28a68fd3dc791826b3405b8803aa8a52",
      },
      {
        name: "Partners",
        link: "https://explorer.gitcoin.co/#/round/42161/0x0c12752d28a68fd3dc791826b3405b8803aa8a52",
      },
      {
        name: "Suggestions",
        link: "https://explorer.gitcoin.co/#/round/42161/0x0c12752d28a68fd3dc791826b3405b8803aa8a52",
      },
      {
        name: "Blog",
        link: "https://explorer.gitcoin.co/#/round/42161/0x0c12752d28a68fd3dc791826b3405b8803aa8a52",
      },
      {
        name: "Newsletters",
        link: "https://explorer.gitcoin.co/#/round/42161/0x0c12752d28a68fd3dc791826b3405b8803aa8a52",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://explorer.gitcoin.co/#/round/42161/0x0c12752d28a68fd3dc791826b3405b8803aa8a52",
      },
      {
        name: "Become a Partner",
        link: "https://explorer.gitcoin.co/#/round/42161/0x0c12752d28a68fd3dc791826b3405b8803aa8a52",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/0xUrbanika",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://twitter.com/0xUrbanika",
  },
];



const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-10">
        <img
          src={logo}
          alt="hoobank"
          className="w-[200px] h-[180px] object-contain"
        />
        <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
          A new way to verify personal data for web3 credits.
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright Ⓒ 2024 deCredit Score. All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
