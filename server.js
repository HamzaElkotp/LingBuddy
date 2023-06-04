const express = require('express');
const axios = require('axios');
const app = express();
const port = 5500;


const apiKey = 'LS61KEUfJHMx2tQTWVWUZX50ZAIabiqCW2jcHQhV';
const apiUrl = 'https://api.cohere.ai/v1/generate';
const headers = { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json'}

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


// app.get('/requestCohere', async (req, res) => {
//     // Extract parameters from the request query
//     const { param1 } = req.query;

//     // Execute your Node.js function with the parameters
//     let result = await callCohereAPI(param1);
//     console.log(`the ${result}`);
//     res.json({ result });
//     return result    
// });

// async function callCohereAPI(msg) {
//     await axios.post(
//         apiUrl, 
//         { model:'89adf6d7-f200-49cc-9f79-baf0075bf563-ft', prompt: `${msg}`, max_tokens: 1000}, 
//         {headers}
//     )
//     .then(response => {
//         // Handle the response data
//         console.log(response.data.generations[0].text)
//         return response.data.generations[0].text;
//     })
//     .catch(error => {
//         // Handle any errors
//         console.error(error);
//     });
// }
// callCohereAPI("Rate this essay depending on IELTS exam test as writing task 1, give Band number, and give Grammar and spelling mistakes if found, and give suggestions to everything: 'The provided bar chart illustrates the perc/entage of households owning and renting accommodation in both of England and Wales during about a decade, from 1918 to 2011. Overall, in 1971 both of households owning and renting percentages were equal to each others. \nOn one side, percentage of households in rented accommodation was approximately 77% in 1918. And till 2011 it was decreased to about 35%. Whereas the lowest percentage of households owning was about 23% in 1918, It became above 60% in 2011.\nThe highest percentage for the households who live in owned accommodations was in 1918, while the lowest was quite over than 30% in 2001. In addition, the highest percentage of the other type was also in 2001 by reaching 70% approximately. While the lowest percent for it, was in the first year.\nLooking deeply to the chart, the percentage of households in owned accommodation was rising most of the time, same thing with the percentage of the rented but it was decreasing.'")


