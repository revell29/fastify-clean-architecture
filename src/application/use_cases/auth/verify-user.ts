import PasswordHash from '~/application/security/bcrypt'
import UserRepository from '~/infrastructure/repositories/user.repository'

export const VerifyUser = async (email: string, password: string) => {
  const user = await UserRepository.findOne(email)
  if (!user) {
    throw new Error('User not found')
  }

  const isValid = await PasswordHash.compare(password, user.password)
  if (!isValid) {
    throw new Error('Email or password is invalid')
  }

  return user
}
