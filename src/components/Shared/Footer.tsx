import Link from 'next/link';
const Footer = () => {
    return (
        <footer className='h-20 text-white bg-foreground flex justify-center items-center dark:border-t border-white border-dashed px-5'>
            <div className='text-lg font-semibold'>
                <h3 className='text-center'>©All Right and reserved by <Link
                    target='_blank' className='hover:underline hover:italic font-light' href='https://mohaiminul-dev.web.app'
                >@Mohaiminul Islam</Link> 2025</h3>
            </div>
        </footer>
    );
};

export default Footer;