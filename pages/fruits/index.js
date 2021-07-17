import Head from 'next/head'
import styles from '../../styles/fruits.module.css'
import Link from 'next/link'

export const  getStaticProps= async ()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    return {
        props: { Fruits: data}
    }
}
const Test = ({Fruits}) => {
    return ( 
        <>
            <Head>
                <title>Fruit SHop | Fruit</title>
                <meta name="keywords" content="fruits"/>
            </Head>
            <div>
                <h1>Fruits List</h1>
                {Fruits.map(fruit =>(
                    <Link href={'/fruits/' + fruit.id} key={fruit.id}>
                        <a className={styles.single}><h3>{fruit.name}</h3></a>
                    </Link>
                ))}
            </div>
        </>
     );
}
 
export default Test;