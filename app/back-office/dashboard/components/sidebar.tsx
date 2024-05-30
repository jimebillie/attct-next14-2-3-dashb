"use client"
import Link from "next/link";
import css from "./cssSidebar.module.css";
export default function SideBar() {
    return (
        <div className={css.layer__1}>

            <div className={css.main_menu}>
                Dashboard
            </div>
            <div className={css.wrap_submenu}>
                <div className={css.submenu}>
                    <Link href="/back-office/dashboard">
                        Home
                    </Link>
                </div>
            </div>

            <div className={css.main_menu}>
                Article
            </div>
            <div className={css.wrap_submenu}>
                <div className={css.submenu}>
                    <a href="#">
                        All article
                    </a>
                </div>
                <div className={css.submenu}>
                    <Link href="/back-office/dashboard/article/create-new-article">
                        Create new article
                    </Link>
                </div>
            </div>

        </div>
    );
}