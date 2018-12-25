function insertionSort(array){
  for(i=1;i<array.length;i++)
  {
    key=array[i];
    j=i-1;
    while(j>=0 && array[j] > key)
    {
      array[j+1]=array[j];
      j=j-1;
    }
    array[j+1]=key;
   }
  return array;
}
array=[7,6,5,4,3,2,1];
console.log("Array before sorting : "+array);
console.log("Array after sorting : "+insertionSort(array));
