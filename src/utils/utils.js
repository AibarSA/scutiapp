export const convertPostListToMap = (postList) => {
    const transformPostList = postList.map( post =>{
        const {id, title, publicationDate, category, description} = post;

        return{
            id,
            title,
            publicationDate,
            category,
            description
        }
    });
    return transformPostList
    // return transformPostList.reduce((accumulator,postList) =>{
    //     accumulator[postList.id] = postList;
    //     return accumulator;
    // },{})

}