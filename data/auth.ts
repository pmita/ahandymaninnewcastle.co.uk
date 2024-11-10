// NEXT
import { cookies } from 'next/headers';
// REACT
import {cache } from 'react';
// FIREBASE 
import { authSS } from '@/firebase/server';

export const validateUserSS = cache(async () => {
  const authToken = cookies().get('__firebase__token');

  if (!authToken) {
    console.warn('No auth cookie found found');
    return false
  }

  try {
    const decodedUser = await authSS.verifyIdToken(authToken.value);
  
    if (!decodedUser.uid) {
      console.warn('No user id was found');
      return false;
    }
  
    if (!decodedUser.email) {
      console.warn('No user email was found');
      return false
    }
  
    const current_time = Math.floor(Date.now() / 1000);
    if (decodedUser.exp < current_time) {
      console.warn('Token has expired');
      return false
    }
  
    if (decodedUser.authTime > current_time) {
      console.warn('Invalid auth time');
      return false
    }
  
    return true;
  } catch (error) {
    console.error('Error while verifying user token', error);
    return false;
  }

})