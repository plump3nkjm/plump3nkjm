const crypto = require('crypto')

export class CryptoHandler {
    private algo: string = 'aes-256-cbc'
    private pass: string = 'D/x1BKN61ySJGGu4DT8g/5PMl3k4v54A' // crypto.randomBytes(32).toString('base64').substring(0, 32)
    private salt: string = 'D+L7NqnChXKn0Htq' // crypto.randomBytes(16).toString('base64').substring(0, 16)
    private enc: string = 'hex'

    encrypt(raw: string) {
        let iv = Buffer.from(this.salt)
        let cipher = crypto.createCipheriv(this.algo, Buffer.from(this.pass), iv)
        let encrypted = cipher.update(raw)

        encrypted = Buffer.concat([encrypted, cipher.final()])

        return encrypted.toString(this.enc)
    }

    decrypt(encrypted: any) {
        let iv = Buffer.from(this.salt)
        let encryptedText = Buffer.from(encrypted, this.enc)
        let decipher = crypto.createDecipheriv(this.algo, Buffer.from(this.pass), iv)
        let decrypted = decipher.update(encryptedText)

        decrypted = Buffer.concat([decrypted, decipher.final()])

        return decrypted.toString()
    }

    makeHash(raw: string) {
        return crypto.createHash('sha256').update(raw).digest('hex')
    }
}


/* debug */
const ch = new CryptoHandler()
const text = '0287c33447dc4811121b5da05f2b7505'
console.log(text)
const encrypted = ch.encrypt(text)
console.log('encrypted: ', encrypted)
const decrypted = ch.decrypt(encrypted)
console.log('decrypted: ', decrypted)
