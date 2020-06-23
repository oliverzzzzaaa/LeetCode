class Solution {
    public boolean canReach(int[] arr, int start) {
        HashMap<Integer, Boolean> visited = new HashMap<Integer, Boolean>();
        return jump(arr, start, visited);
    }
    
    public boolean jump(int[] arr, int start, HashMap visited) {
        boolean ret = false;
        if (arr[start] == 0) {
            return true;
        }
        if (visited.get(start) != null) {
            return false;
        } else {
            visited.put(start, true);
        }
        if (start + arr[start] >= 0 && start + arr[start] < arr.length) {
            ret = ret || jump(arr, start+arr[start], visited);
        }
        if (start - arr[start] >= 0 && start - arr[start] < arr.length) {
            ret = ret || jump(arr, start-arr[start], visited);
        }
        return ret;
    }
}