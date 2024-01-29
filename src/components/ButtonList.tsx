import { BUTTON_LIST } from "../utils/constants";

const ButtonList = () => {
  return (
    <div className="flex">
      {BUTTON_LIST.map((button) => (
        <div>
          <button className="px-4 py-2 m-2 bg-gray-100 rounded-lg">
            {button}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ButtonList;
