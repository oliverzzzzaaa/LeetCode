class Solution {
    public int findMinArrowShots(int[][] points) {
        if (points.length < 1) return 0;
        Arrays.sort(points, new Comparator<int[]>() {
		    public int compare(int[] a, int[] b) {
                if(a[0]==b[0]) return a[1]-b[1];
                else return a[0]-b[0];
            }
        });
        int[] start = points[0];
        int count = 1;
        int i = 1;
        while (i < points.length) {
            while(i < points.length && isOverlap(start, points[i])) {
                start[0] = Math.max(start[0], points[i][0]);
                start[1] = Math.min(start[1], points[i][1]);
                i++;
            }
            if (i < points.length) {
                count++;
                start = points[i]
            }
            i++;
        }
        return count;
    }

    public boolean isOverlap(int[] start, int[] point) {
        return (point[0] <= start[1]);
    }
}