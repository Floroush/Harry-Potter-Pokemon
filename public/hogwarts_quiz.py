print("Welcome, young wizard/witch!")

favorite_color = input("What's your favorite color? Red, blue, green or yellow? ")

if favorite_color == "red" or "Red":
    print("Griffindor or Ravenclaw")
elif favorite_color == "blue" or "Blue":
    print("Ravenclaw or Slytherin")
elif favorite_color == "green" or "Green":
    print("Slytherin or Hufflepuff")
elif favorite_color == "yellow" or "Yellow":
    print("Hufflepuff or Gryffindor")
else:
    print("Please choose a favorite color!")