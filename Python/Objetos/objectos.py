# Cola
# Ticket
# Caja
# Personas

import os

class Persona():
    dni = 0
    nombre = ""
    def __init__(self, dni, nombre):
        self.dni = dni
        self.nombre = nombre

class Cliente(Persona):
    def SacarTicket(self):
        print (self.nombre + " saco un ticket")

class Cajero(Persona):
    def Atender(self):
        print (self.nombre + " esta atendiendo")


os.system("clear")

juan = Cliente(1452879, "Juan")
pedro = Cliente(34577999, "Pedro")
luis = Cajero(2854796, "Luis")

# print (juan.dni)
# print (pedro.dni)

pedro.SacarTicket()
juan.SacarTicket()

luis.Atender()
