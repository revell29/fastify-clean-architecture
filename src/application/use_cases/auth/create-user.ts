import PasswordHash from '~/application/security/bcrypt'
import UserRepository from '~/infrastructure/repositories/user.repository'

export const createUser = async (email: string, phone_no: string, password: string) => {
  password = await PasswordHash.hash(password)
  return UserRepository.save({
    email,
    phone_no,
    password,
  })
}
