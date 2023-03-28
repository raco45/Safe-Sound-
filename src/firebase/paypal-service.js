export async function updateInvoice(userId, data) {
  const invoiceRef = doc(db, "userInvoices", userId);

  await updateDoc(invoiceRef, data);
}
