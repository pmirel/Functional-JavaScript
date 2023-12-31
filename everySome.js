function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    // SOLUTION GOES HERE
    return submittedUsers.every((user) =>
      goodUsers.some((goodUser) => goodUser.id === user.id)
    );
  };
}

module.exports = checkUsersValid;
