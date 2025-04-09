import { Dancing_Script } from "next/font/google";
import Link from "next/link";
export const dancing_Script = Dancing_Script({
    weight: '700',
    subsets: ['latin'],
});
const Navbar = () => {
    return (
        <nav className='bg-foreground  h-20'>
            <section className='flex justify-center items-center text-white h-20 px-10'>

                <div>
                    <h1 className={`text-5xl font-bold ${dancing_Script.className} text-center`}><Link className="cursor-pointer" href='/'>Next Form Pilot</Link></h1>
                </div>

            </section>
        </nav>
    );
};

export default Navbar;