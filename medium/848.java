class Solution {
    public String shiftingLetters(String S, int[] shifts) {
        String alphabet = "abcdefghijklmnopqrstuvwxyz";
        char[] newstring = new char[S.length()];
        int sum = 0;
        char x;
        for (int i = shifts.length-1; i >= 0; i--) {
            sum += shifts[i] % 26;
            x = S.charAt(i);
            newstring[i] = alphabet.charAt((alphabet.indexOf(x) + sum) % 26);
        }
        return String.valueOf(newstring);
    }
}