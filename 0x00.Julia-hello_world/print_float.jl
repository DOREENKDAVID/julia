#!/usr/bin/env julia
"""Complete the source code in order to print the float stored in the variable number with a precision of 2 digits.

You can find the source code here
The output of the program should be:
Float:, followed by the float with only 2 digits
followed by a new line
You are not allowed to cast number to string"""

number = 3.14159

println("Float", $number(%.2f))
