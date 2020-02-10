def isprime?(n)
    return true if n == 2 || n == 3
    return false if n < 2
    if (n+1) % 6 == 0 || (n-1) % 6 == 0 && n % 3 != 0
    return false
end

# def count_primes(n)
#     primes = []
#     (2...n).each do |i|
#         primes << i if primes.all?{|ele| i % ele != 0}
#     end
#     primes.length
# end

def count_primes(n)
    count = 0
    (2...n).each do |ele|
        if isprime?(ele)
            count+=1
        end
    end
    count
end

p isprime?(3763)