class Solution {
    public int[] shuffle(int[] nums, int n) {
        int[] newArr = new int[n*2];
        int count = 0;
        for (int i = 0; i < nums.length; i++) {
            newArr[count] = nums[i];
            count++;
            newArr[count] = nums[n];
            n++;
            count++;
            if (n >= nums.length) {
                return newArr;
            }
        }
        return newArr;
    }
}