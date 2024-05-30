"use client"
import css from "./cssNavbar.module.css"
import { logout } from "../server";
import { useRouter } from "next/navigation";

export default function NavBar() {
    const router = useRouter();
    async function handleLogout() {
        await logout();
        router.push("login");
    }
    return (
        <>
            <div className={css.layer__1}>
                <div>
                    <span className="font-semibold text-xl">ProperMu -</span>  <span className="text-zinc-500">back office</span>
                </div>
                <div className="underline cursor-pointer font-semibold text-xs" onClick={handleLogout}>
                    Logout
                </div>
            </div>
        </>
    );
}