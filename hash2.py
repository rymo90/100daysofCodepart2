#hashtabel convertera sträng till nyckel
def hash2(s):
    result = 0
    for c in s:
        result = result*32 + ord(c)
    return result
a = hash2("Hi")
print(a%13)
