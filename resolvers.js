const users = [
  {
    id: 1,
    name: 'Brian',
    age: '21',
    shark: 'Great White Shark',
  },
  {
    id: 2,
    name: 'Kim',
    age: '22',
    shark: 'Whale Shark',
  },
  {
    id: 3,
    name: 'Faith',
    age: '23',
    shark: 'Hammerhead Shark',
  },
  {
    id: 4,
    name: 'Joseph',
    age: '23',
    shark: 'Tiger Shark',
  },
  {
    id: 5,
    name: 'Joy',
    age: '25',
    shark: 'Hammerhead Shark',
  },
];

const getUser = function (args) {
  const userId = args.id;
  return users.filter((u) => u.id === userId)[0];
};

const getUsers = function (args) {
  if (args.shark) {
    const shark = args.shark;
    return users.filter((u) => u.shark === shark);
  } else {
    return users;
  }
};

const updateUser = function ({ id, name, age }) {
  users.map((user) => {
    if (user.id === id) {
      user.name = name;
      user.age = age;
      return user;
    }
  });
  return users.filter((u) => u.id === id)[0];
};

const root = {
  user: getUser,
  users: getUsers,
  updateUser: updateUser,
};

module.exports = { root };
