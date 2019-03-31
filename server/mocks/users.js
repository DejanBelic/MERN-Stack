import UserModal from '../models/User';

const user1 = new UserModal({
  id: '421da',
  username: 'johndoe',
  email: 'jondoe@mail.com',
  role: 'admin'
});

const user2 = new UserModal({
  id: 'sada242',
  username: 'janedoe',
  email: 'janedoe@gmail.com',
  role: 'customer'
});

const users = [user1.getData(), user2.getData()]

export default users;