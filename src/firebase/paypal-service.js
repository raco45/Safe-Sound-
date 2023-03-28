import { db } from "./config";

export async function createInvoice(userId, data) {
  return setDoc(doc(db, "userInvoices", userId), data);
}

export const registerInvoice = async (
  patientName,
  therapistName,
  selectedPlan,
  therapiesQuantity,
  therapyAmount,
  totalAmount
) => {
  await createInvoice(result.user.uid, {
    patientName,
    therapistName,
    selectedPlan,
    therapiesQuantity,
    therapyAmount,
    totalAmount,
  });
};

export async function updateInvoice(userId, data) {
  const invoiceRef = doc(db, "userInvoices", userId);

  await updateDoc(invoiceRef, data);
}
