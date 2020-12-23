function binary_search(arr,x){
    let i = 0;
    let j = arr.length;
    while(i !== j){
        let m = Math.floor((i + j) / 2);
        if(x ===arr[m]){
            return m;
        }
        if(x < arr[m]){
            j - m;
        }else{
            i = m + 1;
        }
        return null;
    }
}