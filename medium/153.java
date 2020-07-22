class Solution {
    public int findMin(int[] nums) {
        if (nums.length < 1) return 0;
        if (nums.length == 1) return nums[0];
        int i = 1;
        while (i < nums.length && nums[i] > nums[i-1]) {
            i++;
        }
        if (i >= nums.length) return nums[0];
        return nums[i];
    }
}