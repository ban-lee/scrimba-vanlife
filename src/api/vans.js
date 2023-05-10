import { collection, doc, getDoc, getDocs, orderBy, query } from 'firebase/firestore/lite';
import { getDb } from './firebase';

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
