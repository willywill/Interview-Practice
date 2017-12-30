import re

def RegExResult(r):
  return r.group(0)

givenInput = r'12/30/2017'

'''
 MM/DD/YYYY - 2 digits (0-9), followed by a slash, 2 digits (0-9),
 followed by a slash, 4 digits (0-9)
'''
regExp = re.search(r'\d{2}\/\d{2}\/\d{4}', givenInput)

print(RegExResult(regExp))
