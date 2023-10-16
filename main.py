import math
import time

print("insertar numeros")
N = -1
maximo = 0
minimo = 9999999999999
X = 0
finbucle = False
while finbucle == False:	
    s = int(input(" "))
    X = X + s
    N = N + 1
    if s > maximo:
        maximo = s
    if s < minimo and not s == 0:
        minimo = s
    if s == 0:
        finbucle = True
    else:
        finnucle = False
print("la media aritmetica es: ", X / N)
print("maximo es: ", maximo)
print("minimo es: ", minimo)

