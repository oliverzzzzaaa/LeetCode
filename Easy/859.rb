require 'byebug'
def buddy_strings(a, b)
    
    h1 = Hash.new(0)
    a.each_char do |char|
        h1[char]+=1
    end
    h2 = Hash.new(0)
    b.each_char do |char|
        h2[char]+=1
    end
    return false if h1 != h2
    while a.length > 0
        debugger
        if a[0] == b[0]
            a = a.split("")
            a = a.shift
            a = a.join("")
            b.split("").shift.join("")
        elsif
            b.include?(a[0])
            indices = []
            b.each_char.with_index {|char, idx| indices << idx if char == a[0]}
            indices.each do |i|
                newa = a.dup
                newb = b.dup
                newa[0],newa[i] = newa[i],newa[0]
                return true if newa = newb
            end
        end
    end
    false
end

p buddy_strings("ab",'ab')
                
                