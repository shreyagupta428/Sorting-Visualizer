export const bubblesortanimations=(array)=>{
    const animations=[];
    let i=0,j=0;
    for(i=0;i<array.length-1;i++)
    {
        for(j=0;j<array.length-i-1;j++)
        {
            //comparison node
            animations.push([0,j,j+1]);
            // These are the values that we're comparing; we push them a second
            // time to revert their color.
            animations.push([1,j,j+1]);

            if(array[j]>array[j+1])
            {
                //swap nodes j and j+1
                let temp=array[j+1];
                array[j+1]=array[j];
                array[j]=temp;
                animations.push([2,j,j+1]);
                animations.push([4,j,j+1]);
            }
            else
            {
                //no swapping
                // animations.push([-1,-1]);
            }
            
        }
        animations.push([3,array.length-1-i,array.length-1-i]);
    }
    animations.push([3,0,0]);
    return animations;
}