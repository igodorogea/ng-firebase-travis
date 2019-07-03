import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';

admin.initializeApp();

export const toggleAdminRole = functions.https.onCall(async (data, context) => {
  if (context.auth!.token.admin !== true) {
    return { error: 'Request not authorized. User must be an admin to fulfill request.' };
  }
  // set BE user role claims
  const user = await admin.auth().getUser(data.userUid);
  await admin.auth().setCustomUserClaims(user.uid, { admin: data.admin });
  // set FE user role
  const userRef = admin.firestore().doc(`users/${user.uid}`);
  await userRef.update({ admin: data.admin });
  return { result: `Request fulfilled! User ${user.uid} is now an admin.` };
});
