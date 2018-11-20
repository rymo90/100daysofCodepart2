x = int(input())
svr= []

for i in range(x):
    y = int(input())
    temp= 1
    res= 1
    while temp <= y:
        res *= temp
        
        temp += 1
    if res > 9:
        tn= str(res).strip()
        svr.append(int(tn[-1]))
    else:
        svr.append(res)
for k in range(len(svr)):
    print(svr[k])
