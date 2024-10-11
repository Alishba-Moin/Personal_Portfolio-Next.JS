import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

const services = [
  {
    num: '01',
    title: 'Web Development',
    description: 'I build modern, responsive websites using Next.js, React.js, and Tailwind CSS. My goal is to create seamless, device-friendly experiences.',
    href: '#'
  },
  {
    num: '02',
    title: 'UI/UX Design',
    description: 'I create engaging user interfaces focused on enhancing user experience. My designs are both functional and visually appealing.',
    href: '#'
  },
  {
    num: '03',
    title: 'AI Integration & Automation',
    description: 'I leverage AI and machine learning to streamline tasks and enhance user interaction. My aim is to create more efficient applications.',
    href: '#'
  },
  {
    num: '04',
    title: 'SEO',
    description: 'I improve website performance through coding best practices and SEO strategies. This ensures your site is fast and search-engine friendly.',
    href: '#'
  }
];

export default function Service() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-4 xl:py-1">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-[60px]">
        {services.map((service, index) => {
          return (
            <div className="flex flex-col justify-center gap-4 group" key={index}>
              <div className="flex w-full justify-between items-center">
                <div className="text-4xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                  {service.num}
                </div>
                <Link 
                  href={service.href} 
                  target="_blank"
                  className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                >
                  <BsArrowDownRight className="text-primary text-2xl" />
                </Link>
              </div>
              <h2 className="text-[30px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                {service.title}
              </h2>
              <p className="text-white/60">{service.description}</p>
              <div className="border-b border-white/20 w-full"></div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
