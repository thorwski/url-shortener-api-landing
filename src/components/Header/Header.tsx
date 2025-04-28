import { useEffect, useState } from "react";
import HeaderLink from "../HeaderLink/HeaderLink";
import Button from "../Button/Button";
import { AnimatePresence, motion } from "framer-motion";

const Header = () => {
  const shortlyLogo = "/shortly-logo.svg";
  const hamburgerIcon = "/hamburger-menu.svg";

  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header className="bg-white py-10 md:py-12 px-6 md:px-8 fixed w-[100vw] z-50">
        <div className="max-w-[1110px] mx-auto flex justify-between items-center">
          <a href="/">
            <img src={shortlyLogo} alt="shortly logo" />
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-3xl"
          >
            <img src={hamburgerIcon} alt="hamburger menu" />
          </button>
          <div className="hidden md:flex justify-between items-center w-full ml-10">
            <div className="flex gap-7 text-white">
              <HeaderLink variant="header" to="features" label="Features" />
              <HeaderLink variant="header" to="pricing" label="Pricing" />
              <HeaderLink variant="header" to="resources" label="Resources" />
            </div>
            <div className="flex gap-9 text-white">
              <Button
                label="Login"
                variant="transparent"
                size="default"
                rounded="full"
                onClick={() => {}}
              />
              <Button
                label="Sign Up"
                variant="primary"
                size="default"
                rounded="full"
                onClick={() => {}}
              />
            </div>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            exit={{ x: "100vw" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed top-[120px] left-0 right-0 mx-auto bg-light-purple text-white px-6 py-10 rounded-[10px] w-[90%] max-w-[400px] z-[999] md:hidden"
          >
            <div className="flex flex-col gap-8 text-center">
              <div className="flex flex-col gap-[30px] text-center">
                <HeaderLink
                  variant="header-menu"
                  to="features"
                  label="Features"
                />

                <HeaderLink
                  variant="header-menu"
                  to="pricing"
                  label="Pricing"
                />
                <HeaderLink
                  variant="header-menu"
                  to="resources"
                  label="Resources"
                />

                <hr className="border-[#979797]" />
              </div>
              <div className="flex flex-col gap-6">
                <button>Login</button>
                <Button
                  label="Sign Up"
                  variant="primary"
                  size="default"
                  rounded="full"
                  onClick={() => {}}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
