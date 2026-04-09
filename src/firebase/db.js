import { 
    getFirestore, 
    collection, 
    getDocs,
    where,
    query,
    doc,
    getDoc
} from "firebase/firestore";
import { app } from "./config";
import { exp } from "firebase/firestore/pipelines";

const db = getFirestore(app);



const getProducts = async () => {
  const querySnapshot = await getDocs(collection(db, "products"));
  const products = [];

    querySnapshot.forEach((doc) => {
      products.push({...doc.data() , id: doc.id});
    });
  return products;
};

const getCategories = async () => {
  const querySnapshot = await getDocs(collection(db, "categories"));
  const categories = [];

    querySnapshot.forEach((doc) => {
      categories.push(doc.data().name);
    });
  return categories;
};



const getProductById = async (id) => {
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);

    if(docSnap.exists()){
        return { ...docSnap.data(), id: docSnap.id };
    }else{
        console.log("No such document!");
    }
    
  return product;
};

export { getProducts, getCategories, getProductById };
