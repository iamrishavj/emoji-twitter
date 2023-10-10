import Logo from "./Logo";

const TopNavBar: React.FC = () => {
  return (
    <div className="navbar-gradient w-full p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Logo />
          <div className="block md:hidden"></div>
          {/* Add additional navigation items here */}
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;
