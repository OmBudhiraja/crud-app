import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Spinner = () => {
  return (
    <div className="w-screen h-[80vh] flex items-center justify-center">
      <AiOutlineLoading3Quarters className="animate-spin" size={"35px"} />
    </div>
  );
};

export default Spinner;
