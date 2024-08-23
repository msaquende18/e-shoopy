import Image from "next/image";
import * as React from "react";
import logo from "../../../../utils/assets/images/logo-shopi.svg";

export default function Home() {
  return (
    <>
    <div>
      <Image src={logo} width={200} height={200} alt="logo" />
    </div>
    </>
  )
}
