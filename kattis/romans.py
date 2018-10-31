from decimal import Decimal, ROUND_HALF_UP
x = float(input())
print(Decimal(x*1000*(5280/4854)).quantize(0,ROUND_HALF_UP))
