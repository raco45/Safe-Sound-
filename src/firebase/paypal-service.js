import { getAuth, onAuthStateChanged } from "firebase/auth";
import { addDoc, collection, doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "./config";

export const registerInvoice = async (
  user,
  paymentId,
  patientName,
  therapistName,
  therapiesQuantity,
  therapyAmount,
  totalAmount
) => {
  await createInvoice({
    id: user.uid,
    paymentId,
    patientName,
    therapistName,
    therapiesQuantity,
    therapyAmount,
    totalAmount,
  });
};

export async function createInvoice(data) {
  return addDoc(collection(db, "userInvoices"), data);
}

export async function updateInvoice(userId, data) {
  const invoiceRef = doc(db, "userInvoices", userId);

  await updateDoc(invoiceRef, data);
}
