import { createUser, uploadPhoto } from './utils';

async function asyncUploadUser() {
  let photo;
  let user;

  try {
    photo = await uploadPhoto();
    user = await createUser();
  } catch (error) {
    photo = null;
    user = null;
  }

  return { photo, user };
}

export default asyncUploadUser;
