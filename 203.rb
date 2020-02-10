def remove_elements(head, val)
    dummy = ListNode.new("dummy")
    dummy.next = head
    prev_node = dummy
    node = head
    while !node.nil?
        if node.val != val
            prev_node = node
        else
            prev_node.next = node.next
        end
        node = node.next
    end 
    dummy.next
end