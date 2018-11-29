start= True
ans =""
while start:
    x,y = map(int, input().split())
    if x == 0 and  y == 0:
        start = False
    else:
        if  x+y== 13:
            ans= "Never speak again."
        elif x > y:
            ans ="To the convention."
        elif y > x:
            ans ="Left beehind."
        elif x == y and x+y > 0:
            ans ="Undecided."
        print(ans)
