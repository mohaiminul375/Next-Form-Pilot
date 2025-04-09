import Link from 'next/link';


const Footer = () => {
    return (
        <footer className='h-20 text-white bg-foreground flex justify-center items-center'>
            <div className='text-lg font-bold'>
                <h3>©All Right and reserved by <Link
                target='_blank' className='hover:underline' href='https://mohaiminul-dev.web.app/'
                >@Mohaiminul Islam</Link> 2025</h3>
            </div>
        </footer>
    );
};

export default Footer;