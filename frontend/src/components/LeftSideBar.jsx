import { IoSearchOutline } from "react-icons/io5";
import { TiHomeOutline } from "react-icons/ti";
import { IoNotificationsOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import { FaRegBookmark } from "react-icons/fa";
const LeftSideBar = () => {
  const leftitems = [
    { icon: <TiHomeOutline size={"32px"} />, name: "Home" },
    { icon: <IoSearchOutline size={"32px"} />, name: "Explore" },
    { icon: <IoNotificationsOutline size={"24px"} />, name: "Notifications" },
    { icon: <MdOutlineMail size={"32px"} />, name: "Messages" },
    { icon: <CiUser size={"32px"} />, name: "Profile" },
    { icon: <FaRegBookmark size={"32px"} />, name: "Bookmarks" },

    { icon: <MdLogout size={"32px"} />, name: "Logout" },
  ];
  return (
    <div>
      <div>
        <img
          width={"36px"}
          className="ml-4"
          src="https://about.x.com/content/dam/about-twitter/x/large-x-logo.png.twimg.1920.png"
          alt="twitter-logo"
        />
      </div>
      <div className="content mt-6">
        {leftitems.map((item, index) => (
          <div
            key={index}
            className="flex px-4 py-2  hover:pointer hover:bg-gray-200 hover:rounded-full  cursor-pointer gap-4 mb-4 items-center "
          >
            {item.icon}
            <h1 className="font-semibold text-2xl ">{item.name}</h1>
          </div>
        ))}
        <button className="bg-[#109BF0] mt-2 w-full rounded-full text-white font-semibold  text-xl px-6 py-4  mx-auto">
          Post
        </button>
      </div>
    </div>
  );
};

export default LeftSideBar;
