// FIREBASE ADMIN
import admin from "firebase-admin";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      type: process.env.NEXT_PUBLIC_FIREBASE_ADMIN_TYPE,
      project_id: process.env.NEXT_PUBLIC_FIREBASE_ADMIN_PROJECT_ID,
      private_key_id: process.env.NEXT_PUBLIC_FIREBASE_ADMIN_PRIVATE_KEY,
      private_key: process.env.NEXT_PUBLIC_FIREBASE_ADMIN_PRIVATE_KEY,
      client_email: process.env.NEXT_PUBLIC_FIREBASE_ADMIN_CLIENT_EMAIL,
      client_id: process.env.NEXT_PUBLIC_FIREBASE_ADMIN_CLIENT_ID,
      auth_uri: process.env.NEXT_PUBLIC_FIREBASE_ADMIN_AUTH_URI,
      token_uri: process.env.NEXT_PUBLIC_FIREBASE_ADMIN_TOKEN_URI,
      auth_provider_x509_cert_url: process.env.NEXT_PUBLIC_FIREBASE_ADMIN_AUTH_PROVIDER_X509_CERT_URL,
      universe_domain: process.env.NEXT_PUBLIC_FIREBASE_ADMIN_UNIVERSE_DOMAIN
    } as admin.ServiceAccount),
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  })
}

// SERVICES
const firestore = admin.firestore();
// HELPERS
const serverTimestamp = admin.firestore.FieldValue.serverTimestamp;

export { firestore, serverTimestamp };