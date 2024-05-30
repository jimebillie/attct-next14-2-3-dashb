import Client from "./client";
export default function page() {
    const lang: any = {
        username: "Username",
        password: "Password",
    }
    return (
        <>
            <Client lang={lang} />
        </>
    );
}