// components/Header.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white p-4 shadow-md">
           
      <div className="flex items-center justify-between lg:1440 md:650 ">
      <div className="relative inline-block"><Image src="/assets/logo.png" width={38} height={18} alt="Furniro Logo" className=":w-full h-auto "/>
  <div className="absolute top-0 left-7  bg-opacity-30 text-gray-500 p-4">
    <p>Furniro</p>
  </div>
</div>


        <nav className='Navbar'>
          <ul className="flex space-x-7">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/shop">Shop</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="#"><Image src="/assets/signup.jpg" alt="Logo" width={20} height={15}/></Link></li>
            <li><Link href="#"><Image src="/assets/searchicon.png" alt="Logo" width={20} height={15}/></Link></li>
            <li><Link href="#"><Image src="/assets/heart.png" alt="Logo" width={20} height={15}/></Link></li>

          </ul>
        </nav>
      </div>
    </header>
  );
}
