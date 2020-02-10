def compress(chars)
    newarr = []
    i = 1
    count = 1
    prev_char = chars.first
    while i < chars.length
        if chars[i] == prev_char
            count+=1
            prev_char = chars[i]
        else
            newarr << prev_char << count.to_s
            count = 1
            prev_char = chars[i]
        end
        i+=1
    end
    newarr << prev_char << count.to_s
    newarr.delete("1")
    p newarr
    newarr.length
end

p compress(["a","a","b","b","c","c","c"])