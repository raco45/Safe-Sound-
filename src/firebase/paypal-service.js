import { getAuth, onAuthStateChanged } from "firebase/auth";
import { addDoc, collection, doc, setDoc, updateDoc } from "firebase/firestore";
import { useUser } from "../Contexts/UserContext";
import { db } from "./config";

export const registerInvoice = async (
  userid,
  paymentId,
  patientName,
  therapistName,
  therapyAmount,
  totalAmount
) => {
  await createInvoice({
    id: userid,
    pagoId: paymentId,
    nombrePaciente: patientName,
    nombreTerapista: therapistName,
    precioTerapia: therapyAmount,
    precioTotal: totalAmount,
  });
};

export async function createInvoice(data) {
  return addDoc(collection(db, "userInvoices"), data);
}

export async function updateInvoice(userId, data) {
  const invoiceRef = doc(db, "userInvoices", userId);

  await updateDoc(invoiceRef, data);
}
