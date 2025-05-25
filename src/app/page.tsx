import Image from "next/image";

export default function Home() {
  return (
    <section
      className="dark font-poppins relative h-screen w-full overflow-hidden bg-cover bg-fixed bg-center bg-no-repeat py-12 after:absolute after:top-0 after:left-0 after:block after:h-full after:w-full after:bg-black/65 after:content-[''] md:py-20"
      style={{ backgroundImage: `url(/images/bg.jpg)` }}
    >
      <div className='relative z-20 container h-full w-full max-w-[85rem]'>
        <div className='flex h-full w-full flex-col justify-end gap-12'>
          <div className='flex max-w-[61.375rem] flex-col gap-1 px-4'>
            <Image
              src='/images/absolutegravitas_logo.jpeg'
              alt='Absolute Gravitas Logo'
              className='mb-6 h-auto'
              width={50}
              height={50}
            />
            <p className='text-muted-foreground text-sm leading-none uppercase dark:text-white/70'>
              {`better than yesterday`}
            </p>
            <h1 className='text-foreground text-3xl !leading-snug md:text-4xl lg:text-6xl dark:text-white'>
              {`Absolute Gravitas LLC`}
            </h1>
          </div>
          <div className='flex w-full flex-col justify-between gap-5 px-4 sm:flex-row sm:items-center'>
            <p className='border-muted-foreground text-muted-foreground max-w-[20.25rem] border-l pl-6 text-base dark:border-white/70 dark:text-white/70'>
              {`Wyoming, USA`}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
