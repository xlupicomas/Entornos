import math

print("intorudce A")
A = int(input("que numero es A"))
print("introduce B")
B = int(input("que numero es B"))
print(" A vale ", A," y B vale",B,)

print("segundo ejercicio:")
print("intorudce A")
A = int(input("que numero es A"))
print("introduce B")
B = int(input("que numero es B"))
print("la suma vale:", A + B,)
print("la resta vale:", A - B,)
print("la multiplicación vale:", A * B,)
print("la división vale:", A / B,)

print("tercer ejercicio")
print("intorudce A")
A = int(input("que numero es A"))
print("introduce B")
B = int(input("que numero es B"))
if A == B:
    print("A y B son iguales")
else:
    if A > B :
        print("A es mayor")
    else:
        print("B es mayor")


print("ejercicio 4")
print("intorudce A")
A = int(input("que numero es A"))
print("introduce B")
B = int(input("que numero es B"))
print("introduce C")
C = int(input("Escribir C"))
print("comprobando el mayor")


if A > B:
    if C > A:
        print("C es mayor")
    else:
        print("A es mayor")
else:
    if C > B:
        print("C es mayor")
    else:
        print("B es mayor")


print("quinto ejercicio")
print("intorudce A")
A = int(input("que numero es A"))
print("introduce B")
B = int(input("que numero es B"))
print("intorudce C")
C = int(input("que numero es C"))

if A < 0:
    print("A x B x C : ", A * B * C,)
else:
    print("A + B + C: ", A + B + C,)



print("ejercicio 6 Raices y cuadrado")
D = int(input("introduce D"))
if D < 0:
    print("error")
else:
    print("cuadrado de D",D**2,)
    print("raiz de D: ", math.sqrt(D) ,)
   
