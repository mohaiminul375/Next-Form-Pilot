
import Link from "next/link";
import { dancing_Script } from "@/components/Shared/Navbar";
// export const dancing_Script = Dancing_Script({
//     weight: '700',
//     subsets: ['latin'],
// });


export default function Home() {
  return (
    <section >
      {/* Starting content */}
      <div className="flex justify-center items-center min-h-[calc(100vh-160px)] ">
        <div className=" md:min-w-3xl mx-auto bg-foreground shadow-2xl p-6 text-center rounded-md text-white min-h-72 flex flex-col items-center justify-center space-y-5 dark:border border-indigo-200 border-double">
          <h2 className={`text-5xl font-bold ${dancing_Script.className}`}>Welcome to Next Form Pilot</h2>
          <p className="text-lg font-semibold">Multi-Step Form with Validation with Zod and React Hook Form</p>
          {/* data summary */}
          <div className="space-y-2 font-bold text-xl">
            <h4>Total Validation:</h4>
            <h4>Last Validation at:</h4>
            <h4></h4>
          </div>
          <div className="mt-5 flex gap-5">
            <Link
              className="rounded-2xl border-2 border-white px-8 py-2  ease-in-out hover:rounded-full hover:bg-white text-lg hover:text-[#2DB89D] hover:font-semibold hover:shadow-md transition-all duration-700"
              href='/all-validation'
            >
              See all Validation
            </Link>
            <Link
              className="rounded-2xl border-2 border-white px-8 py-2  ease-in-out hover:rounded-full hover:bg-white text-lg hover:text-[#2DB89D] hover:font-semibold hover:shadow-md transition-all duration-700"
              href='/validate-form'
            >
              Start Now
            </Link>
            {/* <button className="rounded-md border-2 border-[#328E6E]">start</button> */}
          </div>
        </div>
      </div>
      {/* Start button */}

    </section>
  );
}
