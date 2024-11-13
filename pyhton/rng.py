from random import randint

min_number = int(input("please enter the min bumber: "))
max_number = int(input("please enter the max bumber: "))

if (max_number < min_number):
    print("invalide - shuttin donw ")
else:
    rnd_number = randint(min_number,max_number)
    print(rnd_number)    







