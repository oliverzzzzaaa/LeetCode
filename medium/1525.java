class Solution {
    public int numSplits(String s) {
        Set<Character> leftSet = new HashSet<Character>();
        Set<Character> rightSet = new HashSet<Character>();
        int count = 0;
        int [] left = new int[s.length()];
        int [] right = new int[s.length()];
        for (int i = 0; i < s.length(); i++) {
            char x = s.charAt(i);
            if (!leftSet.contains(x)) {
                leftSet.add(x);
            }
            left[i] = leftSet.size();
        }
        for (int i = s.length()-1; i > 0; i--) {
            char x = s.charAt(i);
            if (!rightSet.contains(x)) {
                rightSet.add(x);
            }
            right[i] = rightSet.size();
            if (right[i] == left[i-1]) {
                count++;
            } else if (right[i] > left[i-1]) {
                return count;
            }
        }
        return count;
    }
}