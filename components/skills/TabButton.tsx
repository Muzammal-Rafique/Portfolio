interface TabButtonProps {
  label: string;
  tabIndex: number;
  handleTabClick: (tabIndex: number) => void;
  activeTab: number;
}

const TabButton: React.FC<TabButtonProps> = ({
  label,
  tabIndex,
  handleTabClick,
  activeTab,
}) => {
  return (
    <button
      onClick={() => handleTabClick(tabIndex)}
      className={`text-black hover:bg-gradient-to-r from-purple-900 to-pink-100 py-2 px-4 mx-2 border-b-2 rounded-md border-transparent hover:border-blue-800 transition-all duration-300 ${
        activeTab === tabIndex ? "border-blue-500 border-b-2 bg-gradient-to-r from-purple-500 to-pink-300" : "bg-transparent"
      }`}
    >
      {label}
    </button>
  );
};

export default TabButton;
