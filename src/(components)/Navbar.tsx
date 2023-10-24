import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTicket, faHome } from "@fortawesome/free-solid-svg-icons";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <>
      <nav>
        <ul className="flex items-center space-x-12 p-5">
          <li>
            <Link href="/">
              <FontAwesomeIcon icon={faHome} className="icon" />
              Home
            </Link>
          </li>
          <li>
            <Link href="/TicketPage">
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
