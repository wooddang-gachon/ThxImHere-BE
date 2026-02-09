class User {
  constructor({ id, name, pw, num }) {
    this.num = num;
    this.id = id;
    this.pw = pw;
    this.birth = birth || null;
    this.phone = phone || null;
  }
}

export default User;
