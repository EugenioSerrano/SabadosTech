class Persona():
    nombre = ""

class Arania():
    color = ""

class HombreArania(Persona, Arania):
    pass

peter = HombreArania()
peter.nombre = "Peter Parker"
peter.color = "Rojo y Azul"

print (peter.nombre)



