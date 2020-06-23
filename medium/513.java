/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public int findBottomLeftValue(TreeNode root) {
        ArrayList<TreeNode> queue = new ArrayList<TreeNode>();
        ArrayList<TreeNode> layer = new ArrayList<TreeNode>();
        queue.add(root);
        TreeNode currNode;
        while (queue.size() > 0) {
            for (int i = 0; i < queue.size(); i++) {
                currNode = queue.get(i);  
                if (currNode.left != null) {
                    layer.add(currNode.left);
                }
                if (currNode.right != null) {
                    layer.add(currNode.right);
                }
            }
            if (layer.size() < 1) {
                return queue.get(0).val;
            }
            queue.clear();
            for (int j = 0; j < layer.size(); j++) {
                queue.add(layer.get(j));
            }
            layer.clear();
        }
        return root.val;
    }
}