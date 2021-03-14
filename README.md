# Kanban Board

Kanban Board is a tool where you have lists in front of you consisting of cards. Each list has a title, and a button to add more cards. The cards can be moved from one list to another via a drag and drop mechanism. Similar to the popular application Trello.

Created using React, Material UI, Context API, localStorage, react-beautiful-dnd (for a better drag & drop functionality than native) & create-react-app.

# Live Preview

Preview the assignment at - https://kanban-x.netlify.app/

## Features

- Create new lists items with 'Add a List' button.
- Create new cards in lists using 'Add a Card' button.
- Each card can have a Title & a description.
- The overflow of the screen will increase as you create more cards & lists, so there's no "upperlimit".
- Drag-N-Drop cards anywhere: inside a single list or between different lists.
- Drag-N-Drop lists to re-order them horizontally.
- To remove a card from a list, simply drop it on an empty part of the screen & it will be removed.
- Click on the title of a list to change it. Just type it & click anywhere else on the screen, it will be saved.
- State of the board is persisted through LocalStorage.
- To clear everything on the board as well as LocalStorage, just click the "Clear All" button.

## Setup & Run

- npm install
- npm start

Done!
