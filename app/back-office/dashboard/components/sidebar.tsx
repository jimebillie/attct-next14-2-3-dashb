"use client"
import css from "./cssSidebar.module.css";
export default function SideBar() {
    return (
        <div className={css.layer__1}>

            <div className={css.main_menu}>
                Menu
            </div>
            <div className={css.wrap_submenu}>
                <div className={css.submenu}>
                    <a href="#">
                        Submenu Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, deserunt.
                    </a>
                </div>
                <div className={css.submenu}>
                    <a href="#">
                        Submenu 2
                    </a>
                </div>
                <div className={css.submenu}>
                    <a href="#">
                        Submenu 3
                    </a>
                </div>
            </div>

            <div className={css.main_menu}>
                Menu 2
            </div>
            <div className={css.wrap_submenu}>
                <div className={css.submenu}>
                    <a href="#">
                        Submenu Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, deserunt.
                    </a>
                </div>
                <div className={css.submenu}>
                    <a href="#">
                        Submenu 2
                    </a>
                </div>
                <div className={css.submenu}>
                    <a href="#">
                        Submenu 3
                    </a>
                </div>
            </div>
        </div>
    );
}