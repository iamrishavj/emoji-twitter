import Logo from "./Logo";

const TopNavBar: React.FC = () => {
  return (
    <div className="bg-primary w-full p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Logo />
          {/* Add additional navigation items here */}
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;
