import logoImage from '../assets/Profile.png';

function AboutPage() {
    return (
        <div className='bg-[#432749]'>
        <div className='hidden md:block bg-[#432749] mx-auto w-[92%]'>
        <div className="container grid grid-cols-2 gap-4 pt-5  mb-0 ml-5  ">
            <div className='mx-auto my-auto'>
                <h4 className="my-3 text-xl font-semibold text-white">Hello, It's Me</h4>
                <h3 className="my-3 text-3xl font-semibold text-white">Vignesh B</h3>
                <h4 className="my-3 text-lg font-semibold text-white">and I'm Looking for <span className="text-[#cbacd2] font-semibold text-3xl my-3">Full Stack Java Developer</span></h4>
                <p className="font-bold text-white">As a dedicated and enthusiastic fresher with a strong foundation in
                    Java, SQL, Spring Boot, Boostrap. I am seeking a position with a forward-thinking company that provides an opportunity for constant evolution
                    and exploration. Eager to contribute as a team member in this dynamic
                    world, I am committed to leveraging my skills and learning from
                    experienced professionals to drive mutual growth and success.
                </p>
                <div className=' my-3'>
                <a href='' className='p-2 mx-auto my-2 text-white rounded-lg bg-slate-400 justify-items-center hover:bg-slate-600'>View Resume</a>
                </div>
                
            </div>
            <div className='mx-auto my-auto mb-0'>
                {/* Set max-height to limit image size */}
                <img src={logoImage} alt="Logo" className="object-scale-down max-h-96" />
            </div>
        </div>
        </div>
        <div className='block md:hidden bg-[#432749]'>
        <div className="container mx-auto w-[92%]">
            <div className='mx-auto my-auto'>
                <h4 className="mx-4 mt-0 text-xl font-semibold text-white ">Hello, It's Me</h4>
                <h3 className="mx-4 my-3 text-3xl font-semibold text-white">Vignesh B</h3>
                <h4 className="mx-4 my-3 text-lg font-semibold text-white">and I'm Looking for <span className="text-[#cbacd2] font-semibold text-3xl my-3">Full Stack Java Developer</span></h4>
                <p className="mx-4 font-bold text-white text-ellipsis">As a dedicated and enthusiastic fresher with a strong foundation in
                    Java, SQL, Spring Boot, Boostrap. I am seeking a position with a forward-thinking company that provides an opportunity for constant evolution
                    and exploration. Eager to contribute as a team member in this dynamic
                    world, I am committed to leveraging my skills and learning from
                    experienced professionals to drive mutual growth and success.
                </p>
                <button className='p-2 mx-4 my-2 text-white rounded-lg justify-items-end bg-slate-400 hover:bg-slate-600'>View Resume</button>
            </div>
            
        </div>
        </div>
        </div>
        
    );
}

export default AboutPage;
