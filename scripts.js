function isThisDangerous(posts)
{
    // posts is an array of social media posts, each of which is an object.
    for (let i = 0; i < posts.length; i++)
    {
        // body is the key for the body text of each post
        // if the body text contains the word invasion, then execute this code
        if (posts[i][body].indexOf('invasion') !== -1)
        {
            // add one to the existing riskRating for this post 
            post[i][riskRating] += 1; 
        }
         // body is the key for the body text of each post
        // if the body text contains the word invasion and also immigration, then execute this code
        else if(posts[i][body].indexOf('invasion') !== -1 && posts[i][body].indexOf('immigration') !== -1)
        {
            // add one to the existing riskRating for this post 
            post[i][riskRating] += 2; 
        }
    }
}


function sortPostsByRiskRanking (posts)
{
    let sorted = posts.sort((a, b) => (a.riskRating > b.riskRating) ? 1 : -1);
    return sorted; 
}

