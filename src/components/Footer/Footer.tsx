import FacebookIcon from "../../icons/FacebookIcon";
import InstagramIcon from "../../icons/InstagramIcon";
import PinterestIcon from "../../icons/PinterestIcon";
import XIcon from "../../icons/XIcon";
import FooterSection from "./FooterSection/FooterSection";

const Footer = () => {
  return (
    <footer className="bg-[#232127] px-8 xl:px-[160px] py-[72px]">
      <div className="max-w-[1112px] mx-auto flex flex-col lg:flex-row justify-between">
        <div className="flex justify-center lg:block mb-[48px] lg:mb-3">
          <img src="shortly-footer.svg" alt="" />
        </div>
        <div className="flex flex-col md:flex-row gap-[40px] md:gap-[80px] justify-center  text-center lg:text-left mb-12">
          <FooterSection
            title="Features"
            links={[
              { label: "Link Shortening", to: "#" },
              { label: "Branded Links", to: "#" },
              { label: "Analytics", to: "#" },
            ]}
          />
          <FooterSection
            title="Resources"
            links={[
              { label: "Blog", to: "#" },
              { label: "Developers", to: "#" },
              { label: "Support", to: "#" },
            ]}
          />
          <FooterSection
            title="Company"
            links={[
              { label: "About", to: "#" },
              { label: "Our Team", to: "#" },
              { label: "Careers", to: "#" },
              { label: "Contact", to: "#" },
            ]}
          />
        </div>
        <div className="flex justify-center gap-6">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FacebookIcon />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <XIcon />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <PinterestIcon />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <InstagramIcon />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
