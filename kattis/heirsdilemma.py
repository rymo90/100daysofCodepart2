def count(a,b):
    cnt = 0
    while a<=b:
        pkode= True
        ty= str(a)
        st = set(ty)
        if not "0" in ty and len(st) == len(ty) :
            for i in range(len(ty)):

                if int(ty)%int(ty[i])!=0:
                    pkode = False
                    break
            if pkode:
                cnt += 1
        a += 1
    print(cnt)
c,d= map(int, input().split())
count(c,d)
