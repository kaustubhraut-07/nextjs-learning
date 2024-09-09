export default function Todo({ todos }) {
    console.log(todos);
  
    return (
      <div>
        {todos?.map((todo) => (
          <div key={todo.id}>
            <h4>{todo.todo}</h4>
            <p>{todo.completed === true ? 'Completed' : 'Not Completed'}</p>
          </div>
        ))}
      </div>
    );
  }
  
  export async function getStaticProps() {
    // Call an external API endpoint to get posts
    const res = await fetch('https://dummyjson.com/todos');
    const posts = await res.json();
    const todos = posts.todos;
    console.log(posts, "123");
  
    return {
      props: {
        todos,
      },
    };
  }
  