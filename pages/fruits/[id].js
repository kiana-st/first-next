export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
  
    // map data to an array of path objects with params (id)
    const paths = data.map(fruit => {
      return {
        params: { id: fruit.id.toString() }
      }
    })
  
    return {
      paths,
      fallback: false
    }
  }
  
  export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();
  
    return {
      props: { fruit: data }
    }
  }
  
  const Details = ({ fruit }) => {
    return (
      <div>
        <h1>{ fruit.name }</h1>
        <p>{ fruit.email }</p>
        <p>{ fruit.website }</p>
        <p>{ fruit.address.city }</p>
      </div>
    );
  }
  
  export default Details;