import Link from "next/link"

const navList = [
    {path: "/about", text: "About"},
    {path: "/pricing", text: "Pricing"},
    {path: "/contact", text: "Contact"},
]

export const Navbar = () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
        <span> Home </span>
        <div className="flex flex-1"></div>
        {
            navList.map( navItem => (
                <Link key={navItem.path} href={navItem.path} className="mr-2">{navItem.text}</Link>
            ))
        }
    </nav>
  )
}
