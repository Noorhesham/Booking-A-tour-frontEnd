"use client";

import { logout } from "@/actions/logout";
import { useRouter, usePathname } from "next/navigation";

const LogoutButton = () => {
  const pathname = usePathname();
  const router = useRouter();
  console.log;
  const onClick = async () => {
    await logout();
    if (pathname.includes("me")) router.push("/login");
  };
  return (
    <button onClick={onClick} className="nav__el nav__el--logout">
      Log out
    </button>
  );
};

export default LogoutButton;
