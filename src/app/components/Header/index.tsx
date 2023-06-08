import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div>
        <Link href={"/"}>Blog Next Js</Link>
      </div>

      <div>
        <Link
          href={"https://github.com/luigi594"}
          target="_blank"
          className="px-5 py-3 text-sm bg-gray-900 text-[#F7AB0A] text-center rounded-full md:text-base">
          Go to my Github
        </Link>
      </div>
    </header>
  );
}

export default Header;
