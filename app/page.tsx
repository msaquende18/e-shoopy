import Image from "next/image";
import logo from "../utils/assets/images/logo-shopi.svg";

const Home = () => {
  return (
    <>
    <div>
      <Image src={logo} width={200} height={200} alt="logo" />
    </div>
    </>
  );
}

export default Home;