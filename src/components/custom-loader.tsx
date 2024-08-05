import { ImSpinner9 } from "react-icons/im";

export const CustomLoader = () => {
  return (
    <div className="flex items-center justify-center h-screen animate-spin">
      <ImSpinner9 className="text-white size-20" />
    </div>
  );
};
