const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {

  let users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Mike',
      room: 'Node Course'
    },{
      id: '2',
      name: 'Jen',
      room: 'React Course'
    },{
      id: '3',
      name: 'James',
      room: 'Node Course'
    }];
  });

  it('should add new user', () => {
    let users = new Users();
    let user = {
      id: '123',
      name: 'Oscar',
      room: 'Quantico Fans'
    };
    let resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    let userID = '1';
    let user = users.removeUser(userID);

    expect(user.id).toBe(userID);
    expect(users.users.length).toBe(2);
  });

  it('should not remove a user', () => {
    let userID = '92';
    let user = users.removeUser(userID);

    expect(user).toNotExist;
    expect(users.users.length).toBe(3);
  });

  it('should find user', () => {
    let userID = '2';
    let user = users.getUser(userID);

    expect(user.id).toBe(userID);
  });

  it('should not find user', () => {
    let userID = '49';
    let user = users.getUser(userID);

    expect(user).toNotExist();
  });

  it('should return names for node course', () => {
    let userList = users.getUserList('Node Course');

    expect(userList).toEqual(['Mike', 'James']);
  });

  it('should return names for react course', () => {
    let userList = users.getUserList('React Course');

    expect(userList).toEqual(['Jen']);
  });
});
