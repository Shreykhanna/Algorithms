function binarysearch(array,tofind)
{
  var sortedArray=sort(array);
  for(i=0;i<sortedArray.length;i++)
  {
    if(sortedArray[i]===tofind)
    {
      return i;
    }
  }
  return -1;
}
function sort(array)
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
var tofind=6;
console.log("Positon of the array : "+binarysearch(array,tofind));
