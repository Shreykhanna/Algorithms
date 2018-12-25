function SelectionSort(array)
{
  var length=array.length;
  for(i=0;i<length-1;i++)
  {
    min_index=i;
    for(j=i+1;j<length;j++)
    {
      if(array[j]<array[min_index])
      {
        min_index=j;
      }
    }
    swap=array[min_index];
    array[min_index]=array[i];
    array[i]=swap;
  }
  return array;
}
var array=[7,8,6,5,4,1,2];
console.log("Elements before sort :  " + array);
console.log("Elements after sort  :  " + SelectionSort(array));
