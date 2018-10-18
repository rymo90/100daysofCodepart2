def bubblesort(data):
    for i in range(len(data)-1,0,-1): # man lämnar sista
        for j in range(i):
            if data[j] < data[j+1]:
                data[j],data[j+1]= data[j+1],data[j]












data= [7,2,4,5,1,90,12,40]
bubblesort(data)
print(data)
