This is a flashcard block built using React.  

The flashcards component is expecting an `items` array of objects that define the front and back of each flashcard. 

This component can display either strings or images.

Each flashcard is represented with an object expecting an `id`, `front` and `back`:

```js
{
    id: <unique id>,
    front: {
        type: 'string' | 'image',
        display: <either the string to display or the image link>,
        options: {
            alt: <if using an image, provide alt text>
        }
    },
    back: {
        type: 'string' | 'image',
        display: <either the string to display or the image link>,
        options: {
            alt: <if using an image, provide alt text>
        }
    }
}
```

To get test it out, clone the repo and then:

```
$ npm build && npm start
```

Then visit [localhost:3000](http://localhost:3000/)

---

### Tools used
- [create-react-app](https://facebook.github.io/create-react-app/)
- [classnames](https://www.npmjs.com/package/classnames)
- [PropTypes](https://www.npmjs.com/package/prop-types)
- [icon-icons.com](https://icon-icons.com/)
- [http://placeimg.com](http://placeimg.com)
- [http://placeimg.com](http://placeimg.com)
