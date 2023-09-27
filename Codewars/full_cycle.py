'''
Imagine you have a list of integers. You start at the first item and use each value as a guide to decide where to go next.

Create a function that determines whether the input list forms a complete cycle or not.

Example
[1, 4, 3, 0, 2] ➞ True

# When you follow the list [1, 4, 3, 0, 2] as shown in the image,
# you visit every item once and return to the starting point, making it a "full cycle."

[1, 4, 0, 3, 2] ➞ False

[5, 3, 4, 2, 0, 1] ➞ True
Notes
The list will not contain any duplicate values.
All values are less than the length of the list (i.e., they are valid indices).
2 <= len(lst) <= 100

'''

def full_cycle(lst):
  comp = []
  pointer = 0

  for count in range(len(lst)):
    comp.append(lst[pointer])
    pointer = lst[pointer]

  return lst[pointer] == 0 and sorted(comp) == sorted(lst)

# test data
data_set = [
  [0, 1],
  [1, 0],
  [2, 1, 0],
  [2, 0, 1],
  [1, 2, 0, 3],
  [3, 2, 0, 1],
  [4, 1, 2, 3, 0],
  [2, 0, 4, 1, 3],
  [1, 3, 4, 0, 5, 2],
  [1, 5, 4, 2, 0, 3],
  [1, 5, 4, 2, 0, 3, 6],
  [6, 8, 3, 0, 2, 7, 4, 1, 5],
  [2, 8, 5, 9, 1, 3, 7, 4, 0, 6],
  [2, 17, 7, 19, 18, 9, 5, 15, 16, 8, 11, 6, 14, 4, 3, 13, 0, 12, 1, 10],
  [2, 17, 7, 19, 18, 9, 5, 15, 16, 8, 11, 6, 14, 4, 3, 13, 0, 12, 1, 10]
]

result = full_cycle(data_set[0])
print(result)