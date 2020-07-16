class Solution {
    public int findLength(int[] A, int[] B) {
        int maxlen = 0;
        for (int i = 0; i < A.length; i++) {
            for (int j = 0; j < B.length; j++) {
                if (A[i] == B[j]) {
                    maxlen = Math.max(maxlen, dfs(A, B, i, j));
                }
            }
        }
        return maxlen;
    }
    public static int dfs(int[] A, int[] B, int aindex, int bindex) {
        if (A[aindex] != B[bindex]) return 0;
        int count = 0;
        while ((aindex < A.length && bindex < B.length) && A[aindex] == B[bindex]) {
            count++;
            aindex++;
            bindex++;
        }
        return count;
    }
    
}