import { useUsers } from "../context/users/index";
import type { User } from "../types/user";


export const Home = () => {
  const { data, isLoading, isError } = useUsers()

  if (isLoading) {return <p>Loading...</p>}
  if (isError) {return <p>Error loading users. Please try again.</p>}

  return (
    <>
    <p>{data?.length || 0} users</p>
    {data?.map((user: User, index: number) => (
      <div key={user.id ?? index}>
        <h2>{user.name}</h2>
      </div>
    ))} 
    </>
  );
};
