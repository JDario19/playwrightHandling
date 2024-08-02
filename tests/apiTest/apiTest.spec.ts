import {test, expect, request} from '@playwright/test'

var userId;

test('Get user details using GET Api', async({request})=>{
    const response = await request.get('https://reqres.in/api/users?page=2')
    var responseJson = await response.json();
    console.log(responseJson);
    expect(response.status()).toBe(200);
    expect(responseJson.data[0].first_name).toBe('Michael')
})

test('Create user using POST Api', async({request})=>{
    var user = {
            "name": "monty",
            "job": "student"
    }
    const response = await request.post('https://reqres.in/api/users', {
        data: user,
        headers:{"ACCEPT": "applications/JSON"}
    });
    var responseJson = await response.json();
    expect(response.status()).toBe(201);
    expect(responseJson.name).toBe(`${user.name}`);
    expect(responseJson.job).toBe(`${user.job}`);
    userId = responseJson.id;
})


test('Update user details using PUT Api', async({request})=>{
    var user = {
        "name": "jony",
        "job": "qa"
}
const response = await request.put('https://reqres.in/api/users/'+userId, {
    data: user,
    headers:{"ACCEPT": "applications/JSON"}
});
var responseJson = await response.json();
expect(response.status()).toBe(200);
expect(responseJson.name).toBe(`${user.name}`);
expect(responseJson.job).toBe(`${user.job}`);
userId = responseJson.id;
})

test('Delete user using DELETE Api', async({request})=>{
    var user = {
        "name": "jony",
        "job": "qa"
}
const response = await request.delete('https://reqres.in/api/users/'+userId,);
const response2 = expect(response.status()).toBe(204);

await request.get('https://reqres.in/api/users/'+userId);
console.log(response2);
})