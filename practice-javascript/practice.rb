# # Write a function that accepts an array of strings and returns a new array containing every other string from the original array. For example, if the input is ["a", "b", "c", "d", "e", "f"], the output should be ["a", "c", "e"].

# def select_even_items(strings)
#   result = []
#   index = 0
#   strings.each do |string|
#     if index % 2 == 0
#       result << string
#     end
#     index = index + 1
#   end
#   result
# end

# p select_even_items(["a", "b", "c", "d", "e", "f"])
# # Write a method that accepts one argument - an array of numbers. The method should return the greatest number. For example, if the input is [5, 4, 8, 1, 2], the output should be 8.

# def max(numbers)
#   current_max = numbers[0]
#   numbers.each do |number|
#     if number > current_max
#       current_max = number
#     end
#   end
#   current_max
# end

# p max([5, 4, 8, 1, 2])
# # Write a method that accepts a number and returns its factorial. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

# def factorial(number)
#   result = 1
#   current_number = number
#   number.times do
#     result = result * current_number
#     current_number = current_number - 1
#   end
#   result
# end

# p factorial(5)
# # Write a method that accepts one argument - an array of numbers that are in ascending order. The method that returns a new array with the same values in descending order. However, do not use the "reverse" method built into Ruby.

# def descending(numbers)
#   result = []
#   index = numbers.length - 1
#   numbers.length.times do
#     result << numbers[index]
#     index = index - 1
#   end
#   result
# end

# p descending([1, 3, 5, 7])
# # Write a method that accepts two arrays of numbers, and returns an array of every sum of every combination of single numbers from the first and second array. For example, if the method receives [1, 5, 10] and [100, 500, 1000], the method should return this array: [101, 501, 1001, 105, 505, 1005, 110, 510, 1010].

# def sum_combinations(numbers1, numbers2)
#   result = []
#   numbers1.each do |number1|
#     numbers2.each do |number2|
#       result << number1 + number2
#     end
#   end
#   result
# end

# p sum_combinations([1, 5, 10], [100, 500, 1000])

# Exercise:
# Solve the following problems first in Ruby, then convert the solution to JavaScript.
# 1) Write a function that takes in an array of numbers and returns its sum.
# 2) Write a function that takes in an array of strings and returns the smallest string.
# 3) Write a function that takes in an array of numbers and returns a new array with the numbers in reverse order.
# 4) Write a function that takes in an array of words and returns the number of words that begin with the letter “a”.
# 5) Write a function that takes in an array of strings and joins them together to make a single string separated by commas.
# 6) Write a function that takes in an array of numbers and returns the product of all the numbers (each number multiplied by each other).
# 7) Write a function that takes in an array of numbers and returns the two smallest numbers.
# 8) Write a function that takes in an array of numbers and returns a count of how many zeros are in the array.
# 9) Write a function that takes in an array of numbers and returns true if all the numbers are bigger than 10, otherwise returns false.
# 10) Write a function that takes in an array of words and returns the number of times the letter “a” appeared in total.
# (solutions to half of the ruby problems: https://gist.github.com/peterxjang/a9a3827be5077abe008b62f6f9900d71)
# BONUS PROBLEMS
# Write a function that accepts a string and returns whether it’s a palindrome.
# Write a function to generate/print/store the first "n" prime numbers.
# Given a tic-tac-toe board (matrix of 3 x 3), write a function that can check to see whether X or O won.
# DOUBLE BONUS:
# Use the Ruby .map/.select/.reduce shortcuts to rewrite some of the Ruby problems!
# Use the JavaScript .map/.filter/.reduce shortcuts to rewrite some of the JavaScript problems

def sum_of_array(numbers)
  index = 0
  sum = 0
  while index < numbers.length
    sum = sum + numbers[index]
    index += 1
  end
  return sum
end

p sum_of_array([10, 2, 3, 5, 7])

def smallest_string(strings)
  index = 0
  shortest = strings.first
  shortest_length = shortest.length
  while index < strings.length
    if shortest_length <= strings[index].length
      return strings[index]
    end
    index += 1
  end
end

p smallest_string(["cat", "bird", "airplane"])

def reverse(numbers)
  reversed = []
  index = numbers.length - 1
  while index >= 0
    reversed << numbers[index]
    index -= 1
  end
  return reversed
end

p reverse([10, 2, 3, 5, 7])

def find_word_begin_with_a(strings)
  index = 0
  words = []
  while index < strings.length
    if strings[index][0] == "a"
      words << strings[index]
    end
    index += 1
  end
  return words
end

p find_word_begin_with_a(["apple", "car", "ball", "apron"])
