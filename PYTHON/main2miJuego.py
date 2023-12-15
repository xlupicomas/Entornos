
import pygame
from elementosmiJuego import Nave
from elementosmiJuego import Fondo
pygame.init()
pantalla = pygame.display.set_mode((800,600))
reloj = pygame.time.Clock()
FPS = 60

#imagen_avion = pygame.image.load("PYTHON/cohete.png")
#avion = pygame.transform.scale(imagen_avion,(60,60))
#avion_rect = avion.get_rect()

salir = False
fondo = Fondo()
nave = Nave()
# enemigos = []

while not salir:
    reloj.tick(60)
    #gestionar eventos22222
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            salir = True

    # enemigos.add(Enemy())

    teclas = pygame.key.get_pressed()
    if teclas[pygame.K_LEFT]:
        nave.moverIzquierda()
    if teclas[pygame.K_RIGHT]:
        nave.moverDerecha()
    if teclas[pygame.K_0]:
        nave.disparar()
    if teclas[pygame.K_1]:

        nave.enemigos1()

    #if teclas[pygame.K_UP]:
     #   posTop -= 1
    #if teclas[pygame.K_DOWN]:
     #   posTop += 1
    #gestionar cambios1
    #pantalla.fill((255,255,255))
    fondo.dibujar()
    #pygame.draw.rect(pantalla, (255,255,255), pygame.Rect(posIzqd, posTop,60,60))
    #pantalla.blit(avion, (posIzqd,posTop))
    nave.dibujar()
    #redibujar juego
    pygame.display.flip()

pygame.quit()