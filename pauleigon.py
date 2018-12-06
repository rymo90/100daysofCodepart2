a,b,c = map(int, input().split())
sm= b+c 
sv = (sm//a+1)
if sv%2==0:
  print("opponent")
else:
  print("paul")
