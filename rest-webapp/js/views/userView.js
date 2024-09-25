// userView.js
const userView = (() => {
    const renderUsers = (users) => {
        const userList = document.getElementById('userList');
        userList.innerHTML = ''; // Clear the list

        users.forEach((user) => {
            const li = document.createElement('li');
            li.textContent = user.name;
            userList.appendChild(li);
        });
    };

    return {
        renderUsers,
    };
})();
