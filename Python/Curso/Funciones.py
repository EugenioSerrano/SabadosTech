import os
clear = lambda: os.system('clear')  # cambiar clear por cls
clear()

def Saludos(nombre):
    print ("Hola " + nombre)
    print ("Esto es un saludo desde Python")

Saludos("Juan")
nombre ="Pedro"
Saludos(nombre)

