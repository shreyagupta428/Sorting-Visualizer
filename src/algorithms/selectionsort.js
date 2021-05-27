export const selectionsortanimations=(array)=>{
   const animations=[];
   let i=0,j,miniindex=0;
   let n=array.length;
  // console.log(n)
   for(i=0;i<n-1;i++)
   {
       miniindex=i;

       for(j=i+1;j<n;j++)
       {
           //comparison index
           animations.push([0,j,miniindex]);
           //revert color to turqouise
           animations.push([1,j,miniindex]);

           if(array[j]<array[miniindex])
           {

               miniindex=j;
           }
       }
       
       // swap miniindex and i;
       //swapping index
       animations.push([2,i,miniindex]);
       //changing swapped nodes color back to turqouise
       animations.push([4,i,miniindex]);
       let temp=array[i];
       array[i]=array[miniindex];
       array[miniindex]=temp;

       //final sorted
       animations.push([3,i,i]);
   }
   //final sorted
   animations.push([3,i,i]);
   //console.log(animations)
   return animations;
}