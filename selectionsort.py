data= [7,2,4,5,1,90,12,40]
n = len(data)
print(data)
for i in range(n):
    minst= i
    for j in range(i+1, n):
        if data[j] < data[minst]:
            minst= j
    data[minst], data[i] = data[i] , data[minst]
print(data)
