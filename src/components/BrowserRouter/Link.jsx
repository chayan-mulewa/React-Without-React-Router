import { useBrowserRouter } from "./BrowserRouter";

export default function Link({ url, title }) {
  const { navigate } = useBrowserRouter();
  const onClick = (event) => {
    event.preventDefault();
    navigate(url);
  };
  return (
    <a
      href={url}
      onClick={onClick}
      className="hover:text-green-600 transition-colors duration-300"
    >
      {title}
    </a>
  );
}
