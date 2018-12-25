function bubblesort(array)
{
  for(i=0;i<array.length;i++)
  {
    for(j=i+1;j<array.length;j++)
    {
      if(array[i]>array[j])
      {
        swap=array[i];
        array[i]=array[j];
        array[j]=swap;
      }
    }
  }
  return array;
}
var array=[4,6,7,1,2,3];
console.log("Array before sorting : "+array);
console.log("Array after sorting : "+bubblesort(array));
