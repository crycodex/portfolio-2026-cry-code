import { ref, onMounted } from "vue";
import { doc, getDoc, increment, updateDoc } from "firebase/firestore";
import { db } from "../firebase/client";

const VISITS_DOC_PATH = ["visitas", "JkHSLw8wOc5J7QRrnKS3"] as const;

export const useVisitCounter = () => {
  const count = ref<number | null>(null);

  onMounted(async () => {
    try {
      const visitsRef = doc(db, ...VISITS_DOC_PATH);
      await updateDoc(visitsRef, { contador: increment(1) });
      const snapshot = await getDoc(visitsRef);
      count.value = snapshot.data()?.contador ?? null;
    } catch {
      count.value = null;
    }
  });

  return { count };
};
