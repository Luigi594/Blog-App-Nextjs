import Link from "next/link";
import ArrowLeftIcon from "./ArrowLeftIcon";

function StudioNavbarLocal(props: any) {
  return (
    <div className="bg-[#101112]">
      <div className="flex items-center justify-between p-5">
        <Link href={"/"} className="text-[#F7AB0A] flex items-center">
          <ArrowLeftIcon />

          <span>Go To Website</span>
        </Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
}

export default StudioNavbarLocal;
