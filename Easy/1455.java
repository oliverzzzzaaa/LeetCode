class Solution {
    public int isPrefixOfWord(String sentence, String searchWord) {
        String[] sent_arr = sentence.split(" ");
        String word;
        for (int i = 0; i < sent_arr.length; i++) {
            word = sent_arr[i];
            if (word.indexOf(searchWord) == 0) {
                return i+1;
            }
        }
        return -1;
    }
}