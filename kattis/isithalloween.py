x = input().split()
mon = x[0]
day = x[1]
svar= ""
if mon == "OCT" or mon == "DEC":
    if (mon == "OCT" and day == "31") or  (mon == "DEC" and day  == "25"):
        svar = "yup"
    else:
        svar = "nope"
else:
    svar= "nope"
print(svar)
