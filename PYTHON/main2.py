import time
import pygame

pygame.init()
pantalla = pygame.display.set_mode((800,600))

x = 0

imagen_avion = pygame.image.load("nave-espacial.png")
avion = pygame.transform.scale(imagen_avion,(60,60))
imagen_disparo = pygame.image.load("bola-de-fuego.png")
disparo = pygame.transform.scale(imagen_disparo,(30,15))
disparo = pygame.transform.rotate(disparo, 90)
#avion_rect = avion.get_rect()
imagen_fondo = pygame.image.load("espacio2.png")
fondo = pygame.transform.scale(imagen_fondo,(800,700))
imagen_enemy = pygame.image.load("astronave.png")
enemy = pygame.transform.scale(imagen_fondo,(60,60))

salir = False

posIzqd = 375
posTop = 500

while not salir:
    #gestionar eventos
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            salir = True

    teclas = pygame.key.get_pressed()
    if teclas[pygame.K_LEFT]:
        posIzqd -= 0.4
    if teclas[pygame.K_RIGHT]:
        posIzqd += 0.4
    if teclas[pygame.K_UP]:
        posTop -= 0.4
    if teclas[pygame.K_DOWN]:
        posTop += 0.4
    if teclas[pygame.K_0]:
        posTop1 = posTop
        while posTop1 > 0:
            pantalla.blit(disparo, (posIzqd + 22,posTop1 - 23))
            time.sleep(0.001)
            posTop1 -= 2
            pygame.display.update()
    #gestionar cambios
    pantalla.fill((255,255,255))

    pantalla.blit(fondo, (0, 0))
    pantalla.blit(avion, (posIzqd, posTop))

    #pygame.draw.rect(pantalla, (255,255,255), pygame.Rect(posIzqd, posTop,60,60))

    #redibujar juego
    pygame.display.flip()

pygame.quit()