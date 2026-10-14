import { LinkButtonProps } from "@/types/customer/home";
import Link from "next/link";

const LinkButton = ({
  title,
  style = "",
  url,
  icon: Icon,
}: LinkButtonProps) => {
  return (
    <Link
      href={url}
      className={`flex flex-wrap items-center gap-3 pt-2 ${style}`}
    >
      {Icon && <Icon aria-hidden="true" />}
      {title}
    </Link>
  );
};

export default LinkButton;
