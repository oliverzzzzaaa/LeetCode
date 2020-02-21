var merge = function(nums1, m, nums2, n) {
    let start = m-1;
    let otheridx = n-1;
    for (let i = nums1.length - 1; i >= 0; i--) {
        if (start < 0) {

            nums1[i] = nums2[otheridx];
            otheridx -=1;
        } else if (otheridx < 0){

            nums1[i] = nums1[start];
            start-=1;
        } else if (nums2[otheridx] > nums1[start]) {
            nums1[i] = nums2[otheridx];
            otheridx -=1;

        } else if (nums2[otheridx] <= nums1[start]) {
            nums1[i] = nums1[start];
            start-=1;

        } 
    }

};

console.log(merge([1], 1, [], 0))
