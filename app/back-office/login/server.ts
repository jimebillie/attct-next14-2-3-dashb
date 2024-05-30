"use server"

import { cookies } from "next/headers";

interface IcallApiLogin {
    user: string,
    pass: any
}
export async function callApiLogin({ user, pass }: IcallApiLogin) {
    try {
        //-> Authentication
        if (user !== "admin-propermu" || pass !== "AHkSlkEejc__") {
            return { res: { status: 400, msg: "Username or Password invalid." } }
        } else {
            const ck = cookies();
            ck.set("__auth", "pass");
            return { res: { status: 200, msg: "ok" } };
        }

    } catch (err) {
        console.log("Login fail->" + err);
        return { res: { status: 500, msg: "Something went worng!" } };
    }
}