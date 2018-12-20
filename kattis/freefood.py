x = int(input())
mst = 400
mxl= -1

lis = [False]*366
for _ in range(x):
  s, t = map(int, input().split())
  mst = min(mst,s)
  mxl = max(mxl,t)
  while s <=t:
    lis[s] = True
    s+=1
dagar= 0
while mst <= mxl:
  if lis[mst]:
    dagar +=1
  mst+=1  
print(dagar)
