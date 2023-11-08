import { url } from "inspector";
import Image from "next/image";

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main className="">
      {/* <section className="w-screen h-screen bg-hero bg-no-repeat bg-cover bg-center bg-fixed"></section> */}
      <section className="w-screen h-screen">
        <img
          alt=""
          src="/hero_bg.png"
          // className="bg-cover items-center object-contain w-screen h-screen"
          className="object-cover h-screen w-max bg-center items-center self-center"
        />
        {/* <div
          className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center"
          style={{
            backgroundImage: "url('/hero_bg.png')",
            height: "500px",
          }}
        ></div>
        aaaa */}
      </section>
      <section className="w-screen h-screen bg-red-600"></section>
    </main>
  );
}
