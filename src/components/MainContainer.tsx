import ButtonList from "./ButtonList";
import Sidebar from "./SideBar";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="flex">
      {/* <Sidebar /> */}
      <div>
        <ButtonList />
        <VideoContainer />
      </div>
    </div>
  );
};

export default MainContainer;
