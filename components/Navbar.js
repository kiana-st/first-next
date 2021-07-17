import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import pic from '../public/logo.svg'

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Image src="/logo.svg" width={150} height={30}/>
            </div>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/fruits">fruits List</Link>

        </nav>
     );
}
 
export default Navbar;