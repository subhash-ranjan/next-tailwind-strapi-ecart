export type CategoryType = {
    id: number;
    attributes: {
        title: string;
        name: string;
        priority: number;
        published: string;
        imgurl: string;
        books: {
            data: BookType[];
        };
    };
};

export type ImageType = {
    data: {
        id: number;
        attributes: {
            url: string;
        };
    };
};

export type AuthorType = {
    id: number;
    attributes: {
        name: string;
    };
};

export type ReviewType = {
    id: number;
    attributes: {
        review: string;
        username: string;
        rating: number;
        updatedAt: string;
    };
};

export type BookType = {
    id: number;
    attributes: {
        id: number;
        title: string;
        slug: string;
        pages: number;
        price: number;
        description: string;
        publish_date: string;
        rating: number;
        imgurl: string;
        bookcategory: {
            data: {
                id: number;
                attributes: {
                    name: string;
                };
            };
        };
        author: {
            data: {
                attributes: {
                    name: string;
                };
            };
        };
        bookreviews: {
            data: ReviewType[];
        };
    };
};

export type BookPaginationType = {
    data: {
        id: number;
        attributes: {
            id: number;
            title: string;
            slug: string;
            pages: number;
            price: number;
            description: string;
            published: string;
            imgurl: string;
            author: {
                data: {
                    attributes: {
                        name: string;
                    };
                };
            };
            bookreviews: {
                data: {
                    attributes: {
                        review: string;
                        publishedAt: string;
                    };
                };
            };
        };
    };
    meta: {
        pagination: {
            page: number;
            pageSize: number;
            total: number;
            pageCount: number;
        };
    };
};
