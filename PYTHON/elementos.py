import pygame

class Nave:
    def __init__(self) -> None:
        self.contador = 0
        self.x = 30
        self.y = 30
        imagen = [pygame.image.load("PYTHON/cohete.png"),pygame.image.load("PYTHON/alien-pixelado.png")]
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
        