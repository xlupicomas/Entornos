print("cual es la contraseña?")
contraseña = ("Eureka")
V = 3
ac = False
while V > 0 and ac == False:
    pwd = input() 
    if contraseña == pwd:
        print("correcto")
        ac = True
    else:
        V = V - 1
        print("fallaste, te quedan ", V ," vidas")
        print("bloqueado")
print("has entrado")