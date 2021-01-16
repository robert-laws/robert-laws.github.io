---
title: 'Development'
process_order: 4
---

## Development

The development for the website makes use of several different libraries and a connection to Google Sheets to save orders placed on the site. The site is written with React and makes use of the `create-react-app` build utilities.

#### React Features

The most prominent and interesting React features for the site are **React Hooks** to handle state management through the Context API with `useContext` and the `useState`, `useCallback`, and `useEffect` hooks.

##### Ordering Process

The React features mentioned above are all put to use on the Order page. The ordering process includes selecting a order location, one or more menu items each of which have a order quantity of one to four and finally choosing a drive thru option if the location has this feature. To do this, I make use of local state with the `useState` hook to populate a menu choices array.

```javascript
const detectMenuSelection = useCallback(
  (menu, selectedQuantity, cardSelected) => {
    if (cardSelected) {
      setMenuChoices((prev) => [
        ...prev.filter((item) => item.id !== menu.id),
        {
          id: menu.id,
          title: menu.title,
          selectedQuantity,
          total: parseInt(selectedQuantity) * parseFloat(menu.price),
        },
      ]);
    } else {
      setMenuChoices((prev) => prev.filter((item) => item.id !== menu.id));
    }
  },
  [setMenuChoices]
);
```

When a user clicks on a menu option, the `detectMenuSelection` function is triggered. This function takes in the menu item selected, the quantity for the menu item, and whether or not the menu item is being selected or unselected. In situations where the menu item is being unselected, the function removes the item from the local state. If the menu item is being added, the function will first remove the menu item from state then re-add it with update information about the quantity selected and total price based on the quantity.

##### Modals

The modal is implemented using the `useContext` hook. It functions on the Locations and Menu listing pages. When a use clicks on the location or menu item, a modal appears with more information about the selected location or menu item. To implement this, the modal state takes in several pieces of information.

```javascript
const initialState = {
  active: false,
  selectionGroup: null,
  selectionObject: null,
};
```

The initial state takes in an active boolean value, which is used to toggle the modal on or off, a `selectionGroup` string value used to indicate either the location or menu group, and a `selectionObject` which is an object with the details about the location or menu item.

To update the modal state, an `updateModal` function is called using context with the group string value and the object with information about the location or menu item.

```javascript
const updateModal = useCallback(
  ({ group, obj }) => {
    dispatch({ type: UPDATE_MODAL_ACTIVE, payload: { group, obj } });
  },
  [dispatch]
);
```

The modal is used on the `Locations` and `Menu` pages. This is done with the Effect hook - shown here from the Menu page. When the user clicks on a menu item, a local state of menuId is updated and triggers the Effect hook. This sends the group value of 'menus' along with an object pulled from a menu context state object.

```javascript
useEffect(() => {
  if (menuId) {
    updateModal({
      group: 'menus',
      obj: menus.find((menu) => menu.id === menuId),
    });
  }
}, [menuId, menus, updateModal]);
```

The `Modal` component then detects the Modal context state change and updates the Modal to show or hide.

The website contained several other challenges including connecting to Google Sheets and performing reads and writes through [google-spreadsheet](https://www.npmjs.com/package/google-spreadsheet) a Google Sheets API wrapper for javascript projects.

Another challenge was implementing javascript to manage Bulma components like dropdown menus for the navigation. This includes adding click handlers to hide the drop for a navigation option is selected.

Finally, the home page uses [React Reveal](https://www.react-reveal.com/docs/) an animation framework to introduce the sliding animations on the home page and the fade animations on the order page.
