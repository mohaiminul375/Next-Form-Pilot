import { Dancing_Script } from "next/font/google";
export const dancing_Script = Dancing_Script({
    weight: '700',
    subsets: ['latin'],
});
const Navbar = () => {
    return (
        <nav className='bg-foreground  h-20'>
            <section className='flex justify-center items-center text-white h-20 px-10'>

                <div>
                    <h1 className={`text-5xl font-bold ${dancing_Script.className} text-center`}>Next Form Pilot</h1>
                </div>

            </section>
        </nav>
    );
};

export default Navbar;