'''

Please complete the following function that takes a list of dictionaries and a key. The function should return a list of the same length as the input. For each position in the returned list, it should have a True value if the corresponding dictionary value in the input list has the indicated key. Otherwise, the position in the list should have False.

List of dictionaries	Key	Output
[{"age": 10}, {"age": 12}]	"age"	[True, True]
[{"age": 10}, {"remote": False}]	"age"	[True, False]
[]	"age"	[]

'''

def key_in_dict(list_of_dicts, key):
    result = []

    for dict in list_of_dicts:
        if key in dict:
            result.append(True)
        else:
            result.append(False)

    return result