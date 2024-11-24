import Link from "next/link";

const links = [
  {
    id: 1,
    name: "About",
    url: "#about",
  },
  {
    id: 2,
    name: "Projects",
    url: "#projects",
  },
  {
    id: 3,
    name: "Contact",
    url: "#contact",
  },
];

export default function NavBar() {
  return (
    <nav className="absolute z-50 text-white p-5">
      <ul className="flex gap-2">
        {links.map((link) => (
          <li key={link.id}>
            <Link href={link.url}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
