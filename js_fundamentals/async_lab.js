let name = "John";
function greet() {
    console.log("Hello, " + name);
}
greet();

// the logic Trap
console.log("step 1: Ordering Coffee...");
const data = fetch("https://jsonplachelor.typicode.com/users/1");

console.log("step 2: Coffee Owner Data is: ", data);
console.log("step 3: Talking to a friend...");

console.log("fetching User data from the API...");
//Await step 1: The request is sent to the API and we wait for the response
const getUserData = async () => {
    const response = await fetch("https://jsonplachelor.typicode.com/users/1");
    const data = await response.json();
    console.log(`success! name: ${data.name} from ${data.address.city}`);

}
getUserData();
console.log("I am a non-blocking background task, I will execute before the data is fetched.");

const getSafeUserData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        if (!response.ok) {
            throw new Error(`Could Not find User, HTTP Error! status: ${response.statut}`,
            );
        }
        const data = await response.json();
        console.log(
            `Success! Name: ${data.name} from ${data.address.city} with company ${data.company.name}`,
        );
    } catch (error) {
        console.log("Error Caught: ", error.message);
        console.error("Error fetching user data:", error);
        console.log("please check the API endpoint and try again.");
    }
};
//We call the async function to fetch the user data
getSafeUserData();
const getPostInfo = async (postId) => {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/${postId}");
        if (!response.ok) {
            throw new Error(`could Not find User, HTTP Error! status: ${response.statut}`,
            );
        }
        const data = await response.json();
        console.log(`Post Title: ${data.title}`
        );
        console.log(`Post Body: ${data.body}`);
    } catch (error) {
        console.log("Error Caught: ", error.message);
        console.error("Error fetching user data:", error);
        console.log("please check the API endpoint and try again.");
    }
};