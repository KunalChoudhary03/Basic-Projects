const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const app = express();
app.use(bodyParser.json());
app.use(cors());

// Database Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Iloveali15121472',
    database: 'VendorManagement',
});

db.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database.');
});

// Register Vendor Endpoint
// Vendor Registration Route with Password Hashing
app.post('/register-vendor', (req, res) => {
    const { name, email, phone, serviceCategory, complianceCert, password } = req.body;

    // Hash the password before saving it to the database
    bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) {
            console.error('Error hashing password:', err);
            return res.status(500).json({ message: 'Error hashing password' });
        }

        const query = `
            INSERT INTO Vendor (Name, Email, Phone, ServiceCategory, ComplianceCertification, Password)
            VALUES (?, ?, ?, ?, ?, ?)
        `;
        db.query(query, [name, email, phone, serviceCategory, complianceCert, hashedPassword], (err, result) => {
            if (err) {
                console.error('Error inserting vendor:', err);
                return res.status(500).json({ message: 'Failed to register vendor.' });
            }
            res.status(200).json({ message: 'Vendor registered successfully!' });
        });
    });
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    const query = 'SELECT * FROM Vendor WHERE Email = ?';
    db.query(query, [email], (err, results) => {
        if (err) {
            console.error('Error querying database:', err);
            res.status(500).json({ message: 'Database query error' });
            return;
        }

        if (results.length === 0) {
            return res.status(400).json({ message: 'Vendor not found' });
        }

        const vendor = results[0];

        // Compare password with the hashed password stored in the database
        bcrypt.compare(password, vendor.Password, (err, isMatch) => {
            if (err) {
                console.error('Error comparing passwords:', err);
                return res.status(500).json({ message: 'Error comparing passwords' });
            }

            if (!isMatch) {
                return res.status(400).json({ message: 'Invalid password' });
            }

            // Successful login
            res.status(200).json({ message: 'Login successful' });
        });
    });
});

app.get('/contracts', (req, res) => {
    const query = `
        SELECT ContractID, VendorID, Terms, ExpiryDate, Status 
        FROM Contract
    `;
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching contracts:', err);
            return res.status(500).json({ message: 'Failed to fetch contracts.' });
        }
        res.status(200).json(results);
    });
});

// Add a new contract
app.post('/contracts', (req, res) => {
    const { vendorID, terms, expiryDate, status } = req.body;

    const query = `
        INSERT INTO Contract (VendorID, Terms, ExpiryDate, Status)
        VALUES (?, ?, ?, ?)
    `;
    db.query(query, [vendorID, terms, expiryDate, status], (err) => {
        if (err) {
            console.error('Error adding contract:', err);
            return res.status(500).json({ message: 'Failed to add contract.' });
        }
        res.status(200).json({ message: 'Contract added successfully!' });
    });
});

app.get('/purchase-orders', (req, res) => {
    const query = `
        SELECT POID, VendorID, ItemDescription, Quantity, TotalCost 
        FROM PurchaseOrder
    `;
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching purchase orders:', err);
            return res.status(500).json({ message: 'Failed to fetch purchase orders.' });
        }
        res.status(200).json(results);
    });
});
app.post('/purchase-orders', (req, res) => {
    const { vendorID, itemDescription, quantity, totalCost, contractID } = req.body;

    const query = `
        INSERT INTO PurchaseOrder (VendorID, ItemDescription, Quantity, TotalCost, ContractID)
        VALUES (?, ?, ?, ?, ?)
    `;
    db.query(query, [vendorID, itemDescription, quantity, totalCost, contractID], (err) => {
        if (err) {
            console.error('Error adding purchase order:', err);
            return res.status(500).json({ message: 'Failed to add purchase order.' });
        }
        res.status(200).json({ message: 'Purchase order added successfully!' });
    });
});

// Budget Route (add budget data)
// Fetch all budget data
app.get('/budget', (req, res) => {
    const query = 'SELECT * FROM Budget';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching budget:', err);
            return res.status(500).json({ message: 'Failed to fetch budget data' });
        }
        res.status(200).json(results);
    });
});


// Add budget
app.post('/add-budget', (req, res) => {
    const { department, allocatedAmount, spentAmount } = req.body;

    const query = `
        INSERT INTO Budget (Department, AllocatedAmount, SpentAmount)
        VALUES (?, ?, ?)
    `;
    db.query(query, [department, allocatedAmount, spentAmount], (err) => {
        if (err) {
            console.error('Error adding budget:', err);
            return res.status(500).json({ message: 'Failed to add budget.' });
        }
        res.status(200).json({ message: 'Budget added successfully!' });
    });
});


// Performance Route (add performance evaluation)
app.get('/vendor-performance', (req, res) => {
    const query = 'SELECT * FROM Performance';
    db.query(query, (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

// Add performance evaluation
app.post('/add-performance', (req, res) => {
    const { vendorID, rating, feedback, date } = req.body;
    const query = `
        INSERT INTO Performance (VendorID, Rating, Feedback, Date)
        VALUES (?, ?, ?, ?)
    `;
    db.query(query, [vendorID, rating, feedback, date], (err) => {
        if (err) return res.status(500).send(err);
        res.status(200).send('Performance evaluation added successfully!');
    });
});

// Start the server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
