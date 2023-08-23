# Function using loop to add up items in an array

def sum(arr):
    total = 0
    for x in arr:
        total += x
    return total

# print(sum([ 1, 2, 3, 4 ]))

# The same function written recursively

def recursive_sum(arr):
    if not arr:
        return 0
    else:
        return arr[0] + recursive_sum(arr[1:])

print(recursive_sum([ 1, 2, 3, 4 ]))