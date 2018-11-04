n = int(input())
sum = 0.0
for i in range(n):
    x = input().split()
    sum +=float(x[0])*float(x[1])
print(sum)
