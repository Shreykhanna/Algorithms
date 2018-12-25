function Linearsearch(array, element)
    {
      for(i=0;i<array.length;i++)
      {
        if(array[i]===element)
         return i;
      }
      return -1;
    }
var array=[1,2,3,4,5];
var element=5;
console.log(Linearsearch(array,element));
