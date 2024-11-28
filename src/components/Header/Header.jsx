import Link from "../BrowserRouter/Link";

export default function Header() {
  return (
    <header className="h-20 w-full fixed px-4 z-50 md:px-10 bg-transparent backdrop-blur-sm overflow-hidden">
      <nav className="h-full w-full flex flex-row justify-between items-center">
        <ul className="h-full w-fit flex flex-row justify-between items-center">
          <li>
            <Link url={"/"} title={"Astro"} />
          </li>
        </ul>
        <ul className="h-full w-fit flex gap-20 flex-row justify-between items-center">
          <li>
            <Link url={"/home"} title={"Home"} />
          </li>
          <li>
            <Link url={"/about-us"} title={"About Us"} />
          </li>
          <li>
            <Link url={"/contact-us"} title={"Contact Us"} />
          </li>
          <li>
            <Link url={"/login"} title={"Login"} />
          </li>
          <li>
            <Link url={"/signup"} title={"Signup"} />
          </li>
        </ul>
      </nav>
    </header>
  );
}
