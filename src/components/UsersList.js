import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchUsers, addUser } from '../store';
import Button from './Button';
import Skeleton from './Skeleton';
import usethunk from '../hooks/use-thunk';

function UsersList() {
   const [doFetchUsers, isLoadingUsers, loadingUsersError] =
       usethunk(fetchUsers);
       const [doCreateUser, isCreatingUser, creatingUserError] =
       usethunk(addUser);

  const {data} = useSelector((state) => {
    return state.users;
  })

    useEffect (() => {
      doFetchUsers();
    }, [doFetchUsers]);

    const handleUserAdd = () => {
     doCreateUser();
    };

    if (isLoadingUsers) {
      return <Skeleton times={6} className="h-10 w-full"/>;
    }

    if (loadingUsersError) {
      return <div>Error fetching data...</div>
    }

    const renderedUsers = data.map((user) =>{
      return <div key={user.id} className="mb-2 border rounded">
        <div className="flex p-2 justify-between items-center cursor-pointer">
         {user.name}
        </div>
      </div>
    });

    return <div>
       <div className="flex flex-row justify-between m-3">
        <h1 className="m-2 text-xl">Users</h1>
        <Button onClick={handleUserAdd}>
          + Add User
        </Button>

       </div>
          
      {renderedUsers}
    </div>;

  

  
}

export default UsersList;
