
import Link from "next/link";


export default function Home() {
  return (
    <section>
      {/* Starting content */}
      <div className="flex justify-center items-center min-h-screen">
        <div className=" md:min-w-3xl mx-auto bg-[#2DB89D] shadow-2xl p-6 text-center rounded-md text-white h-60 flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold">Next Form Pilot</h2>
          <p className="text-lg">Multi-Step Form with Validation with Zod</p>
          <div className="mt-5">
            <Link
              className="rounded-2xl border-2 border-white px-8 py-2  ease-in-out hover:rounded-full hover:bg-white text-lg hover:text-[#2DB89D] hover:font-semibold hover:shadow-md transition-all duration-700"
              href='/'
            >
              Start
            </Link>
            {/* <button className="rounded-md border-2 border-[#328E6E]">start</button> */}
          </div>
        </div>
      </div>
      {/* Start button */}

    </section>
  );
}
