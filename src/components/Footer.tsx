import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className='px-[5%] py-[2%] hyphens-auto bg-[rgba(169,220,237,0.5)] flex flex-col gap-10'>
      <Link aria-label={'Öffnet Navigationsseite im gleichen Tab'} href={'/'}>
        <Image
          src='/accessibility_logo.png'
          alt='Ein hellblaues Logo mit einem Rollstuhlfahrer Icon in der Mitte'
          width={30}
          height={20}
        />
      </Link>
      <div className='flex flex-row gap-10'>
        <div className='flex flex-col'>
          <div>
            <h2>Kontakt</h2>
            <p>Julia Konzett</p>
            <p>Fachhochschule Vorarlberg</p>
          </div>
        </div>
        <div className='flex flex-col'>
          <a href='#navigation'>Reduzierte Navigation</a>
          <a href='#scaling'>Skalierungsfunktioin</a>
          <a href='#contrast'>Hochkontrast</a>
          <a href='#backToTop'>Back to Top</a>
        </div>
      </div>
    </div>
  );
}
