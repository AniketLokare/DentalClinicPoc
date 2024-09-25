// userController.js
const userController = ((model, view) => {
  const init = async () => {
      await model.fetchUsers(); // Fetch users from the API
      view.renderUsers(model.getUsers()); // Render users on load
  };

  const handleAddUser = async (event) => {
      event.preventDefault();
      const userNameInput = document.getElementById('userName');
      const userName = userNameInput.value;

      if (userName) {
          await model.addUser(userName); // Add new user through model
          view.renderUsers(model.getUsers()); // Update the view with the new user
          userNameInput.value = ''; // Clear input field
      }
  };

  document.getElementById('userForm').addEventListener('submit', handleAddUser);

  return {
      init,
  };
})(userModel, userView);
