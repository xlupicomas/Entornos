import pygame
from elementos import Nave
from elementos import Fondo
pygame.init()
pantalla = pygame.display.set_mode((800,600))
reloj = pygame.time.Clock()
FPS = 60

#imagen_avion = pygame.image.load("PYTHON/cohete.png")
#avion = pygame.transform.scale(imagen_avion,(60,60))
#avion_rect = avion.get_rect()
fondo = Fondo()
salir = False

nave = Nave()

while not salir:
    reloj.tick(60)
    #gestionar eventos 
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            salir = True

    teclas = pygame.key.get_pressed()
    if teclas[pygame.K_LEFT]:
        nave.moverIzquierda()
    if teclas[pygame.K_RIGHT]:
        nave.moverDerecha()
    #if teclas[pygame.K_UP]:
     #   posTop -= 1
    #if teclas[pygame.K_DOWN]:
     #   posTop += 1
    #gestionar cambios 
    #pantalla.fill((255,255,255))
    fondo.dibujar()
    #pygame.draw.rect(pantalla, (255,255,255), pygame.Rect(posIzqd, posTop,60,60))
    #pantalla.blit(avion, (posIzqd,posTop))
    nave.dibujar()
    #redibujar juego 
    pygame.display.flip()

pygame.quit()