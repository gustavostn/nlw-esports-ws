import express from 'express';

const app = express()

app.get('/authentication', (request: any, response: any) => {
    return response.json({ success: true })
})

app.listen(3333)