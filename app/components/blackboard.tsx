import type { ReactNode } from "react";

export const BlackBoard = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div
        className=" w-full bg-black-100 text-3xl font-extrabold   p-2 mb-5 text-center border border-green-700"
        style={{
          fontFamily: "Mogra",
        }}
      >
        {children}
      </div>
    </>
  );
};
