import Bcrypt from 'bcrypt'

class PasswordHash {
  public static async hash(password: string): Promise<string> {
    const salt = await Bcrypt.genSalt(10)
    return Bcrypt.hash(password, salt)
  }

  public static async compare(password: string, hash: string): Promise<boolean> {
    return Bcrypt.compare(password, hash)
  }
}

export default PasswordHash
