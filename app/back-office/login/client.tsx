"use client"
import { FormEvent, useState } from "react";
import { callApiLogin } from "./server";
import css from "./css.module.css"
import { useRouter } from "next/navigation";

export default function client({ lang }: { lang: any }) {
    const [resCallApiErr, setResCallApiErr] = useState<any>(null)
    const router :any= useRouter();
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        /**
         * Call api
        */
        const username = document.getElementById("username") as HTMLInputElement;
        const password = document.getElementById("password") as HTMLInputElement;

        const callApi: any = await callApiLogin({ user: username.value, pass: password.value });
        if (callApi.res.status !== 200) {
            //-> Error
            setResCallApiErr(callApi.res.msg);
        } else {
            //-> Pass
            router.push("dashboard")
        }
    }
    return (
        <>
            <div className={css.layer_bg}>
                <div className={css.layer_bg_form}>
                    <div className={css.form_header}>
                        <span className="text-3xl font-semibold">ProperMu</span>
                        <span className="mx-[5px] text-zinc-400">-</span>
                        <span className="text-zinc-400">Back office.</span>
                    </div>
                    <div className={css.form_body}>
                        <form onSubmit={handleSubmit}>
                            <div className={css.wrap_input}>
                                <label htmlFor="username">
                                    {lang.username} :
                                </label>
                                <input type="text" id="username" placeholder="administrator" required />
                            </div>
                            <div className={css.wrap_input}>
                                <label htmlFor="">
                                    {lang.password} :
                                </label>
                                <input type="password" id="password" placeholder="* * * * * * * * * *" required />
                            </div>
                            {resCallApiErr !== null ? (
                                <>
                                    <div className={css.alert_err}>
                                        {resCallApiErr}
                                    </div>
                                </>
                            ) : null}
                            <div className={css.wrap_input}>
                                <button type="submit">
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className={css.layer_bg_copyright}>
                    &copy; Copyright 2024 <a className="underline ml-1" target="_bank" href="https://www.propermu.com">propermu.com</a>
                </div>
            </div>
        </>
    );
}