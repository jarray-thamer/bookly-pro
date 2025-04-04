import TopHeader from "./HeaderBar";
import LeftSectionHeader from "./LeftSectionHeader";
import RightSectionHeader from "./RightSectionHeader";

const Header = () => {
  return (
    <div className=" border-b border-[#EDEDED] sticky">
      <TopHeader />
      <div className="max-w-[2000px] mx-auto flex items-center justify-between p-6 xl:p-8 h-auto pt-6 xl:pt-8 xl:h-[100px] sticky top-28 md:top-12  z-50">
        {/* Left section */}
        <LeftSectionHeader />
        {/* Right section */}
        <RightSectionHeader />
      </div>
    </div>
  );
};

export default Header;
