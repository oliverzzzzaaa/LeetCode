class Solution {
    public int leastBricks(List<List<Integer>> wall) {
        int[] lookup = new Array(wall.size());
        Arrays.fill(lookup, 0);
        int totallen = 0;
        for (int i = 0; i < wall[0].size(); i++) {
            totallen += wall[0][i];
        }
        int[] level;
        int x;
        ArrayList<ArrayList<int>> boolwall = new ArrayList<ArrayList<int>>();
        for (int j = 0; j < totallen; j++) {
            level = new int[totallen];
            x = 0;
            for (int y = 0; y < )
        }

    }
}