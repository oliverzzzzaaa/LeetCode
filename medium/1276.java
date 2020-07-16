class Solution {
    public List<Integer> numOfBurgers(int tomatoSlices, int cheeseSlices) {
        List<Integer> empty = new ArrayList<Integer>();
        if (tomatoSlices % 2 != 0) return empty;
        int numSmall = cheeseSlices;
        int numLarge = 0;
        int tomatoremaining = tomatoSlices - (cheeseSlices * 2);
        if (tomatoremaining < 0 || (tomatoSlices > (cheeseSlices * 4))) return empty;
        while (tomatoremaining > 0) {
            numLarge++;
            numSmall--;
            tomatoremaining-=2;
        }
        empty.add(numLarge);
        empty.add(numSmall);
        return empty;
    }
}