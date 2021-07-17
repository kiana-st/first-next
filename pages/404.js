import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router';


const NotFound = () => {
    const router = useRouter();

    useEffect(()=>{
        setTimeout(()=> {
            // router.go()
            router.push('/');
        }
        ,3000)
    }, [])
    return ( 
        <div className="not-found">
            <h1>صفحه مورد نظر یافت نشد</h1>
            <h2>This page didnt found</h2>
            <p>برگشت به <Link href="/">خانه</Link></p>
        </div>
     );
}
 
export default NotFound;

