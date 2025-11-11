#  JavaScript Calculator

A simple, fully functional calculator built using **vanilla JavaScript**, **HTML**, and **CSS**.  
This project demonstrates fundamental JavaScript logic such as object manipulation, event handling, and DOM updates — wrapped in a clean, responsive interface.

---

##  Features

- Perform basic arithmetic operations: **Addition (+)**, **Subtraction (−)**, **Multiplication (×)**, **Division (÷)**  
- Supports **decimal numbers**  
- **Clear (AC)** button to reset the calculator  
- **Dynamic screen update** after every operation  
- **Responsive, centered layout** using CSS Grid and Flexbox principles  
- Clean, modern design with hover effects

---

##  Project Structure

calculator/
├── index.html # Main HTML structure
├── style.css # Styling for the calculator
└── script.js # Calculator logic and event handling

##  How It Works

- The calculator’s state is managed by an object named `Calculator`, which keeps track of:
  - Current display value
  - First operand
  - Operator
  - Whether the calculator is waiting for the second operand

- Event listeners on buttons handle:
  - **Digit input** (`Input_Digit`)
  - **Decimal points** (`Input_Decimal`)
  - **Operators** (`Handle_Operator`)
  - **Reset function** (`Calculator_Reset`)

- Each time a button is clicked, the **display** is updated dynamically using `Update_Display()`.

---

##  Preview!

[alt text](Calculator-1.gif)


