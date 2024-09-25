// userModel.js
const userModel = (() => {
  let users = [];

  const fetchUsers = async () => {
      try {
          const response = await fetch('http://localhost:8080/patient');
          users = await response.json();
          console.log(users);
      } catch (error) {
          console.error('Error fetching users:', error);
      }
  };

  const addUser = async (name) => {
      try {
          const response = await fetch('http://localhost:8080/api/users', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ name }),
          });
          const newUser = await response.json();
          users.push(newUser); // Add the user to local users array
      } catch (error) {
          console.error('Error adding user:', error);
      }
  };

  const getUsers = () => users;

  return {
      fetchUsers,
      addUser,
      getUsers,
  };
})();
