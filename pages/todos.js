export default function todo({ posts }) {
    {
        posts?.todos?.map((todo)=>(<>
         <div key={todo.id}>
            <h4>
                {todo.todo}
                </h4>
                {/* <p> */}
                    {todo.completed === true ? 'true' : 'false'}
                    {/* </p> */}
                    </div>
        </>))
    }
  }

export async function getStaticProps() {
    // Call an external API endpoint to get posts
    const res = await fetch('https://dummyjson.com/todos')
    const posts = await res.json()
   console.log(posts)
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        posts,
      },
    }
  }