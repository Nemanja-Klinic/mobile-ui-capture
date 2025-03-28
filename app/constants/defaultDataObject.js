export const defaultData = {
    userid: '',
    suggestion: {
        pageType: '',
        pageUrl: '',
        filter: {
            filter: "",
            selectedText: ""
        },
        search: {
            text: "",
            userInput: "",
            suggestionOrderNumber: null,
            userSearchSuggestionsWithArrows: false,
            suggestionType: "",
            userSearchWithEnter: false
        },
        menuItem: {
            href: "",
            menuOrderNumber: null,
            previousMenuItem: "",
            menuItemText: ""
        },
        elementInfo: {
            clickedOnProduct: false,
            clickedOnCategory: false,
            category: "",
            product_name: "",
            product_details: ""
        },
        time: {
            allTasksTime: null,
            taskTime: 0,
            sinceLastClick: 0,
        },
        cart: {
            clickedOnAddToCart: false,
            productPrice: '0',
            quantity: 1,
            buttonText: '',
            productName: null,
        },
    },
    boldText: '',
};