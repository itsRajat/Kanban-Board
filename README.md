# Kanban Board

Kanban Board is a tool where you have lists in front of you consisting of cards. Each list has a title, and a button to add more cards. The cards can be moved from one list to another via a drag and drop mechanism. Similar to the popular application Trello.

Created using React, Material UI, Context API, localStorage, useStyle, nanoid, react-beautiful-dnd (for a better drag & drop functionality than native) & create-react-app.

# Live Preview

Preview the assignment at - https://kanban-x.netlify.app/

## Features

- Comes with a default empty list. Click on the title of the list to rename it & click anywhere else on the screen to automatically save your changes.
- Create new lists with 'Add a List' button. If you don't enter a Title, it will be "List" by default.
- Create new cards in lists using 'Add a Card' button.
- Each card can have a Title & a description. If you don't enter a title, the add button won't work.
- Each card & list item has a unique ID generated using nanoid, which is much faster than uuid.
- Animations on page load & card creation/dnd.
- The overflow of the screen will increase as you create more cards & lists, so there's no "upperlimit".
- Drag-N-Drop cards anywhere: inside a single list or between different lists.
- Drag-N-Drop lists to re-order them horizontally.
- To collapse the "Add card/list" menu, just click anywhere else on the screen. The menu will not collapse if you already have something written inside the text blocks to prevent loss of work. (Unless the user specifically clicks on the "X" button)
- To remove a card from a list, simply drop it on an empty part of the screen & it will be removed.
- State of the board is persisted through LocalStorage.
- To clear everything on the board as well as LocalStorage, just click the "Clear All" button.
- Has a nice looking UI with a moving wave animation behind the header logo (look carefully xD)
- You can use the Keyboard to drag b/w lists & drag cards among a single list. Press Tab to select an item, space to initialize Dnd & arrow keys to move. Press space again to save. This is a part of React DnD Library.
- The site is mobile-friendly.
- Memoization using React.memo to prevent re-render on some child components when dragging lists around.
- Autoscroll on adding new lists.

Most of the "major" features were built with their own commits so feel free to check that out if needed.

## Project Architecture 
```
src -> contains all the relevant files.
--component -> has all the components (which are further divided into folders, on the basis of functionality)
----- board -> contains all the lists.
----- list -> singular list.
----- card -> singular card.
----- input -> contains the toggle input menu & add buttons.
----- Footer/Header -> self-explanatory.
--contexts -> has the dataContext & Provider implementation w/ important functions.
--hooks -> has the custom useLocalStorage Hook
--static -> has all the static files like logo, background SVG & the default initial data structure.
```

## Setup & Run

- npm install
- npm start

Done!
Hope you like the assignment :)
