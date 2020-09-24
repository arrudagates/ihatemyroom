# Vim 101

## Learn Vim!

### Movement

- h moves the cursor to the left
- l moves the cursor to the right
- j moves the cursor down
- k moves the cursor up
- w moves the cursor to next word
- b moves the cursor to last word
- :{number} moves the cursor to the line {number}
- t{character} moves the cursor to the next occurence of {character}
- % moves the cursor to the corresponding bracket, brace, or parentheses
- ; moves the cursor to the next occurence of the current character

#### Extra

Prefixing any movement keys with a number will make the cursor jump that many lines

### Commands

- dd deletes the current line
- u undoes an action
- . does the last action again
- yy copies the current line
- p pastes below the current line
- P pastes above the current line
- o adds new line and enters insert mode
- cw deletes the current word and enters insert mode
- dw deletes the current word
- D deletes the rest of the line
- C deletes the rest of the line and enters insert mode
- \* finds all occurences of the current word

## Combos

- d{movement} deletes everything until the {movement} destination
