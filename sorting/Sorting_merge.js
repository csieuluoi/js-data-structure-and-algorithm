function merge(arr1, arr2){
    i = 0;
    j = 0;
    m_arr = [];
    while(i < arr1.length && j <arr2.length)  {
        if (arr1[i] > arr2[j]) {
            m_arr.push(arr2[j]);
            j++;
        } else {
            m_arr.push(arr1[i]);
            i++;
        }
    }
    while(i < arr1.length) {
        m_arr.push(arr1[i]);
        i++;
    }
    while(j < arr2.length) {
        m_arr.push(arr2[j]);
        j++;
    }

    return m_arr;
}


function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}


m_arr = mergeSort([1, 3, 10, 40, 3, 5, 7, 2, 4, 1, 6, 5, 8]);
console.log(m_arr);