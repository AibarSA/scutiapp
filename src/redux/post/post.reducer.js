const INITIAL_STATE = {
    posts: [
        {
        "id": 32,
        "title": "Presidential harassment, Mr. Trump? Nope. Congress is doing its job.",
        "author": null,
        "publisher": null,
        "publicationDate": "Feb. 09, 2019",
        "language": null,
        "category": "Management",
        "numberOfPages": 0,
        "format": null,
        "isbn": null,
        "shippingWeight": 0,
        "listPrice": 0,
        "ourPrice": 0,
        "active": false,
        "description": "For some weeks, President Trump has been in a swivet about “presidential harassment” — or, as the practice is more commonly known, congressional oversight of the executive branch.\n\nHe was up before dawn on Thursday, tweeting that the House Intelligence Committee’s new inquiry into his financial dealings with foreign actors constituted “Unlimited Presidential Harassment.”\n\nSo perturbed is Mr. Trump by any effort to hold him accountable that he used his State of the Union speech to complain of what he called “ridiculous, partisan investigations,” warning, “If there is going to be peace and legislation, there cannot be war and investigation. It just doesn’t work that way!”\n\nThis is precisely how it works — how it has to work, in fact. A president whose administration does not have the confidence of the people cannot govern effectively, or legitimately. Accountability is crucial to that confidence — something the nation’s founders grasped, even if Mr. Trump does not.",
        "inStockNumber": 0,
        "bookImage": null
        },
        {
        "id": 33,
        "title": "Jeff Bezos Isn’t Afraid of Total Exposure",
        "author": null,
        "publisher": null,
        "publicationDate": "Feb. 09, 2019",
        "language": null,
        "category": "Management",
        "numberOfPages": 0,
        "format": null,
        "isbn": null,
        "shippingWeight": 0,
        "listPrice": 0,
        "ourPrice": 0,
        "active": false,
        "description": "This is true on a superficial and titillating level, of course. Last month, The National Enquirer broke the story about Mr. Bezos’ affair and quoted awkward and somewhat sweet sexts he had sent his girlfriend. There were also insinuations about the existence of photos of his penis.\n\nBut now the news is about something bigger. By using a digital platform to bring his side of the story directly to the masses, Mr. Bezos has done something both admirable and also a little scary. Most revealing — and I say this about a story that is lousy with revelations — is that it is perhaps the best illustration of the in-your-face aggressiveness that has made him the richest man in the world and arguably the most important tech visionary since Steve Jobs.",
        "inStockNumber": 0,
        "bookImage": null
        },
        {
        "id": 36,
        "title": "Behind an Impeachment Inquiry, a Forgotten War",
        "author": null,
        "publisher": null,
        "publicationDate": "Oct. 24, 2019",
        "language": null,
        "category": "Fiction",
        "numberOfPages": 0,
        "format": null,
        "isbn": null,
        "shippingWeight": 0,
        "listPrice": 0,
        "ourPrice": 0,
        "active": true,
        "description": "Fought in muddy trenches cut through hundreds of miles of farmland, the war in Ukraine has killed 13,000 people, put a large part of the country under Russia’s control and dragged on for five years almost forgotten by the outside world — until it became a backdrop to the impeachment inquiry of President Trump now unfolding in Washington.\n\nUkraine, politically disorganized and militarily weak, has relied heavily on the United States in its struggle with Russian-backed separatists. But the White House abruptly suspended nearly $400 million in military aid to Ukraine in July and only restored it last month after a bipartisan uproar in Congress.",
        "inStockNumber": 0,
        "bookImage": null
        }
        ]
}

const postReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;

    }
}

export default postReducer;