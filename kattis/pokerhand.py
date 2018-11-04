x= input().split()
lis= []
maximum= 0
pocker= "A23456789TJQK"
dic= {}
for i in range(len(pocker)):
    dic[pocker[i]] = 0

for j in range(len(x)):
    dic[x[j][0]] += 1
    lis.append(x[j][0])
last = list(set(lis))
# print(last)
for k in range(len(last)):
    val= dic[last[k]]
    if maximum <  val:
        maximum= val
print(maximum)
