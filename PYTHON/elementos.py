import pygame
import math
class Nave:
    def __init__(self) -> None:
        self.contador = 0
        self.x = 400
        self.y = 500
        imagen = [pygame.image.load("nave-espacial.png"),pygame.image.load("alien-pixelado.png")]
        self.imagen = [pygame.transform.scale(imagen[0], (60,60)), pygame.transform.scale(imagen[1], (60,60))]

    def moverDerecha (self):
        self.x += 10
        pantalla = pygame.display.get_surface()
        limite = pantalla.get_width()
        self.x = min(self.x, limite - 60)
    def moverIzquierda (self):
        self.x -= 10
        #pantalla = pygame.display.get_surface()
        limite = 0
        self.x = max(self.x, limite)
    def dibujar(self):
        #aumento contador
        self.contador = (self.contador + 1) % 40
        #cojo puntero de la pantalla
        pantalla = pygame.display.get_surface()
        #seleccionar la imagen que toca
        seleccionada = self.contador // 20
        #dibujar
        pantalla.blit(self.imagen[seleccionada], (self.x,self.y))


class Fondo:
    def __init__(self) -> None:
        #localizar la pantalla
        pantalla = pygame.display.get_surface()
        #cargamos la foto
        imagen = pygame.image.load("espacio2.png")
        self.fondo = pygame.transform.scale(imagen, (pantalla.get_width(), imagen.get_height()))
        self.fondo = pygame.transform.scale(self.fondo, (pantalla.get_width(),500))
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