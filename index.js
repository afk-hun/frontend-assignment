const express = require('express');
const { faker } = require('@faker-js/faker');
const paginate = require('express-paginate');
var cors = require('cors');

const app = express();

// Middleware for pagination
app.use(paginate.middleware(0, 10000));
app.use(cors());

// Generate mock data
const totalDataCount = 10000; // Total number of mock data
const data = generateMockData(totalDataCount);

// Mock data generation
function generateMockData(count) {
    const data = [];
    for (let i = 0; i < count; i++) {
        const name = faker.commerce.product();
        data.push({
            id: faker.string.uuid(),
            name: name,
            description: faker.commerce.productDescription(), 
            slug: name.toLowerCase().substring(0,5),
            image: faker.image.urlLoremFlickr({ category: 'fashion' })
        });
    }
    return data;
}

// Endpoint for fetching mock data with pagination and filtering
app.get('/api/data', (req, res) => {
    const { limit, offset } = req.query;

    // Apply pagination
    const startIndex = offset * 1 || 0; // Convert offset to integer
    const endIndex = !limit ? totalDataCount : startIndex + limit * 1;
    const paginatedData = data.slice(startIndex, endIndex);

    // Respond with paginated data
    const pageCount = Math.ceil(data.length / limit);
    const currentPage = Math.floor(offset / limit) + 1;
    res.json({
        total_count: totalDataCount,
        page_count: pageCount,
        page: currentPage,
        data: paginatedData
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
