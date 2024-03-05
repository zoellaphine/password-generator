# Password Generator Starter Code

## Description

This project presents a page in which a user can generate a random password with specified 
criteria. Our job was to add the actual functionality: make the big red 'Generate Password'
button actually do something.

Having a unique password is an important part of maintaining internet security. This program
allows users to generate a unique, random password containing the types of characters they 
want to have in it. Randomly generated passwords can be much harder to cipher or hack, so
having a program to generate one can be very useful.

When the user presses the button, they are to be presented with several prompts:
1. How long should the password be?
2. Should the password include lowercase letters (a, b, c, d...)?
3. Should the password include uppercase letters (A, B, C, D...)?
4. Should the password include numbers? (1, 2, 3, 4...)
5. Should the password include special characters? (!, @, #, $...)

After the final prompt is filled, a password is to be generated with the selected criteria.

The only issue I experienced was with manipulating the output window of the program. I did
not know for sure that initialising an empty string would create an undefined variable, so
adding the characters of the password to this made some unexpected changes to the output. 

This project, while giving some practice manipulating the DOM of a webpage, really served to
be an exercise in running through a program with various loops and if statements. In order to
generate the password, the allowed characters needs to be tracked , as well as then being able
to randomly decide which to use for any given character, then generate a random character of
that type. 

## Installation

N/A

## Usage

Once the page loads, press the 'Generate Password' button. You will be asked to fill out the
5 prompts listed in the description, assuming proper input, will be random given a password of the
specified length with the specified type of characters.

## Credits

N/A