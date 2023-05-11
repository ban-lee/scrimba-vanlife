import { collection, getDocs, orderBy, query, where } from 'firebase/firestore/lite';
import { getAuth, getDb } from './firebase';

export async function getHostVans() {
  const hostId = getAuth().currentUser.uid;
  const q = query(
    collection(getDb(), 'vanlife-vans'),
    where('hostId', '==', hostId),
    orderBy('name')
  );
  const querySnapshot = await getDocs(q);
  const vans = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return vans;
}

export async function getHostReviews() {
  const hostId = getAuth().currentUser.uid;
  const q = query(
    collection(getDb(), 'vanlife-reviews'),
    where('hostId', '==', hostId)
  );
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((doc) => ({...doc.data()}));
}
