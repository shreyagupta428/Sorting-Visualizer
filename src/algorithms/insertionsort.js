export const insertionsortanimations =(array)=>{
    const animations=[];
    let i=0;
    if(array.length === 1)
    return;
    for(i=1;i<array.length;i++)
    {   //key or pivot element
        animations.push([5,i,i])
        let key =array[i],j=i-1;
        while(j>=0 && array[j]>key)
        {
            let temp=array[j+1];
            array[j+1]=array[j];
            array[j]=temp;
            //array[j+1]=array[j];
            //comparison
            animations.push([0,j+1,j]);
            animations.push([1,j+1,j]);
            //swapping 
            animations.push([2,j+1,j]);
            animations.push([4,j+1,j]);
            j--;
        }
        // animations.push([j+1,i]);
        // animations.push([j+1,key]);
        // array[j+1]=key;
        
    }
    for(i=0;i<array.length;i++)
    {
        //final sorted array
        animations.push([3,i,i]);
    }
    console.log(animations)
    return animations;
}