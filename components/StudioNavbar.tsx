import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

function StudioNavbar(props: any) {
  return (
    <div>
      <div className="bg-black p-3">
        <Link href="/" className="text-white flex">
          <ArrowUturnLeftIcon className="h-6 w-6 text-white mr-2" />
          Go to Website
        </Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
}

export default StudioNavbar;
