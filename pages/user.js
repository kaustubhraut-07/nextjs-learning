// pages/user.js

import React from 'react';

export async function getServerSideProps() {
  // Fetch data from an API or database
  const res = await fetch('https://dummyjson.com/todos');
  const data = await res.json();
  const todos = data.todos;
  console.log(data);
//   console.log(res);
//   const data = await res.json();
    // console.log(data);
  // Pass data to the page via props
  return { props: { todos } };
}


const UserPage = ({ todos }) => {
  return (
    <div>
      <h1>User Page</h1>
      {
        todos?.map((todo)=>
         (
            < >
            <div key={todo.id}>
            <h4>
                {todo.todo}
                </h4>
                {/* <p> */}
                    {todo.completed === true ? 'true' : 'false'}
                    {/* </p> */}
                    </div>
                    </>
         )
        )
      }
    </div>
  );
};

export default UserPage;
