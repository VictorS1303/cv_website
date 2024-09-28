export const data = await fetch('https://neiaeukcnxhxvkwfnjlu.supabase.co/rest/v1/cv_website',
{
    method: 'GET',
    headers:
    {
        apikey: 'xxx',
    }
})
    .then(res => res.json())
    .catch((error) => console.log(error))

console.log(data)