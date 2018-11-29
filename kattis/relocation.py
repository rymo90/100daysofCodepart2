n, q= map(int, input().split())
k= list(map(int, input().split()))
for i in range(q):
  x = list(map(int, input().split()))
  if x[0] == 1:
    k[x[1]-1] = x[2]
  else:
print(abs(k[x[1]-1] - k[x[2]-1])) 
