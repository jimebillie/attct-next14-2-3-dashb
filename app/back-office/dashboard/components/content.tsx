"use client"

export default function Content({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="absolute w-full bg-white top-0 left-[0] right-0 bottom-0 pt-[50px] pl-[350px] pr-[50px] overflow-x-auto overflow-y-auto">
                {children}
            </div>
        </>
    );
}