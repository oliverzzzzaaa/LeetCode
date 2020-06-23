class Solution {
    public int[] nextGreaterElement(int[] nums1, int[] nums2) {
        int[] ans = new int[nums1.length];
        boolean right = false;
        boolean inserted = false;
        for (int i = 0; i < nums1.length; i++) {
            right = false;
            inserted = false;
            for (int j = 0; j < nums2.length; j++) {
                if (nums2[j] == nums1[i]) {
                    right = true;
                }
                if (right && nums2[j] > nums1[i]) {
                    ans[i] = nums2[j];
                    inserted = true;
                    break;
                }
            }
            if (!inserted) {
                ans[i] = -1;
            }
        }
        return ans;
    }
}