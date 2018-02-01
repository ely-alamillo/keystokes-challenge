const getFullname = (firstName, lastName) => {
  firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
  lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
  const fullname = `${firstName} ${lastName}`;
  return fullname;
};

module.exports = { getFullname };
