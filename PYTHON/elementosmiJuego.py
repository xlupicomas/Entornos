import random
import pygame
import math

class Fondo:
    def __init__(self) -> None:
        #localizar la pantalla
        pantalla = pygame.display.get_surface()
        #cargamos la foto
        imagen = pygame.image.load("espacio4.jpg")
        self.fondo = pygame.transform.scale(imagen, (pantalla.get_width(), imagen.get_height()))
        self.fondo = pygame.transform.scale(self.fondo, (pantalla.get_width(), 500))

        #scroll
        self.scroll = 0

        self.piezas = math.ceil(pantalla.get_height() / self.fondo.get_height()) + 1

    def dibujar(self):
        self.scroll += 1
        pantalla = pygame.display.get_surface()
        #resetear scroll
        if self.scroll > self.fondo.get_height():
            self.scroll = 0
        for i in range (0, self.piezas):
            pantalla.blit(self.fondo, (0,-self.fondo.get_height() + i * self.fondo.get_height() + self.scroll))


class Enemy:
    def __init__(self, x, y):
        self.x = random.randint(100, 500)
        self.y = 50
        self.direccion = 4
        enemigo = pygame.image.load("alien-pixelado.png")
        self.enemigo = pygame.transform.scale(enemigo, (60, 60))


        proyectil = pygame.image.load("bala.png")
        self.proyectil = pygame.transform.scale(proyectil,(30,30))
        self.ataque = []
        self.couldown = 0
        self.xAtaque = self.x
        self.yAtaque = self.y

    # def getAtaque(self):
    #     return self.ataque
    def getRect(self):
        return self.enemigo.get_rect(topleft=(self.x, self.y))

    def balaEnemiga(self):
        if (self.couldown + 600) < pygame.time.get_ticks():
            ataques = Enemy(self.x, self.y)
            self.ataque.append(ataques)
            self.couldown = pygame.time.get_ticks()
            self.xAtaque = self.x
            self.yAtaque = self.y

    def dibujar(self, nave, x, y):
        print("nave x")
        print(x)
        #print(y)
        print("bala y")
        print(Bala.getY(self))
        print("bala x")
        print(Bala.getX(self))

        self.x = self.x + self.direccion
        if self.x > 500:
            self.direccion = -4
            self.y = self.y + 50
        if self.x < 100:
            self.direccion = 4
            self.y = self.y + 50
        if (self.couldown + 3000) < pygame.time.get_ticks():
            print("disparo")

            ataque = Bala(self.x, self.y, -3)
            self.ataque.append(ataque)
            print(self.ataque)
            self.couldown = pygame.time.get_ticks()


        # la dibujas
        # cojo puntero de la pantalla
        pantalla = pygame.display.get_surface()
        pantalla.blit(self.enemigo, (self.x, self.y))

        for bala in self.ataque:
            if bala.getY() > 600:
                self.ataque.pop(0)
                print("array de balas")
                print(self.ataque)

            else:
                bala.dibujar()
                #TODO perder el juego
                if Bala.getY(self) < y < Bala.getY(self) + 60:
                    if Bala.getX(self) < x + 30 < Bala.getX(self) + 60:
                        pygame.quit()




    def getXY(self):
        return self.y


class Bala:
    def __init__(self, x, y, incremento):
        self.x = x + 14
        self.y = y - 23
        proyectil = pygame.image.load("bola-de-fuego.png")
        self.proyectil = pygame.transform.scale(proyectil, (30, 30))
        self.incremento = incremento
        # si el incremento es negativo
        if self.incremento > 0:
            self.proyectil = pygame.transform.rotate(self.proyectil, 90)
        # si es positivo
        # rotar a -90
        if self.incremento < 0:
            self.proyectil = pygame.transform.rotate(self.proyectil, 270)

    def getY(self):
        return self.y

    def getX(self):
        return self.x

    def getRect(self):
         return self.proyectil.get_rect(topleft=(self.x, self.y))

    def dibujar(self):
        self.y -= self.incremento  # recorrido de la bala
        # la dibujas
        # cojo puntero de la pantalla
        pantalla = pygame.display.get_surface()
        pantalla.blit(self.proyectil, (self.x, self.y))


class Nave:
    def __init__(self) -> None:
        self.contador = 0
        self.ultimoDisparo = 0
        self.ultimoEnemigo = 0
        self.x = 375
        self.y = 500
        self.yProyectil = self.y
        imagen = [pygame.image.load("nave-espacial.png"), pygame.image.load("astronave.png"), ]
        self.imagen = [pygame.transform.scale(imagen[0], (60, 60)), pygame.transform.scale(imagen[1], (60, 60))]
        self.balas = []
        self.enemigos = []
        self.impacto = False


    def moverDerecha(self):
        self.x += 10
        pantalla = pygame.display.get_surface()
        limite = pantalla.get_width()
        self.x = min(self.x, limite - 60)

    def moverIzquierda(self):
        self.x -= 10
        limite = 0
        self.x = max(self.x, limite)

    def disparar(self):
        if (self.ultimoDisparo + 600) < pygame.time.get_ticks():
            bala = Bala(self.x, self.y, +3)
            self.balas.append(bala)
            self.ultimoDisparo = pygame.time.get_ticks()

    def enemigos1(self):
        if (self.ultimoEnemigo + 600) < pygame.time.get_ticks():
            enemigo = Enemy(self.x, self.y)
            self.enemigos.append(enemigo)
            self.ultimoEnemigo = pygame.time.get_ticks()

    def dibujar(self):
        # aumento contador
        self.contador = (self.contador + 1) % 40

        # cojo puntero de la pantalla
        pantalla = pygame.display.get_surface()

        # seleccionar la imagen que toca
        seleccionada = self.contador // 20

        # dibujar
        pantalla.blit(self.imagen[seleccionada], (self.x, self.y))

        # bucle de la bala donde si llega al tope de alto de la pantalla desaparece, sino se dibuja
        for bala in self.balas:
            if bala.getY() < 0:
                self.balas.pop(0)
                print("array de balas")
                print(self.balas)

            else:
                bala.dibujar()

        # bucle donde el enemigo se dibuja hasta que su self.y pasa los 450 y desaparece
        for enemigo in self.enemigos:
            if enemigo.getXY() > 450:
                self.enemigos.pop(0)
                print("array de enemigos")
                print(self.enemigos)
                pygame.quit()            # pierdes el juego
            else:
                enemigo.dibujar(self, self.x, self.y)

        #para que la bala de la nave destruya los enemigos TODO(ERROR cuando un enemigo es destruido su bala disparada lo es tambien ERROR)
        for enemigo in self.enemigos:
            for bala in self.balas:
                rectEnemigo = enemigo.getRect()
                rectBala = bala.getRect()
                if rectEnemigo.colliderect(rectBala):
                    self.enemigos.remove(enemigo)
                    self.balas.remove(bala)
        #para que la bala del enemigo destruya la nave(acaba el juego)



