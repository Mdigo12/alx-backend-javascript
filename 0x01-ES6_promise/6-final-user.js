import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  return Promise.allSettled([userPromise, photoPromise])
    .then((results) => {
      const result = [];
      results.forEach((item) => {
        if (item.status === 'fulfilled') {
          result.push({ status: item.status, value: item.value });
        } else {
          result.push({ status: item.status, value: `${item.reason}` });
        }
      });
      return result;
    });
}
