'''

Please complete the following function that accepts two parameters: a JSON-formatted string representing a dictionary, and a value. The function should return the key for a matching value if it exists in the dictionary represented by the JSON, and None otherwise.

JSON-formatted string	Property value	Output
{}	"Noor"	None
'{"age": 23}'	"Noor"	None
'{"name": "Noor"}'	"Noor"	"name"
Note: In the dictionary, there will only be zero or one entry with the specified property value.

'''

import json

def key_for_value(json_string, property_value):

    parsed = json.loads(json_string)
    for key,value in parsed.items():
        if value == property_value:
            return key

    return None
