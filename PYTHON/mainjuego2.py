import pygame
import pygame_menu
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

font = pygame.font.Font(None, 30)


posicion = (350,500)
nave = elementos2.Nave(posicion)

#creamos un grupo de sprites
ultimo_enemigo_creado = 0
frecuenciaCreacionDeEnemigos = 200


#grupo_sprites = pygame.sprite.Group(nave)
#grupo_sprites.add(elementos2.Fondo())
#grupo_sprites.add(elementos2.Nave((100,100)))
#grupo_sprites.add(elementos2.Nave((200,100)))
#grupo_sprites.add(elementos2.Nave((300,100)))



#crear una variable que almacene la ultima vez que se creo un enemigo
#bucle principal
def set_difficulty(value, difficulty):
    global frecuenciaCreacionDeEnemigos
    frecuenciaCreacionDeEnemigos = difficulty


def start_the_game():
    #booleano de control
    
    grupo_sprites_todos = pygame.sprite.Group()
    grupo_sprites_enemigos = pygame.sprite.Group()
    grupo_sprites_balas = pygame.sprite.Group()

    grupo_sprites_todos.add(elementos2.Fondo((0,0)))
    grupo_sprites_todos.add(nave)

    enemigo  = elementos2.Enemigo((50,50))
    grupo_sprites_enemigos.add(enemigo)
    running = [True]

    global ultimo_enemigo_creado

    pausado = False

    while running[0]:
        #limitamos el bucle a los FPS definidos
        reloj.tick(FPS)

        #getionar la salida
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                running = False
        
        #capturamos las teclas
        teclas = pygame.key.get_pressed()
        if teclas[pygame.K_ESCAPE]:
           running[0] = False
        if teclas[pygame.K_p]:
            pausado = not pausado

        
        if not pausado:
            #creacion de enemigos
            coordX = random.randint(0, pantalla.get_width())
            coordY = -200
            momento_actual = pygame.time.get_ticks()
            if (momento_actual > ultimo_enemigo_creado + frecuenciaCreacionDeEnemigos):
                X = random.randint(0, 600)
                enemigo = elementos2.Enemigo((coordX, coordY))
                grupo_sprites_todos.add(enemigo)
                grupo_sprites_enemigos.add(enemigo)
                ultimo_enemigo_creado = momento_actual
            #pintaremos
            pantalla.fill((255,255,255))
        
            grupo_sprites_todos.update(teclas,grupo_sprites_todos, grupo_sprites_balas, grupo_sprites_enemigos, running)

        grupo_sprites_todos.draw(pantalla)

        if pausado:
            texto = font.render("PAUSA", True, "white")
            pantalla.blit(texto,(pantalla.get_width() / 2, pantalla.get_height() / 2))
            

        #redibujar la pantalla 
        pygame.display.flip()

menu = pygame_menu.Menu('Welcome', 400, 300,
                       theme=pygame_menu.themes.THEME_BLUE)

menu.add.text_input('Name :', default='player 1')
menu.add.selector('Difficulty :', [('Hard', 200), ('Easy', 2000)], onchange=set_difficulty)
menu.add.button('Play', start_the_game)
menu.add.button('Quit', pygame_menu.events.EXIT)

menu.mainloop(pantalla)

#finalizamos el juego 
pygame.quit()
