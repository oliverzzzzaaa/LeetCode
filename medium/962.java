class Solution {
    public int maxWidthRamp(int[] A) {
        int maxWidth = -1;
        int leftidx = 0;
        int rightidx = A.length-1;
        for (int i = A.length-1; i > 0; i--) {
            leftidx = 0;
            while (leftidx < i && (i - leftidx) > maxWidth) {
                if (A[leftidx] <= A[i] && (i - leftidx) > maxWidth) {
                    maxWidth = i - leftidx;
                }
                leftidx++;
            }
        }
        return Math.max(maxWidth, 0);
    }
}