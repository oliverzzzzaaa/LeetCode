def third_max(nums)
    nums.uniq!
    return nums.max if nums.length < 3
    row = [nums.min,nums.min,nums.min]
    nums.each do |ele|
        if ele > row.first
            row = [ele, row.first, row[1]]
        elsif ele > row[1]
            row = [row.first, ele, row[1]]
        elsif ele > row[2]
            row = [row.first, row[1], ele]
        end
    end
    row.last
end