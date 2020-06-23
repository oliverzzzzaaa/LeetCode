class Solution {
    public int[] replaceElements(int[] arr) {
        int largest = arr[arr.length-1];
        int temp;
        arr[arr.length-1] = -1;
        for (int i = arr.length-2; i>=0; i--) {
            if (arr[i] > largest) {
                temp = arr[i];
                arr[i] = largest;
                largest = temp;
            } else {
                arr[i] = largest;
            }
        }
        return arr;
    }
}