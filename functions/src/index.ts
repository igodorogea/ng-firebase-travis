import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';

admin.initializeApp();

export const toggleAdminRole = functions.https.onCall(async (data, context) => {
  if (context.auth!.token.admin !== true) {
    return { error: 'Request not authorized. User must be an admin to fulfill request.' };
  }
  const { userId, isAdmin } = data;
  const user = await admin.auth().getUser(data.userId);
  const userRef = admin.firestore().doc(`admins/${user.uid}`);
  if (isAdmin) {
    // set BE user role claims
    await admin.auth().setCustomUserClaims(user.uid, { admin: true });
    // set FE user role
    await userRef.set({ uid: userId });
    return { result: `Request fulfilled! User ${user.uid} is now an admin.` };
  } else {
    // remove BE user role claims
    await admin.auth().setCustomUserClaims(user.uid, null as any);
    // unset FE user role
    await userRef.delete();
    return { result: `Request fulfilled! User ${user.uid} is not an admin anymore.` };
  }
});
