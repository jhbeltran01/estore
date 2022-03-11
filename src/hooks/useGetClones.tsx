const useGetClones = (numberOfClones: number, products: {}[]) => {
  const clonesInTheFront: {}[] = [];
  for (let i = numberOfClones - 1; i > 0; --i) {
    clonesInTheFront.push(products[products.length - i]);
  }
  return [...clonesInTheFront, ...products, products[0]]
}

export default useGetClones;