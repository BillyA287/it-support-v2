import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTicket, faHome } from "@fortawesome/free-solid-svg-icons";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <>
      <nav>
        <ul className="flex items-center space-x-12 p-5 fixed top-0 w-full bg-gray-800">
          <li>
            <Link href="/">
              <FontAwesomeIcon icon={faHome} className="icon mr-2" />
              Home
            </Link>
          </li>
          <li>
            <Link href="/ticket-page">
              <FontAwesomeIcon icon={faTicket} className="icon" /> Tickets
            </Link>
          </li>
          <li>
            <Link href="/login"> Login </Link>
          </li>
          <li> Logout </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
