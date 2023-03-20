import User from '../Models/User';
import { Op } from 'sequelize';
import { createToken } from '../Auth/jsonwebtokenfunctions';
import { compareHash } from '../Utils/bcrypt';

export default class LoginService {
  constructor (private model = User) { }

  public async login(user: string, password: string): Promise<string> {
    const userData = await this.model.findOne({
      where: { [Op.or]: [{ username: user }, { email: user }] },
      attributes: ['id', 'email', 'role', 'password'],
    });

    if (!userData) throw new Error('User not found');
    if (!compareHash(password, userData.password)) throw new Error('Incorrect password');

    const { id, email, role } = userData;

    const token = createToken({ id: Number(id), username: userData.username, email, role });

    return token;
  }
}
