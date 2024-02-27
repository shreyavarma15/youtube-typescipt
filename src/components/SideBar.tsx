import { useContext } from "react";
import { SideBarContext, SideBarContextType } from "../App";

const Sidebar = () => {
  const { isExpanded } = useContext<SideBarContextType>(SideBarContext);

  return (
    <>
      {isExpanded && (
        <div className="p-5 shadow-lg" data-testid="sidebar">
          <ul>
            <li className="py-3 hover:bg-gray-200 cursor-pointer p-2 rounded-lg">
              Home
            </li>
            <li className="py-3 hover:bg-gray-200 cursor-pointer p-2 rounded-lg">
              Shorts
            </li>
            <li className="py-3 hover:bg-gray-200 cursor-pointer p-2 rounded-lg">
              Subscriptions
            </li>
            <hr className="py-3" />

            <li className="py-3 hover:bg-gray-200 cursor-pointer p-2 rounded-lg">
              Library
            </li>
            <li className="py-3 hover:bg-gray-200 cursor-pointer p-2 rounded-lg">
              History
            </li>
            <li className="py-3 hover:bg-gray-200 cursor-pointer p-2 rounded-lg">
              Your videos
            </li>
            <li className="py-3 hover:bg-gray-200 cursor-pointer p-2 rounded-lg">
              Watch later
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Sidebar;
