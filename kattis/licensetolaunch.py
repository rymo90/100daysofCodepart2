x = int(input())
days = list(map(int, input().split()))
mintal = [0,days[0]]
for j in range(1, len(days)):
    if days[j] < mintal[1]:
      mintal = [j,days[j]]
print(mintal[0])
