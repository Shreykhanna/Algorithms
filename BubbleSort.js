function sortBubble(data){
  for(i=0;i<data.length;i++){
    for(j=0;j<data.length-1;j++){
      if(data[j]>data[j+1]){
        temp=data[j];
        data[j]=data[j+1];
        data[j+1]=temp;
      }
    }
  }
  return data
}
console.log(sortBubble([8,7,6,5,4,3,3,1]))