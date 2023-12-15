import pygame

class Nave(pygame.sprite.Sprite):
    #constructor
    def __init__(self, posicion):
        super().__init__()

        self.imagennave = [pygame.image.load("nave-espacial.png"), pygame.image.load("cohete.png")]
        self.indicenave = 0
        self.image = self.imagennave[self.indicenave]
        self.contador_imagen = 0
        self.rect = self.image.get_rect()
        #actualizamos la posicion del rectangulo para que coincida con la posicion
        self.rect.topleft = posicion
    
    #update
    def update(self, *args: any, **kwargs: any):
        teclas = args[0]
        if teclas[pygame.K_LEFT]:
            Nave.moverIzquierda(self)
        if teclas[pygame.K_RIGHT]:
            Nave.moverDerecha(self)
        #gestionamos la animación
        self.contador_imagen = (self.contador_imagen + 1) % 40
        self.indicenave = self.contador_imagen // 20
        self.image = self.imagennave[self.indicenave]

    def moverDerecha(self):
        self.rect.x += 2
        pantalla = pygame.display.get_surface()
        limite = pantalla.get_width()
        self.rect.x = min(limite - self.image.get_width(), self.rect.x)

    def moverIzquierda(self):
        self.rect.x -= 2
        limite = 0
        self.rect.x = max(self.rect.x, limite)
    #def draw()
    #   pass

class Enemigo(pygame.sprite.Sprite):
    #constructor
    def __init__(self, posicion):
        super().__init__()

        imagen = pygame.image.load("nave-espacial.png")
        self.image = pygame.transform.rotate(imagen, 180)
        #creamos el rect
        self.rect = self.image.get_rect()
        #actualizamos la posicion del rectangulo para que coincida con la posicion
        self.rect.topleft = posicion
    def update(self, *args: any, **kwargs: any):
        self.rect.y += 1