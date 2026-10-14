import { FunButtonProps } from "@/types/customer/home";

const FunButton = ({ title, fun, style }: FunButtonProps) => {
  function CalHelperFun() {
    fun();
  }
  return (
    <button className={`outline-none ${style}`} onClick={CalHelperFun}>
      {title}
    </button>
  );
};

export default FunButton;
