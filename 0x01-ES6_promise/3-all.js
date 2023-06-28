import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const photoPromise = uploadPhoto();
  const userPromise = createUser();

  return Promise.all([photoPromise, userPromise])
    .then(([photoResults, userResults]) => {
      console.log(`${photoResults.body} ${userResults.firstName} ${userResults.lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
