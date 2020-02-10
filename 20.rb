def is_valid(s)
    return true if s.length < 1
    return false if s.length == 1
    array = s.split("")
    stack = [array.shift]
    until array.length < 1
        case array.first
        when "("
            stack.push(array.first)
            array.shift
        when "{"
            stack.push(array.first)
            array.shift
        when "["
            stack.push(array.first)
            array.shift
        when ")"
            return false if stack.last != "("
            stack.pop
            array.shift
        when "}"
            return false if stack.last != "{"
            stack.pop
            array.shift
        when "]"
            return false if stack.last != "["
            stack.pop
            array.shift
        end
    end
    return true if stack.empty?
    return false
end