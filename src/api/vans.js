import { collection, doc, getDoc, getDocs, orderBy, query, where } from 'firebase/firestore/lite';
import { getAuth, getDb } from './firebase';

export async function getAllVans() {
  const q = query(collection(getDb(), 'vanlife-vans'), orderBy('name'));
  const querySnapshot = await getDocs(q);
  const vans = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return vans;
}

export async function getVan(id) {
  const vanRef =  doc(getDb(), 'vanlife-vans', id);
  const vanSnapshot = await getDoc(vanRef);

  return {
    ...vanSnapshot.data(),
    id: vanSnapshot.id,
  };
}

export async function getHostVans() {
  const hostId = getAuth().currentUser.uid;
  const q = query(
    collection(getDb(), 'vanlife-vans'),
    where('hostId', '==', hostId)
  );
  const querySnapshot = await getDocs(q);
  const vans = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return vans;
}
