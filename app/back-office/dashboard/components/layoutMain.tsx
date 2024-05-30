"use client"

import Content from "./content";
import css from "./cssLayoutmain.module.css"
import NavBar from "./navbar";
import SideBar from "./sidebar";
export default function LayoutMain({ children }: { children: React.ReactNode }) {
    return (
        <div className={css.layer__1}>
            <NavBar />
            <SideBar />
            <Content>
                {children}
            </Content>
        </div>
    );
}