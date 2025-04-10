import Image from 'next/image';
import error_3 from "../../public/error_3.jpg"
const Error = () => {
    return (
        <div className='-my-12'>

            <Image className='max-w-full object-contain max-h-[calc(100vh-140px)]' src={error_3} alt='error' layout='object-contain' />
        </div>
    );
};
export default Error;