import { useState } from "react";
import { motion } from "framer-motion";
import homeIcon from "../assets/icons/home.svg";
import calendarIcon from "../assets/icons/calendar.svg";
import speakersIcon from "../assets/icons/speakers-icon.svg";
import messagesIcon from "../assets/icons/messages-icon.svg";
import reportsIcon from "../assets/icons/reports.svg";
import settingsIcon from "../assets/icons/settings-icon.svg";
import collapseIcon from "../assets/icons/collapse-icon.svg";
import collapseIconClosed from "../assets/icons/collapse-closed-icon.svg";
import notificationsIcon from "../assets/icons/notification-icon.svg";
import homeIconClosed from "../assets/icons/home-icon-closed.svg";
import eventIconClosed from "../assets/icons/events-icon-closed.svg";
import speakerIconClosed from "../assets/icons/speakers-icon-closed.svg";
import reportIconClosed from "../assets/icons/reports-icon-closed.svg";
import notificationIconClosed from "../assets/icons/notification-closed-icon.svg";
import messageIconClosed from "../assets/icons/messages-icon-closed.svg";
import settingsIconClosed from "../assets/icons/settings-icon-closed.svg";
import ToggleTheme from "./toggle-theme";
import Badge from "./badge";
import avatarIcon from "../assets/icons/avatar-icon.svg";
import logo from "../assets/icons/logo.svg";

const CollapsibleSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const navVariants = {
    open: {
      width: "240px",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 30,
      },
    },
    closed: {
      width: "60px",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 30,
      },
    },
  };

  const linkVariants = {
    open: {
      opacity: 1,
      display: "flex",
      transition: {
        delay: 0.2,
      },
    },
    closed: {
      opacity: 0,
      transitionEnd: {
        display: "none",
      },
    },
  };

  return (
    <div className="flex static">
      <motion.nav
        animate={isOpen ? "open" : "closed"}
        variants={navVariants}
        className="hidden lg:block h-screen overflow-hidden dark:text-white text-textBlack dark:border-none border border-[#F1F5F9] dark:bg-bgBlackPrimary bg-white"
        initial="open"
      >
        <div className="p-4">
          <img src={logo} alt="" />
        </div>
        <ul className="mt-5">
          <li className="flex items-center p-4 cursor-pointer ">
            {isOpen ? (
              <img src={homeIcon} alt="" />
            ) : (
              <img src={homeIconClosed} alt="" />
            )}
            <motion.a variants={linkVariants} className="flex items-center">
              {isOpen && (
                <span className="ml-4">
                  <p className="text-[14px]">Home</p>
                </span>
              )}
            </motion.a>
          </li>
          <li className="flex items-center p-4 cursor-pointer">
            {isOpen ? (
              <img src={calendarIcon} alt="" />
            ) : (
              <img src={eventIconClosed} alt="" />
            )}
            <motion.a variants={linkVariants}>
              {isOpen && (
                <span className="ml-4">
                  <p className="text-[14px]">Events</p>
                </span>
              )}
            </motion.a>
          </li>
          <li className="flex items-center p-4 cursor-pointer ">
            {isOpen ? (
              <img src={speakersIcon} alt="" />
            ) : (
              <img src={speakerIconClosed} alt="" />
            )}
            <motion.a variants={linkVariants}>
              {isOpen && (
                <span className="ml-4">
                  <p className="text-[14px]">Speakers</p>
                </span>
              )}
            </motion.a>
          </li>
          <li className="flex items-center p-4 cursor-pointer ">
            {isOpen ? (
              <img src={reportsIcon} alt="" />
            ) : (
              <img src={reportIconClosed} alt="" />
            )}
            <motion.a variants={linkVariants}>
              {isOpen && (
                <span className="ml-4">
                  <p className="text-[14px]">Reports</p>
                </span>
              )}
            </motion.a>
          </li>
          <li className="flex items-center p-4 cursor-pointer ">
            {isOpen ? (
              <img src={notificationsIcon} alt="" />
            ) : (
              <span className="relative">
                <img src={notificationIconClosed} alt="" />
                <Badge
                  number=""
                  customStyle="absolute w-[7px] h-[7px] top-[-6px] right-[-6px]"
                />
              </span>
            )}
            <motion.a variants={linkVariants}>
              {isOpen && (
                <span className="ml-4 flex gap-[48px]">
                  <p className="text-[14px]">Notifications</p>
                  <Badge number="3" customStyle="w-[24px] h-[24px]" />
                </span>
              )}
            </motion.a>
          </li>
          <li className="flex items-center p-4 cursor-pointer ">
            {isOpen ? (
              <img src={messagesIcon} alt="" />
            ) : (
              <img src={messageIconClosed} alt="" />
            )}
            <motion.a variants={linkVariants}>
              {isOpen && (
                <span className="ml-4">
                  <p className="text-[14px]">Messages</p>
                </span>
              )}
            </motion.a>
          </li>
          <li className="flex items-center p-4 cursor-pointer ">
            {isOpen ? (
              <img src={settingsIcon} alt="" />
            ) : (
              <img src={settingsIconClosed} alt="" />
            )}
            <motion.a variants={linkVariants}>
              {isOpen && (
                <span className="ml-4">
                  <p className="text-[14px]">Settings</p>
                </span>
              )}
            </motion.a>
          </li>
          <li
            className="flex items-center p-4 cursor-pointer "
            onClick={toggleNav}
          >
            {isOpen ? (
              <img src={collapseIcon} alt="" />
            ) : (
              <img src={collapseIconClosed} alt="" />
            )}
            <motion.a variants={linkVariants}>
              {isOpen && (
                <span className="ml-4">
                  <p className="text-[14px]">Collapse</p>
                </span>
              )}
            </motion.a>
          </li>
        </ul>
        <motion.div className="ml-3 mt-4">
          {!isOpen && (
            <img src={avatarIcon} className="w-[32px] h-[32px]" alt="icon" />
          )}
        </motion.div>
        <motion.span variants={linkVariants} className="mt-2">
          {isOpen && (
            <ToggleTheme lightThemeTextColor="#334155" darkThemeTextColor="" />
          )}
        </motion.span>
        <motion.div variants={linkVariants} className="flex ml-4 mt-4 gap-2">
          {isOpen && (
            <>
              <img src={avatarIcon} alt="icon" />
              <div>
                <p className="font-[400] text-[12px] leading-[16px]">
                  Rudra Devi
                </p>
                <p className="text-[12px] leading-[16px]">
                  rudra.devi@gmail.com
                </p>
              </div>
            </>
          )}
        </motion.div>
      </motion.nav>
    </div>
  );
};

export default CollapsibleSidebar;
