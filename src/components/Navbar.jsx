import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack className="z-30" direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: '#000', top: 0, justifyContent: "space-between" }}>
    <Link className="" to="/" style={{ display: "flex", alignItems: "center"}}>
      <img className="ml-5" src={logo} alt="logo" height={50} width={50} />
      <h1 className="text-white text-3xl font-bold ml-5 hidden sm:block" >MeTube</h1>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;