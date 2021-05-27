let animations = [];
export const GetQuickSortAnimation=(array)=>{
        animations = [];
        let arr = array.slice(0);
        QuickSort(arr, 0, arr.length - 1);
        for(let i=0;i<arr.length;i++)
        {
            //final sorted array
            animations.push([3,i,i]);
        }
        return animations;
}

function QuickSort(arr, low, high){
    
    if(low < high){
        let pi = Partition(arr, low, high);
        QuickSort(arr, low, pi - 1);
        QuickSort(arr, pi + 1, high);
    }
}


function Partition(arr, low, high){
    let pivot=arr[high]

    //pivot element
    animations.push([5,high, high]);
    let i = low - 1;//smaller element
    for (let index = low; index <= high - 1; index++) {
        //comparison with pivot element
        animations.push([0,index,high]);
        //revert colors back to turqouise
        animations.push([1,index,high]);

        if( arr[index] < pivot){
            i++;
            //swap
            let temp = arr[i];
            arr[i] = arr[index];
            arr[index] = temp;
            //swapping with pivot element
            animations.push([2,i, index]);
            //changing swapped colors back to turqouise
            animations.push([4,i, index]);
        }
    }
    let temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;
    //swapping with pivot element
    animations.push([2,i + 1, high]);
    //changing swapped colors back to turqouise
    animations.push([4,i + 1, high]);
    return i + 1;
}