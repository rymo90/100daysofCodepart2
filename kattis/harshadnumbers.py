n = input()
stop = False
add = 0
while not stop:

  for i in range(len(n)):
    add += int(n[i])
  if int(n)%add == 0:
    print(n)
    stop = True
  else:
    n = int(n)
    n +=1
    n= str(n)
    add= 0
  if n == "1000000000":
    stop = True  
