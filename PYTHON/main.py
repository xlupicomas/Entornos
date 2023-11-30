import pygame

pygame.init()
pantalla = pygame.display.set_mode((800,600))

imagen_avion = pygame.image.load("PYTHON/avion.png")
avion = pygame.transform.scale(imagen_avion,(60,60))
#avion_rect = avion.get_rect()

salir = False

posIzqd = 30
posTop = 30

while not salir:
    #gestionar eventos 
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            salir = True

    teclas = pygame.key.get_pressed()
    if teclas[pygame.K_LEFT]:
        posIzqd -= 1
    if teclas[pygame.K_RIGHT]:
        posIzqd += 1
    if teclas[pygame.K_UP]:
        posTop -= 1
    if teclas[pygame.K_DOWN]:
        posTop += 1
    #gestionar cambios 
    pantalla.fill((255,0,255))

    #pygame.draw.rect(pantalla, (255,255,255), pygame.Rect(posIzqd, posTop,60,60))
    pantalla.blit(avion, (posIzqd,posTop))
    #redibujar juego 
    pygame.display.flip()

pygame.quit()