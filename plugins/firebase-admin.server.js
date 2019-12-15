import * as admin from 'firebase-admin'
if (!admin.apps.length) {
  const serviceAccount = process.env.GOOGLE_APPLICATION_CREDENTIALS
  admin.initializeApp({
    credential: admin.credential.cert(JSON.parse(serviceAccount))
  })
}

export default admin
