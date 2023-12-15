import pygame
import elementos2
import random
#iniciamos el juego
pygame.init()

#creamos la pantalla
tamaño = (800,600)
pantalla = pygame.display.set_mode(tamaño)

#reloj
reloj = pygame.time.Clock()
FPS = 60

#booleano de control
running = True
posicion = (200,200)
nave = elementos2.Nave(posicion)

#creamos un grupo de sprites
grupo_sprites = pygame.sprite.Group(nave)
grupo_sprites.add(elementos2.Nave((100,100)))
grupo_sprites.add(elementos2.Nave((200,100)))
grupo_sprites.add(elementos2.Nave((300,100)))

enemigo  = elementos2.Enemigo((50,50))
grupo_sprites.add(enemigo)

#crear una variable que almacene la ultima vez que se creo un enemigo
ultimo_enemigo_creado = 0
#bucle principal
while running:
    #limitamos el bucle a los FPS definidos
    reloj.tick(FPS)

    #getionar la salida
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    #creacion de enemigos
    momento_actual = pygame.time.get_ticks()
    if (momento_actual > ultimo_enemigo_creado + 5000):
        X = random.randint(0, 600)
        grupo_sprites.add(elementos2.Enemigo((X,0)))
        ultimo_enemigo_creado = momento_actual

    #capturamos las teclas
    teclas = pygame.key.get_pressed()


    #pintaremos
    pantalla.fill((255,255,255))
    grupo_sprites.update(teclas)
    grupo_sprites.draw(pantalla)

    #redibujar la pantalla 
    pygame.display.flip()





#finalizamos el juego 
pygame.quit()
